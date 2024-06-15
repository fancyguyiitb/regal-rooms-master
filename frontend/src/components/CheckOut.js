import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

import { BsCalendar } from "react-icons/bs";

const CheckOut = () => {
  const [endDate, setendDate] = useState(false);
  return (
    <div className="cursor-pointer relative flex items-center justify-end h-full">
      {/* ICON */}
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>

      <DatePicker
        className="w-full h-full"
        selected={endDate}
        placeholderText="Check Out"
        onChange={(date) => setendDate(date)}
      />
    </div>
  );
};

export default CheckOut;
