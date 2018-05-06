import React from 'react';
import Context from '../Context';
import './css/gallery.css'
import leftArr from './images/leftArr.png';
import rightArr from './images/rightArr.png';

class Gallery extends React.Component {
  render () {
    return (
      <Context.Consumer>
        {context => {
          return (
            <div className="slider">
              <div className={`img ${context.state.movec[0]} ${context.state.imageClasses[0]}`} 
                alt="space" style={{ backgroundImage: 'url(' + require(`${context.state.images[0]}`) + ')' }}></div>
              <div className={`img ${context.state.movec[1]} ${context.state.imageClasses[1]}`} 
                alt="space" style={{ backgroundImage : 'url(' + require(`${context.state.images[1]}`) + ')'}}></div>
              <div className={`img ${context.state.movec[2]} ${context.state.imageClasses[2]}`} 
                alt="space" style={{ backgroundImage: 'url(' + require(`${context.state.images[2]}`) + ')' }}></div>
              <div className="arrows">
                <img onClick={() => context.handleArrowPress('left')} src={leftArr} className="arrLeft" alt="arrow-left"></img>
                <img onClick={() => context.handleArrowPress('right')} src={rightArr} className="arrRight" alt="arrow-right"></img>
              </div>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Gallery;