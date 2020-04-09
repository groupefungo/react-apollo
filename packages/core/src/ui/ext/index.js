import AddButton from "../AddButton";
import AddIcon from '@material-ui/icons/Add';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import Alert from '@material-ui/lab/Alert';
import AppBar from '@material-ui/core/AppBar/AppBar';
import AppsIcon from '@material-ui/icons/Apps';
import AttachFile from '@material-ui/icons/AttachFile';
import AttachMultipleFiles from "../AttachMultipleFiles";
import Avatar from '@material-ui/core/Avatar';
import Autocomplete from '@material-ui/lab/Autocomplete';
import BaseList from "../BaseList";
import BaseSelect from "../BaseSelect";
import Box from '@material-ui/core/Box'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import BreadcrumbsWrapper from "../BreadcrumbsWrapper";
import BusinessIcon from '@material-ui/icons/Business';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardControl from "../CardControl";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardsFilter from "../CardsFilter";
import Checkbox from '@material-ui/core/Checkbox';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Chip from '@material-ui/core/Chip';
import ChipsArray from "../ChipsArray";
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomCardHeader from "../CustomCardHeader";
import DateFnsUtils from '@date-io/date-fns';
import DeleteWarning from "../DeleteWarning";
import DescriptionControl from "../DescriptionControl";
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import EditButton from "../EditButton";
import EditIcon from '@material-ui/icons/Edit';
import Error from '../Error';
import EventIcon from '@material-ui/icons/Event';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import Fade from '@material-ui/core/Fade';
import FileUploadArea from "../FileUploadArea";
import FilterList from "../FilterList";
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import GetAppIcon from '@material-ui/icons/GetApp';
import Grid from '@material-ui/core/Grid';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import GroupIcon from '@material-ui/icons/Group';
import Header from "../Header";
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import InputMui from "../InputMui";
import InputLabel from '@material-ui/core/InputLabel';
import KeyboardDatePickerBase from '../KeyboardDatePickerBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import MailIcon from '@material-ui/icons/Mail';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Menu from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MultiPurposeTable from "../MultiPurposeTable";
import MuiAlert from '@material-ui/lab/Alert';
import Paper from '@material-ui/core/Paper';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PersonIcon from '@material-ui/icons/PersonSharp';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import SaveIcon from '@material-ui/icons/Save';
import Select from '@material-ui/core/Select';
import SelectMui from "../SelectMui";
import SendIcon from '@material-ui/icons/Send';
import SimpleTable from "../SimpleTable";
import SimpleTabs from "../SimpleTabs";
import Snackbar from '@material-ui/core/Snackbar';
import StyledRadio from "../StyledRadio";
import Tab from '@material-ui/core/Tab';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tabs from '@material-ui/core/Tabs';
import TemporaryDrawer from "../TemporaryDrawer";
import TextField from '@material-ui/core/TextField';
import TitleControl from "../TitleControl";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import useChipFile from "../UseChipFiles";
import useDrawer from "../UseDrawer";
import useSnackBar from '../UseSnackBar'
import UseFormStyles from "../UseFormStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Zoom from '@material-ui/core/Zoom';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';

const ext = {
  AddButton,
  AddIcon,
  AddSharpIcon,
  Alert,
  AppBar,
  AppsIcon,
  AttachFile,
  AttachMultipleFiles,
  Autocomplete,
  Avatar,
  BaseList,
  BaseSelect,
  Box,
  Breadcrumbs,
  BreadcrumbsWrapper,
  BusinessIcon,
  Button,
  Card,
  CardActions,
  CardContent,
  CardControl,
  CardHeader,
  CardsFilter,
  Checkbox,
  ChevronLeftIcon,
  ChevronRightIcon,
  Chip,
  ChipsArray,
  CloseIcon,
  Collapse,
  Container,
  createMuiTheme,
  CssBaseline,
  CustomCardHeader,
  DateFnsUtils,
  DeleteWarning,
  DescriptionControl,
  Dialog,
  DialogContent,
  Divider,
  Drawer,
  EditButton,
  EditIcon,
  Error,
  EventIcon,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpandMoreIcon,
  Fab,
  Fade,
  FileUploadArea,
  FilterList,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  GetAppIcon,
  Grid,
  GroupWorkIcon,
  GroupIcon,
  Header,
  HelpOutlineOutlinedIcon,
  Icon,
  IconButton,
  InputLabel,
  InputMui,
  KeyboardDatePicker,
  KeyboardDatePickerBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  MailIcon,
  makeStyles,
  Menu,
  MenuItem,
  MuiPickersUtilsProvider,
  MuiAlert,
  MultiPurposeTable,
  SimpleTable,
  Paper,
  PeopleAltIcon,
  PersonIcon,
  PostAddIcon,
  Radio,
  RadioGroup,
  SaveIcon,
  Select,
  SelectMui,
  SendIcon,
  SimpleTabs,
  Snackbar,
  StyledRadio,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TemporaryDrawer,
  TextField,
  ThemeProvider,
  TitleControl,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Tooltip,
  Typography,
  useChipFile,
  UseFormStyles,
  useTheme,
  VisibilityIcon,
  Zoom,
};

export default () => (
  {
    ...ext,
    DrawerState: useDrawer(),
    SnackBar: useSnackBar(),
  }
);
