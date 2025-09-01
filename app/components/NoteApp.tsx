"use client";

import NoteSearchForm from "./NoteSearchForm";
import NoteList from "./NoteList";
import RegistNote from "./RegistNote";

import useUi from "../store/useUi";

const NoteApp = () => {
    const { registForm } = useUi();

    return (
        <div className="w-full h-[600px] bg-gray-100 rounded-3xl shadow-2xl px-8 pt-20 pb-10 flex flex-col">
            <div className="flex-shrink-0">
                <h2 className="text-4xl">Notes App</h2>
                <p className="mt-3">무엇이든 기록하세요.</p>
            </div>
            {!registForm ?
                <>
                    <NoteSearchForm />
                    <NoteList />
                </>
                : <RegistNote />
            }
        </div>
    );
};

export default NoteApp;