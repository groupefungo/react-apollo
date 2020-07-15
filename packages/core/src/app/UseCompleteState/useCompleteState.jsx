import {useState} from 'react';
import {format} from 'date-fns'

export const useCompleteState = (initState) => {
  const [state, setState] = useState(initState);

  const stateChanged = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const formInputChanged = ({target}) => {
    const {name, type} = target;
    let {value} = target;

    if (type === 'checkbox') {
      value = !state[name];
    }

    stateChanged(name, value);
  };

  const nameWillChangeToValue = (name) => (value) => formInputChanged({target: {name, value}});

  const namedDateAttributeToValue = (name) => (value) => {
    console.log('date changed', value);
    const fd = format(value, 'yyyy-MM-dd ');
    formInputChanged({target: {name, value: fd}});
    console.log('date changed set', fd);
  };

  const stateErrorsToHash = () => {
    const {errors} = state;
    return errors.keys.reduce((errs, cur, i) => (
      {
        ...errs,
        [cur]: errors.messages[i],
      }
    ), {});
  };

  const assureState = (attr_anchor = 'id') => {
    if (state) {
      if (state[attr_anchor] !== initState[attr_anchor]) {
        setState(initState);
      } else {
        if (initState) {
          const {updatedAt} = state;
          const {updatedAt: initUpdatedAt} = initState;
          if (updatedAt && initUpdatedAt && updatedAt !== initUpdatedAt) {
            setState(initState);
          }
        }
      }
    }
  };

  assureState();

  return {
    state,
    setState,
    stateChanged,
    formInputChanged,
    nameWillChangeToValue,
    stateErrorsToHash,
    namedDateAttributeToValue,
    assureState
  };
};
