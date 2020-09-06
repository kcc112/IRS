import { createStyles, makeStyles } from '@material-ui/core/styles';
import { colours } from '../../../../styles/colours';

export const useStyles = makeStyles(() => createStyles({
  textarea: {
    width: '100%',
    borderRadius: '10px',
    border: `2px solid ${colours.white}`,
    '& textarea': {
      fontSize: '13px',
      color: colours.white,
    },
    '& fieldset': {
      border: 'none',
    },
  },
  resizableTextarea: {
    '& textarea': {
      resize: 'vertical',
      maxHeight: '270px',
    },
  },
  error: {
    position: 'relative',
    '& > p': {
      position: 'absolute',
      top: 0,
      left: '2px',
      color: colours.redDark,
      fontSize: '10px',
      fontWeight: 400,
      fontFamily: 'inherit',
      minWidth: '100px',
      textAlign: 'left',
    },
  },
}));