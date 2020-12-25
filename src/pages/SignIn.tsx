import React from 'react'

import { Button, makeStyles, TextField, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { SearchOutlined } from '@material-ui/icons';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
const useStyles = makeStyles(() => ({
    wrapper: {
        display: 'flex',
        height: 'calc(100vh - 84px)',

    },
    blueSide: {
        backgroundColor: '#71C9F8',
        flexBasis: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative'
    },
    blueSideBgIcon: {
        position: 'absolute',
        left: '76%',
        top: '53%',
        transform: 'translate(-50%,-50%)',
        width: '250%',
        height: '200%'
    },
    blueSideList: {
        position: 'relative',
        width: 380,
        '& h6': {
            color: 'white',
            fontSize: 20,
            marginLeft: 20,

        },
        '& li': {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 35
        }
    },
    blueSideListIcon: {
        fontSize: 32,
        color: 'white'
    },
    loginSide: {
        flexBasis: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginSideTwitterIcon: {
        fontSize: 45
    },
    signInPopup : {
        position : 'relative',
        left : 173,
        fontSize : 50
    },
    signInPopupTitle : {
        display : 'flex',
        justifyContent : 'center'
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        marginBottom: 50,
        marginTop: 20,
        fontWeight: 700,
        fontSize: 30
    },
    loginSideSubtitle: {
        marginBottom: 15,
        fontWeight: 700,
        fontSize: 15
    },
    loginSideSingUp: {
        marginBottom: 10
    }
}));
export const SignIn = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color='primary' className={classes.blueSideBgIcon} />

                <ul className={classes.blueSideList} >
                    <li>
                        <SearchOutlined className={classes.blueSideListIcon} />
                        <Typography variant="h6">Читайте о том, что вам интересно.</Typography>
                    </li>
                    <li><PeopleOutlineIcon className={classes.blueSideListIcon} /> <Typography variant="h6">Узнайте, о чем говорят в мире.</Typography></li>
                    <li>
                        <ChatBubbleOutlineOutlinedIcon className={classes.blueSideListIcon} />
                        <Typography variant="h6">Присоединяйтесь к общению.</Typography></li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color='primary' className={classes.loginSideTwitterIcon} />
                    <Typography variant='h4' className={classes.loginSideTitle}>Узнайте, что происходит в мире прямо сейчас</Typography>
                    <Typography className={classes.loginSideSubtitle}>Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
                    <Button variant="contained" color='primary' fullWidth className={classes.loginSideSingUp}>Зарегистрироваться</Button>
                    <Button variant="outlined" color='primary' fullWidth onClick={handleClickOpen}>Войти</Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                    <TwitterIcon color='primary' className={classes.signInPopup} />
                        <DialogTitle id="form-dialog-title" className={classes.signInPopupTitle}>Войти в твиттер</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                label="E-Mail"
                                type="email"
                                variant="filled"
                                fullWidth
                                style={{marginBottom : '10px'}}
                            />
                            <TextField
                                autoFocus
                                label="Пароль"
                                type="password"
                                variant="filled"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Назад
          </Button>
                            <Button onClick={handleClose} color="primary">
                                Войти
          </Button>
                        </DialogActions>
                    </Dialog>
                </div>

            </section>
        </div>
    )
}
