import React, {useState} from 'react';
import {useUiContext} from "../../ui/UseContext/useUiContext";

export default () => {
  const [selectedDate, setDate] = useState(new Date());
  const {KeyboardDatePickerBase} = useUiContext();

  const picked = (date) => {
      setDate(date);
      console.log(date);
  };

  return (
    <KeyboardDatePickerBase
      name="eventDate"
      value={selectedDate}
      changed={picked}
      minDate={new Date()}
    />
  )
}