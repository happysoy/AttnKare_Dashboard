import { Paper, Button, ClickAwayListener, OutlinedInput } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Iconify from 'src/components/Iconify';
import { dispatch } from 'src/redux/store';
import { createColumn } from '../../../redux/slices/kanban';

export default function KanbanColumnAdd() {
  const nameRef = useRef(null);
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      if (nameRef.current) {
        nameRef.current.focus();
      }
    }
  }, [open]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCreateColumn = async () => {
    try {
      if (name) {
        dispatch(createColumn({ name }));
        setName('');
      }
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleCreateColumn();
    }
  };

  return (
    <Paper sx={{ minWidth: 280, width: 280 }}>
      {!open && (
        <Button
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          startIcon={<Iconify icon={'eva:plus-fill'} width={20} height={20} />}
          onClick={handleOpen}
        >
          Add section
        </Button>
      )}

      {open && (
        <ClickAwayListener onClickAway={handleCreateColumn}>
          <OutlinedInput
            fullWidth
            inputRef={nameRef}
            placeholder="New section"
            value={name}
            onChange={handleChangeName}
            onKeyUp={handleKeyUp}
            sx={{ typography: 'h6' }}
          />
        </ClickAwayListener>
      )}
    </Paper>
  );
}
