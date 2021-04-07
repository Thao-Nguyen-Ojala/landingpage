import { Box, FormControlLabel, FormGroup, makeStyles, Switch, Typography } from '@material-ui/core';
import React from 'react';
import { languageFilter } from '../../interfaces';

const useStyle = makeStyles((theme) => ({
  root: {},
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: theme.spacing(1),
  },
  switches: {
    marginTop: theme.spacing(2),
  },
}));

interface languageFilterType {
  languages: languageFilter;
  onChange: (newValue: any) => void;
}

export default function LanguageFilter({ languages, onChange }: languageFilterType) {
  const classes = useStyle();

  const handleSelectedLanguage = (e: any) => {
    if (!onChange) return;
    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <Box>
      <Typography className={classes.title} variant='subtitle2'>
        Programming Languages
      </Typography>
      <FormGroup className={classes.switches}>
        <FormControlLabel
          control={<Switch checked={languages.js} onChange={handleSelectedLanguage} name='js' value='js' />}
          label='JavaScript'
        ></FormControlLabel>
        <FormControlLabel
          control={<Switch checked={languages.ts} onChange={handleSelectedLanguage} name='ts' value='ts' />}
          label='TypeScript'
        ></FormControlLabel>
      </FormGroup>
    </Box>
  );
}
