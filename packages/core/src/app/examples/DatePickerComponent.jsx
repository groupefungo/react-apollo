import React, {useState} from 'react';
import {useUiContext} from "../../ui/UseContext/useUiContext";
import {useAppContext} from "../UseContext/useAppContext";
import { parse } from 'date-fns';

export default () => {
  const d = parse('2020-03-31', 'yyyy-MM-dd', new Date());
  console.log('init date', d);
  const initState = {eventDate: d};

  const {useCompleteState} = useAppContext();
  const {state, namedDateAttributeToValue} = useCompleteState(initState);
  const {KeyboardDatePickerBase} = useUiContext();

  const picked = (date) => {
    console.log('picked', date);
    namedDateAttributeToValue('eventDate')(date);
  };

  const {eventDate} = state;
  console.log('rendering event date', eventDate);

  return (
    <KeyboardDatePickerBase
      name="eventDate"
      value={eventDate}
      changed={picked}

    />
  )
}