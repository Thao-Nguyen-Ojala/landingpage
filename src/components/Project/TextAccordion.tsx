import { Accordion, AccordionDetails, AccordionSummary, createStyles, makeStyles, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState } from 'react';
import { mainData } from '../../interfaces';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  })
);

type ProjectType = {
  project: mainData;
};

export default function TextAccordion({ project }: ProjectType) {
  const classes = useStyles();
  const [expandText, setExpandText] = useState(false);

  const handleExpand = () => {
    setExpandText(!expandText);
  };
  return (
    <Accordion onClick={handleExpand}>
      <AccordionSummary aria-controls='panel3bh-content' id='panel3bh-header'>
        <Typography className={classes.heading}>Status</Typography>
        <Typography className={classes.secondaryHeading}>{project.status}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.
          Duis vel est augue.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
