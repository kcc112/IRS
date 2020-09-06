import { makeStyles } from '@material-ui/core/styles';
import { colours } from '../../../../../styles/colours';

export const useStyles = makeStyles({
  formRow: {
    padding: '15px 0'
  },
  submitWrapper: {
    minWidth: '30%',
    maxWidth: '30%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  formSubmit: {
    textTransform: 'uppercase',
    lineHeight: 1,
    color: colours.white,
    borderRadius: '4px',
    padding: '9px 30px',
    fontSize: '12px',
  },
});