import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"

import { useEffect, useState } from "react";
import useUi from "../store/useUi";
import useNote from "../store/useNote";
import { noteInterface } from "../type/note";
import dayjs from "dayjs";

const NoteList = () => {
    const { setRegistForm, setIsModify } = useUi();
    const { noteList, setNoteList, setSlectedNote } = useNote();
    const [loading, setLoading] = useState<boolean>(true);

    const handleAddBtn = () => {
        setRegistForm(true);
        setIsModify(false);
    };

    const handleModifyNote = (note: noteInterface) => {
        setRegistForm(true);
        setIsModify(true);
        setSlectedNote(note);
    };

    const calculationNoteDate = (date: string) => {
        const nowDate = dayjs();
        const noteDate = dayjs(date);
        
        const diffSeconds = nowDate.diff(noteDate, 'second');
        const diffMinutes = nowDate.diff(noteDate, 'minute');
        const diffHours = nowDate.diff(noteDate, 'hour');
        const diffDays = nowDate.diff(noteDate, 'day');
    
        if (diffSeconds < 60) {
            return `${diffSeconds !== 0 ? diffSeconds : 1} second${diffSeconds !== 1 ? 's' : ''} ago`;
        } else if (diffMinutes < 60) {
            return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
        } else if (diffHours < 24) {
            return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
        } else if (diffDays < 7) {
            return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
        } else {
            return noteDate.format('YYYY-MM-DD');
        }
    };

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
        setNoteList(savedNotes);
        setSlectedNote(null);
        setLoading(false);
    }, []);

    return (
        <>
            
            {loading ? <Skeleton className="flex flex-1 rounded-xl mt-8 bg-gray-200" /> :
                noteList.length > 0 ?
                    <div className="mt-8 flex-1 overflow-y-auto">
                        <div className="flex flex-col gap-y-5">
                            {
                                noteList.sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf()).map((n) => (
                                    <div key={n.id} className="bg-white rounded-xl p-4 cursor-pointer hover:bg-gray-200" onClick={() => handleModifyNote(n)}>
                                        <p className="text-xl">
                                            {n.title}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">
                                            {calculationNoteDate(n.date || '')}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div >
                    :
                    <div className="flex flex-1 justify-center items-center text-gray-500 mt-8">
                        There are no registered notes.
                    </div>
            }
            <div className="mt-8 flex items-center justify-end flex-shrink-0">
                <Button type="button" className="cursor-pointer bg-blue-600 text-white" onClick={handleAddBtn}>
                    Create Note
                </Button>
            </div>
        </>
    );
};

export default NoteList;