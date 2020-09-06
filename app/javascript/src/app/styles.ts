import { makeStyles } from '@material-ui/styles';

export const useGlobalStyles = makeStyles({
  '@global': {
    '.button': {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      '&:focus': {
        outline: 'none',
      },
    },
  }
});