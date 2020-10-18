import { makeStyles } from '@material-ui/core/styles';

import { colours } from '../../../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  closeButton: {
    '& > svg': {
      color: colours.white,
      fontSize: '30px',
    },
  },
});