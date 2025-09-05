import { create } from "zustand";

import { NoteInfo, noteInterface } from "../type/note";

const useNote = create<NoteInfo>((set) => ({
    noteList: [],
    setNoteList: (note: noteInterface[]) => set({ noteList: note }),
    selectedNote: null,
    setSlectedNote: (note: noteInterface | null) => set({ selectedNote: note }),
    sortOrder: '',
    setSortOrder: (sort: string) => set({ sortOrder: sort }),
    searchText: '',
    setSearchText: (text: string) => set({ searchText: text }),
}));

export default useNote;