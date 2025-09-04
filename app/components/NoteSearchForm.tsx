import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import useNote from "../store/useNote";

const NoteSearchForm = () => {
    const { sortOrder, setSortOrder } = useNote();

    const handleSortOrder = (value: string) => {
        setSortOrder(value);
    };

    return (
        <div className="mt-8 flex gap-x-3 flex-shrink-0">
            <Input type="text" id="noteSearchInput" placeholder="검색" className="border-0 w-3/4 bg-white focus-visible:ring-2" />
            <Select onValueChange={(e) => handleSortOrder(e)} value={sortOrder}>
                <SelectTrigger className="border-0 w-1/4 bg-white focus-visible:ring-2">
                    <SelectValue placeholder="정렬 순서" />
                </SelectTrigger>
                <SelectContent className="border-0 bg-white">
                    <SelectGroup>
                        <SelectItem value="asc">날짜 오름차순</SelectItem>
                        <SelectItem value="desc">날짜 내림차순</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default NoteSearchForm;