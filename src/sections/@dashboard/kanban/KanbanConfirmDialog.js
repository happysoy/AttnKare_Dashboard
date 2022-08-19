import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

export default function KanbanConfirmDialog({ open, onClose, title, subheader, actions }) {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <DialogTitle>
        {title}
        {subheader}
      </DialogTitle>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
}
