import React from 'react';

import cn from 'classnames';

import Button from '@material-ui/core/Button';

import TimeField from '@components/TimeField';

import moment from 'moment';
import { Field, InjectedFormProps } from 'redux-form';

export interface IEditWorkData {
  finishAt: moment.Moment;
  startAt: moment.Moment;
}

export interface IEditWorkProps extends InjectedFormProps<IEditWorkData, IEditWorkProps> {
  classes: any;
  onClose: any;
}

export class EditWorkTsx extends React.Component<IEditWorkProps, {}> {
  render() {
    const { classes, handleSubmit, initialValues } = this.props;

    return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <div className={classes.rowSpaceBetween}>
          <div className={classes.col}>
            <span>Начало</span>
            <Field name="startAt" component={TimeField} />
          </div>
          <div>
            {moment((initialValues.finishAt || moment()).diff(initialValues.startAt as moment.Moment)).format(
              'Hч mmмин'
            )}
          </div>
          <div className={cn(classes.col, classes.end)}>
            <span>Конец</span>
            <Field name="finishAt" component={TimeField} />
          </div>
        </div>
        <div className={classes.grow} />
        <Button color="primary" variant="contained" type="submit">
          Сохранить
        </Button>
      </form>
    );
  }
}
