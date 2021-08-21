import { createStyles, InputBase, withStyles } from "@material-ui/core";

export const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: "#eff3f4",
      padding: 10,
    },
  })
)(InputBase);
