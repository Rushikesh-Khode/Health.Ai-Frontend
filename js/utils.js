const setLocalStorage = (key, value) => {
    window.localStorage[key] = value
}

const getLocalStorageValue = (key) => {
    return window.localStorage[key]
}

const unsetLocalStorageValue = (key) => {
    window.localStorage[key] = null
    delete (window.localStorage[key])
}