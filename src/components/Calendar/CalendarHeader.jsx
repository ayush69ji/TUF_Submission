import { format, addMonths, subMonths } from "date-fns";

export default function CalendarHeader({ currentDate, setCurrentDate }) {
  return (
    <div className="flex justify-between items-center mb-3">
      <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
        ◀
      </button>

      <h2 className="font-bold text-gray-800">
        {format(currentDate, "MMMM yyyy")}
      </h2>

      <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
        ▶
      </button>
    </div>
  );
}