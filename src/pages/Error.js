import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Error = () => (
  <>
    <Navbar />
    <Header title="Error" />
    <div>The search resulted in an Error, please try again</div>
  </>
);

export default Error;
