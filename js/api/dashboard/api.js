const ImageTypeInfo = {
    "T1": "T1-weighted images provide anatomical information and are useful for evaluating the structure and morphology of tissues. In T1-weighted images, tissues with a short T1 relaxation time, such as fat, appear bright, while tissues with a long T1 relaxation time, such as water, appear dark. T1-weighted images are commonly used in brain imaging to visualize the normal anatomy of the brain.",
    "T2": "T2-weighted images provide information about the water content and the degree of tissue hydration. In T2-weighted images, tissues with a long T2 relaxation time, such as fluid-filled spaces and edematous areas, appear bright, while tissues with a short T2 relaxation time, such as cortical bone, appear dark. T2-weighted images are useful for evaluating various conditions, including fluid accumulation, inflammation, and edema.",
    "T1C+": "T1 contrast-enhanced images are acquired after the administration of a contrast agent, typically gadolinium-based, which is injected into a patient's vein. This type of image is obtained to enhance the visualization of certain tissues, particularly areas with disrupted blood-brain barriers, such as tumors, infection sites, or areas of inflammation. The contrast agent shortens the T1 relaxation time of the tissues it accumulates in, making them appear brighter and more prominent in the image."
}

async function upload(forcePush = false) {
    hideNotice()
    showLoader()
    hideTable()
    hideForcePush()

    const image = document.getElementById("file-upload").files[0]
    const size = (image.size / 1024 / 1024).toFixed(2);

    if (size > 1) {
        alert("File must be not more than size of 1 MB");
        hideLoader()
        return;
    }

    const fileReader = new FileReader();
    try {
        fileReader.onload = async () => {
            const base64Image = fileReader.result
            const response = await requestJson("POST", "brain-tumor-classification/predict.json", {
                "image": base64Image,
                "forcePush": forcePush,
                "modelType": getSelectedModel(),
            })

            if ("error" in response) {
                alert(response["error"])
                hideLoader()
            }
            else if (response['prediction'] === 'Not Valid Mri Image') {
                hideLoader()
                showForcePush()
                return 0;
            }
            else {
                showTable()
                hideLoader()
                const result = getMaxValueClass(response['prediction'])
                const resultBox = document.getElementById("result")
                const resultImage = document.getElementById("result_image")
                const confidance = document.getElementById("confidance")
                const showImageType = document.getElementById("showImageType")
                const showImageTypeInfo = document.getElementById("showImageTypeInfo")

                showImageType.style.display = 'none'
                showImageTypeInfo.style.display = "none"

                if (showImageType.children.length > 1) {
                    showImageType.removeChild(Array.from(showImageType.children).pop())
                }

                if (showImageTypeInfo.children.length > 1) {s
                    showImageTypeInfo.removeChild(Array.from(showImageTypeInfo.children).pop())
                }

                const [predClass, imageType] = result[0].split(" ")
                const title = document.createElement("h1")
                const titleText = document.createTextNode(predClass.toUpperCase())
                title.appendChild(titleText)

                const pred = document.createElement("h2")
                const predText = document.createTextNode("" + (result[1] * 100).toFixed(2) + "%")
                pred.appendChild(predText)

                var image = document.createElement("img");
                image.setAttribute("src", base64Image);
                image.setAttribute("width", 420)
                image.setAttribute("height", 420)

                resultBox.replaceChildren(...[title])
                resultImage.replaceChildren(...[image])
                confidance.replaceChildren(...[pred])

                if (imageType && imageType != '' && imageType != undefined) {

                    showImageType.style.display = ''
                    showImageTypeInfo.style.display = ''

                    const td = document.createElement("td")
                    const h1 = document.createElement("h1")

                    h1.innerHTML = imageType
                    td.appendChild(h1)
                    showImageType.appendChild(td)

                    const td1 = document.createElement("td")
                    const h6 = document.createElement("h4")

                    h6.innerHTML = ImageTypeInfo[imageType]
                    td1.appendChild(h6)
                    showImageTypeInfo.appendChild(td1)
                }

            }
        }
        fileReader.readAsDataURL(image)
    } catch (Error) {
        alert("Error While Reading File")
    }

}

async function getHistoryPredictions() {
    const response = await requestJson("GET", "brain-tumor-classification/predict/history/0.json")
    console.log(response);
}

function getMaxValueClass(result) {
    let maxClass = "";
    let maxValue = -Math.pow(10, 9) + 7;
    for (const key of Object.keys(result)) {
        const value = result[key]
        if (value > maxValue) {
            maxValue = value
            maxClass = key
        }
    }
    return [maxClass, maxValue]
}

function showTable() {
    const resultCard = document.getElementById("card")
    resultCard.style.display = "block"
}

function hideTable() {
    const resultCard = document.getElementById("card")
    resultCard.style.display = "none"
}

function showLoader() {
    const loader = document.getElementById("loader")
    loader.style.display = "block"
}

function hideLoader() {
    const loader = document.getElementById("loader")
    loader.style.display = "none"
}

function showNotice() {
    hideNotice()
    const notice = document.getElementById("notice")
    notice.style.display = "block"
}

function hideNotice() {
    const notice = document.getElementById("notice")
    notice.style.display = "none"
}

function showForcePush() {
    hideNotice()
    const notice = document.getElementById("force-push-dialog")
    notice.style.display = "block"
}

function hideForcePush() {
    const notice = document.getElementById("force-push-dialog")
    notice.style.display = "none"
}

function getSelectedModel() {
    const model1RadioButton = document.getElementById('model1');
    const model2RadioButton = document.getElementById('model2');

    if (model1RadioButton.checked) {
        return '';
    } else if (model2RadioButton.checked) {
        return '47';
    } else {
        alert('No model selected');
        throw "No Model Selected"
    }
}