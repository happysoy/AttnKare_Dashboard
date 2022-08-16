import { IconButton, MenuItem, OutlinedInput, Stack, Typography, Button } from '@mui/material';
import { useState } from 'react';
import useToggle from 'src/hooks/useToggle';

import Iconify from 'src/components/Iconify';
import MenuPopover from 'src/components/MenuPopover';
import KanbanConfirmDialog from './KanbanConfirmDialog';

export default function KanbanColumnToolBar({ columnName, onDelete, onUpdate }) {
  const [open, setOpen] = useState(null);
  const { toggle: openConfirm, onOpen: onOpenConfirm, onClose: onCloseConfirm } = useToggle();
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} sx={{ pt: 3 }}>
        <OutlinedInput
          size="small"
          placeholder="Section name"
          value={'약물치료'}
          sx={{
            typography: 'h6',
            fontWeight: 'fontWeightBold',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
          }}
        />
        <IconButton size="small" onClick={handleOpen} color={'default'}>
          <Iconify icon={'eva:more-horizontal-fill'} width={20} height={20} />
        </IconButton>
      </Stack>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          width: 'auto',
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
      >
        <MenuItem onClick={onOpenConfirm} sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ width: 20, height: 20, flexShrink: 0, mr: 1 }} />
          Delete Section
        </MenuItem>
        <MenuItem>
          <Iconify icon={'eva:edit-fill'} sx={{ width: 20, height: 20, flexShrink: 0, mr: 1 }} />
          Rename section
        </MenuItem>
      </MenuPopover>

      <KanbanConfirmDialog
        open={openConfirm}
        onClose={onCloseConfirm}
        title={
          <Typography gutterBottom>
            정말로 지우시겠습니까 <strong>요거</strong>?
          </Typography>
        }
        subheader={
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <strong>NOTE:</strong> All tasks related to this category will also be deleted.
          </Typography>
        }
        actions={
          <>
            <Button variant="outlined" color="inherit" onClick={onCloseConfirm}>
              취소
            </Button>
            <Button variant="contained" color="error" onClick={onDelete}>
              삭제
            </Button>
          </>
        }
      />
    </>
  );
}
