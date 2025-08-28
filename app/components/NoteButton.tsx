import { Button } from "@/components/ui/button";

import useUi from "../store/useUi";

const NoteButton = () => {
    const { registForm, setRegistForm } = useUi();

    const handleAddBtn = () => {
        setRegistForm(!registForm);
    };

    return (
        <>
            {!registForm ?
                <div className="mt-8 flex items-center justify-end flex-shrink-0">
                    <Button type="button" className="cursor-pointer bg-blue-600 text-white" onClick={handleAddBtn}>
                        Create Note
                    </Button>
                </div>
                :
                <div className="mt-8 flex items-center justify-between flex-shrink-0">
                    <Button type="button" className="cursor-pointer bg-red-600 text-white">
                        Remove
                    </Button>
                    <Button type="button" className="cursor-pointer bg-blue-600 text-white">
                        Done
                    </Button>
                </div>
            }
        </>
    );
};

export default NoteButton;