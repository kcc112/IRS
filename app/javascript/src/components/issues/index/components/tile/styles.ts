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
  description: {
    minHeight: '75px',
    fontSize: '14px',
    marginBottom: '10px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 5,
  },
});