import React, {Component} from 'react';
import Context from './Context';

class Provider extends Component {
  state = {
    pageStatus : true,
    page : 'Gallery',
    menuState : false,
    images : [
      './images/s1.jpg',
      './images/s2.jpg',
      './images/s3.jpg',
      './images/s4.jpg',
      './images/s5.jpg',
      './images/s6.png'
    ],
    imageClasses : [
      'img1',
      'img2',
      'img3',
    ],
    movec : [
      '',
      '',
      '',
    ],
  }

  render () {
    return (
      <Context.Provider 
        value={{
          state: this.state,
          changePageShown : this.changePageShown,
          changeNavDisplay : this.changeNavDisplay,
          handleArrowPress : this.handleArrowPress,
          HandlePageSelection : this.HandlePageSelection,
        }}>
        {this.props.children}
      </ Context.Provider>
    )
  }

  changePageShown = () => {
    this.setState({
      pageStatus : this.state.pageStatus ? false : true,
    })
    setTimeout(() => this.setState({
      page : this.state.page === 'Gallery' ? 'Main' : 'Gallery'
    }), 600);
  }

  handleArrowPress = (direction) => {
    const left = [
      'leftToNone',
      'middleToLeft',
      'rightToMiddle',
    ];
    const right = [
      'leftToMiddle',
      'middleToRight',
      'rightToNone',
    ];

    if (direction === 'left') {
      this.setState({
        movec : left.map(move => move)
      }, () => setTimeout(this.HandleLeftArr, 350))
    } else {
      this.setState({
        movec : right.map(move => move)
      }, () => setTimeout(this.HandleRightArr, 350))
    }
  }
  
  HandleRightArr = () => {
    const imageArr = this.state.images;
    this.setState({
      images : imageArr.concat(imageArr.splice(0, (imageArr.length - 1))),
      movec : []
    })
  }

  HandleLeftArr = () => {
    const imageArr = this.state.images;
    this.setState({
      images :  imageArr.concat(imageArr.splice(0, Math.abs(1))),
      movec : []
    })
  }

  changeNavDisplay = () => {
    this.setState({
        menuState : (this.state.menuState === true) ? false : true,
    })
  }

  HandlePageSelection = () => {
    this.changePageShown();
    this.setState({
      menuState: this.state.menuState ? false : true
    })
  }
}

export default Provider;
