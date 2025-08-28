import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import useUi from "../store/useUi";

const RegistNote = () => {
    const { setRegistForm } = useUi();

    const handleBackBtn = () => {
        setRegistForm(false);
    };

    return (
        <div className="mt-8 flex-1 flex flex-col gap-y-6 overflow-y-auto p-1">
            <Button type="button" className="cursor-pointer text-white bg-gray-300 w-fit" onClick={handleBackBtn}>
                &lt; Back
            </Button>
            <Input type="text" id="noteTitleInput" placeholder="제목" className="border-0 bg-white focus-visible:ring-2 flex-shrink-0" />
            <Textarea className="border-0 bg-white focus-visible:ring-2 flex-1 resize-none" placeholder="내용을 입력하세요." />
        </div>
    );
};

export default RegistNote;