import { useEffect } from 'react';
// import { getBoard, persistColumn, persistCard } from '../../redux/slices/kanban';

//  redux
import { useSelector, useDispatch } from 'src/redux/store';
import { getBoard, persistColumn, persistCard } from 'src/redux/slices/kanban';

import { Container, Grid, Button, Stack } from '@mui/material';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
//  redux
import { SkeletonKanbanColumn } from 'src/components/skeleton';
import { KanbanColumn, KanbanColumnAdd } from 'src/sections/@dashboard/kanban';

import Page from '../../../components/Page';

export default function GeneralTreatment() {
  const dispatch = useDispatch();
  const { board } = useSelector((state) => state.kanban);

  useEffect(() => {
    dispatch(getBoard());
  }, [dispatch]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    if (type === 'column') {
      const newColumnOrder = Array.from(board.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      dispatch(persistColumn(newColumnOrder));
      return;
    }

    const start = board.columns[source.droppableId];
    const finish = board.columns[destination.droppableId];

    if (start.id === finish.id) {
      const updatedCardIds = [...start.cardIds];
      updatedCardIds.splice(source.index, 1);
      updatedCardIds.splice(destination.index, 0, draggableId);

      const updatedColumn = {
        ...start,
        cardIds: updatedCardIds,
      };

      dispatch(
        persistCard({
          ...board.columns,
          [updatedColumn.id]: updatedColumn,
        })
      );
      return;
    }
    const startCardIds = [...start.cardIds];
    startCardIds.splice(source.index, 1);
    const updatedStart = {
      ...start,
      cardIds: startCardIds,
    };

    const finishCardIds = [...finish.cardIds];
    finishCardIds.splice(destination.index, 0, draggableId);
    const updatedFinish = {
      ...finish,
      cardIds: finishCardIds,
    };

    dispatch(
      persistCard({
        ...board.columns,
        [updatedStart.id]: updatedStart,
        [updatedFinish.id]: updatedFinish,
      })
    );
  };

  return (
    <Page title="patient | Treatment" sx={{ height: 1 }}>
      <Container maxWidth={false} sx={{ hegith: 1 }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="all-columns" direction="horizontal" type="column">
            {(provided) => (
              <Stack
                {...provided.droppableProps}
                ref={provided.innerRef}
                direction="row"
                alignItems="flex-start"
                spacing={3}
                sx={{ height: 'calc(100% - 32px)', overflowY: 'hidden' }}
              >
                {!board.columnOrder.length ? (
                  <SkeletonKanbanColumn />
                ) : (
                  board.columnOrder.map((columnId, index) => (
                    <KanbanColumn index={index} key={columnId} column={board.columns[columnId]} />
                  ))
                )}

                {provided.placeholder}
                <KanbanColumnAdd />
              </Stack>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    </Page>
  );
}
