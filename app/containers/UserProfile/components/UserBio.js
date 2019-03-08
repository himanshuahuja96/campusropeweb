/**
 *
 * UserBio
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import InlineEdit from '../../../components/InlineEdit/index';

const styles = () => ({
  bioRoot: {
    marginTop: 20,
    marginLeft: 50,
  },
});

/* eslint-disable  */
export class UserBio extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.bioRoot}>
        <InlineEdit inputWidth={'85%'} text={'User Bio'} />
      </div>
    );
  }
}

UserBio.propTypes = {
  classes: PropTypes.object.isRequired,
};

const componentWithStyles = withStyles(styles)(UserBio);

export default componentWithStyles;
