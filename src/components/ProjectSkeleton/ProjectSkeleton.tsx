import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import React from 'react';

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
        backgroundColor: ' #F50057',
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
    },
    content: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(1),
      height: '80px',
      textAlign: 'justify',
    },
  })
);

/*type ProjectSkeletonType = {
  project: mainData;
};*/

export default function ProjectSkeleton() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Skeleton animation='wave' variant='circle' width={40} height={40} />}
        title={<Skeleton animation='wave' height={10} width='80%' style={{ marginBottom: 6 }} />}
        subheader={<Skeleton animation='wave' height={10} width='40%' />}
      />

      <Skeleton animation='wave' variant='rect' className={classes.media} />

      <CardContent className={classes.content}>
        <React.Fragment>
          <Skeleton animation='wave' height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation='wave' height={10} width='80%' />
        </React.Fragment>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Skeleton animation='wave' variant='circle' width={40} height={40} />
        </IconButton>
        <IconButton aria-label='share'>
          <Button></Button>
        </IconButton>
      </CardActions>
    </Card>
  );
}
