import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
  description: {
    fontSize: '15px',
    maxHeight: '108px',
    minHeight: '108px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    '-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
    scrollbarWidth: 'none',
  },
  row: {
    margin: '3px 0',
  },
  statusContainer: {
    display: 'flex',
  },
  status: {
    textTransform: 'uppercase',
    marginLeft: '4px',
  },
  userContainer: {
    display: 'flex',
  },
  name: {
    marginLeft: '4px',
  },
  surname: {
    marginLeft: '4px',
  },
  left: {
    minWidth: '203px',
  },
  right: {
    marginLeft: '17px',
  },
  reportedBy: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 1,
  },
  assignedTo: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 1,
  }
});