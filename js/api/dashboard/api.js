
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
            })

            if ("error" in response) {
                alert(response["error"])
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

                const title = document.createElement("h1")
                const titleText = document.createTextNode(result[0].toUpperCase())
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