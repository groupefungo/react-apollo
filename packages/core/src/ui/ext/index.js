import AddButton from "../AddButton";
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar/AppBar';
import AppsIcon from '@material-ui/icons/Apps';
import AttachFile from '@material-ui/icons/AttachFile';
import AttachMultipleFiles from "../AttachMultipleFiles";
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
import Chip from '@material-ui/core/Chip';
import ChipsArray from "../ChipsArray";
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
import MailIcon from '@material-ui/icons/Mail';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Menu from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MultiPurposeTable from "../MultiPurposeTable";
import Paper from '@material-ui/core/Paper';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import SelectMui from "../SelectMui";
import SimpleTable from "../SimpleTable";
import SimpleTabs from "../SimpleTabs";
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
import UseFormStyles from "../UseFormStyles";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Zoom from '@material-ui/core/Zoom';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';

const ext = {
  AddButton,
  AddIcon,
  AppBar,
  AppsIcon,
  AttachFile,
  AttachMultipleFiles,
  Autocomplete,
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
  Chip,
  ChipsArray,
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
  MailIcon,
  makeStyles,
  Menu,
  MenuItem,
  MuiPickersUtilsProvider,
  MultiPurposeTable,
  Paper,
  PeopleAltIcon,
  PostAddIcon,
  Radio,
  RadioGroup,
  Select,
  SelectMui,
  SimpleTable,
  SimpleTabs,
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
  VisibilityIcon,
  Zoom,
};

export default () => (
  {
    ...ext,
    DrawerState: useDrawer()
  }
);
