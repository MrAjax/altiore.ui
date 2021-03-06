import { requestActions } from '#/@store/@common/requestActions';
import { Project } from '#/@store/projects';

import { CREATE_USER_WORK_FORM_NAME } from './consts';

export interface IUserWorkData {
  description?: string;
  projectId: number;
  taskId?: number | string;
  sequenceNumber?: number | string;
  title?: string;
}

export interface IPostData {
  project: Project;
  userWork: IUserWorkData;
  userId?: number;
}

export interface IUpdateUserWork {
  projectId: number;
  taskId: number | string;
  userWorkId: number;
  duration?: number;
  description?: number;
}

export interface IUserWorkDelete {
  projectId: number | string;
  taskId: number | string;
  userWorkId: number;
}

export const postAndStartUserWork = requestActions<IPostData>(
  'USER_WORK/POST_AND_START',
  ({ project, userWork }: IPostData): any => ({
    form: CREATE_USER_WORK_FORM_NAME,
    project,
    // projectId required here because of nested reducers!!!
    projectId: project.id,
    request: {
      data: userWork,
      method: 'POST',
      url: '/user-works',
    },
    taskId: userWork.taskId,
  })
);

export const patchAndStopUserWork = requestActions<IUserWorkDelete>(
  'USER_WORK/PATCH_AND_STOP',
  ({ projectId, taskId, userWorkId }: IUserWorkDelete) => ({
    projectId,
    request: {
      method: 'PATCH',
      url: `/user-works/${userWorkId}/stop`,
    },
    taskId,
    userWorkId,
  })
);

export const deleteUserWork = requestActions<IUserWorkDelete>(
  'USER_WORK/DELETE',
  ({ projectId, taskId, userWorkId }: IUserWorkDelete): any => ({
    projectId,
    request: {
      method: 'DELETE',
      url: `/user-works/${userWorkId}`,
    },
    success: 'Задача успешно удалена',
    taskId,
    userWorkId,
  })
);
