import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div className="jumbotron">
        <h1>{"React practice"}</h1>
        <p>
            This practice uses React, Redux, React Router, and many other helpful libraries.
        </p>
        <Link to="about" className="btn btn-primary btn-lg">
            Learn more
        </Link>
    </div>
)

export default HomePage;