import React from "react";

import {
  Container,
  createStyles,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

import { Tweet } from "../components/Tweet";
import { SideMenu } from "../components/SideMenu";
export const useStyles = makeStyles((theme: Theme) => ({
  sideMenuList: {
    width: 230,
  },
  sideMenuListItem: {
    "& div": {
      marginBottom: 10,
      display: "flex",
      alignItems: "center",
      borderRadius: 30,
      padding: 10,
      transition: "background-color 0.15s ease-in-out",
      "&:hover": {
        backgroundColor: "rgba(29,161,242,0.1)",
        cursor: "pointer",
        "& h6": {
          color: theme.palette.primary.main,
        },
        "& svg": {
          color: theme.palette.primary.main,
        },
      },
    },
  },
  sideMenuListTitle: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 20,
  },
  sideMenuListIcon: {
    fontSize: 32,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.3),
    margingTop: 30,
  },
  logo: {
    fontSize: 36,
  },
  tweetsWrapper: {
    height: "auto",
  },
  tweetsTitle: {
    fontWeight: 800,
    fontSize: 20,
  },
  tweetsHeader: {
    padding: "15px",
  },
  tweetsUserName: {
    color: grey[500],
  },
  tweetsText: {
    fontSize: 16,
  },
  tweetsFooter: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "420px",
  },
  tweetsIcons: {
    paddingLeft: 0,
  },
  tweets: {
    "&:hover": {
      backgroundColor: "rgb(245,248,250)",
      cursor: "pointer",
    },
  },
}));
const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: "#E6ECF0",
      padding: 10,
    },
  })
)(InputBase);
export const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper variant="outlined" className={classes.tweetsWrapper}>
            <Paper className={classes.tweetsHeader}>
              <Typography className={classes.tweetsTitle} variant="h6">
                Главная
              </Typography>
            </Paper>
            {[
              new Array(20).fill(
                <Tweet
                  classes={classes}
                  user={{
                    avatar:
                      "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    fullName: "Vitaly Kolesnikov",
                    userName: "@MrFlipgraf",
                  }}
                  text="«Та организованная преступная группировка, которая сейчас у
            власти, держится на нашем с вами страхе. Мы можем ничего не
            делать, но дальше тогда будет только хуже»."
                />
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField fullWidth placeholder="Поиск по Твиттеру" />
        </Grid>
      </Grid>
    </Container>
  );
};
