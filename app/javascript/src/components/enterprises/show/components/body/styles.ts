import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {
    fontSize: '15px',
    maxHeight: '300px',
    minHeight: '300px',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
});