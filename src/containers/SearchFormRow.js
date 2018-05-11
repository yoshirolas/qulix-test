import React, { Component } from 'react';
import { asyncGetMailList } from '../actions/appActions';
import { connect } from 'react-redux';

class SearchFormRow extends Component {
   constructor(props) {
    super(props);
    this.state = {
      searchQuery: null,
    }   
  }

  handleSearchQueryChange = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  handleStartSearching = () => {
    this.props.dispatch(asyncGetMailList(this.props.accessToken, this.state.searchQuery));
  }

  render() {
    return (
      <div className="searchForm row">
        <div className="col-sm-14">
          <form name="search" action="#" method="get" className="form-inline form-search pull-left">
            <div className="input-group">
              <input 
                className="form-control" 
                type="text" name="search" 
                placeholder="Search..."
                onChange={ this.handleSearchQueryChange }
              />
              <a 
                href="#" 
                className="btn btn-search"
                onClick={ this.handleStartSearching }
              >
                <i className="icon-search"></i>
              </a>
            </div>
          </form>
        </div>

        <div className="options col-sm-10">
          <a href="#" title="Add new item" className="newItem" data-toggle="modal" data-target="#myModal"><i className="icon-plus-small"></i><span>New Item</span></a>
          <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title" id="myModalLabel">Add new item</h4>
                </div>
                <div className="modal-body">
                  <label className="modal-label">Item name</label>
                  <input type="text" className="form-control"/>
                  <label className="modal-label">Text</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="btn btn-sm btn-option"><i className="icon-sliders"></i></a>
        </div>
      </div>
    );
  }
}

export default connect()(SearchFormRow);