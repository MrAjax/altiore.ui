import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  buttonTitle: {
    flexBasis: '60%',
    paddingLeft: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
      maxWidth: 146,
    },
  },
  buttonTitleLabel: {
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'none',
    whiteSpace: 'nowrap',
  },
  duration: {
    flexBasis: '10%',
  },
  listItem: {
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
    backgroundColor: theme.palette.background.paper,
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    flexGrow: 1,
    height: 64,
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: 2,
      paddingTop: theme.spacing(1),
    },
  },
  listItemRoot: {
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
  },
  projectButton: {
    '&:hover p, &:focus p': {
      opacity: 1,
    },
    flexBasis: '16%',
    textTransform: 'none',
    whiteSpace: 'nowrap',
  },
  // projectIcon: {
  //   color: theme.palette.secondary.dark,
  //   marginRight: 4,
  // },
  projectText: {
    opacity: 0.2,
  },
  taskIcon: {
    left: 8,
    position: 'absolute',
  },
  userWorkTable: {
    zIndex: 1202,
  },
}));
