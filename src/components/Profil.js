import React from 'react'



const Profil = (props) => {
      return(
        <div className='container card mt-5 mb-5' style={{width: '25%'}}>
            <div className='text-center'>
                <div className='card-header mb-5'>
                    <img src={props.info.imgSrc} alt='logo' style={{maxWidth: '100%'}}/>
                </div>
                <ul className='list-group'>
                   <li className='list-group-item'>{props.info.fullName}</li>
                   <li className='list-group-item'>{props.info.bio}</li>
                   <li className='list-group-item'>{props.info.profession}</li>
                </ul>
            </div>
        </div>
      )
      
    }
  

export default Profil