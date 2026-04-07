import { format, isSameDay, isWithinInterval, isSameMonth, isToday } from "date-fns";

export default function DayCell({ day, range, onClick, currentMonth, notes }) {
  const key = format(day, "yyyy-MM-dd");

  // ✅ range states
  const isStart = range.start && isSameDay(day, range.start);
  const isEnd = range.end && isSameDay(day, range.end);

  const isBetween =
    range.start &&
    range.end &&
    isWithinInterval(day, { start: range.start, end: range.end });

  const today = isToday(day);
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const isSunday = day.getDay() === 0;

  // ✅ FIXED NOTE CHECK
  const hasNote =
  notes &&
  Array.isArray(notes[key]) &&
  notes[key].length > 0;

  return (
    <div
      onClick={() => onClick(day)}
      className={`p-1 text-sm text-center cursor-pointer rounded-lg
        ${isSunday ? "text-red-500 font-semibold" : "text-black"}
        ${isCurrentMonth ? "text-black" : "text-gray-400"}
        ${today ? "border-2 border-red-500 font-bold" : ""}
        ${isStart || isEnd ? "bg-blue-600 text-white" : ""}
        ${isBetween && !isStart && !isEnd ? "bg-blue-200 text-black" : ""}
        hover:bg-blue-100 transition`}
    >
      {/* ✅ DATE */}
      {format(day, "d")}

      {/* ✅ DOT */}
      {hasNote && (
        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mx-auto mt-1"></div>
      )}
    </div>
  );
}