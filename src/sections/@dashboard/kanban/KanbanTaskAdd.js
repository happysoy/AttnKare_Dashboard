import { Checkbox, ClickAwayListener, IconButton, OutlinedInput, Paper, Stack, Tooltip } from '@mui/material';
import { useState } from 'react';
import Iconify from 'src/components/Iconify';

// hooks
import useToggle from 'src/hooks/useToggle';
import useDateRangePicker from 'src/hooks/useDateRangePicker';
import KanbanDatePickerDialog from './KanbanDatePickerDialog';
// utils
import uuidv4 from '../../../utils/uuidv4';

const defaultTask = {
  attachments: [],
  comments: [],
  description: '',
  due: [null, null],
  assignee: [],
};

export default function KanbanTaskAdd({ onAddTask, onCloseAddTask }) {
  const [name, setName] = useState('');
  const [completed, setCompleted] = useState(false);
  const { toggle: openContacts, onOpen: onOpenContacts, onClose: onCloseContacts } = useToggle();

  const handleClickAddTask = () => {
    console.log(name);
  };
  const {
    startTime,
    endTime,
    onChangeStartTime,
    onChangeEndTime,
    //
    openPicker,
    onOpenPicker,
    onClosePicker,
    //
    isSameDays,
    isSameMonths,
  } = useDateRangePicker([null, null]);
  const handleKeyUpAddTask = (event) => {
    if (event.key === 'Enter') {
      if (name.trim() !== '') {
        onAddTask({ ...defaultTask, id: uuidv4(), name, due: [startTime, endTime], completed });
      }
    }
  };

  const handleChangeCompleted = (event) => {
    setCompleted(event.target.checked);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAddTask}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <OutlinedInput
            multiline
            onChange={(event) => setName(event.target.value)}
            size="small"
            placeholder="Task name"
            value={name}
            onKeyUp={handleKeyUpAddTask}
          />
          <Stack direction="row" justifyContent="space-betwen">
            <Tooltip title="Mark test complete">
              <Checkbox
                disableRipple
                checked={completed}
                onChange={handleChangeCompleted}
                icon={<Iconify icon={'eva:radio-button-off-outline'} />}
                checkedIcon={<Iconify icon={'eva:checkmark-circle-2-outline'} />}
              />
            </Tooltip>
            <Tooltip title="Add due date">
              <IconButton size="small" onClick={onOpenPicker}>
                <Iconify icon={'eva:calendar-fill'} width={20} height={20} />
              </IconButton>
            </Tooltip>

            <KanbanDatePickerDialog
              open={openPicker}
              startTime={startTime}
              endTime={endTime}
              onChangeStartTime={onChangeStartTime}
              onChangeEndTime={onChangeEndTime}
              onClose={onClosePicker}
            />
          </Stack>
        </Paper>
      </ClickAwayListener>
    </>
  );
}
