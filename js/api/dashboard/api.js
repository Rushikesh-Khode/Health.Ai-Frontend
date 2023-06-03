const ImageTypeInfo = {
    "T1": "T1-weighted images provide anatomical information and are useful for evaluating the structure and morphology of tissues. In T1-weighted images, tissues with a short T1 relaxation time, such as fat, appear bright, while tissues with a long T1 relaxation time, such as water, appear dark. T1-weighted images are commonly used in brain imaging to visualize the normal anatomy of the brain.",
    "T2": "T2-weighted images provide information about the water content and the degree of tissue hydration. In T2-weighted images, tissues with a long T2 relaxation time, such as fluid-filled spaces and edematous areas, appear bright, while tissues with a short T2 relaxation time, such as cortical bone, appear dark. T2-weighted images are useful for evaluating various conditions, including fluid accumulation, inflammation, and edema.",
    "T1C+": "T1 contrast-enhanced images are acquired after the administration of a contrast agent, typically gadolinium-based, which is injected into a patient's vein. This type of image is obtained to enhance the visualization of certain tissues, particularly areas with disrupted blood-brain barriers, such as tumors, infection sites, or areas of inflammation. The contrast agent shortens the T1 relaxation time of the tissues it accumulates in, making them appear brighter and more prominent in the image."
}

const TumorTypeInfo = {
    "glioma": {
        "info": "Gliomas are tumors that originate in the glial cells, which are supportive cells in the central nervous system.Symptoms of gliomas can vary depending on their size, location, and grade. Common symptoms include headaches, seizures, cognitive changes, weakness, and changes in vision or speech.Treatment options for gliomas may include surgery, radiation therapy, and chemotherapy.",
        "treatment": "The specific treatment plan depends on various factors, including tumor type, size, location, and the patient's overall health."
    },
    "meningioma": {
        "info": "Meningiomas are generally slow-growing tumors that occur in the meninges, which are the three layers of tissue covering the brain and spinal cord.They are more common in adults, especially middle-aged or older individuals, and are more frequently diagnosed in women than men.",
        "treatment": "Treatment options for meningiomas include observation (in case of small, asymptomatic tumors), surgery, radiation therapy, and in some cases, targeted therapies or chemotherapy."
    },
    "pituitary": {
        "info": "Pituitary adenomas are tumors that develop in the pituitary gland, which i s responsible for producing and regulating hormones that control various bodily functions.",
        "treatment": "Treatment options for pituitary adenomas include observation, medication, surgery (transsphenoidal surgery is a common approach), and radiation therapy, depending on the size, location, symptoms, and hormone levels."
    },
    "astrocitoma": {
        "info": "Astrocytomas are tumors that originate from astrocytes, a type of glial cell in the brain and spinal cord,They are classified into different grades (I-IV) based on their appearance under the microscope and their aggressiveness.Low-grade astrocytomas (grade I and II) are typically slow-growing, while high-grade astrocytomas (grade III and IV) are more aggressive.Glioblastoma multiforme (GBM) is a common and highly malignant type of astrocytoma",
        "treatment": `Treatment for astrocytoma depends on the grade and location of the tumor.
        Low-grade astrocytomas may be treated with surgery to remove the tumor, followed by close monitoring or additional treatments as necessary.
        High-grade astrocytomas, such as glioblastoma multiforme (GBM), often require a combination of treatments, including surgery, radiation therapy, and chemotherapy. Tumor-treating fields (TTFields) therapy may also be utilized`},
    'carcinoma': {
        "info": `Carcinomas are malignant tumors that arise from epithelial cells, which line the surfaces and cavities of various organs in the body.
        Carcinomas can occur in different organs, such as the lungs, breast, colon, prostate, and skin.
        They are the most common type of cancer and can have varying grades and stages.`,
        "treatment": `The treatment approach for carcinomas varies depending on the specific type and stage of cancer, as well as the affected organ.
        Treatment options can include surgery to remove the tumor, radiation therapy, chemotherapy, targeted therapy, immunotherapy, or a combination of these modalities.
        The treatment plan is personalized based on factors such as tumor size, location, metastasis, and the individual's overall health.`
    },
    'ependimoma': {
        "info": `Ependymomas are tumors that develop from ependymal cells, which line the ventricles of the brain and the central canal of the spinal cord.
        They can occur at any age, but are more commonly found in children and young adults.
        Ependymomas can be slow-growing and generally have a better prognosis compared to some other types of brain tumors.`,
        "treatment": `Treatment for ependymomas typically involves surgery to remove as much of the tumor as possible.
        Radiation therapy may be recommended, particularly for high-grade or recurrent ependymomas.
        Chemotherapy may be used in certain cases, especially in young children or when the tumor cannot be completely removed.`
    },
    'ganglioglioma': {
        "info": `Gangliogliomas are rare and typically low-grade brain tumors that consist of both ganglion cells (nerve cells) and glial cells.
        They most commonly occur in children and young adults and can be found in various regions of the brain.
        Gangliogliomas have a relatively favorable prognosis, especially when they are low-grade'`,
        "treatment": `Treatment for gangliogliomas depends on factors such as the tumor size, location, and grade.
        Low-grade gangliogliomas may be managed with surgery to remove the tumor and close monitoring afterward.
        High-grade or recurrent gangliogliomas may require additional treatments, such as radiation therapy or chemotherapy.`

    },
    'germinoma': {
        'info': `Germinomas are tumors that develop from germ cells, the cells that give rise to eggs or sperm.
        They most commonly occur in the brain, particularly in the pineal gland or the region of the hypothalamus.
        Germinomas are typically highly sensitive to radiation therapy and have a good prognosis.`,
        'treatment': `Treatment for germinomas typically involves a combination of surgery, radiation therapy, and chemotherapy.
        Radiation therapy is often used to treat the primary tumor site and prevent spread to the central nervous system.
        Chemotherapy is used to eliminate any remaining cancer cells and reduce the risk of recurrence.`
    },
    'glioblastoma': {
        'info': `Glioblastoma, also known as glioblastoma multiforme (GBM), is a malignant and aggressive form of glioma.
        It arises from the glial cells and is the most common and deadliest type of primary brain tumor in adults.
        Glioblastomas grow rapidly and are highly invasive, making complete surgical removal challenging. They often require a combination of treatments, such as surgery, radiation therapy, and chemotherapy.`,
        'treatment': `Treatment for glioblastoma usually involves a combination of surgery, radiation therapy, and chemotherapy.
        Surgery aims to remove as much of the tumor as possible, followed by radiation therapy to target any remaining cancer cells.
        Chemotherapy, such as temozolomide, is often given in conjunction with radiation therapy and may continue afterward as maintenance treatment.`
    },
    'granuloma': {
        'treatment': `The treatment of granulomas depends on the underlying cause.
        Granulomas caused by infections may be treated with appropriate antimicrobial medications.
        Granulomas related to immune responses or foreign substances may be managed with anti-inflammatory medications or immunosuppressive drugs.`,
        'info': `Granulomas are small, localized areas of inflammation that can occur in various organs.
        They are typically formed in response to infections, immune responses, or foreign substances.
        Granulomas can be found in different tissues, such as the lungs (e.g., tuberculosis granuloma) or other organs, and may have various underlying causes.`
    },
    'meduloblastoma': {
        'info': `Medulloblastoma is a highly malignant brain tumor that primarily affects children.
        It typically arises in the cerebellum, the part of the brain responsible for coordination and balance.
        Medulloblastomas can spread to other parts of the central nervous system and require a combination of treatments, including surgery, radiation therapy, and chemotherapy.`,
        'treatment': `Treatment for medulloblastoma typically involves surgery to remove the tumor as much as possible.
        Radiation therapy is often administered to the brain and spinal cord.
        Chemotherapy may be used before or after surgery, as well as during or after radiation therapy.`
    },
    'neurocitoma': {
        'info': `Neurocytomas are rare tumors that develop from neuronal cells in the brain.
        They are typically slow-growing and often found in the ventricles of the brain.
        Neurocytomas can`,
        'treatment': `Treatment for neurocytomas typically involves surgical removal of the tumor.
        Radiation therapy may be considered for certain cases, particularly high-grade or recurrent tumors.
        Chemotherapy may be used in specific situations, although its role is not well-established for neurocytomas.`
    },
    'oligodendroglioma': {
        'info': `Oligodendrogliomas are tumors that arise from oligodendrocytes, a type of glial cell that produces the protective myelin sheath around nerve fibers in the brain.
        They are typically slow-growing and often found in the cerebral hemispheres of the brain.
        Oligodendrogliomas can be classified into different grades (II and III) based on their cellular characteristics and behavior.`,
        'treatment': `Treatment options for oligodendroglioma typically include surgery to remove the tumor, followed by radiation therapy and chemotherapy. The specific treatment plan depends on the tumor grade, location, and other factors.`
    },
    'papiloma': {
        'info': `Papillomas are tumors characterized by the development of finger-like projections or papillae.
        In the context of brain tumors, choroid plexus papillomas are the most common type. They arise from the choroid plexus, a network of blood vessels in the brain that produces cerebrospinal fluid (CSF).
        Choroid plexus papillomas are most commonly found in children, usually in the ventricles of the brain.`,
        'treatment': `Treatment typically involves surgical removal of the tumor, and in some cases, additional therapies such as radiation therapy or chemotherapy may be considered.`
    },
    'schwannoma': {
        'info': `Schwannomas, also known as neurilemmomas, are tumors that develop from Schwann cells, which form the protective covering (myelin sheath) around peripheral nerves.
        They most commonly occur in the head, neck, and extremities, and can affect cranial nerves, spinal nerves, or peripheral nerves.
        Schwannomas are typically benign tumors; however, in rare cases, they may become malignant (schwannosarcoma).`,
        'treatment': `Treatment for schwannomas usually involves surgical removal of the tumor. In cases where complete removal is not possible or if the tumor is malignant, additional treatments such as radiation therapy or targeted therapies may be considered`
    },
    'tuberculoma': {
        'info': `Tuberculomas are tumors caused by the formation of granulomas in the brain as a result of tuberculosis (TB) infection.
        TB is an infectious disease caused by the bacteria Mycobacterium tuberculosis.
        Tuberculomas are typically characterized by localized areas of inflammation, and they can occur in various regions of the brain`,
        'treatment': `Treatment for tuberculomas involves the administration of anti-tuberculosis medications for an extended period, typically in combination with other drugs to combat the infection.`
    },
    'normal':{
        'info' : 'No Tumor Found',
        'treatment' : 'NA'
    },
    'notumor':{
        'info' : 'No Tumor Found',
        'treatment' : 'NA'
    },

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
                const tumorInfo = document.getElementById("tumor_info")
                const treatment = document.getElementById('treatment')

                showImageType.style.display = 'none'
                showImageTypeInfo.style.display = "none"

                if (showImageType.children.length > 1) {
                    showImageType.removeChild(Array.from(showImageType.children).pop())
                }

                if (showImageTypeInfo.children.length > 1) {
                    showImageTypeInfo.removeChild(Array.from(showImageTypeInfo.children).pop())
                }

                if (tumorInfo.children.length > 0) {
                    tumorInfo.removeChild(Array.from(tumorInfo.children).pop())
                }

                if (treatment.children.length > 0) {
                    treatment.removeChild(Array.from(treatment.children).pop())
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

                const eleInfo = document.createElement("h4")
                eleInfo.innerHTML = TumorTypeInfo[predClass.toLowerCase()]["info"]
                tumorInfo.appendChild(eleInfo)

                const eleTreatment = document.createElement("h4")
                eleTreatment.innerHTML = TumorTypeInfo[predClass.toLowerCase()]["treatment"]
                treatment.appendChild(eleTreatment)

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