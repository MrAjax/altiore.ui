import { push } from 'connected-react-router';

import { showError } from '#/@store/notifications';
import { currentTask } from '#/@store/timer';

import { ThunkDispatch } from 'redux-thunk';

import { IState, ITask } from '@types';

export const openTaskModal = (task?: ITask, count = 0) => async (
  dispatch: ThunkDispatch<any, any, any>,
  getState: () => IState
) => {
  if (task) {
    dispatch(
      push({
        pathname: `/projects/${task.projectId}/tasks/${task.sequenceNumber}`,
        state: {
          modal: true,
          projectId: task.projectId,
          sequenceNumber: task.sequenceNumber,
          taskId: task.id,
        },
      })
    );
  } else {
    setTimeout(() => {
      const openedTask = currentTask(getState());
      if (openedTask) {
        dispatch(
          push({
            pathname: `/projects/${openedTask.projectId}/tasks/${openedTask.sequenceNumber}`,
            state: {
              modal: true,
              projectId: openedTask.projectId,
              sequenceNumber: openedTask.sequenceNumber,
              taskId: openedTask.id,
            },
          })
        );
      } else {
        if (count > 4) {
          dispatch(
            showError({
              message: 'Не удалось открыть задачу',
            })
          );
        } else {
          dispatch(openTaskModal(undefined, count + 1) as any);
        }
      }
    }, 600);
  }
};
