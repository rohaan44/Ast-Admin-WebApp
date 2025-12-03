// components/WheelPicker.tsx
import React from "react";
import Picker from "react-mobile-picker";

interface WheelPickerProps {
  value: any;
  onChange: (val: any) => void;
  columns: {
    name: string;
    data: (string | number)[];
  }[];
}

const WheelPicker: React.FC<WheelPickerProps> = ({ value, onChange, columns }) => {
  return (
    <div className="w-full flex items-center justify-center py-4">
      <div className=" rounded-2xl py-3 w-full max-w-xs mx-auto  border-neutral-800"
      style={{
        backgroundColor:"transparent"
      }}>
        <Picker value={value} onChange={onChange} wheelMode="normal">
          {columns.map((col) => (
            <Picker.Column key={col.name} name={col.name}>
              {col.data.map((item) => (
                <Picker.Item key={item} value={item}>
                  <span className="text-white">{item}</span>
                </Picker.Item>
              ))}
            </Picker.Column>
          ))}
        </Picker>
      </div>
    </div>
  );
};

export default WheelPicker;
