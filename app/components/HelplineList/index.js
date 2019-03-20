/**
 *
 * HelplineList
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'center',
  },
});

const HelplineBox = ({ helplineData, classes, onHelplineClick }) => (
  <Card className={classes.card} raised>
    <CardActionArea onClick={() => onHelplineClick(helplineData)}>
      <CardContent>
        <Typography
          className={classes.heading}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {helplineData.name}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
/* eslint-disable react/prefer-stateless-function */
class HelplineList extends React.Component {
  render() {
    const { classes, helplines, onHelplineClick } = this.props;
    return (
      <Fragment>
        {helplines.map(helpline => (
          <HelplineBox
            key={helpline._id}
            classes={classes}
            onHelplineClick={onHelplineClick}
            helplineData={helpline}
          />
        ))}
      </Fragment>
    );
  }
}

HelplineList.propTypes = {
  helplines: PropTypes.array,
  onHelplineClick: PropTypes.func,
};

const componentWithStyles = withStyles(styles)(HelplineList);

export default componentWithStyles;
