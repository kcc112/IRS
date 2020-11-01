import { makeStyles } from '@material-ui/core/styles';

import { colours } from '../../../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    '& > svg': {
      color: colours.white,
      fontSize: '30px',
    },
  },
  title: {
    fontSize: '20px',
  },
});