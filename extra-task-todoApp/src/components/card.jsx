/* eslint-disable react/prop-types */
export const Card = ({ id, title, description, deleteTodo, editTodo }) => {
    const handleEdit = () => {
        const newTitle = prompt("Enter new title", title);
        const newDescription = prompt("Enter new description", description);
        if (newTitle && newDescription) {
            editTodo(id, newTitle, newDescription);
        }
    };
    return (
        <div className="border border-green-500 bg-green-300 p-4 rounded-md  shadow-md mb-4">
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <button
                onClick={() => deleteTodo(id)}
                className="hover:bg-red-900 cursor-pointer mt-[8px] mr-[10px] bg-red-600 text-white px-4 py-1 rounded"
            >
                DELETE
            </button>
            <button
                onClick={handleEdit}
                className="hover:bg-yellow-600 cursor-pointer mt-[8px] ml-[10px] bg-[yellow] text-black px-4 py-1 rounded"
            >
                EDIT
            </button>
        </div>
    );
};
