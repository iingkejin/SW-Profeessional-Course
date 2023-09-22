import React from 'react';
import './Cards.css'

const Cards = () => {
  let data = [ 
    {title : 'Title1', content : 'Lorem ipsum dolor sit amet.'},
    {title : 'Title2', content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, odit!'},
    {title : 'Title3', content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aliquid praesentium neque nemo quod quia.'},
  ]
  return (
    <section className='post-card-list'>
      {
        data.map((item, index) => {
          return (
            <Card title={item.title} content={item.content} key={index}/>
          )
        })
      }
    </section>
  );
};

function Card(props) {
  return (
    <div className='post-card'>
      <h2>{props.title}</h2>
      <p className='post-card-txt'>{props.content}</p>
    </div>
  )
}

export default Cards;