import React from 'react';
import './Testimonials.css';
import Car from '../../../asserts/images/car.png';
import Circle from '../../../asserts/images/circle.png';
import Contact from '../../../asserts/images/contact.png';
import Hand from '../../../asserts/images/hand.png';
import Woman from '../../../asserts/images/woman.png';

export default function Testimonials() {
  const test = [
    {
      pic: Woman,
      head: 'Emma Waston',
      text: 'I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization.',
    },
    {
      pic: Woman,
      head: 'Emma Waston',
      text: 'I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization.',
    },
    {
      pic: Woman,
      head: 'Emma Waston',
      text: 'I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization.',
    },
  ];

  return (
    <div className="testimonials">
      <div className="cards__text">
        <span>Why us?</span>
        <h1>Why Travel with Africa wizzy Safari</h1>
      </div>
      <div className="testimonials__all">
        <div className="testimonials__corners">
          <div className="testimonials__corners__content">
            <img src={Car} alt="car" />
            <p>100+ tours around Rwanda</p>
          </div>
        </div>

        <div className="testimonials__corners">
          <div className="testimonials__corners__content">
            <img src={Circle} alt="circle" />
            <p>100% Trusted travel agency</p>
          </div>
        </div>

        <div className="testimonials__corners">
          <div className="testimonials__corners__content">
            <img src={Contact} alt="contact" />
            <p>10 years of travel experience</p>
          </div>
        </div>

        <div className="testimonials__corners">
          <div className="testimonials__corners__content">
            <img src={Hand} alt="circle" />
            <p>90% of travelors are happy</p>
          </div>
        </div>
      </div>
      <div className="cards__text">
        <span>Our Traveller Say</span>
        <h1>What our clients say about us</h1>
      </div>
      <div className="testimonial__woman">
        {test.map((alan) => {
          return (
            <div className="testimonial__woman__box">
              <img src={alan.pic} alt="wom" />
              <h3>{alan.head}</h3>
              <p>{alan.text}</p>
            </div>
          );
        })}
      </div>
      <div className="lines">
        <hr className="line1" />
        <hr className="lines__colored" />
        <hr className="lines__colored" />
      </div>
    </div>
  );
}
