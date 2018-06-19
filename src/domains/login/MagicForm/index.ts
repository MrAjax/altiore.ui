import * as CSSModules from 'react-css-modules';
import { reduxForm } from 'redux-form';

import { sendMagicLink } from 'src/store/user'
import { IMagicFormProps, MagicForm as MagicFormJsx } from './MagicForm';
import * as s from './style.m.scss';

const MagicForm = reduxForm<{}, IMagicFormProps>({
  form: 'MagicForm',
  onSubmit: sendMagicLink,
})(CSSModules(MagicFormJsx, s));

export { MagicForm, IMagicFormProps };
