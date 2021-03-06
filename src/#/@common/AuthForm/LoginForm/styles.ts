import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  form: {
    paddingBottom: theme.spacing(2),
    width: '100%',
  },
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
}));
