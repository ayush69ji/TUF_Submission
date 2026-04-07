import { format, isSameDay, isWithinInterval, isSameMonth } from "date-fns";
import { isToday } from "date-fns";


export default function DayCell({ day, range, onClick, currentMonth }) {
  const isStart = range.start && isSameDay(day, range.start);
  const isEnd = range.end && isSameDay(day, range.end);
const today = isToday(day);
  const isBetween =
    range.start &&
    range.end &&
    isWithinInterval(day, { start: range.start, end: range.end });

  const isCurrentMonth = isSameMonth(day, currentMonth);

  return (
    <div
      onClick={() => onClick(day)}
      className={`p-1 text-sm text-center cursor-pointer rounded-lg
  text-black
  ${today ? "border-2 border-red-500 font-bold" : ""}
  ${isStart || isEnd ? "bg-blue-600 text-white" : ""}
  ${isBetween && !isStart && !isEnd ? "bg-blue-200 text-black" : ""}
  hover:bg-blue-100 transition`}
    >
      {format(day, "d")}
    </div>
  );
}