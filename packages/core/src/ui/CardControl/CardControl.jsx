import React, {useState} from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import useUiContext from '../UseContext';
import useAppContext from '../../app/UseContext';
import ChipsArray from '../ChipsArray';
import useChipFiles from '../UseChipFiles';
import CustomCardHeader from '../CustomCardHeader';
import DeleteWarning from '../DeleteWarning';


export default (props) => {
    const {title, description, category, action, actionLabel, files, date, id, deleteCardFunction, disabled} = props;
    const [isHovered, setIsHovered] = useState(false);
    const [openDeleteWarning, setOpenDeleteWarning] = useState(false);
    const appContext = useAppContext();
    const {useRouter} = appContext;
    const router = useRouter();

    const {chipsData, chipClicked} = useChipFiles(files);

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
        makeStyles
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
    }));

    const classes = useStyles();

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
                                            <CancelIcon fontSize="small" color="primary"/>
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
                                {
                                    description && (
                                        <Box flexGrow={1}>
                                            <div className={classes.description}> {description}  </div>
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
                                <IconButton onClick={() => setOpenDeleteWarning(true)}>
                                    <VisibilityIcon fontSize="small" color="primary"/>
                                </IconButton>
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
        </>
    );
};
