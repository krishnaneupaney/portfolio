import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my projects</h1>
      <div className="cards__container" >

        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src='images/firstgame.jpg'
              text='Experience my first game to see if you qualify for military'
              label='Adventure'
              path='/products'
            />

            <Link to="/https://krishnaneupaney.github.io/project1/" />

            <a href="https://krishnaneupaney.github.io/project1/">Link</a>
            <CardItem
              src="images/axcessapp.jpg"
              text="This is my second project where I use Shopify API to get product data"
              label="ShopWhileYouVisit"
              path='/about'
            />
            <a href="https://axcessnutrition.netlify.app/">Link</a>
            <CardItem
              src="images/algo.png"
              text="My first algorithm based app where I used Dijkstra algo which gurantee sortest path"
              label="Visualize"
              path='/about'
            />

            <a href="https://algopathfinder.netlify.app/">Link</a>
            <CardItem
              src='images/axcessbookreview.jpg'
              text='Marketplace website to browse other fav books as well as to add your own'
              label='Extreme Adventure'
              path='/about'
            />
          </ul>
          <a href="https://axcessbookreview.netlify.app/posts/">Link</a>
          <ul className='cards__items'>

            <CardItem
              src='images/groupproject.jpg'
              href='https://travlr-group.netlify.app/'
              text='Group project - My team build full stack app for local users to find resturants and bars nearby using maps.'
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