import { format } from "date-fns";
import Image from "next/image";

const monthImages = {
  0: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  1: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
  2: "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
  3: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  4: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  5: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  6: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  7: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  8: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  9: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
  10: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  11: "https://images.unsplash.com/photo-1482192505345-5655af888cc4",
};

export default function HeroImage({ currentDate }) {
  const month = currentDate.getMonth();

  return (
    <div className="relative h-60 w-full">
      <Image
        src={monthImages[month]}
        alt="calendar"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute bottom-4 right-4 text-white text-xl font-bold">
        {format(currentDate, "MMMM yyyy")}
      </div>
      
    </div>
  );
}