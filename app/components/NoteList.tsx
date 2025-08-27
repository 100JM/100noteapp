const NoteList = () => {
    return (
        <div className="mt-8 grid gap-y-6 overflow-y-auto flex-1">
            {/* <div className="bg-white h-16 rounded-xl py-2 px-3 cursor-pointer hover:bg-gray-200">test</div>
            <div className="bg-white h-16 rounded-xl py-2 px-3 cursor-pointer hover:bg-gray-200">test</div>
            <div className="bg-white h-16 rounded-xl py-2 px-3 cursor-pointer hover:bg-gray-200">test</div>
            <div className="bg-white h-16 rounded-xl py-2 px-3 cursor-pointer hover:bg-gray-200">test</div>
            <div className="bg-white h-16 rounded-xl py-2 px-3 cursor-pointer hover:bg-gray-200 ">test</div> */}
            <div className="flex justify-center items-center text-gray-500">
                There are no registered notes.
            </div>
        </div>
    );
};

export default NoteList;