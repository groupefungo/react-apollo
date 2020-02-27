import React from 'react';
import useUiContext from './UseContext';

import { useCenters } from '../centers/hooks';

export const ChooseCenters = ({ className, centerIds, setCentersState }) => {
  const {
    FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText,
  } = useUiContext();

  const uCenters = useCenters();

  if (!uCenters) return null;

  const centersChanged = () => {
    const checkboxes = document.querySelectorAll('input[name=centers]');
    const checkboxIds = [];
    Array.prototype.forEach.call(checkboxes, (checkbox) => {
      if (checkbox.checked) {
        checkboxIds.push(parseInt(checkbox.value, 10));
      }
    });

    setCentersState(checkboxIds);
  };

  const { centers } = uCenters;
  const centerSelected = (cid) => {
    const found = centerIds.find((stateCenterId) => `${stateCenterId}` === `${cid}`);
    return (!!found);
  };

  return (
    <FormControl component="fieldset" className={className}>
      <FormLabel component="legend">Sélectionner le(s) centre(s)</FormLabel>
      <FormGroup>
        {
          centers.map((center) => {
            const { id, name } = center;

            const checked = centerSelected(id);

            return (
              <FormControlLabel
                key={`center-${id}`}
                control={(
                  <Checkbox
                    key={`center${id}`}
                    id={`center${id}`}
                    name="centers"
                    checked={checked}
                    onChange={centersChanged}
                    value={id}
                  />
                )}
                label={name}
              />
            );
          })
        }
      </FormGroup>
      <FormHelperText>(sélectionnez au moins un)</FormHelperText>
    </FormControl>
  );
};
