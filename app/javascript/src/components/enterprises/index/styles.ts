import { makeStyles } from '@material-ui/core/styles';

import { coloursRGBA } from '../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    minHeight: '100%',
    maxHeight: '100%',
    overflowY: 'scroll',
    borderLeft: `1px solid ${coloursRGBA.grayLighter}`,
  },
  title: {
    textAlign: 'center',
  }
});