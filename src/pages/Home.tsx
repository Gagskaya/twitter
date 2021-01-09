import React from 'react'


import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Container, createStyles, Grid, InputBase, makeStyles, Paper, Typography, withStyles } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreIcon from '@material-ui/icons/More';

const useStyles = makeStyles(() => ({
  sideMenuList: {

  },
  sideMenuListItem: {
    display: 'flex',
    alignItems: 'center'
  },
  sideMenuListTitle: {
    fontWeight: 700,
    fontSize: 20
  },
  sideMenuListIcon: {
    fontSize: 32
  },
  logo: {
    fontSize: 36
  },
  tweetsWrapper: {
    height: '100%'
  },
  tweetsTitleWrap : {
    padding : '10px 0 10px 0'
  },
  tweetsTitle : {
    fontWeight : 800,
    padding : '10px',
    fontSize : 20,
    borderBottom  : '1px solid #ccc'
  }
}));
const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: '#E6ECF0',
      padding: 10
    }
  }))(InputBase);
export const Home = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <nav>
            <ul>
              <li className={classes.sideMenuListItem}><IconButton><TwitterIcon className={classes.logo} color='primary' /></IconButton></li>
              <li className={classes.sideMenuListItem}><IconButton><HomeIcon className={classes.sideMenuListIcon} /></IconButton><Typography variant='h6' className={classes.sideMenuListTitle}>Главная</Typography></li>
              <li className={classes.sideMenuListItem}><IconButton><SearchIcon className={classes.sideMenuListIcon} /></IconButton><Typography variant='h6' className={classes.sideMenuListTitle}>Поиск</Typography></li>
              <li className={classes.sideMenuListItem}><IconButton><NotificationsIcon className={classes.sideMenuListIcon} /></IconButton><Typography variant='h6' className={classes.sideMenuListTitle}>Уведомления</Typography></li>
              <li className={classes.sideMenuListItem}><IconButton><MailOutlineIcon className={classes.sideMenuListIcon} /></IconButton><Typography variant='h6' className={classes.sideMenuListTitle}>Сообщения</Typography></li>
              <li className={classes.sideMenuListItem}><IconButton><BookmarkIcon className={classes.sideMenuListIcon} /></IconButton><Typography variant='h6' className={classes.sideMenuListTitle}>Закладки</Typography></li>
              <li className={classes.sideMenuListItem}><IconButton><ListAltIcon className={classes.sideMenuListIcon} /></IconButton><Typography variant='h6' className={classes.sideMenuListTitle}>Списки</Typography></li>
              <li className={classes.sideMenuListItem}><IconButton><PersonOutlineIcon className={classes.sideMenuListIcon} /></IconButton><Typography variant='h6' className={classes.sideMenuListTitle}>Профиль</Typography></li>
              <li className={classes.sideMenuListItem}><IconButton><MoreIcon className={classes.sideMenuListIcon} /></IconButton><Typography variant='h6' className={classes.sideMenuListTitle}>Еще</Typography></li>
            </ul>
          </nav>

        </Grid>
        <Grid item xs={6}>
          <Paper variant='outlined' className={classes.tweetsWrapper}> 
          {/* <Paper variant='outlined' className={classes.tweetsTitleWrap}> */}
            <Typography className={classes.tweetsTitle} variant='h6'>Главная</Typography>
          {/* </Paper> */}
          </Paper>
          
        </Grid>
        <Grid item xs={3}>
          <SearchTextField fullWidth placeholder='Поиск по Твиттеру' />
        </Grid>
      </Grid>
    </Container>

  )
}
