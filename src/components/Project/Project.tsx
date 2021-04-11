import { Button, Collapse, Grid } from '@material-ui/core';
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import clsx from 'clsx';
import React, { useState } from 'react';
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
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      color: '#F50057',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    content: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },

    gridContainer: {
      borderTop: 'solid 0.5px rgba(170, 170, 170, .7)',
      borderRadius: '0.5rem',
      boxShadow: '2px 2px 3px 1px rgba(170, 170, 170, .2)',
      display: 'flex',
      alignItems: 'center',
      height: '3rem',
    },
    gridStatus: {
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    gridTitle: {
      marginLeft: '1rem',
      color: '#7C7C7C',
    },
    gitHubIcon: {
      color: '#F50057',
    },
    cardAction: {
      paddingTop: '2rem',
    },
    decription: {
      textAlign: 'justify',
    },
  })
);

type ProjectType = {
  project: mainData;
};

export default function Project({ project }: ProjectType) {
  const classes = useStyles();
  const [expandText, setExpandText] = useState(false);
  const handleExpandClick = () => {
    setExpandText(!expandText);
  };

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
        <Grid className={classes.gridContainer}>
          <Grid className={classes.gridStatus}>
            <Typography variant='body1' color='textPrimary' component='p'>
              Status
            </Typography>
          </Grid>
          <Grid className={classes.gridTitle}>
            <Typography variant='body1' component='p'>
              {project.status}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions disableSpacing className={classes.cardAction}>
        <a href={project.gitHub} target='_blank' rel='noopener noreferrer'>
          <IconButton aria-label='go to GitHub'>
            <GitHubIcon className={classes.gitHubIcon} />
          </IconButton>
        </a>
        <IconButton aria-label='visit page'>
          <Button
            size='small'
            variant='outlined'
            color='secondary'
            endIcon={<DoubleArrowIcon />}
            value={project.webpage}
            onClick={() => {
              window.open(`${project.webpage}`, '_blank');
            }}
          >
            Visit Page
          </Button>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expandText,
          })}
          onClick={handleExpandClick}
          aria-expanded={expandText}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expandText} timeout='auto' unmountOnExit>
        <CardContent className={classes.decription}>
          <Typography variant='body1' color='textPrimary' component='p'>
            {project.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
