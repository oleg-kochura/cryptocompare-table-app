import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';
import Table from './Table';


class App extends Component {
  
  componentWillMount() {
    this.props.fetchCurrencies();
  }
  
  render() {
    return (
	    <Table items={this.props.items}/>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		items: Object.values(state.items)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCurrencies: () => {
			dispatch(fetchCurrencies())
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
