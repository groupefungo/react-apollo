import GetAppIcon from '@material-ui/icons/GetApp';
import AttachFile from '@material-ui/icons/AttachFile';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/icons/Menu';
import Select from '@material-ui/core/Select';

import Autocomplete from '@material-ui/lab/Autocomplete';

import Collapse from '@material-ui/core/Collapse';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import BusinessIcon from '@material-ui/icons/Business';
import Zoom from '@material-ui/core/Zoom';

import Icon from '@material-ui/core/Icon';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import AppsIcon from '@material-ui/icons/Apps';

import AddButton from "../AddButton";
import AttachMultipleFiles from "../AttachMultipleFiles";
import CardControl from "../CardControl";
import CardsFilter from "../CardsFilter";
import Error from '../Error';
import FilterList from "../FilterList";
import useChipFile from "../UseChipFiles";
import useDrawer from "../UseDrawer";
import UseFormStyles from "../UseFormStyles";
import BaseList from "../BaseList";
import BaseSelect from "../BaseSelect";
import BreadcrumbsWrapper from "../BreadcrumbsWrapper";
import ChipsArray from "../ChipsArray";
import CustomCardHeader from "../CustomCardHeader";
import DeleteWarning from "../DeleteWarning";
import DescriptionControl from "../DescriptionControl";
import FileUploadArea from "../FileUploadArea";
import Header from "../Header";
import KeyboardDatePickerBase from '../KeyboardDatePickerBase';
import SimpleTable from "../SimpleTable";
import SimpleTabs from "../SimpleTabs";
import StyledRadio from "../StyledRadio";
import TitleControl from "../TitleControl";
import TemporaryDrawer from "../TemporaryDrawer";

const ext = {
  makeStyles,
  Chip,
  Container,
  GetAppIcon,
  Typography,
  CssBaseline,
  ThemeProvider,
  Grid,
  Button,
  Divider,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  TextField,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Tooltip,
  AppBar,
  AddIcon,
  Fab,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Breadcrumbs,
  HelpOutlineOutlinedIcon,
  DateFnsUtils,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
  AttachFile,
  Select,
  MenuItem,
  Autocomplete,
  Collapse,
  RadioGroup,
  Radio,
  IconButton,
  Menu,
  Toolbar,
  Tab,
  Tabs,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  MailIcon,
  InputLabel,
  createMuiTheme,
  Icon,
  GroupWorkIcon,
  ToggleButton,
  ToggleButtonGroup,
  Fade,
  Box,
  AppsIcon,
  PeopleAltIcon,
  BusinessIcon,
  PostAddIcon,
  Zoom,
  Dialog,
  DialogContent,
  AddButton,
  AttachMultipleFiles,
  CardControl,
  CardsFilter,
  Error,
  FilterList,
  useChipFile,
  UseFormStyles,
  BaseList,
  BaseSelect,
  BreadcrumbsWrapper,
  ChipsArray,
  CustomCardHeader,
  DeleteWarning,
  DescriptionControl,
  FileUploadArea,
  Header,
  KeyboardDatePickerBase,
  SimpleTable,
  SimpleTabs,
  StyledRadio,
  TitleControl,
  TemporaryDrawer,
};

export default () => (
  {
    ...ext,
    DrawerState: useDrawer()
  }
);
