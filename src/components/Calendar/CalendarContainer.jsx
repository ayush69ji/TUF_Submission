"use client";
import { useState, useEffect} from "react";
import HeroImage from "../Hero/HeroImage";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import NotesPanel from "../Notes/NotesPanel";

export default function CalendarContainer() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [range, setRange] = useState({ start: null, end: null });
  
  const [notes, setNotes] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);

useEffect(() => {
  const savedNotes = localStorage.getItem("calendar-notes");
  if (savedNotes) setNotes(JSON.parse(savedNotes));
}, []);

useEffect(() => {
  localStorage.setItem("calendar-notes", JSON.stringify(notes));
}, [notes]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden">

        <HeroImage currentDate={currentDate} />

       <div className="p-4 grid md:grid-cols-2 gap-6">
  
  {/* LEFT SIDE */}
  <div>
    <CalendarHeader
      currentDate={currentDate}
      setCurrentDate={setCurrentDate}
    />

    <CalendarGrid
  currentDate={currentDate}
  range={range}
  setRange={setRange}
  setSelectedDate={setSelectedDate}
  notes={notes}
/>
  </div>

  {/* RIGHT SIDE */}
  <div>
   <NotesPanel
  notes={notes}
  setNotes={setNotes}
  selectedDate={selectedDate}
  range={range}
/>
  </div>

</div>
      </div>
    </div>
  );
}