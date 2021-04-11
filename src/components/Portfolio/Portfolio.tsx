import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import { languageFilter, mainData } from '../../interfaces';
import { LanguageFilter, PortfolioList } from '../index';
import './Portfolio.scss';

type PortfolioType = {
  projects: mainData[];
};

const useStyle = makeStyles((theme) => {
  return {
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
      [theme.breakpoints.up('xs')]: {
        width: '100%',
        borderRadius: '1rem',
        margin: 'auto',
      },
      [theme.breakpoints.up('small')]: {
        marginTop: theme.spacing(1),
      },

      [theme.breakpoints.up('medium768')]: {
        width: '25%',
        backgroundColor: '#ffffff',
        paddingTop: theme.spacing(3),
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
      },
    },

    render: {
      [theme.breakpoints.up('xs')]: {
        backgroundColor: '#ffffff',
        borderRadius: '1rem',
        margin: 'auto',
      },
      [theme.breakpoints.up('small')]: {
        marginTop: theme.spacing(1),
      },
      [theme.breakpoints.up('medium768')]: {
        flex: '1 1 0',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
      },
    },
  };
});

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
  if (languages.ts === true) {
    const tsProjects = projects.filter((project) => project.language === 'TS');
    projectsToRender.push(...tsProjects);
  }
  if (languages.js === true) {
    const jsProjects = projects.filter((project) => project.language === 'JS');
    projectsToRender.push(...jsProjects);
  }

  return (
    <div>
      <Box className={classes.root}>
        <Container>
          <Grid container spacing={2}>
            <Grid item className={classes.filters}>
              <Paper elevation={0}>
                <LanguageFilter languages={languages} onChange={selectedLanguageChange}></LanguageFilter>
              </Paper>
            </Grid>
            <Grid item className={classes.render}>
              <Paper elevation={0}>
                <PortfolioList projectsToRender={projectsToRender}></PortfolioList>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
