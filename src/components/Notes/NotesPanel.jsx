import { format, differenceInCalendarDays } from "date-fns";

export default function NotesPanel({ notes, setNotes, selectedDate, range }) {
  if (!selectedDate && !range.start) {
    return <div>Select a date or range</div>;
  }

  // 🔑 KEY for storage
  let key = "";
  let label = "";
  let daysCount = 1;

  if (range.start && range.end) {
    key =
      format(range.start, "yyyy-MM-dd") +
      "_" +
      format(range.end, "yyyy-MM-dd");

    label = `${format(range.start, "dd MMM")} - ${format(
      range.end,
      "dd MMM yyyy"
    )}`;

    daysCount =
      differenceInCalendarDays(range.end, range.start) + 1;
  } else {
    key = format(selectedDate, "yyyy-MM-dd");
    label = format(selectedDate, "dd MMM yyyy");
  }

  const handleChange = (e) => {
    setNotes({
      ...notes,
      [key]: e.target.value,
    });
  };

  return (
    <div>
      <h2 className="font-bold mb-2 text-black">
        Notes for {label}
      </h2>

      {/* 🔥 SHOW RANGE COUNT */}
      {range.start && range.end && (
        <p className="text-sm text-gray-600 mb-2">
          Total days: {daysCount}
        </p>
      )}

      <textarea
        value={notes[key] || ""}
        onChange={handleChange}
        className="w-full h-40 border rounded-lg p-2 text-black bg-white"
        placeholder="Write notes..."
      />
    </div>
  );
}