import React from 'react';
import { Link } from "react-router-dom";
import { UncontrolledCarousel } from 'reactstrap';
const image1 = require('../../assets/img/slider1.jpg');
const image2 = require('../../assets/img/slider2.jpg');
const image3 = require('../../assets/img/slider3.jpg');
const caption1 =<> <h1>2020<br/>NOGIG<br/>COMPETITION</h1> <br/><Link to='/register'>Register for the Event</Link></>;
const header1=<small>18TH EDITION</small>;

const items = [
  {
    src: [image1],
    altText: 'Slide 1',
    caption: [caption1],
    header: [header1],
    key: '1'
  },
  {
    src: [image2],
    altText: 'Slide 2',
    caption: [caption1],
    header: [header1],
    key: '2'
  },
  {
    src: [image3],
    altText: 'Slide 3',
    caption: [caption1],
    header: [header1],
    key: '3'
  }
];

const Slide = () => <UncontrolledCarousel items={items} />;

export default Slide;
