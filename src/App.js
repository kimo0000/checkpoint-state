import React, { Component } from 'react'
import Profil from './components/Profil'


class App extends Component {
  
        state = {
             imgSrc:     '/14.jpg',
             fullName:   'touati karim',
             bio:        'im a proffesionel boxer',
             profession: 'boxer',
             show: false,
            };



  render(){
          const { show } = this.state;
          const showMe = show ? ('cacher profil') : ('afficher profil');

    return(
      <div className='text-center'>
          <button className='btn btn-danger mt-5' onClick={() => this.setState({show: !show})}>{showMe}</button>
          {show && <Profil info={this.state} />}
          
      </div>
    )
  }
}

export default App
