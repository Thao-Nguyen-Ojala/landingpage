import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { mainData } from '../../interfaces';
import { Project } from '../index';

const useStyle = makeStyles((theme) => ({
  root: {},
  list: {
    paddingTop: theme.spacing(2),
  },
}));

type PortfolioType = {
  projectsToRender: mainData[];
};

export default function PortfolioList({ projectsToRender }: PortfolioType) {
  console.log('render', projectsToRender);
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Grid className={classes.list} container spacing={2}>
        {projectsToRender.map((project, i) => (
          <Grid key={i} item xs={6}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
