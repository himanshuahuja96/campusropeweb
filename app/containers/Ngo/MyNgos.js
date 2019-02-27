import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NgoList from './NgoList';
import DeleteDialog from '../../components/DeleteDialog';
import { deleteNgo } from './actions';
/* eslint-disable*/

const styles = theme => ({});

class MyNgos extends React.Component {

  state = {
    deleteID: null
  }

  render() {
    const { classes } = this.props;
    const { deleteID } = this.state;
    return (
      <React.Fragment>
        <NgoList 
          ngos={this.props.myNgos} 
          onNgoClick={() => {
            console.log('On Click Ngo');
          }}
          onDelete={id => {
            console.log('id', id);
            this.setState({deleteID: id});
          }} 
          onEdit={id => {
            console.log(' onEdit id', id);
            //this.setState({deleteID: id});
          }}
        />
        {
          deleteID && (
            <DeleteDialog 
              onCancel={e => {this.setState({deleteID: null})}} 
              onOk={e => {this.props.deleteNgo(deleteID); this.setState({deleteID: null})}} 
              title="Delete NGO"
            >
              Are you sure to detete this NGO?
            </DeleteDialog>
          )
        }
      </React.Fragment>
    );
  }
}

MyNgos.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  myNgos: state.ngo.fetchedNgos && state.ngo.fetchedNgos.filter(ngo => ngo.createdBy._id === state.loggedUser.user._id)
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    /*
    fetchNgos: state => dispatch(fetchNgos(state)),
    createNgo: () => dispatch(createNgo()),
    */
    deleteNgo: ngoId => dispatch(deleteNgo(ngoId))
    
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MyNgos));
