import { createStyles, makeStyles } from '@material-ui/core/styles';
import { colours } from '../../../styles/colours';

export const useStyles = makeStyles(() => createStyles({
  backdrop: {
    position: 'absolute',
    minWidth: '100vw',
    minHeight: '100vh',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(2, 6, 44, 0.4)',
    overflow: 'hidden',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: colours.grayLighter,
    overflow: 'auto',
    transition: '0.3s',
    borderRadius: '10px',
    position: 'fixed',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1100,
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    height: '100%',
  },
}));