import { makeStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme: Theme) => ({
  centered: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },

  sideMenuList: {
    width: 230,
    position: "sticky",
    top: 0,
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
  logoIcon: {
    "&:hover": {
      backgroundColor: "rgba(29,161,242,0.1)",
    },
  },
  tweetsWrapper: {
    width: "100%",
  },
  tweetsCentered: {
    marginTop: 50,
    textAlign: "center",
  },
  tweetsHeaderTitleWrap: {
    position: "sticky",
    zIndex: 10,
    top: 0,
    padding: "10px",
  },
  tweetsHeaderTitle: {
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
    marginLeft: 45,
  },
  tweetsIcons: {
    paddingLeft: 0,
  },
  tweets: {
    position: "relative",
    "&:hover": {
      backgroundColor: "rgb(245,248,250)",
      cursor: "pointer",
    },
  },
  rightSideMenuTweets: {
    marginTop: "15px",
    borderRadius: "15px",
    backgroundColor: "#f7f9f9",
  },
  rightSideMenuCard: {
    padding: "13px",
    cursor: "pointer",
    position: "relative",
    "&:hover": {
      backgroundColor: "#e5eaea",
    },
  },
  rightSideMenu: {
    position: "sticky",
    top: 0,
  },
  rightSideMenuSuggestedProfiles: {
    marginTop: "15px",
    borderRadius: "15px",
    backgroundColor: "#f7f9f9",
  },
  rightSideMenuTagsPopup: {
    background: "#fff",
    width: 230,
    position: "absolute",
    right: 15,
    top: 0,
    transition: "0.5s ease-in-out",
    boxShadow:
      "rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px",
    borderRadius: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    pointerEvents: "all",
  },
  rightSideMenuTagsPopupSpan: {
    padding: 12,
    fontSize: 16,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e5eaea",
    },
    width: "100%",
    textAlign: "center",
  },
  suggestedProfilesCards: {},
  suggestedProfilesCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  suggestedProfilesCardUser: {
    display: "flex",
    alignItems: "center",
  },
  suggestedProfilesCardUsername: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 15,
  },
  suggestedProfilesCardButton: {
    backgroundColor: "rgb(15, 20, 25)",
    borderRadius: 30,
    color: "#fff",
    padding: "7px 15px",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.9",
    },
  },
  addTweetForm: {
    display: "flex",
    padding: 15,
    minHeight: 150,
    minWidth: 600,
  },
  addTweetFormTextArea: {
    border: "none",
    fontSize: 18,

    resize: "none",
  },
  addTweetFormWrap: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
    marginLeft: 15,
  },
  addTweetFormFooter: {
    borderTop: "1px solid rgb(207, 217, 222)",
  },
  addTweetFormFooterWrap: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10,
  },
  addTweetCloseIcon: {
    cursor: "pointer",
    color: "#33A5FF",
  },
  addFormBottomRight: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addFormCircleProgress: {
    display: "flex",
    marginRight: "10px",
  },
}));
