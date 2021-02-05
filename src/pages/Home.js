/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { items, getAPIjson, updateItems } from '../utils';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Searching from '../components/Searching';
import '../styles/home.css';

const Home = () => {
  const [company, setCompany] = useState('');
  const [stateAPI, setStateAPI] = useState('');

  const searchAPI = event => {
    event.preventDefault();

    const call = getAPIjson(company);

    setStateAPI('pending');

    call.then(resp => resp.json())
      .then(data => {
        console.log('Finally the data');
        console.log(data);
        updateItems(data);

        // setStateAPI('resolved');
      });

    call.catch(err => {
      console.log('Error:');
      console.log(err);

      // setStateAPI('rejected');
    });
  };

  const handleChange = event => setCompany(event.target.value);

  useEffect(() => {
  }, [stateAPI]);

  if (stateAPI === 'pending') {
    return (
      <>
        <Navbar backLink="/" />
        <Header title="Statistics Catalogue" />
        <Searching />
      </>
    );
  }
  if (stateAPI === 'resolved') {
    console.log('Response Data');
    console.log(items);
    return <Redirect to="/items" searchResult={items} />;
  }
  if (stateAPI === 'rejected') {
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
          value={company}
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
    </>
  );
};

export default Home;
