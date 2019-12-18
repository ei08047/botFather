import Typography from '@material-ui/core/Typography';
import React from 'react';
import Grid from '@material-ui/core/Grid';


class DataEntry extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
    };
  }


  render() {
    return (
      <Grid container spacing={3}>
      <Grid item xs={4}>
        <Typography align="left" variant="body1" display="inline">
          {this.props.year} 
        </Typography>
        </Grid>

      <Grid item xs={4}>
        <Typography align="center" variant="body1" display="inline" >
          {this.props.role} 
        </Typography>
        </Grid>

        <Grid item xs={4}>
          <a href="https://www.inesctec.pt/en">
            <Typography align="center" variant="body1" display="inline" >
               {this.props.place}
            </Typography>
          </a>
        </Grid>

      <Grid item xs={12}>
        <Typography gutterBottom variant="subtitle1" color="secondary">
          {this.props.description}
        </Typography>
        </Grid>

      </Grid>
    );
  }
}

export default DataEntry;