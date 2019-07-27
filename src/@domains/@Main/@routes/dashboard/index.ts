import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { getAllTasks } from '@store/tasks';
import { DashboardJsx } from './Dashboard';
import { styles } from './styles';

const mapDispatchToProps = {
  getAllTasks,
};

export default connect(
  undefined,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(DashboardJsx));