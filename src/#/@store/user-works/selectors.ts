import groupBy from 'lodash/groupBy';

import { createDeepEqualSelector } from '#/@store/@common/createSelector';
import { convertSecondsToDurationWithLocal } from '#/@store/@common/helpers';
import { UserWork } from '#/@store/tasks';

import { IState } from '@types';

export const lastUserWorks = (state: IState): any => state.userWorks;

export const totalTimeSpentTodayInSeconds = createDeepEqualSelector(lastUserWorks, state =>
  state.list.reduce((res, userWork: UserWork) => res + userWork.durationInSeconds, 0)
);

export const totalTimeSpentToday = createDeepEqualSelector(totalTimeSpentTodayInSeconds, seconds =>
  convertSecondsToDurationWithLocal(seconds)
);

export const userWorksGroupedByProject = createDeepEqualSelector(lastUserWorks, state =>
  groupBy(state.list, 'projectId')
);

export const getUserWorksByProjectId = createDeepEqualSelector(
  userWorksGroupedByProject,
  groupedUserWorks => (projectId: number) => groupedUserWorks[projectId] || []
);

export const timeSpentByProjectIdInSeconds = createDeepEqualSelector(
  getUserWorksByProjectId,
  getUserWorks => (projectId: number) =>
    getUserWorks(projectId).reduce((res: number, userWork: UserWork) => {
      return res + userWork.durationInSeconds;
    }, 0)
);

export const timeSpentByProjectId = createDeepEqualSelector(
  timeSpentByProjectIdInSeconds,
  getSeconds => (projectId: number) => convertSecondsToDurationWithLocal(getSeconds(projectId))
);

export const timePercentByProjectId = createDeepEqualSelector(
  [totalTimeSpentTodayInSeconds, timeSpentByProjectIdInSeconds],
  (totalSec, getProjectSec) => (projectId: number): string | number =>
    totalSec ? Math.floor((getProjectSec(projectId) / totalSec) * 100) : '...'
);
