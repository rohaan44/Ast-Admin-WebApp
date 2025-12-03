// HeightPicker.tsx
import React, { useState } from "react";
import WheelPicker from "@/components/Wheel_picker";

// Conversion factor: 1 foot = 30.48 cm
const CM_PER_FOOT = 30.48;
const CM_VALUES = Array.from({ length: 201 }, (_, i) => i + 50); // 50–250 cm

// Generate feet values from 4.0 to 8.0 in increments of 0.1
const generateFeetValues = (min: number, max: number, step: number): number[] => {
    const values: number[] = [];
    let current = min;
    while (current <= max) {
        // Use toFixed(1) and parseFloat to prevent floating point math inaccuracies
        values.push(parseFloat(current.toFixed(1)));
        current += step;
    }
    return values;
};
const FEET_VALUES = generateFeetValues(4.0, 8.0, 0.1);

// Conversion Helpers
const cmToDecimalFeet = (cm: number): number => {
    const feet = cm / CM_PER_FOOT;
    // Round to one decimal place for the display (e.g., 5.6)
    return parseFloat(feet.toFixed(1));
};

const decimalFeetToCm = (feet: number): number => {
    // Convert to CM and round to the nearest whole cm for internal storage
    return Math.round(feet * CM_PER_FOOT);
};

export default function HeightPicker() {
  // We internally track the height in CM for reliable conversion calculations.
  const [internalCmValue, setInternalCmValue] = useState(170);

  const [value, setValue] = useState({
    height: 170, // Start in CM
    unit: "cm",
  });

  const handleChange = (val: any) => {
    setValue((prev) => {
      let newHeight = val.height ?? prev.height;
      let newUnit = val.unit ?? prev.unit;

      // 1. UNIT CHANGE (Conversion Triggered)
      if (newUnit !== prev.unit) {
        if (newUnit === "feet") {
          // Convert internal CM value to decimal feet for display
          newHeight = cmToDecimalFeet(internalCmValue);
        } else if (newUnit === "cm") {
          // Reset display height to the internal CM value
          newHeight = internalCmValue;
        }
      } 
      // 2. HEIGHT VALUE CHANGE (Update internal state)
      else if (val.height) {
         if (newUnit === "cm") {
             setInternalCmValue(val.height);
         } else if (newUnit === "feet") {
             // If height changes in feet, convert and update internal CM
             setInternalCmValue(decimalFeetToCm(val.height));
         }
      }
      
      return { ...prev, ...val, height: newHeight };
    });
  };

  return (
    <WheelPicker
      value={value}
      onChange={handleChange}
      columns={[
        { 
          name: "height", 
          // Dynamically use CM or the 4.0, 4.1, 4.2... FEET_VALUES array
          data: value.unit === "cm" ? CM_VALUES : FEET_VALUES
        },
        { name: "unit", data: ["cm", "feet"] },
      ]}
    />
  );
}