import {
    addToLocalStorage,
    deleteFromLocalStorage,
    getItemsFromLocalStorage,
    setItemToLocalStorage,
} from "./local.storage.js";
const box = document.querySelector(".todo_data__box");
const btn = document.querySelector(".form__block");
const inputTask = document.querySelector("#input_task");
const inputDescription = document.querySelector("#input_desc");

const renderHtml = async (data) => {
    const data2 = await getItemsFromLocalStorage("todos");
    box.innerHTML = data2
        ?.map(
            (item) => `
        <div class="todo_data__item">
            <h1 class="todo_data__title">${item.title}</h1>
            <p class="todo_data__description">${item.description}</p>
            <button class="todo_data__delete-btn" id="${item._id}">DELETE</button>
            <button class="todo_data__edit-btn" id="${item._id}">EDIT</button>
        </div>
    `
        )
        .join("");
};

const getData = async () => {
    try {
        const res = await fetch("http://localhost:3000/todos");
        const data = await res.json();
        setItemToLocalStorage("todos", data);
        renderHtml(data);
    } catch (err) {
        console.log(err.message);
    }
};

box.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("todo_data__delete-btn")) {
        deleteData(e.target.id);
    } else if (e.target.classList.contains("todo_data__edit-btn")) {
        const newTitle = prompt("Yangi sarlavha kiriting:");
        const newDesc = prompt("Yangi tavsif kiriting:");
        if (newTitle && newDesc) {
            updateData(e.target.id, { title: newTitle, description: newDesc });
        }
    }
});

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.className == "form__submit-btn") {
        const obj = {
            title: inputTask.value,
            description: inputDescription.value,
        };
        addData(obj);
        inputTask.value = "";
        inputDescription.value = "";
    }
});

const addData = async (data) => {
    try {
        await fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        });
        addToLocalStorage("todos", data);
        getData();
    } catch (error) {
        console.log(error.message);
    }
};

const updateData = async (id, data) => {
    try {
        await fetch(`http://localhost:3000/todos/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        });
        const storageData = await getItemsFromLocalStorage("todos");
        const index = storageData.findIndex((value) => value._id === id);
        if (index !== -1) {
            storageData[index] = { _id: id, ...data };
            setItemToLocalStorage("todos", storageData);
        }
        getData();
    } catch (error) {
        console.log(error.message);
    }
};

const deleteData = async (id) => {
    try {
        await fetch(`http://localhost:3000/todos/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        });
        deleteFromLocalStorage("todos", id);
        getData();
    } catch (error) {
        console.log(error.message);
    }
};

getData();
