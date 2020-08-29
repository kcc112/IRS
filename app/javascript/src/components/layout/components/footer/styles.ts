import { makeStyles } from '@material-ui/styles';

import { colours } from '../../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '7px',
    backgroundColor: colours.grayLighter,
  },
  icon: {
    '& svg': {
      color: colours.white,
    },
  },
  info: {
    marginRight: '10px',
  }
});