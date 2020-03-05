import AddIcon from '@material-ui/icons/Add';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AppBar from '@material-ui/core/AppBar/AppBar';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AttachFile from '@material-ui/icons/AttachFile';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Backdrop from '@material-ui/core/Backdrop';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import BusinessIcon from '@material-ui/icons/Business';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';

import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Fab from '@material-ui/core/Fab';
import Fade from '@material-ui/core/Fade';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import GetAppIcon from '@material-ui/icons/GetApp';
import Grid from '@material-ui/core/Grid';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Image from 'material-ui-image';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import LaunchIcon from '@material-ui/icons/Launch';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Popover from '@material-ui/core/Popover';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import SaveIcon from '@material-ui/icons/Save';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import ShoppingCartSharpIcon from '@material-ui/icons/LocalMallOutlined';
import Skeleton from '@material-ui/lab/Skeleton';
import StoreIcon from '@material-ui/icons/Store';
import styled from 'styled-components';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Tab from '@material-ui/core/Tab';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tabs from '@material-ui/core/Tabs';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Zoom from '@material-ui/core/Zoom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import CoolLoading from '../components/base/ui/CoolLoading';

export default {
  AddIcon,
  AddShoppingCartIcon,
  AppBar,
  AppsIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
  AttachFile,
  Autocomplete,
  Backdrop,
  Box,
  Breadcrumbs,
  BusinessIcon,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  CheckCircleOutlineSharpIcon,
  Chip,
  CircularProgress,
  ClickAwayListener,
  Collapse,
  CoolLoading,
  Container,
  createMuiTheme,
  CssBaseline,
  DeleteOutlineOutlinedIcon,
  Dialog,
  DialogContent,
  Divider,
  DragDropContext,
  Draggable,
  Drawer,
  Droppable,
  EditOutlinedIcon,
  Fab,
  Fade,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  GetAppIcon,
  Grid,
  GroupWorkIcon,
  HelpOutlineOutlinedIcon,
  Icon,
  IconButton,
  Image,
  InputAdornment,
  InputLabel,
  KeyboardArrowDownIcon,
  KeyboardArrowUpIcon,
  LaunchIcon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MailIcon,
  makeStyles,
  MenuIcon,
  MenuItem,
  Modal,
  OutlinedInput,
  Paper,
  PeopleAltIcon,
  Popover,
  PostAddIcon,
  Radio,
  RadioGroup,
  SaveIcon,
  SearchIcon,
  Select,
  ShoppingCartSharpIcon,
  Skeleton,
  StoreIcon,
  styled,
  SwipeableDrawer,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Tabs,
  TextareaAutosize,
  TextField,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Tooltip,
  Typography,
  withStyles,
  Zoom,
};
