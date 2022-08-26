import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Checkbox, TableRow, TableCell, Typography } from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
// components
import Label from '../../../components/Label';

// ----------------------------------------------------------------------

ErrorTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  onEditRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function ErrorTableRow({ filterStatus, row, selected, onSelectRow, onViewRow, onEditRow, onDeleteRow }) {
  const theme = useTheme();

  const { sent, variables, invoiceNumber, createDate, dueDate, status, invoiceTo, totalPrice } = row;

  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };
  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>
      <TableCell align="left">
        <Label
          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
          color={
            (status === 'paid' && 'success') ||
            (status === 'unpaid' && 'warning') ||
            (status === 'overdue' && 'error') ||
            'default'
          }
          sx={{ textTransform: 'capitalize' }}
        >
          {status}
        </Label>
      </TableCell>
      <TableCell align="left">
        <Typography variant="subtitle2" noWrap>
          {invoiceTo.name}
        </Typography>
      </TableCell>

      <TableCell align="left">{fDate(createDate)}</TableCell>

      <TableCell align="center">{filterStatus === 'all' ? null : sent}</TableCell>

      <TableCell align="left">
        <Label
          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
          color={
            (variables === 'low' && 'success') ||
            (variables === 'average' && 'info') ||
            (variables === 'high average' && 'primary') ||
            (variables === 'elevated' && 'warning') ||
            (variables === 'very elevated' && 'error') ||
            'default'
          }
          sx={{ textTransform: 'capitalize' }}
        >
          {variables}
        </Label>
      </TableCell>
    </TableRow>
  );
}
