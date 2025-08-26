import { Button } from "@/components/ui/button";

const NoteButton = () => {
    return (
        <div className="mt-8 float-end">
            <Button type="button" className="cursor-pointer bg-blue-600 text-white">
                추가
            </Button>
        </div>
    );
};

export default NoteButton;