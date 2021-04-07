import { Box, Dialog, DialogContent, IconButton, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Close } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { GiTechnoHeart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import ContactBox from '../ContactBox/ContactBox';
import './NavBar.scss';

const useStyle = makeStyles((theme) => ({
  root: {},
  navbar_btn: {
    fontSize: '16px',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(0.5),
    right: theme.spacing(0.5),
    color: theme.palette.grey[500],
  },
}));

export default function NavBar() {
  const classes = useStyle();

  const [openContact, setOpenContact] = useState(false);

  const handleOpenContact = () => {
    setOpenContact(true);
  };

  const handleClose = () => {
    setOpenContact(false);
  };

  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <Link to='/' className='navbar__logo'>
          <GiTechnoHeart className='navbar__icon' />
          Thao Nguyen-Ojala
        </Link>

        <Button
          className={classes.navbar_btn}
          size='small'
          variant='contained'
          color='secondary'
          onClick={handleOpenContact}
        >
          CONTACT ME
        </Button>

        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={openContact}
          onClose={handleClose}
          aria-labelledby='form-dialog-title'
        >
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <Close />
          </IconButton>
          <DialogContent>
            <Box textAlign='center'>
              <ContactBox />
            </Box>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
