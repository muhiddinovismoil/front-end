import { IoArrowBack } from "react-icons/io5";
import { Form } from "../components/form";
import { useNavigate } from "react-router-dom";
export const CreateTaskForm = () => {
    const navigate = useNavigate();
    const backToPage = () => {
        navigate("/");
    };
    return (
        <>
            <div className="flex gap-[44px]">
                <div className="flex items-center flex-col justify-between">
                    <h2 className="font-bold text-[18px]">Create Todo</h2>
                    <button
                        onClick={backToPage}
                        className="cursor-pointer flex items-center text-blue-700 rounded-[12px] border px-[5px] py-[6px] mb-[10px]"
                    >
                        Back Page{" "}
                        <IoArrowBack className="pl-[3px] text-[18px]" />
                    </button>
                </div>
                <Form />
            </div>
        </>
    );
};
