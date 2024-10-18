import { useState } from "react";

function App() {
  const [activity, setActivity] = useState<string>("");
  const [duration, setDuration] = useState<number|string>("");
  return (
    <div className="flex-1 flex flex-col justify-center gap-8">
      <div className="px-8">
        <label className="text-lg py-2 text-white">Activity Type</label>
        <select
          value={activity}
          onChange={(e) => {
            console.log("inside activity change", e.target.value);
            setActivity(e.target.value);
          }}
          className="text-xl h-12 w-full rounded-md"
        >
          <option></option>
          <option>Running</option>
          <option>Weight Training</option>
          <option>Functional</option>
          <option>Yoga</option>
          <option>Cyclying</option>
        </select>
      </div>
      <div className="px-8">
        <input
          value={duration}
          onChange={(e) => {
            setDuration(e.target.valueAsNumber);
          }}
          className="p-4 text-xl h-12 w-full  rounded-md"
          type="number"
          placeholder="duration (minutes)"
        />
      </div>
      <div className="px-8">
        <button
          className="border rounded-md w-full h-12 bg-blue-800 text-white"
          type="button"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
