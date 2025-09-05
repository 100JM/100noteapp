import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"

import { useEffect, useState, useMemo } from "react";
import useUi from "../store/useUi";
import useNote from "../store/useNote";
import { noteInterface } from "../type/note";
import dayjs from "dayjs";

const NoteList = () => {
    const { setRegistForm, setIsModify } = useUi();
    const { noteList, setNoteList, setSlectedNote, sortOrder, searchText } = useNote();
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
            return `Edited ${diffSeconds !== 0 ? diffSeconds : 1} second${diffSeconds !== 1 ? 's' : ''} ago`;
        } else if (diffMinutes < 60) {
            return `Edited ${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
        } else if (diffHours < 24) {
            return `Edited ${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
        } else if (diffDays < 7) {
            return `Edited ${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
        } else {
            return `Edited ${noteDate.format('YYYY-MM-DD')}`;
        }
    };

    const sortedNoteList = useMemo(() => {
        if (!searchText) {
            if (!sortOrder) return noteList;

            return [...noteList].sort((a, b) => (
                sortOrder === 'desc' ?
                    dayjs(b.date).valueOf() - dayjs(a.date).valueOf()
                    :
                    dayjs(a.date).valueOf() - dayjs(b.date).valueOf()
            ));
        } else {
            if (!sortOrder) return noteList.filter((n) => (
                n.title.includes(searchText.trim())
            ));

            return [...noteList].sort((a, b) => (
                sortOrder === 'desc' ?
                    dayjs(b.date).valueOf() - dayjs(a.date).valueOf()
                    :
                    dayjs(a.date).valueOf() - dayjs(b.date).valueOf()
            )).filter((n) => (
                n.title.includes(searchText.trim())
            ));
        }

    }, [noteList, sortOrder, searchText]);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
        setNoteList(savedNotes);
        setSlectedNote(null);
        setLoading(false);
    }, []);

    return (
        <>

            {loading ? <Skeleton className="flex flex-1 rounded-xl mt-8 bg-gray-200" /> :
                sortedNoteList.length > 0 ?
                    <div className="mt-8 flex-1 overflow-y-auto">
                        <div className="flex flex-col gap-y-5">
                            {
                                sortedNoteList.map((n) => (
                                    <div key={n.id} className="bg-white rounded-xl p-4 cursor-pointer hover:bg-gray-200" onClick={() => handleModifyNote(n)}>
                                        <p className="text-xl">
                                            {n.title}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1 flex items-center justify-between">
                                            <span>
                                                {calculationNoteDate(n.modifyDate || '')}
                                            </span>
                                            <span>
                                                {dayjs(n.date).format('YYYY-MM-DD HH:mm')}
                                            </span>
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