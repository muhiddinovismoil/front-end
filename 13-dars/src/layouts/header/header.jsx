import { IoAdd } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    const createTodo = () => {
        navigate("/create-todo");
    };
    return (
        <div className="border border-[red] text-[18px] flex max-w-[685px] grow bg-gray-900 items-center justify-center gap-[255px] px-[20px] py-[12px] rounded-[14px]">
            <h1 className="text-[white]">You can create tasks on here</h1>
            <button
                onClick={createTodo}
                className="flex cursor-pointer text-[white] bg-blue-500 justify-center py-[6px] px-[10px] rounded-[8px] items-center"
            >
                ADD TODO
                <IoAdd className="text-[24px]" />
            </button>
        </div>
    );
};
