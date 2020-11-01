import { makeStyles } from '@material-ui/core/styles';

import { colours } from '../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    padding: '15px 25px',
  },
  commentWrapper: {
    maxHeight: '281px',
    paddingRight: '20px',
    paddingLeft: '15px',
  },
  createContainer: {
    borderBottom: `2px solid ${colours.white}`,
    paddingBottom: '8px',
  }
});