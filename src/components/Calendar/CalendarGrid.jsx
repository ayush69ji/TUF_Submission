import {
  startOfMonth,
  endOfMonth,
  getDay,
  getDate,
} from "date-fns";
import DayCell from "./DayCell";

export default function CalendarGrid({ currentDate, range, setRange, setSelectedDate }) {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);

  const startDay = getDay(monthStart);
  const totalDays = getDate(monthEnd);

  const handleDateClick = (day) => {
  setSelectedDate(day);

  if (!range.start || (range.start && range.end)) {
    setRange({ start: day, end: null });
  } else {
    if (day < range.start) {
      setRange({ start: day, end: range.start });
    } else {
      setRange({ ...range, end: day });
    }
  }
};

  // ✅ DEFINE cells HERE
  const cells = [];

  // 1️⃣ Empty cells before month starts
  for (let i = 0; i < startDay; i++) {
    cells.push(<div key={`empty-start-${i}`} />);
  }

  // 2️⃣ Actual days
  for (let i = 1; i <= totalDays; i++) {
    const day = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      i
    );

    cells.push(
      <DayCell
        key={i}
        day={day}
        range={range}
        onClick={handleDateClick}
      />
    );
  }

  // 3️⃣ Fill remaining cells to ALWAYS 42
  while (cells.length < 42) {
    cells.push(<div key={`empty-end-${cells.length}`} />);
  }

  return (
    <>
      <div className="grid grid-cols-7 text-center font-semibold mb-2 text-gray-700">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 grid-rows-6 gap-1 h-[340px]">
        {cells}
      </div>
    </>
  );
}