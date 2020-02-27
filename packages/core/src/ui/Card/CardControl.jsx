import React, { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

import useUiContext from '../UseContext';
import useAppContext from '../../app/UseContext';
import ChipsArray from '../ChipsArray';
import useChipFiles from '../hooks/useChipFiles';
import CustomCardHeader from './CustomCardHeader';
import DeleteWarning from './DeleteWarning';

export default (props) => {
  const { title, description, category, action, actionLabel, files, date, id, deleteCardFunction } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [openDeleteWarning, setOpenDeleteWarning] = useState(false);
  const appContext = useAppContext();
  const { useRouter } = appContext;
  const router = useRouter();

  const { chipsData, chipClicked } = useChipFiles(files);

  const handleClose = () => setOpenDeleteWarning(false);

  const handleConfirm = () => {
    deleteCardFunction(id);
    handleClose();
    router.push('/');
  };

  const {
    Card,
    CardHeader,
    Divider,
    Button,
    CardContent,
    CardActions,
    Typography,
    Box,
    IconButton,
    Fade,
    Grid,
  } = useUiContext();

  return (
    <>
      <Box width="inherit" height="inherit">
        <Grid item>
          <DeleteWarning
            open={openDeleteWarning}
            title={title}
            handleCancel={handleClose}
            handleConfirm={handleConfirm}
          />
          <Box position="relative" flexGrow={1} margin={1}>
            <Card
              raised={isHovered}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {(date) && (
                <Box top={-10} left={-10} position="absolute">
                  <CustomCardHeader createdAt={date} />
                </Box>
              )}
              {(deleteCardFunction) && (
                <Fade
                  in={isHovered}
                  timeout={300}
                  style={{ transitionDelay: isHovered ? '300ms' : '0ms' }}
                >
                  <Box top={-20} right={-20} position="absolute" zIndex={3}>
                    <IconButton onClick={() => setOpenDeleteWarning(true)}>
                      <CancelIcon fontSize="small" color="primary" />
                    </IconButton>
                  </Box>
                </Fade>
              )}

              <CardHeader
                title={title}
                titleTypographyProps={{
                  variant: 'h5',
                  color: 'primary',
                }}
              />
              <Divider light />
              <CardContent>
                {
                  description && (
                    <Box flexGrow={1}>
                      <Typography color="textPrimary" paragraph>
                        {description}
                      </Typography>
                    </Box>
                  )
                }
                {
                  files && (files.length > 0) && (
                    <Box>
                      <ChipsArray
                        chipsData={chipsData()}
                        chipClicked={(file) => chipClicked(file)}
                        size="small"
                      />
                    </Box>
                  )
                }
              </CardContent>
              <CardActions>
                {
                  category && (
                    <Typography color="textSecondary" variant="caption">
                      {category}
                    </Typography>
                  )
                }
                {
                  !category && (
                    <Typography color="textSecondary" variant="caption">

                    </Typography>
                  )
                }
                <Button
                  size="small"
                  color="primary"
                  onClick={action}
                >
                  {actionLabel}
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
