import React, {useState} from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import Badge from '@material-ui/core/Badge';
import VisibilityIcon from '@material-ui/icons/Visibility';
import useUiContext from '../UseContext';
import CustomCardHeader from '../CustomCardHeader';
import DeleteWarning from '../DeleteWarning';


export default (props) => {
  const {
    title, description, category, action, actionLabel, files, date, id, deleteCardFunction, disabled, titleIcon,
  } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [openDeleteWarning, setOpenDeleteWarning] = useState(false);

  const handleClose = () => setOpenDeleteWarning(false);

  const handleConfirm = () => {
    deleteCardFunction(id);
    handleClose();
  };

  const {
    Card,
    CardHeader,
    Divider,
    CardContent,
    CardActions,
    Typography,
    Box,
    IconButton,
    Fade,
    makeStyles,
    AttachmentIcon,
    Tooltip
  } = useUiContext();

  const useStyles = makeStyles((theme) => ({
    description: {
      '&:after': {
        content: '""',
        width: '100%',
        height: '60px',
        position: 'absolute',
        left: 0,
        bottom: 30,
        background: `linear-gradient(transparent, ${theme.palette.background.paper})`,
      },
    },
    noMaxWidth: {
      maxWidth: 'none',
    },
  }));


  const classes = useStyles();

  const fileBadgeTooltip = <ul style={{listStyleType: 'none'}}>
    {files && files.length > 0 && (files.map((f) => <li key={`file-${f.id}`}>{f.filename}</li>))}
  </ul>;

  return (
    <>
      <Box width="100%" height="100%" flexGrow={1} position="relative">
        <DeleteWarning
          open={openDeleteWarning}
          title={title}
          handleCancel={handleClose}
          handleConfirm={handleConfirm}
        />
        <Card
          raised={isHovered}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {(date) && (
            <Box top={-10} left={-10} position="absolute">
              <CustomCardHeader createdAt={date} disabled={disabled}/>
            </Box>
          )}
          {(deleteCardFunction) && (
            <Fade
              in={isHovered}
              timeout={300}
              style={{transitionDelay: isHovered ? '300ms' : '0ms'}}
            >
              <Box top={-20} right={-20} position="absolute" zIndex={3}>
                <IconButton onClick={() => setOpenDeleteWarning(true)}>
                  <CancelIcon fontSize="small" color="primary" id={`card-delete-${id}`}/>
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
          <Divider light/>
          <CardContent>
            {description && (
              <>
                <Box flexGrow={1} mt={2}>
                  <div className={classes.description}> {description}  </div>
                </Box>
                {files && files.length > 0 && (
                  <Box top={40} right={20} position="absolute" zIndex={3}>
                    <Tooltip title={fileBadgeTooltip} placement="right" classes={{ tooltip: classes.noMaxWidth }}>
                      <Badge badgeContent={files.length} color="primary">
                        <AttachmentIcon/>
                      </Badge>
                    </Tooltip>
                  </Box>
                )}
              </>
            )}
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
            <IconButton onClick={action} title={actionLabel} id={`card-action-${id}`}>
              <VisibilityIcon fontSize="small" color="primary"/>
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};
