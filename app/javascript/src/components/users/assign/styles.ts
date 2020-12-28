import { makeStyles } from '@material-ui/core/styles';

import { colours } from '../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    padding: '15px 25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'scroll',
    overflowX: 'hidden',
    '-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
    scrollbarWidth: 'none',
  },
  row: {
    display: 'flex'
  },
  assignButton: {
    color: colours.white,
    padding: '5px'
  }
});