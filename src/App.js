import React, { Component } from 'react'
import Profil from './components/Profil'


class App extends Component {
  
        state = {
             imgSrc:     '/images/07.jpg',
             fullName:   'touati karim',
             bio:        'im a proffesionel boxer',
             profession: 'boxer',
             show: true,
             title: '',
             timer: 0,
            }
   


  


    componentDidMount(){
         setInterval(() => {
            this.setState({
               timer: this.state.timer +1 
        })
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.Interval)
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
          <button className='btn btn-primary mt-5'>{`has passed ${this.state.timer} to enter page`}</button>
          {this.state.show ? <Profil info={this.state} /> : null}
          
      </div>
    )
  }
}

export default App
