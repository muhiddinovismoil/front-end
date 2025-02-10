const myTodoForm = document.querySelector(".main_header__todo-form");
const tasksList = document.querySelector(".todo-data__list");
const taskInput = document.querySelectorAll(".main_header__todos_inputs");
let TodosDatabase = [];

const getTasks = () => {
    tasksList.innerHTML = TodosDatabase.map(
        (item) =>
            `
            <li class="todo-data__item">
                <p class="todo-data__text">${item.task}</p>
                <div class="todo-data__btn_block">
                    <button id="${item.id}" class="todo-data__edit_btn">
                        <img
                            src="../images/edit_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz24.svg"
                            alt="edit btn icon"
                        />
                    </button>
                    <button id="${item.id}" class="todo-data__delete_btn">
                        <img
                            src="../images/delete_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz24.svg"
                            alt="delete btn icon"
                        />
                    </button>
                </div>
            </li>
        `
    ).join("");
};
myTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {};
    for (let itm of taskInput) {
        obj[itm.name] = itm.value;
        itm.value = "";
    }
    TodosDatabase.push({ ...obj, id: Date.now() });
    getTasks();
});
tasksList.addEventListener("click", (e) => {
    let btn = e.target;
    if (btn.tagName === "IMG") {
        btn = btn.parentElement;
    }
    if (!btn || btn.tagName !== "BUTTON") return;

    if (btn.className === "todo-data__delete_btn") {
        TodosDatabase = TodosDatabase.filter((item) => item.id != btn.id);
        getTasks();
    } else if (btn.className === "todo-data__edit_btn") {
        const task = prompt(`Taskni o'zgartirish uchun nimadur kiriting`);
        if (!task) {
            alert("Siz hech nima kiritmadingiz");
            return;
        } else {
            TodosDatabase = TodosDatabase.map((item) =>
                item.id == btn.id ? { ...item, task } : item
            );
            getTasks();
        }
    }
});
