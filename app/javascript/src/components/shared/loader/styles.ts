import { makeStyles } from '@material-ui/core/styles';

import { colours } from '../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: '10px 0 0 0',
    fontSize: '12px',
    color: colours.white,
  },
  loaderBackdrop: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    zIndex: 1200,
    top: 0,
    bottom: 0,
    right: '-175px',
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderWrapper: {
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%)',
  },
  loader: {
    margin: '0 auto',
  },
});