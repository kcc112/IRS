import { createStyles, makeStyles } from '@material-ui/core/styles';
import { colours } from '../../../../styles/colours';

export const useStyles = makeStyles(() => createStyles({
  container: {
    position: 'relative',
    textAlign: 'left',
    width: '100%',
  },
  input: {
    width: '100%',
    '& > div': {
      '&::before': {
        borderBottom: `2px solid ${colours.white}`,
      },
      '&::after': {
        borderBottom: `2px solid ${colours.white}`,
      },
    },
    '& input': {
      color: colours.white,
      fontSize: '13px',
      lineHeight: 1.09,
      backgroundColor: 'transparent',
      border: 'none',
      '&:placeholder': {
        color: colours.white,
      },
      '&:focus': {
        outline: 'none',
      },
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
      whiteSpace: 'pre-wrap'
    },
  },
}));