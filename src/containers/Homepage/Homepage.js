import React, { Component } from 'react';

import { connect } from 'react-redux';

import HomeHeader from './HomeHeader';

import BanNerQC from './Section/BanNerQC.js';

import NoiBac from './Section/NoiBac.js';
import Handbook from './Section/Handbook';
import Spkhac from './Section/Spkhac';
import About from './Section/About';
import HomeFooter from './HomeFooter';

import './HomePage.scss';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  

class Homepage extends Component {

    

    render() {
        
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll:  1,
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />
        };
        return (
            <div>

                <HomeHeader isShowBanner = {true}/>
                <BanNerQC 
                settings = {settings}/>
               
               <NoiBac 
                    settings = {settings}
                />
               <Spkhac settings = {settings}/>
               <Handbook
                    settings = {settings}
                />
               <About/>
                <hr/>
               <HomeFooter/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
