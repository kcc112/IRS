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
    minHeight: '90%',
    display: 'flex',
  },
  footer: {
    borderTop: `1px solid ${coloursRGBA.grayLighter}`,
  },
  sidebar: {
    minWidth: '10%',
    borderRight: `1px solid ${coloursRGBA.grayLighter}`,
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
  },
});