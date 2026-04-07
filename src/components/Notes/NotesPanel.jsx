"use client";
import { useState } from "react";
import { format, differenceInCalendarDays, addDays } from "date-fns";

export default function NotesPanel({ notes, setNotes, selectedDate, range }) {
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  if (!selectedDate && !range.start) {
    return <div>Select a date or range</div>;
  }

  let key = "";
  let label = "";
  let daysCount = 1;

  if (range.start && range.end) {
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

  // 🧠 GET NOTES (DEDUP)
  let currentNotes = [];

  if (range.start && range.end) {
    const map = new Map();

    for (let i = 0; i < daysCount; i++) {
      const d = format(addDays(range.start, i), "yyyy-MM-dd");

      if (notes[d]) {
        (Array.isArray(notes[d]) ? notes[d] : []).forEach((note) => {
          map.set(note.text, note); // ✅ FIXED
        });
      }
    }

    currentNotes = Array.from(map.values());
  } else {
    currentNotes = Array.isArray(notes[key]) ? notes[key] : []; // ✅ FIXED
  }

  // ➕ ADD / EDIT
  const handleAddNote = () => {
    if (!input.trim()) return;

    let updatedNotes = { ...notes };

    const noteObj = {
      text: input,
      label: label,
    };

    if (range.start && range.end) {
      for (let i = 0; i < daysCount; i++) {
        const d = format(addDays(range.start, i), "yyyy-MM-dd");

        const existing = Array.isArray(updatedNotes[d])
          ? updatedNotes[d]
          : [];

        if (
          existing.length < 3 &&
          !existing.some((n) => n.text === input)
        ) {
          updatedNotes[d] = [...existing, noteObj]; // ✅ FIXED (no mutation)
        } else {
          updatedNotes[d] = existing;
        }
      }
    } else {
      let existing = Array.isArray(updatedNotes[key])
        ? updatedNotes[key]
        : [];

      if (editIndex !== null) {
        existing[editIndex] = noteObj;
        setEditIndex(null);
      } else {
        if (existing.length >= 3) return;
        existing = [...existing, noteObj];
      }

      updatedNotes[key] = existing;
    }

    setNotes(updatedNotes);
    setInput("");
  };

  // ❌ DELETE
  const handleDelete = (noteText) => {
    let updatedNotes = { ...notes };

    if (range.start && range.end) {
      for (let i = 0; i < daysCount; i++) {
        const d = format(addDays(range.start, i), "yyyy-MM-dd");

        if (updatedNotes[d]) {
          updatedNotes[d] = updatedNotes[d].filter(
            (n) => n.text !== noteText
          );
        }
      }
    } else {
      updatedNotes[key] = (Array.isArray(updatedNotes[key]) ? updatedNotes[key] : []).filter(
        (n) => n.text !== noteText
      );
    }

    setNotes(updatedNotes);
  };

  // ✏️ EDIT
  const handleEdit = (index) => {
    if (range.start && range.end) return;

    setInput(currentNotes[index].text);
    setEditIndex(index);
  };

  return (
    <div>
      <h2 className="font-bold mb-2 text-black">
        Notes for {label}
      </h2>

      {range.start && range.end && (
        <p className="text-sm text-gray-600 mb-2">
          Total days: {daysCount}
        </p>
      )}

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-32 border rounded-lg p-2 text-black bg-white"
        placeholder="Write note..."
      />

      <button
        onClick={handleAddNote}
        className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        {editIndex !== null ? "Update Note" : "Add Note"}
      </button>

      {/* SAVED NOTES */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">
          Saved Notes
        </h3>

        {currentNotes.length > 0 ? (
          currentNotes.map((note, index) => (
            <div
              key={index}
              className="bg-gray-100 p-3 rounded-lg text-sm text-black mb-2 flex justify-between"
            >
              <div>
                <p className="whitespace-pre-wrap">
                  {note.text}
                </p>
                <p className="text-xs text-gray-500">
                  {note.label}
                </p>
              </div>

              <div className="flex gap-2 ml-2">
                {!range.start && (
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-500 text-xs"
                  >
                    ✏️
                  </button>
                )}

                <button
                  onClick={() => handleDelete(note.text)}
                  className="text-red-500 text-xs"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-sm">
            No notes added yet
          </p>
        )}
      </div>
    </div>
  );
}