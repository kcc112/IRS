import { makeStyles } from '@material-ui/core/styles';

import { colours } from '../../../../../styles/colours';

export const useStyles = makeStyles({
  container: {
    border: `1px solid ${colours.white}`,
    marginLeft: '20px',
    marginRight: '20px',
    width: 'auto',
  },
  table: {
    minWidth: 650,
    '& > thead': {
      '& > tr':{
        '& > th': {
          textTransform: 'uppercase',
          fontWeight: 600,
          color: colours.white,
          textAlign: 'center',
        },
      },
    },
    '& > tbody': {
      '& > tr':{
        '& > td': {
          color: colours.white,
          textAlign: 'center',
        },
      },
      '& > tr:last-of-type':{
        '& > td': {
          border: 'none',
        },
      },
    },
  },
  assignButton: {
    color: colours.white
  }
});