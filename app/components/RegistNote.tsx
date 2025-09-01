import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import z from "zod";
import dayjs from "dayjs";
import { useRef, useState } from "react";
import { noteSchema, type noteInterface } from "../type/note";
import useUi from "../store/useUi";
import useNote from "../store/useNote";



const RegistNote = () => {
    const { setRegistForm } = useUi();
    const { setNoteList } = useNote();
    const titleRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const [errorMsg, setErrorMsg] = useState<string | undefined>('');

    const handleBackBtn = () => {
        setRegistForm(false);
    };

    const handleSaveNote = () => {
        setErrorMsg('');
        const noteId = `${titleRef.current?.value}_${dayjs().format('YYYY-MM-DD HH:mm:ss')}`;
        const checkError = noteSchema.safeParse({ id: noteId, title: titleRef.current?.value, content: contentRef.current?.value });
        
        if (!checkError.success) {
            setErrorMsg(z.treeifyError(checkError.error).properties?.title?.errors[0]);
            titleRef.current?.focus();
        } else {
            const note: noteInterface = {
                id: noteId,
                title: titleRef.current?.value || '',
                content: contentRef.current?.value,
                date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
            };

            const noteList = JSON.parse(localStorage.getItem('notes')|| '[]');

            noteList.push(note);

            localStorage.setItem('notes', JSON.stringify(noteList));

            setNoteList(JSON.parse(localStorage.getItem('notes') || '[]'));
            setRegistForm(false);
        }
    };

    return (
        <>
            <div className="mt-8 flex-1 flex flex-col gap-y-6 overflow-y-auto p-1">
                <Button type="button" className="cursor-pointer text-white bg-gray-300 w-fit" onClick={handleBackBtn}>
                    &lt; Back
                </Button>
                <div className="flex-shrink-0">
                    <Input ref={titleRef} type="text" id="noteTitleInput" placeholder="제목" className="border-0 bg-white focus-visible:ring-2" />
                    {errorMsg && <p className="text-sm text-red-500 pl-0.5 pt-0.5">{errorMsg}</p>}
                </div>
                <Textarea ref={contentRef} className="border-0 bg-white focus-visible:ring-2 flex-1 resize-none" placeholder="내용을 입력하세요." />
            </div>
            <div className="mt-8 flex items-center justify-between flex-shrink-0">
                <Button type="button" className="cursor-pointer bg-red-600 text-white">
                    Remove
                </Button>
                <Button type="button" className="cursor-pointer bg-blue-600 text-white" onClick={handleSaveNote}>
                    Done
                </Button>
            </div>
        </>

    );
};

export default RegistNote;