import { makeStyles } from '@material-ui/styles';

import { coloursRGBA, colours } from '../../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  titleContainer: {
    height: '5%',
    borderBottom: `1px solid ${coloursRGBA.grayLighter}`,
  },
  actionsContainer: {
    minHeight: '95%'
  },
  action: {
    display: 'flex',
    width: '100%',
  },
  actionContainer: {
    padding: '10px 8px',
    '& > a': {
      color: colours.white,
      textDecoration: 'none',
    },
    '&:hover': {
      backgroundColor: coloursRGBA.grayLight,
    },
  },
  actionContainerActive: {
    backgroundColor: coloursRGBA.grayLight,
  },
  text: {
    marginLeft: '10px',
    marginTop: '6px',
  }
});