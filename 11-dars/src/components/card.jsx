import { request } from "../config/request";

/* eslint-disable react/prop-types */
export const Card = ({ id, title, description, globalFunc, users }) => {
    const deleteItem = (id) => {
        request.delete(`/todos/${id}`).then(() => {
            globalFunc();
        });
    };
    const editItem = (id) => {
        const data = users.filter((item) => item.id == id);
        const [{ title, description }] = data;
        const newTitle = prompt("Enter title ... ", title);
        const newDescription = prompt("Enter description ... ", description);
        request.put(`/todos/${id}`, {
            title: newTitle,
            description: newDescription,
        });
        globalFunc();
    };
    return (
        <div className="container pt-[30px] flex justify-center">
            <div className="border break-words rounded-[18px] w-[700px] pl-[40px] pr-[50px]">
                <div className="pt-[20px]">
                    <h2 className="mb-[20px] text-[20px] font-bold">{title}</h2>
                    <p className="mb-[20px]">{description}</p>
                </div>
                <div className="flex gap-[30px] pb-[20px]">
                    <button
                        className="bg-red-500 hover:bg-red-400 active:bg-red-600 px-[14px] py-[7px] rounded-[6px] border border-black text-[#fff] font-bold"
                        onClick={() => deleteItem(id)}
                    >
                        DELETE
                    </button>
                    <button
                        className="bg-green-500 hover:bg-green-400 active:bg-green-600 px-[10px] py-[4px] rounded-[6px] border border-black text-[#fff] font-bold"
                        onClick={() => editItem(id)}
                    >
                        EDIT
                    </button>
                </div>
            </div>
        </div>
    );
};
