import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Create your best resume yet and download in minutes</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/pic1.png'
              text='Easily created online'
              label='Simple'
              path='/services'
            />
            <CardItem
              src='images/pic2.png'
              text='Pre-written phrases'
              label='Creative'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pic3.jpg'
              text='Templates that stand out'
              label='Artistic'
              path='/services'
            />
            <CardItem
              src='images/pic4.jpg'
              text='Designed by experts'
              label='Simple'
              path='/services'
            />
            <CardItem
              src='images/pic5.jpg'
              text='Tested by 1000+ users'
              label='Professional'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
