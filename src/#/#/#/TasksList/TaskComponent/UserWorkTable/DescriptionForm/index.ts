import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import { onSubmitForm } from '#/@store/@common/helpers';
import { IUpdateUserWork } from '#/@store/tasks';
import { EDIT_USER_WORK_DESCRIPTION_FORM, patchUserWork } from '#/@store/user-works';

import { reduxForm } from 'redux-form';

import { DescriptionFormTsx } from './DescriptionForm';
import { styles } from './styles';

const mapDispatchToProps = {
  patchUserWork,
};

const mergeProps = (state: any, props: any, { userWorkId, ...restOwn }: any) => ({
  ...props,
  ...restOwn,
  form: EDIT_USER_WORK_DESCRIPTION_FORM + userWorkId,
  userWorkId,
});

export const DescriptionForm = connect(
  undefined,
  mapDispatchToProps,
  mergeProps
)(reduxForm<IUpdateUserWork, IUpdateUserWork>({
  enableReinitialize: true,
  onSubmit: onSubmitForm<any, any>(patchUserWork, ({ projectId, taskId, userWorkId }) => ({
    id: userWorkId,
    projectId,
    taskId,
  })),
})(withStyles(styles, { withTheme: true })(DescriptionFormTsx) as any) as any);
