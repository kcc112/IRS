import { makeStyles } from '@material-ui/styles';

import { colours, coloursRGBA } from '../../styles/colours';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    backgroundColor: colours.gray,
    height: '100%',
    color: colours.white,
    flexDirection: 'column',
  },
  main: {
    height: '100%',
    display: 'flex',
  },
  footer: {
    borderTop: `1px solid ${coloursRGBA.grayLighter}`,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
  },
  sidebar: {
    minWidth: '10%',
  },
  container: {
    minWidth: '90%',
  },
  header: {
    backgroundColor: colours.grayLighter,
    borderBottom: `1px solid ${coloursRGBA.grayLighter}`,
  },
  body: {
    minHeight: '95%',
    borderLeft: `1px solid ${coloursRGBA.grayLighter}`,
  },
  alert: {
    justifyContent: 'center',
    display: 'flex',
  }
});