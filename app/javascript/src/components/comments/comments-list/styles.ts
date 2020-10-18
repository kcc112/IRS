import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    padding: '15px 25px',
  },
  commentWrapper: {
    maxHeight: '281px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    paddingRight: '20px',
    paddingLeft: '15px',
  }
});