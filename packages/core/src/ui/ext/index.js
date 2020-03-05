import GetAppIcon from '@material-ui/icons/GetApp';
import AttachFile from '@material-ui/icons/AttachFile';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withStyles from '@material-ui/core/styles/withStyles';
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
import TablePagination from '@material-ui/core/TablePagination';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import MenuItem from '@material-ui/core/MenuItem';
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
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import AppsIcon from '@material-ui/icons/Apps';
import InputAdornment from '@material-ui/core/InputAdornment';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCartSharpIcon from '@material-ui/icons/LocalMallOutlined';
import StoreIcon from '@material-ui/icons/Store';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Popover from '@material-ui/core/Popover';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SearchIcon from '@material-ui/icons/Search';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Image from 'material-ui-image';
import Modal from '@material-ui/core/Modal';

// ICONS
import MenuIcon from '@material-ui/icons/Menu';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import LaunchIcon from '@material-ui/icons/Launch';

export default {
  makeStyles,
  withStyles,
  styled,
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
  TableFooter,
  Breadcrumbs,
  HelpOutlineOutlinedIcon,
  AttachFile,
  Select,
  MenuItem,
  Autocomplete,
  Collapse,
  RadioGroup,
  Radio,
  IconButton,
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
  InputAdornment,
  ButtonGroup,
  AddShoppingCartIcon,
  ShoppingCartSharpIcon,
  StoreIcon,
  CheckCircleOutlineSharpIcon,
  Backdrop,
  CircularProgress,
  KeyboardArrowUpIcon,
  KeyboardArrowDownIcon,
  Popover,
  TextareaAutosize,
  SearchIcon,
  OutlinedInput,
  TablePagination,
  Skeleton,
  ClickAwayListener,
  DragDropContext,
  Droppable,
  Draggable,
  Image,
  Modal,
  EditOutlinedIcon,
  DeleteOutlineOutlinedIcon,
  MenuIcon,
  SwipeableDrawer,
  LaunchIcon,
};
