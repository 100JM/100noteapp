import NoteApp from "./components/NoteApp";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="w-2/5">
        <NoteApp />
      </main>
    </div>
  );
}
