import z from "zod";

export const noteSchema = z.object({
    id: z.string().nonempty(),
    title: z.string().nonempty({ message: '제목은 필수 항목입니다.' }),
    content: z.string().nullable().optional(),
    date: z.string().nullable().optional(),
});

export type noteInterface = z.infer<typeof noteSchema>;

export interface Ui {
    registForm: boolean;
    setRegistForm: (isShow: boolean) => void;
}

export interface NoteList {
    noteList: noteInterface[];
    setNoteList: (note: noteInterface[]) => void;
}

