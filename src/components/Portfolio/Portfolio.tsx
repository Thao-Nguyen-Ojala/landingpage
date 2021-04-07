import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import { languageFilter, mainData } from '../../interfaces';
import { LanguageFilter, PortfolioList, ProjectSkeleton } from '../index';
import './Portfolio.scss';

type PortfolioType = {
  projects: mainData[];
};

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
    maxWidth: '1200px',
    border: 'solid 1.5px #e4e4e4',
    borderRadius: '1rem',
    margin: 'auto',
    overflow: 'hidden',
    backgroundColor: 'rgba(25,118,210, 0.1)',
  },
  filters: {
    width: '25%',
    backgroundColor: '#ffffff',
    borderRadius: '1rem',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  render: {
    flex: '1 1 0',
    backgroundColor: '#ffffff',
    borderRadius: '1rem',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  list: {},
}));

export default function Portfolio({ projects }: PortfolioType) {
  const classes = useStyle();
  const [languages, setLanguages] = useState<languageFilter>({
    js: true,
    ts: true,
  });

  const selectedLanguageChange = (newLanguages: languageFilter) => {
    setLanguages({
      ...languages,
      ...newLanguages,
    });
  };

  const projectsToRender = [];
  if (languages.js === true) {
    const jsProjects = projects.filter((project) => project.language === 'JS');
    projectsToRender.push(...jsProjects);
  }
  if (languages.ts === true) {
    const tsProjects = projects.filter((project) => project.language === 'TS');
    projectsToRender.push(...tsProjects);
  }

  return (
    <div>
      <Box className={classes.root}>
        <Container>
          <Grid container spacing={3}>
            <Grid item className={classes.filters}>
              <Paper elevation={0}>
                <LanguageFilter languages={languages} onChange={selectedLanguageChange}></LanguageFilter>
              </Paper>
            </Grid>
            <Grid item className={classes.render}>
              <Paper elevation={3} className={classes.list}>
                <PortfolioList projectsToRender={projectsToRender}></PortfolioList>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
