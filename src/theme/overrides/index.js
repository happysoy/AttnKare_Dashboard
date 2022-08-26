import Card from './Card';
import Tabs from './Tabs';
import Menu from './Menu';
import Link from './Link';
import Lists from './List';
import Table from './Table';
import Badge from './Badge';
import Paper from './Paper';
import Input from './Input';
import Drawer from './Drawer';
import Dialog from './Dialog';
import Avatar from './Avatar';
import Slider from './Slider';
import Button from './Button';
import Tooltip from './Tooltip';
import Popover from './Popover';
import DataGrid from './DataGrid';
import Accordion from './Accordion';
import Typography from './Typography';
import Pagination from './Pagination';
import CssBaseline from './CssBaseline';
import Autocomplete from './Autocomplete';
import ControlLabel from './ControlLabel';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Tabs(theme),
    Card(theme),
    Menu(theme),
    Link(theme),
    Input(theme),
    Badge(theme),
    Lists(theme),
    Table(theme),
    Paper(theme),
    Button(theme),
    Dialog(theme),
    Avatar(theme),
    Slider(theme),
    Drawer(theme),
    Tooltip(theme),
    Popover(theme),
    DataGrid(theme),
    Accordion(theme),
    Typography(theme),
    Pagination(theme),
    CssBaseline(theme),
    Autocomplete(theme),
    ControlLabel(theme)
  );
}
