
// DobPicker.tsx
import React, { useState } from "react";
import WheelPicker from "@/components/Wheel_picker";

export default function DobPicker() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
  const years = Array.from({ length: 80 }, (_, i) => 2025 - i);

  const [value, setValue] = useState({
    day: 3,
    month: "Gen",
    year: 2000,
  });

  const handleChange = (val: any) => {
    setValue((prev) => ({ ...prev, ...val }));
  };

  return (
    <WheelPicker
      value={value}
      onChange={handleChange}
      columns={[
        { name: "day", data: days },
        { name: "month", data: months },
        { name: "year", data: years },
      ]}
    />
  );
}
