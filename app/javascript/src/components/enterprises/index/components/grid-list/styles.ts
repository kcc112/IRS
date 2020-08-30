import { makeStyles } from "@material-ui/styles";

import { colours } from "../../../../../styles/colours";

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginBottom: '60px',
  },
  gridList: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  gridListTile: {
    backgroundColor: colours.grayLighter,
    margin: '15px',
    borderRadius: '15%',
  }
});