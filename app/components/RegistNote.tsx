import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const RegistNote = () => {
    return (
        <div className="mt-8 flex-1 flex flex-col gap-y-6">
            <Input type="text" id="noteTitleInput" placeholder="제목" className="border-0 bg-white focus-visible:ring-2 flex-shrink-0" />
            <Textarea className="border-0 bg-white focus-visible:ring-2 flex-1 overflow-y-auto" placeholder="내용을 입력하세요." />
        </div>
    );
};

export default RegistNote;