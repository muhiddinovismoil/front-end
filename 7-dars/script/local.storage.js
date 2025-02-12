export function getItemsFromLocalStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch (error) {
        console.log(error.message);
    }
}
export function addToLocalStorage(key, value) {
    try {
        const data = JSON.parse(localStorage.getItem(key)) || [];
        data.push(value);
        localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
        console.log(err.message);
    }
}
export function setItemToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.log(err.message);
    }
}
export function deleteFromLocalStorage(key) {
    try {
        let data = JSON.parse(localStorage.getItem(key)) || [];
        const updatedData = data.filter((item) => item._id !== id);
        localStorage.setItem(key, JSON.stringify(updatedData));
    } catch (err) {
        console.log(err.message);
    }
}
