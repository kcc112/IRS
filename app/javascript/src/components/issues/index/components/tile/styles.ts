import { makeStyles } from "@material-ui/styles";

import { colours } from "../../../../../styles/colours";

export const useStyles = makeStyles({
  constainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    maxHeight: '100%',
    padding: '10px',
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '15px',
    letterSpacing: '1.2px',
    marginBottom: '10px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 1,
  },
  tileRow: {
    display: 'flex',
    padding: '2px 0',
  },
  status: {
    textTransform: 'uppercase',
    paddingLeft: '4px',
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  actionButton: {
    fontSize: '13px',
    color: colours.white,
    margin: '0 5px'
  }
});