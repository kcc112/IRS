import { makeStyles } from '@material-ui/core/styles';

import { colours } from '../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    padding: '15px 25px',
  },
  commentWrapper: {
    maxHeight: '165px',
    paddingRight: '20px',
    paddingLeft: '15px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    '-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
    scrollbarWidth: 'none',
  },
  createContainer: {
    borderBottom: `2px solid ${colours.white}`,
    paddingBottom: '8px',
  }
});