import { Paper, Box, Typography, Checkbox } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';

export default function KanbanTaskCard({ onDeleteTask, card, index }) {
  const { name, attachments } = card;
  // const [complete, setCompleted] = useState(card.completed);

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Paper
            sx={{
              px: 2,
              width: 1,
              position: 'relative',
              boxShadow: (theme) => theme.customShadows.z1,
              '&:hover': {
                boxShadow: (theme) => theme.customShadows.z16,
              },
              ...(attachments.length > 0 && {
                pt: 2,
              }),
            }}
          >
            <Box sx={{ cursor: 'pointer' }}>
              <Typography
                noWrap
                variant="subtitle2"
                sx={{
                  py: 3,
                  pl: 5,
                  transition: (theme) =>
                    theme.transitions.create('opacity', {
                      duration: theme.transitions.duration.shortest,
                    }),
                  // ...(completed && { opacity: 0.48 }),
                }}
              >
                {name}
              </Typography>
            </Box>
          </Paper>
        </div>
      )}
    </Draggable>
  );
}
