import { create } from "zustand";

import { NoteList, noteInterface } from "../type/note";

const useNote = create<NoteList>((set) => ({
    noteList: [],
    setNoteList: (note: noteInterface[]) => set({ noteList: note })
}));

export default useNote;