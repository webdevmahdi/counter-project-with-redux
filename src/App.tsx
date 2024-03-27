import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import tallyLine from "./assets/Image/1.png";
import fiveLine from "./assets/Image/2.png";
import TallyCalculator from "./hooks/tullyCalculator";

function App() {
  const { counter } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const { countSingle, countFive } = TallyCalculator(counter);

  const countSingleTally: number[] = [];
  const countFiveTally: number[] = [];
  for (let i = 0; i < countSingle; i++) {
    countSingleTally.push(i + 1);
  }
  for (let i = 0; i < countFive; i++) {
    countFiveTally.push(i + 1);
  }

  return (
    <div className="block">
      <div className="flex justify-center items-center">
        <div className="flex border border-purple-300 rounded-md bg-slate-50 p-10">
          <button
            onClick={() => dispatch(increment())}
            className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
          >
            Increment
          </button>
          <h1 className="text-3xl mx-10">{counter}</h1>

          <button
            onClick={() => dispatch(decrement())}
            className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white"
          >
            Decrement
          </button>
        </div>
      </div>
      {countFiveTally.map((oneLine) => (
        <div className="inline-block">
          <img src={fiveLine} className="h-24 w-auto" />
        </div>
      ))}
      {countSingleTally.map((count) => (
        <div className="inline-block">
          <img src={tallyLine} className="h-24 w-auto mx-[5px]" />
        </div>
      ))}
    </div>
  );
}

export default App;
