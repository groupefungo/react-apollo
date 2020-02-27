import { useState } from 'react';

export default (initState) => {
  const [state, setState] = useState(initState);

  const stateChanged = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const formInputChanged = ({target}) => {
    const { name, type } = target;
    let { value } = target;

    if (type === 'checkbox') {
      value = !state[name];
    }

    stateChanged(name, value);
  };

  const nameWillChangeToValue = (name) => (value) => formInputChanged({target: { name, value }});

  const stateErrorsToHash = () => {
    const { errors } = state;
    return errors.keys.reduce((errs, cur, i) => (
      {
        ...errs,
        [cur]: errors.messages[i],
      }
    ), {});
  };

  return {
    state,
    setState,
    stateChanged,
    formInputChanged,
    nameWillChangeToValue,
    stateErrorsToHash
  };
};
