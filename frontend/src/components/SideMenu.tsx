import React from "react";

import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkIcon from "@material-ui/icons/TurnedInNotOutlined";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreIcon from "@material-ui/icons/MoreOutlined";
import CreateIcon from "@material-ui/icons/CreateOutlined";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "../pages/Home/theme";

import {
  Button,
  Dialog,
  Hidden,
  IconButton,
  Typography,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/NotificationsNoneOutlined";
import { AddTweetForm } from "./AddTweetForm";
interface SideMenuProps {
  classes: ReturnType<typeof useStyles>;
}
export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
  const toggleAddTweet = (): void => {
    setVisiblePopup(!visiblePopup);
  };
  return (
    <nav className={classes.sideMenuList}>
      <ul>
        <li className={classes.sideMenuListItem}>
          <IconButton className={classes.logoIcon}>
            <TwitterIcon className={classes.logo} color="primary" />
          </IconButton>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <HomeIcon className={classes.sideMenuListIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.sideMenuListTitle}>
                Главная
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <SearchIcon className={classes.sideMenuListIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.sideMenuListTitle}>
                Поиск
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <NotificationsIcon className={classes.sideMenuListIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.sideMenuListTitle}>
                Уведомления
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <MailOutlineIcon className={classes.sideMenuListIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.sideMenuListTitle}>
                Сообщения
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <BookmarkIcon className={classes.sideMenuListIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.sideMenuListTitle}>
                Закладки
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <ListAltIcon className={classes.sideMenuListIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.sideMenuListTitle}>
                Списки
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <PersonOutlineIcon className={classes.sideMenuListIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.sideMenuListTitle}>
                Профиль
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <MoreIcon className={classes.sideMenuListIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.sideMenuListTitle}>
                Еще
              </Typography>
            </Hidden>
          </div>
        </li>
        <li>
          <Hidden smDown>
            <Button
              className={classes.sideMenuTweetButton}
              color="primary"
              variant="contained"
              fullWidth
              onClick={toggleAddTweet}
            >
              Твитнуть
            </Button>
          </Hidden>
          <Hidden mdUp>
            <Button variant="contained" color="primary">
              <CreateIcon />
            </Button>
          </Hidden>
        </li>
      </ul>
      <Dialog
        open={visiblePopup}
        onClose={toggleAddTweet}
        aria-labelledby="form-dialog-title"
      >
        <div
          style={{
            padding: "16px",
            borderBottom: "1px solid rgb(207, 217, 222)",
          }}
        >
          <CloseIcon
            className={classes.addTweetCloseIcon}
            onClick={toggleAddTweet}
          />
        </div>

        <AddTweetForm classes={classes} />
      </Dialog>
    </nav>
  );
};
