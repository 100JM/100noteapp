import { Button } from "@/components/ui/button";

import { useEffect } from "react";
import useUi from "../store/useUi";
import useNote from "../store/useNote";

const NoteList = () => {
    const { setRegistForm } = useUi();
    const { noteList, setNoteList } = useNote();

    const handleAddBtn = () => {
        setRegistForm(true);
    };

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
        setNoteList(savedNotes);
    }, []);

    return (
        <>
            <div className="mt-8 flex-1 overflow-y-auto">
                <div className="flex flex-col gap-y-5">
                    {
                        noteList.map((n) => (
                            <div key={n.id} className="bg-white h-16 rounded-xl py-2 px-3 cursor-pointer hover:bg-gray-200">test</div>
                        ))
                    }
                    {/* <div className="flex justify-center items-center text-gray-500">
                    There are no registered notes.
                </div> */}
                </div>
            </div>
            <div className="mt-8 flex items-center justify-end flex-shrink-0">
                <Button type="button" className="cursor-pointer bg-blue-600 text-white" onClick={handleAddBtn}>
                    Create Note
                </Button>
            </div>
        </>
    );
};

export default NoteList;