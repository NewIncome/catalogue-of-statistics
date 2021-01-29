import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Home = () => (
  <>
    <Navbar />
    <Header />
    <div>This is the Home</div>
    <Link to="/items">Look at Items</Link>
  </>
);

export default Home;
