import { makeStyles } from '@material-ui/core/styles';
import { colours } from '../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    padding: '15px 25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  message: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  actionsContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    paddingTop: '15px',
    borderTop: `1px solid ${colours.white}`,
    '& > div:first-of-type': {
      borderRight: `1px solid ${colours.white}`,
    },
  },
  actionButton: {
    fontSize: '20px',
    color: colours.white,
  },
  buttonWrapper: {
    padding: '0 20px',
  },
});