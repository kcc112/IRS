import { makeStyles } from '@material-ui/styles';

import { colours } from '../../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logout: {
    marginRight: '10px',
    marginTop: '5px',
    '& svg': {
      color: colours.white,
    },
  },
  titleContainer: {
    marginTop: '7px',
    marginLeft: '10px',
  },
  title: {
    fontSize: '25px',
    fontWeight: 600,
    letterSpacing: '2.8px',
  },
});