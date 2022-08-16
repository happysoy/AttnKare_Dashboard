import { ClickAwayListener, OutlinedInput, Paper } from '@mui/material';

export default function KanbanTaskAdd() {
  return (
    <>
      {/* <ClickAwayListener> */}
      <Paper>
        <OutlinedInput multiline size="small" placeholder="Task name" value={'입력'} />
      </Paper>
      {/* </ClickAwayListener> */}
    </>
  );
}
