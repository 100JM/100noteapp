import { Button } from "@/components/ui/button";
import useUi from "../store/useUi";

const NoteButton = () => {
    const { registForm, setRegistForm } = useUi();

    const handleAddBtn = () => {
        setRegistForm(!registForm);
    };

    return (
        <div className="mt-8 flex items-center justify-end flex-shrink-0">
            <Button type="button" className="cursor-pointer bg-blue-600 text-white" onClick={handleAddBtn}>
                등록
            </Button>
        </div>
    );
};

export default NoteButton;