import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const ConfirmAlert = ({ confirmFun } : { confirmFun: () => void; }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button type="button" className="cursor-pointer bg-red-600 text-white">remove</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
                    <AlertDialogDescription>
                        삭제된 Note는 복구할 수 없습니다.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="cursor-pointer bg-white outline-none border-gray-200">Cancel</AlertDialogCancel>
                    <AlertDialogAction className="cursor-pointer bg-black text-white" onClick={confirmFun}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default ConfirmAlert;