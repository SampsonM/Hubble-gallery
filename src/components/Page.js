import React from 'react';
import './css/App.css';
import Context from '../Context';
import Main from './Main';
import Gallery from './gallery';

class Page extends React.Component {
  render () {
    return (
      <Context.Consumer>
        {context => {
          return (
            <div>
              {context.state.pageStatus && <Main />}
              {!context.state.pageStatus && <Gallery />}
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Page;