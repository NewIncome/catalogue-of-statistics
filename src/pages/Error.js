import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../styles/error.css';

const Error = () => (
  <>
    <Navbar backLink="/" title="search Again" />
    <Header title="Error" />
    <h2 className="error-mssg">The search resulted in an Error, please try again</h2>
  </>
);

export default Error;
