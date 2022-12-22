import React from 'react'
import { CardImg } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function CaruselBrent(){
    return(
        <div className='animatsiya'>
 <Carousel responsive={responsive}>
  
  <img width={100} src='https://cdn.goodzone.uz/goodzone/185fbea1-7f2d-48d5-8e5c-4b6f78a4a97a'/>
  <img width={100} src='https://cdn.goodzone.uz/goodzone/2c1ad3c3-3a70-41c9-b826-bdd604c03d10'/>
  <img width={100} src='https://cdn.goodzone.uz/goodzone/adcf6f86-bb31-44fb-8fde-d3e9c18398cc'/>
  <img width={100} src='https://cdn.goodzone.uz/goodzone/a2deece2-4ba3-4a9a-8be1-4a7e0c4136e1'/>
  <img width={100} src='https://cdn.goodzone.uz/goodzone/1bd36862-c524-4dfa-95fc-216188e45d74'/>
  <img width={100} src='https://cdn.goodzone.uz/goodzone/c59c1988-f03b-4294-a848-7a530cb7c855'/>
  <img width={100} src='https://cdn.goodzone.uz/goodzone/fb8adf74-e0e5-4c4b-9e60-8a5405b87e01'/>
  
</Carousel>;
        </div>
    )
}


