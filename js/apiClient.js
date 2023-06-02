const prefixUrl = env.ENV == "DEV" ? env.LOCAL_API_SERVER : env.PRODUCTION_API_SERVER;

const requestJson = async (method, url, body) => {
    let response = (await fetch(prefixUrl + url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': "application/json",
            "authorization": getLocalStorageValue("email") + " " + getLocalStorageValue("x-auth-token")
        }
    }).catch((error) => {
        if (error) {
            alert("server error")
            hideLoader()
        }
    }
    ))

    console.log(response);

    if (!response) {
        alert("Internal server error")
        hideLoader()
        return
    }

    response = response.json()

    if ("error" in response) {
        alert(response["error"])
        return
    }

    return response
}
