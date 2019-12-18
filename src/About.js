import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ImageAvatars from './Avatar.js'
import DataEntry from './DataEntry.js'
import Icon from './Icon.js'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 3600,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    marginRight: theme.spacing(1),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

export default function MiddleDividers() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">

          <Grid item>
          <div>
            <Typography gutterBottom variant="h6">
              José Ferreira
            </Typography>
            <Icon  path={"\/static\/icons\/linkedin.svg"}/>
            <Icon path={"\/static\/icons\/github.svg"}/>
            </div>

          </Grid>
            <Grid item xs>
              <ImageAvatars />
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2">
Software Engineer | Data Scientist | Digital Artist
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <Typography align="left" gutterBottom variant="h4">
          Profile
        </Typography>

      </div>
      <Divider variant="middle" />
      <div className={classes.section3}>
        <Typography align="left" gutterBottom variant="h4">
          Work Experience
        </Typography>
        <DataEntry year={2018} role={"research assistant"} place={"INESC TEC"} description={"bla"}/>
        <DataEntry year={2018} role={"fullstack developer"} place={"Universal Portugal"} description={"bla"}/>
      </div>
      <Divider variant="middle" />
            <div className={classes.section3}>
        <Typography align="left" gutterBottom variant="h4">
          Education
        </Typography >
        <DataEntry year={2018} role={""} place={"FEUP"} description={"bla"}/>
        <DataEntry year={2018} role={""} place={"FEUP"} description={"bla"}/>
      </div>
            <Divider variant="middle" />
            <div className={classes.section3}>
        <Typography gutterBottom align="left" variant="h4">
          Skills
        </Typography>
      </div>
    </div>
  );
}