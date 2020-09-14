import { makeStyles } from '@material-ui/core/styles';

import { colours } from '../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    backgroundColor: colours.redDark,
    zIndex: 1000,
    position: 'absolute',
    minWidth: '15rem',
    minHeight: '3rem',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '13px',
  },
  actionContainer: {
    marginRight: '6px',
    display: 'flex',
    justifyContent: 'end',
  },
  closeButton: {
    margin: '0 5px 0 5px',
    '& > svg': {
      fontSize: '20px',
      color: colours.white,
    }
  },
  message: {
    margin: '0 5px 0 17px',
  },
  error: {
    backgroundColor: colours.redDark,
  },
  success: {
    backgroundColor: colours.green,
  },
});