import React, {useState} from 'react';
import useUiContext from '../../ui/UseContext';

const SelectEventType = ({emptyValue = 0, name = 'kind', value, changed, required = false}) => {
  const { BaseSelect } = useUiContext();

  const eventTypes = [
    {
      id: 'dueAccount',
      label: 'Reddition de compte',
    },
    {
      id: 'general',
      label: 'General',
    },
  ];

  if (!eventTypes) return null;

  return (
    <BaseSelect e={emptyValue} n={name} v={value} c={changed} d={eventTypes} r={required}/>
  );
};


export default (props) => {
  const {afterSave} = props;

  const [s, setS] = useState({
    id: null,
    title: 'test title',
    kind: 'dueAccount',
    eventDate: new Date(),
    description: 'test description',
  })

  const formInputChanged = ({target: {name, value}}) => {
    console.log('name', name, 'value', value);
    setS({...s, [name]: value})
  };

  const {
    Button, FormControl, InputLabel, Grid, FormHelperText, Box,
    KeyboardDatePickerBase, DescriptionControl, TitleControl
  } = useUiContext();

  const terrors = {};

  const {id, title, kind, eventDate, description} = s;
  return (
    <Box
      mx="auto"

      width={{
        xs: 1,
        md: 2 / 3,
        lg: 1 / 2,
      }}
      alignSelf="middle"
    >
      <form onSubmit={() => console.log('saved')}>
        <Grid container spacing={3}>
          <Grid container item xs={6}>
            <TitleControl
              value={title}
              onChange={formInputChanged}
              helperText={(terrors.title || []).join(',')}
              required
            />
          </Grid>
          <Grid container item xs={12} justify="space-between">
            <Grid container item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="event-kind-label">Type</InputLabel>
                <SelectEventType
                  value={kind}
                  changed={formInputChanged}
                  required
                />
                <FormHelperText>{(terrors.kind || []).join(',')}</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item>
              <KeyboardDatePickerBase
                name="eventDate"
                value={eventDate}
                changed={(v) => setS({...s, eventDate: v})}
              />
            </Grid>
          </Grid>

          <Grid container item xs={12}>
            <DescriptionControl
              value={description}
              onChange={formInputChanged}
              helperText={(terrors.description || []).join(',')}
            />
          </Grid>


          <Grid container item xs={12} justify="flex-end">
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              {id && 'Modifier'}
              {!id && 'Ajouter'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};