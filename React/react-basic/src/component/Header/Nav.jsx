import React from 'react';
import './Nav.css'
import logo from '../applelogo.png'

const Nav = () => {
  let menuItems = [
    {to : '/menu1', text : 'menu1'},
    {to : '/menu2', text : 'menu2'},
    {to : '/menu3', text : 'menu3'}
  ]
  return (
    <header>
      <nav>
        <h1 className='logo'>
          <a href="">
            <img src={logo} alt="logo" />
          </a>
        </h1>

        <ul className='gnb-list'>
          {
            menuItems.map((item, index) => {
              return (
                <li className='gnb-itme' key={index}>
                  <a href={item.to}>{item.text}</a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </header>
  );
};

export default Nav;