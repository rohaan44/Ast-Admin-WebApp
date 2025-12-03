// WeightPicker.tsx
import React, { useState } from "react";
import WheelPicker from "@/components/Wheel_picker";

// Conversion factor: 1 kg = 2.20462 lbs
const KG_TO_LBS = 2.20462;
// We'll use a standard weight range (20kg to 250kg) for the internal 'kg' calculation base.
const KG_VALUES = Array.from({ length: 231 }, (_, i) => i + 20); // 20–250 kg

export default function WeightPicker() {
  // We'll internally track the weight in KG for easier conversion calculations.
  const [internalKgValue, setInternalKgValue] = useState(70);

  const [value, setValue] = useState({
    // Weight column will dynamically show kg or lbs based on unit
    weight: 70, 
    unit: "kg",
  });

  const handleChange = (val: any) => {
    setValue((prev) => {
      let newWeight = val.weight ?? prev.weight;
      let newUnit = val.unit ?? prev.unit;

      // --- Conversion Logic ---
      if (newUnit !== prev.unit) {
        if (newUnit === "lbs") {
          // Convert internal KG value to LBS
          newWeight = Math.round(internalKgValue * KG_TO_LBS);
        } else if (newUnit === "kg") {
          // Convert current LBS display value back to KG
          newWeight = internalKgValue;
        }
      } else if (val.weight) {
         // --- Weight Change Logic ---
         if (newUnit === "kg") {
             setInternalKgValue(val.weight);
         } else if (newUnit === "lbs") {
             // If weight changes in LBS, convert and update internal KG
             setInternalKgValue(Math.round(val.weight / KG_TO_LBS));
         }
      }
      // ----------------------------

      return { ...prev, ...val, weight: newWeight };
    });
  };

  const lbsValues = Array.from({ length: 507 }, (_, i) => i + 44); // 44–550 lbs (approximate range)

  return (
    <WheelPicker
      value={value}
      onChange={handleChange}
      columns={[
        { 
          name: "weight", 
          // Dynamically change data based on the selected unit
          data: value.unit === "kg" ? KG_VALUES : lbsValues
        },
        { name: "unit", data: ["kg", "lbs"] },
      ]}
    />
  );
}