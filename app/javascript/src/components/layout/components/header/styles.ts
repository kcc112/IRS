import { makeStyles } from '@material-ui/styles';

import { colours } from '../../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
  logout: {
    marginRight: '10px',
    marginTop: '5px',
    '& svg': {
      color: colours.white,
    },
  },
  titleContainer: {
    flex: 1,
    marginTop: '7px',
    marginLeft: '10px',
  },
  title: {
    fontSize: '25px',
    fontWeight: 600,
    letterSpacing: '2.8px',
  },
  actionsContainer: {
    display: 'flex',
    flex: 9,
    justifyContent: 'space-between',
  },
  userInfo: {
    display: 'flex',
  },
  email: {
    paddingTop: '7px',
    marginRight: '15px',
  },
  roleContainer: {
    paddingTop: '7px',
    display: 'flex',
  },
  role: {
    paddingLeft: '3px',
    textTransform: 'uppercase',
  }
});