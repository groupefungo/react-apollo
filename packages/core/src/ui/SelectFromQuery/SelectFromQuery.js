import React from 'react';
import * as PropTypes from 'prop-types';
import useUiContext from '../UseContext';

function SelectFromQuery({ useQueryGql, label, name, onChange, value, defaultOptionLabel, objectName, objectLabel, objectValue, ...remainingProps }) {
  const { SelectMui, Skeleton } = useUiContext();

  const { data, loading } = useQueryGql();

  if (loading) {
    return <Skeleton width={170} height={72} />;
  }

  const { [objectName]: objects } = data;
  const options = objects.map((object) => ({ value: object[objectValue], label: object[objectLabel] }));

  return (
    <SelectMui
      label={label}
      name={name}
      options={options}
      onChange={onChange}
      value={value}
      defaultOptionLabel={defaultOptionLabel}
      hasDefaultOption
      {...remainingProps}
    />
  );
}

SelectFromQuery.defaultProps = {
  label: '',
  defaultOptionLabel: '',
};

SelectFromQuery.propTypes = {
  useQueryGql: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  objectName: PropTypes.string.isRequired,
  objectLabel: PropTypes.string.isRequired,
  objectValue: PropTypes.string.isRequired,
  label: PropTypes.string,
  defaultOptionLabel: PropTypes.string,
};

export default SelectFromQuery;
