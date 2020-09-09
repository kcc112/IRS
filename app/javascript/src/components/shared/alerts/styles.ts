import { makeStyles } from '@material-ui/core/styles';

import { colours } from '../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    backgroundColor: colours.redDark,
    zIndex: 1000,
    position: 'absolute',
    minWidth: '15rem',
    minHeight: '4rem',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '13px',
  },
  actionContainer: {
    display: 'flex',
    justifyContent: 'end',
  },
  closeButton: {
    margin: '0 2.5px 0 5px',
    '& > svg': {
      fontSize: '20px',
      color: colours.white,
    }
  },
  message: {
    margin: '0 2.5px 0 5px',
  },
  error: {
    backgroundColor: colours.redDark,
  },
  success: {
    backgroundColor: colours.green,
  },
});