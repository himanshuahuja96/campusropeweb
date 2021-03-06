/**
 *
 * NgoList
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import format from 'date-fns/format';

/* eslint-disable*/

const styles = theme => ({
  container: {
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
  media: {
    height: 100,
    width: 100,
    paddingTop: '56.25%', // 16:9
  },
  card: {
    width: '335px',
    marginTop: theme.spacing.unit * 6,
    marginRight: '8px',
    cursor: 'pointer',
    position: 'relative',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    textAlign: 'right',
  },
  deleteIcon: {
    color: 'red',
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  editIcon: {
    color: 'blue',
    position: 'absolute',
    bottom: 15,
    right: 45,
  },
  statusLabel: {
    position: 'absolute',
    top: 15,
    left: 15,
    color: 'red',
  },
});

const NgoBox = ({ ngoData, classes, onNgoClick, onDelete, onEdit }) => {
  return (
    <Card
      className={classes.card}
      raised={true}
      onClick={() => onNgoClick(ngoData._id)}
    >
      <CardContent>
        <Typography className={classes.pos} color="textSecondary">
          {format(new Date(ngoData.createdAt), 'DD-MM-YYYY')}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          admin : {ngoData.createdBy.name}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          type : {ngoData.ngoType}
        </Typography>

        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          <a
            className={classes.link}
            href={`${ngoData.ngoSiteLink}`}
            target="_blank"
          />
        </Typography>

        <Typography variant="h5" component="h2" style={{ marginBottom: 10 }}>
          {ngoData.name}
        </Typography>
        <Typography component="p">
          Contact Email : {ngoData.contactEmail}
        </Typography>
        {onDelete && (
          <DeleteIcon
            className={classes.deleteIcon}
            onClick={e => onDelete(e, ngoData._id)}
          />
        )}
        {onEdit && (
          <Link to={`/ngos/${ngoData._id}/edit`}>
            <EditIcon
              className={classes.editIcon}
              onClick={e => onEdit(e, ngoData._id)}
            />
          </Link>
        )}
        {ngoData.status !== 'APPROVED' && (
          <div className={classes.statusLabel}> {ngoData.status}</div>
        )}
      </CardContent>
    </Card>
  );
};
/* eslint-disable react/prefer-stateless-function */
class NgoList extends React.Component {
  renderNoNgoLabel() {
    return <Typography variant="h4" />;
  }

  renderNgos() {
    const { classes, onNgoClick } = this.props;
    return (
      <Fragment>
        {this.props.ngos.map(ngo => (
          <NgoBox
            key={ngo._id}
            classes={classes}
            onNgoClick={onNgoClick}
            onDelete={this.props.onDelete ? this.onDelete : null}
            onEdit={this.props.onEdit}
            ngoData={ngo}
          />
        ))}
      </Fragment>
    );
  }

  onDelete = (e, id) => {
    e.stopPropagation();
    this.props.onDelete(id);
  };

  render() {
    const { classes, ngos } = this.props;
    if (!ngos) {
      return <div>Loading...</div>;
    }
    return (
      <div className={classes.container}>
        {ngos.length === 0 ? this.renderNoNgoLabel() : this.renderNgos()}
      </div>
    );
  }
}

NgoList.propTypes = {
  classes: PropTypes.object.isRequired,
  ngos: PropTypes.array.isRequired,
  onNgoClick: PropTypes.func,
  onDelete: PropTypes.func,
};

export default withStyles(styles)(NgoList);
