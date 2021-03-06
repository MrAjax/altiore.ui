import includes from 'lodash/includes';
import map from 'lodash/map';

import { convertSecondsToDuration } from '#/@store/@common/helpers';

import moment from 'moment';

import { Task } from '../Task';

import { ITask, IUserWork } from '@types';

export class UserWork implements IUserWork {
  id?: number | string;
  description?: string;
  finishAt?: moment.Moment | null;
  projectId: number;
  source?: string | null;
  startAt: moment.Moment;
  task?: ITask;
  taskId: number;
  taskTypeId?: number;
  value?: number;

  constructor(initial?: object) {
    map(initial, (val: any, key: string) => {
      if (key === 'task') {
        return (this[key] = new Task(val));
      }
      if (includes(['finishAt', 'startAt'], key)) {
        if (val) {
          return (this[key] = moment(val));
        } else {
          return (this[key] = undefined);
        }
      }

      return (this[key] = val);
    });
  }

  get durationInSeconds(): number {
    if (this.finishAt) {
      return this.finishAt.diff(this.startAt, 'second');
    }
    return moment().diff(this.startAt, 'second');
  }

  get duration() {
    return convertSecondsToDuration(this.durationInSeconds);
  }
}
