import { makeStyles } from '@material-ui/core/styles';

import { colours } from '../../../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    padding: '10px 0',
  },
  commentInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '5px',
  },
  userName: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 1,
  },
  comment: {
    minHeight: '20px',
    fontSize: '14px',
    marginBottom: '10px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 3,
  },
  actionButton: {
    fontSize: '13px',
    color: colours.white,
    margin: '0 2px',
    '& > svg': {
      padding: '0 0 0 5px',
      fontSize: '17px',
    },
  },
  actionsContiner: {
    display: 'flex',
  }
});