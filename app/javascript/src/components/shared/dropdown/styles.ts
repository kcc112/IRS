import { makeStyles } from '@material-ui/core/styles';
import { colours } from '../../../styles/colours';

export const useStyles = makeStyles({
  formControl: {
    minWidth: 120,
    textTransform: 'uppercase',
    '& label': {
      color: colours.white,
    },
    '& svg': {
      color: colours.white,
    },
  },
  option: {
    color: colours.white,
  },
});