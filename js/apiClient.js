const prefixUrl = "http://127.0.0.1:8000/";


const requestJson = async (method, url, body) => {
    const response = (await fetch(prefixUrl + url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': "application/json",
            "authorization": getLocalStorageValue("email") + " " + getLocalStorageValue("x-auth-token")
        }
    }).catch((error) => {
        if (error) {
            alert("server error")
        }
    }
    )).json()

    if ("error" in response) {
        alert(response["error"])
        return
    }

    return response

}
