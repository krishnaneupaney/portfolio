import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out my projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                                    <CardItem
              src='images/firstgame.jpg'
              text='Experience my first game to see if you qualify for military'
              label='Adventure'
              path='/products'
            />
            <a href="https://krishnaneupaney.github.io/project1/">Link</a>
            <CardItem 
                        src="images/axcessapp.jpg"
                        text="This is my second project where I use Shopify API to get product data"
                        label="ShopWhileYouVisit"
                        path='/about'
                        />
                        <a href="https://eloquent-leakey-ec6c37.netlify.app/">Link</a>
                         <CardItem
              src='images/capstone.jpg'
              text='Capstone Project'
              label='Extreme Adventure'
              path='/about'
            />
          </ul>
          <a href="https://seircapstoneapp.herokuapp.com/">Link</a>
          <ul className='cards__items'>
              
            <CardItem
              src='images/groupproject.jpg'
              href='https://travlr-group.netlify.app/'
              text='Group project'
              label='Adventure'
              path='/sign-up'
            />
            <a href="https://travlr-group.netlify.app/">Link</a>
                    </ul>
                </div>
            </div>         
        </div>
    )
}

export default Cards;