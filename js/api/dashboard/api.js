
async function upload() {
    const resultCard = document.getElementById("card")
    resultCard.style.display = "none"
    const image = document.getElementById("file-upload").files[0]
    const size = (image.size / 1024 / 1024).toFixed(2);

    if (size > 1) {
        alert("File must be not more than size of 1 MB");
        return;
    }

    const fileReader = new FileReader();
    try {
        fileReader.onload = async () => {
            const base64Image = fileReader.result
            const response = await requestJson("POST", "brain-tumor-classification/predict.json", {
                "image": base64Image,
            })
            if ("error" in response) {
                alert(response["error"])
            } else {
                resultCard.style.display = "block"
                const result = getMaxValueClass(response['prediction'])
                const resultBox = document.getElementById("result")
                const resultImage = document.getElementById("result_image")

                const title = document.createElement("h1")
                const titleText = document.createTextNode(result[0].toUpperCase())
                title.appendChild(titleText)

                const pred = document.createElement("h2")
                const predText = document.createTextNode("Confidance = " + (result[1] * 100).toFixed(2) + "%")
                pred.appendChild(predText)

                var image = document.createElement("img");
                image.setAttribute("src", base64Image);
                image.setAttribute("width",612)

                resultBox.replaceChildren(...[title, pred])
                resultImage.replaceChildren(...[image])

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