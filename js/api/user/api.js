
const autoFill = () => {
    const email = getLocalStorageValue("email")
    console.log(email);
    if (email && email !== "undefined") {
        document.getElementById("email").value = email
    }
}

const login = async () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    //TODO: add validation for frontend

    const response = await requestJson("POST", "users/login.json", { "email": email, "password": password })

    if ("error" in response) {
        //TODO: remove alert
        alert(Object.values(response["error"]))
        return false
    }

    window.localStorage["x-auth-token"] = response["x-auth-token"]
    window.localStorage["email"] = response["email"]

    //TODO: remove alert
    alert("Login sucessful")

    window.location.href = "/Health.Ai-Frontend/dashboard.html"
}

const register = async () => {

    const email = document.getElementById("email").value
    const phonenumber = document.getElementById("phonenumber").value
    const birthday = document.getElementById("birthday").value
    const gender = document.getElementById("gender").value
    const password = document.getElementById("password").value
    const password2 = document.getElementById("password2").value

    //TODO: add validation for frontend

    const body = {
        "email": email,
        "phone_no": phonenumber,
        "birthday": birthday,
        "gender": gender,
        "password": password,
        "password2": password2,
    }

    const response = await requestJson("POST", "users/register.json", body)

    if ("error" in response) {
        alert(Object.values(response["error"]))
        return false
    }

    //TODO: remove alert
    alert("Registraion Sucessful")

    window.location.href = "/Health.Ai-Frontend/login.html"
}

const logout = async () => {

    await requestJson("GET", "users/logout.json")

    setLocalStorage("email", undefined)
    setLocalStorage("x-auth-token", undefined)

    window.location.href = "/Health.Ai-Frontend/index.html"
}

const validate = () => {
    const email = getLocalStorageValue("email")
    const x_token = getLocalStorageValue("x-auth-token")

    if (!email || !x_token || email === "undefined" || x_token === "undefined") {
        window.location.href = "/Health.Ai-Frontend/index.html"
        return
    }
}

const welcome = () => document.getElementById("dashboard_title").innerHTML = `Welcome ${getLocalStorageValue("email")} to Health.Ai` 