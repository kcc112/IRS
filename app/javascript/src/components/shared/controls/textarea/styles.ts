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
      overflowY: 'scroll',
      overflowX: 'hidden',
      '-webkit-scrollbar': {
        display: 'none',
      },
      '-ms-overflow-style': 'none',
      scrollbarWidth: 'none',
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
    '& > div': {
      marginLeft: 0,
    },
    '& > p': {
      position: 'absolute',
      top: 0,
      color: colours.red,
      fontSize: '13px',
      fontWeight: 400,
      fontFamily: 'inherit',
      minWidth: '100px',
      textAlign: 'left',
    },
  },
}));