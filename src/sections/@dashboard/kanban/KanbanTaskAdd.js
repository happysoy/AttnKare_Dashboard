import { ClickAwayListener, OutlinedInput, Paper } from '@mui/material';
import { useState } from 'react';

// hooks
import useToggle from 'src/hooks/useToggle';
// import useDateRangePicker from 'src/hooks/useDateRangePicker';
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
  // const {
  //   startTime,
  //   endTime,
  //   onChangeStartTime,
  //   onChangeEndTime,
  //   //
  //   openPicker,
  //   onOpenPicker,
  //   onClosePicker,
  //   //
  //   isSameDays,
  //   isSameMonths,
  // } = useDateRangePicker([null, null]);
  const handleKeyUpAddTask = (event) => {
    if (event.key === 'Enter') {
      if (name.trim() !== '') {
        // onAddTask({ ...defaultTask, id: uuidv4(), name, due: [startTime, endTime], completed });
      }
    }
  };
  return (
    <>
      <ClickAwayListener onClickAway={handleClickAddTask}>
        <Paper>
          <OutlinedInput
            multiline
            onChange={(event) => setName(event.target.value)}
            size="small"
            placeholder="Task name"
            value={name}
            onKeyUp={handleKeyUpAddTask}
          />
        </Paper>
      </ClickAwayListener>
    </>
  );
}
