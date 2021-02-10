/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAPIjson } from '../utils';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Searching from '../components/Searching';
import '../styles/home.css';
import { addQuery, setAPIstatus, addItems } from '../actions';

const Home = props => {
  const {
    query,
    status,
    addQuery,
    setAPIstatus,
    items,
    addItems,
  } = props;

  const searchAPI = event => {
    event.preventDefault();

    const call = getAPIjson(query);

    setAPIstatus('pending');

    call.then(resp => resp.json())
      .then(data => {
        console.log('Finally the data');
        console.log(data);
        addItems(data);
        console.log('Did items update???');
        console.log(items);

        setAPIstatus('resolved');
      });

    call.catch(err => {
      console.log('Error:');
      console.log(err);

      setAPIstatus('rejected');
    });
  };

  const handleChange = event => addQuery(event.target.value);

  useEffect(() => {
  }, [status]);

  if (status === 'pending') {
    return (
      <>
        <Navbar backLink="/" />
        <Header title="Statistics Catalogue" />
        <Searching />
      </>
    );
  }
  if (status === 'resolved') {
    console.log('Response Data');
    console.log(items);
    return <Redirect to="/items" searchResult={items} />;
  }
  if (status === 'rejected') {
    return <Redirect to="/error" />;
  }

  return (
    <>
      <Navbar backLink="/" title="Query Co" />
      <Header title="Statistics Catalogue" />
      <form className="form" action="/items">
        <input
          name="co"
          id="input"
          type="text"
          placeholder="Enter a Company name"
          value={query}
          onChange={handleChange}
        />
        <button
          className="btn"
          onClick={searchAPI}
          type="submit"
        >
          Enter
        </button>
      </form>
      {console.log('S T A T E: query & status')}
      {console.log(query, status)}
    </>
  );
};

// Send/Ask4 the parts of state that you need
const mapState = ({ query, status, items }) => (
  {
    query,
    status,
    items,
  });

// Dispatch the actions to be used against state
const mapDispatchToProps = dispatch => ({
  addQuery: query => dispatch(addQuery(query)),
  setAPIstatus: status => dispatch(setAPIstatus(status)),
  addItems: items => dispatch(addItems(items)),
});

// console.log('MapState ToProps');
// console.log(mapState);

Home.propTypes = {
  query: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  items: PropTypes.isRequired,
  addQuery: PropTypes.func.isRequired,
  setAPIstatus: PropTypes.func.isRequired,
  addItems: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatchToProps)(Home);
