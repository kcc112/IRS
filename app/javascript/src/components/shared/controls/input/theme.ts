import { createMuiTheme } from "@material-ui/core";

import { colours } from "../../../../styles/colours";

export const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        "&&&&:hover:before": {
          borderBottom: `2px solid ${colours.white}`,
        }
      }
    }
  }
});