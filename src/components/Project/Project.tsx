import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import GitHubIcon from '@material-ui/icons/GitHub';
import React from 'react';
import { mainData } from '../../interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '90%',
      margin: 'auto',
      marginTop: theme.spacing(1),
      border: 'solid 1px rgb(25,118,210)',
      borderRadius: '1rem',
    },
    header: {
      paddingBottom: theme.spacing(3),
    },
    avatar: {
      backgroundColor: 'rgb(25,118,210)',
      '&:hover': {
        backgroundColor: '#F50057',
        transition: 'transform .5s',
      },
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
      transition: 'transform .5s',
      '&:hover': {
        transform: 'scale(1.05)',
        transition: 'transform .5s',
      },
      marginBottom: theme.spacing(1),
    },
    content: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(5),
      height: '100px',
      textAlign: 'justify',
    },
    cardAction: {
      paddingTop: '2rem',
    },
  })
);

type ProjectType = {
  project: mainData;
};

export default function Project({ project }: ProjectType) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            {project.language}
          </Avatar>
        }
        title={project.name}
        subheader={project.topLine}
        className={classes.header}
      />

      <CardMedia className={classes.media} image={project.img} title={project.img} />

      <CardContent className={classes.content}>
        <Typography variant='caption' color='textPrimary' component='p'>
          Status: {project.status}
        </Typography>

        <Typography variant='body1' color='textPrimary' component='p'>
          {project.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing className='cardAciton'>
        <a href={project.gitHub} target='_blank' rel='noopener noreferrer'>
          <IconButton aria-label='go to GitHub'>
            <GitHubIcon />
          </IconButton>
        </a>
        <IconButton aria-label='visit page'>
          <Button
            size='small'
            variant='outlined'
            color='primary'
            endIcon={<DoubleArrowIcon />}
            value={project.webpage}
            onClick={() => {
              window.open(`${project.webpage}`, '_blank');
            }}
          >
            Visit Page
          </Button>
        </IconButton>
      </CardActions>
    </Card>
  );
}
