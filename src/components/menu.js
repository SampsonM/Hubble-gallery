import React from 'react';
import Context from '../Context';
import './css/menu.css'

class Menu extends React.Component {

  render () {
    return (
      <Context.Consumer>
        {context => {
          return (
            <nav>
              <a className={`menusymbol ${context.state.menuState ? 'hide' : 'show'}`} onClick={context.changeNavDisplay} >&#8285;</a>
                <ul className={context.state.menuState ? 'show' : 'hide'} >
                  <li ><a onClick={context.HandlePageSelection} >{context.state.page}</a></li>
                  <a className="closeBtn" onClick={context.changeNavDisplay}>&times;</a>
                </ul> 
            </nav>
          )
        }}
      </Context.Consumer>
    )
  }

}

export default Menu;