import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex border border-purple-300 rounded-md bg-slate-50 p-10">
        <button className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white">
          Increment
        </button>
        <h1 className="text-3xl mx-10">0</h1>
        <button className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
