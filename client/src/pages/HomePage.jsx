import React from 'react';
import Navbar from "../components/Navbar.jsx";
import ListStudents from "../components/ListStudents.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <ListStudents/>
            <Footer/>
        </div>
    );
};

export default HomePage;