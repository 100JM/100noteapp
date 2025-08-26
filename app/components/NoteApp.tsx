import NoteSearchForm from "./NoteSearchForm";
import NoteList from "./NoteList";
import NoteButton from "./NoteButton";

const NoteApp = () => {
    return (
        <div className="w-full h-[600px] bg-gray-100 rounded-3xl shadow-2xl px-8 py-14">
            <div className="grid gap-y-3">
                <h2 className="text-4xl">Notes App</h2>
                <span>무엇이든 기록하세요.</span>
            </div>
            <NoteSearchForm />
            <NoteList />
            <NoteButton />
        </div>
    );
};

export default NoteApp;