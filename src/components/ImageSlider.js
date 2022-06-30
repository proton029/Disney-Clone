import React from 'react'
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
  return (
    <Carousel {...settings}>
        <Wrap>
            <img src='https://freegametips.com/wp-content/uploads/2021/01/Scarlet-Witch-and-Vision-Wandavision-will-it-have-a-second.jpg' alt='no internet!' />
        </Wrap>
        <Wrap>
            <img src='http://www.excelebiz.in/wp-content/uploads/2021/11/IPL-Banner.jpg' />
        </Wrap>
        <Wrap>
            <img src='https://resources.platform.pulselive.com/premierleague/photo/2016/06/28/577d8643-91c2-4e8c-83ce-a2ec4f7bd1a4/GettyImages-516678986.jpg' alt="no internet" />
        </Wrap>
    </Carousel>
  )
}

export default ImageSlider
const Carousel=styled(Slider)`
    margin-top: 20px;
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button:before {
        color: white;
    }
    .slick-list{
        overflow: visible;
    }
    button {
        z-index: 1;
    }
`
const Wrap = styled.div`
height: 350px;
cursor: pointer;
    img{
        border-radius: 4px solid transparent;
        width:100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`