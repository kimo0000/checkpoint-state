import React, { Component } from 'react'
import Profil from './components/Profil'


class App extends Component {
  
        state = {
             imgSrc:     '/images/07.jpg',
             fullName:   'touati karim',
             bio:        'im a proffesionel boxer',
             profession: 'boxer',
             show: false,
            }
   
  showProfil=()=>{
          this.setState({
              show: !this.state.show,
             })
     }



  render(){
    return(
      <div className='text-center'>
          <button className='btn btn-danger mt-5' onClick={this.showProfil}>show profil</button>
          {this.state.show ? <Profil info={this.state} /> : null}
          
      </div>
    )
  }
}

export default App
