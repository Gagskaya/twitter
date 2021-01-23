import React from "react";

import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkIcon from "@material-ui/icons/TurnedInNotOutlined";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreIcon from "@material-ui/icons/MoreOutlined";
import { useStyles } from "../pages/Home";
import { Button, IconButton, Typography } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/NotificationsNoneOutlined";
interface SideMenuProps {
  classes: ReturnType<typeof useStyles>;
}
export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  return (
    <nav>
      <ul className={classes.sideMenuList}>
        <li className={classes.sideMenuListItem}>
          <IconButton>
            <TwitterIcon className={classes.logo} color="primary" />
          </IconButton>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <HomeIcon className={classes.sideMenuListIcon} />

            <Typography variant="h6" className={classes.sideMenuListTitle}>
              Главная
            </Typography>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <SearchIcon className={classes.sideMenuListIcon} />

            <Typography variant="h6" className={classes.sideMenuListTitle}>
              Поиск
            </Typography>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <NotificationsIcon className={classes.sideMenuListIcon} />

            <Typography variant="h6" className={classes.sideMenuListTitle}>
              Уведомления
            </Typography>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <MailOutlineIcon className={classes.sideMenuListIcon} />

            <Typography variant="h6" className={classes.sideMenuListTitle}>
              Сообщения
            </Typography>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <BookmarkIcon className={classes.sideMenuListIcon} />

            <Typography variant="h6" className={classes.sideMenuListTitle}>
              Закладки
            </Typography>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <ListAltIcon className={classes.sideMenuListIcon} />

            <Typography variant="h6" className={classes.sideMenuListTitle}>
              Списки
            </Typography>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <PersonOutlineIcon className={classes.sideMenuListIcon} />

            <Typography variant="h6" className={classes.sideMenuListTitle}>
              Профиль
            </Typography>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <MoreIcon className={classes.sideMenuListIcon} />

            <Typography variant="h6" className={classes.sideMenuListTitle}>
              Еще
            </Typography>
          </div>
        </li>
        <li>
          <Button
            className={classes.sideMenuTweetButton}
            color="primary"
            variant="contained"
            fullWidth
          >
            Твитнуть
          </Button>
        </li>
      </ul>
    </nav>
  );
};
