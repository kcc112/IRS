import { makeStyles } from '@material-ui/core/styles';

import { colours } from '../../../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '20px',
  },
  closeButton: {
    '& > svg': {
      color: colours.redDark,
      fontSize: '30px',
    },
  },
});