import React, { Component } from 'react'
import Profil from './components/Profil'


class App extends Component {
  
   state = {
             imgSrc:     '/images/07.jpg',
             fullName:   'touati karim',
             bio:        'im a proffesionel boxer',
             profession: 'boxer',
             show: true,
             counter: 0,
             title: '',
            }

  showProfil=()=>{
    this.setState({
        show: !this.state.show,
        counter: this.state.counter +1,
    })
  }


  componentDidUpdate(){
       document.title = `click ${this.state.counter} time`
  }

  render(){
    return(
      <div className='text-center'>
          <button className='btn btn-danger mt-5' onClick={this.showProfil}>show profil</button>
          <button className='btn btn-primary mt-5'>{`you have clicked ${this.state.counter} time`}</button>
          {this.state.show ? <Profil info={this.state} /> : null}
      </div>
    )
  }
}

export default App
