import { Avatar, createStyles, IconButton, makeStyles, Typography } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    height: '10rem',
  },
  title: {
    paddingTop: theme.spacing(3),
    fontSize: '1.5rem',
    margin: 'auto',
    color: '#F50057',
  },

  icon: {
    paddingTop: theme.spacing(1),

    color: '#212121',
    fontSize: '4rem',
    transition: 'all 1s',

    '&:hover': {
      cursor: 'pointer',
      zIndex: 1,
      color: '#0A66C2',
      transform: 'rotate(360deg)',
      transition: 'ease 1.2s',
    },
  },
}));
export default function ContactBox() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Contact me through LinkeIn</Typography>
      <a href='https://www.linkedin.com/in/thao-nguyen-ojala/' target='_blank' rel='noopener noreferrer'>
        <LinkedInIcon className={classes.icon} color='primary' />
      </a>
    </div>
  );
}
