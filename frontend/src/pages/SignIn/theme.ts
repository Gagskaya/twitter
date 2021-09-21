import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    height: "calc(100vh - 84px)",
  },
  blueSide: {
    backgroundColor: "#71C9F8",
    flexBasis: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },
  blueSideBgIcon: {
    position: "absolute",
    left: "76%",
    top: "53%",
    transform: "translate(-50%,-50%)",
    width: "250%",
    height: "200%",
  },
  blueSideList: {
    position: "relative",
    width: 380,
    "& h6": {
      color: "white",
      fontSize: 20,
      marginLeft: 20,
    },
    "& li": {
      display: "flex",
      alignItems: "center",
      marginBottom: 35,
    },
  },
  blueSideListIcon: {
    fontSize: 32,
    color: "white",
  },
  loginSide: {
    flexBasis: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    marginBottom: 50,
    marginTop: 20,
    fontWeight: 700,
    fontSize: 30,
  },
  loginSideSubtitle: {
    marginBottom: 15,
    fontWeight: 700,
    fontSize: 15,
  },
  loginSideSingUp: {
    marginBottom: 10,
  },
  loginPopupTwitterIcon: {
    position: "relative",
    left: 173,
    fontSize: 50,
  },
  loginPopupTitle: {
    display: "flex",
    justifyContent: "center",
  },
  registerClosePopupIcon: {
    marginRight: "20px",
    cursor: "pointer",
    color: "#33A5FF",
  },
  registerPopupHeader: {
    padding: 24,
    display: "flex",
    alignItems: "center",
  },
}));
