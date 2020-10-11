import { makeStyles } from '@material-ui/core/styles';

import { colours } from '../../../../../styles/colours';

export const useStyles = makeStyles({
  formRow: {
    padding: '5px 0'
  },
  submitWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  formSubmit: {
    textTransform: 'uppercase',
    color: colours.white,
    padding: '9px 30px',
    fontSize: '15px',
  },
});