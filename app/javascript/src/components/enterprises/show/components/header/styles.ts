import { makeStyles } from '@material-ui/core/styles';

import { colours } from '../../../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  name: {
    fontSize: '20px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginRight: '20px',
    wordBreak: 'break-word',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 1,
  },
  closeButton: {
    '& > svg': {
      color: colours.white,
      fontSize: '30px',
    },
  },
});