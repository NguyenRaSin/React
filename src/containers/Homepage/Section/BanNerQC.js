import React, { Component } from 'react';

import { connect } from 'react-redux';

import './BanNerQC.scss'

import { FormattedMessage } from 'react-intl';

import Slider from 'react-slick';


import imgBanner1 from "../../../assets/images/banner/banner11.png";
import imgBanner2 from "../../../assets/images/banner/banner22.png";
import imgBanner3 from "../../../assets/images/banner/banner33.png";
import imgBanner4 from "../../../assets/images/banner/banner44.png";
import imgBanner5 from "../../../assets/images/banner/banner55.png";



class BanNerQC extends Component {

   
    
    render() {
        
        return(
            <div className='section-share section-QC'>
                <div className='section-content'>
                <div className='section-header'>
                    <span className='title1'>HOT</span>
                    <button className='btn-1'>xem thêm</button>
                </div>
                <div className='section-body'>
                <Slider {...this.props.settings}>
                    <div className='img-customize'>
                        <img src={imgBanner1}/>
                        <h3>Reno7 | Reno7 5G</h3>
                    </div>
                    <div className='img-customize'>
                    <img src={imgBanner2}/>
                        <h3>AppleWatch | S6</h3>
                    </div>
                    <div className='img-customize'>
                    <img src={imgBanner3}/>
                        <h3>Lenovo | YOGA</h3>
                    </div>
                    <div className='img-customize'>
                    <img src={imgBanner4}/>
                        <h3>Đồng Hồ | Giảm 50%</h3>
                    </div>
                    <div className='img-customize'>
                    <img src={imgBanner5}/>
                        <h3>Tai Nghe | Giảm 30%</h3>
                    </div>
                    </Slider>
                </div>
                
                </div>
            </div>
        );
        
    };

};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(

BanNerQC);
