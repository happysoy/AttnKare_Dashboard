import Card from './Card';
import Tabs from './Tabs';
import Menu from './Menu';
import Lists from './List';
import Table from './Table';
import Badge from './Badge';
import Paper from './Paper';
import Drawer from './Drawer';
import Dialog from './Dialog';
import Avatar from './Avatar';
import Slider from './Slider';
import Button from './Button';
import Tooltip from './Tooltip';
import Popover from './Popover';
import Typography from './Typography';
import CssBaseline from './CssBaseline';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Tabs(theme),
    Card(theme),
    Menu(theme),
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
    Typography(theme),
    CssBaseline(theme)
  );
}
