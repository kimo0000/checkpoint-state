import React, { Component } from 'react'

class Profil extends Component {

     state = {
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



 render (){
      return(
        <div className='container card mt-5 mb-5' style={{width: '25%'}}>
            <button className='btn btn-primary mt-5'>{`has passed ${this.state.timer} to enter page`}</button>
            <div className='text-center'>
                <div className='card-header mb-5'>
                    <img src={this.props.info.imgSrc} alt='logo' style={{maxWidth: '100%'}}/>
                </div>
                <ul className='list-group'>
                   <li className='list-group-item'>{this.props.info.fullName}</li>
                   <li className='list-group-item'>{this.props.info.bio}</li>
                   <li className='list-group-item'>{this.props.info.profession}</li>
                </ul>
            </div>
        </div>
      )
      
    }
}

export default Profil