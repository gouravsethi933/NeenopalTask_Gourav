import React, { useState} from 'react';
import data from './data.json';
import { Popup } from './Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./Card.css";

export default function Home() {
    const [userData, setUserData] = useState(data);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [like, setLike] = useState({}) 

  const handleToggle = (id) => {
    console.log(id)
     if(like[id]){
     let data = {...like}
     delete data[id]
        setLike(data);
     }else{
        setLike({...like,[id]:'true'})
     }
     console.log(like)
  };
    
    const handleDelete=(id)=>{
        const data=userData.filter((item)=>item.id!==id);
        setUserData(data);
    }

    const handleEdit = (userData) => {
      setIsPopupOpen(<Popup  userData={userData}closePopup={closePopup}/>);
    
    }
    
    const closePopup = (updateData) => {
     if(updateData && updateData.id){
        let data = [...userData];
        let ind = data.find(val => val.id == updateData.id)
        if(ind){
           
            data[ind.id-1] = updateData;
            setUserData(data);
        }
     }
     setIsPopupOpen(false);
    };

    console.log(userData)
    return (
        <div className='container'>
            {isPopupOpen }
            {userData.map((userData) => (
                <div className='card' key={userData.id} >
                    <div className='image'>
                        <img src={userData.image} alt="Avatar" />
                    </div>
                    <div className='middle'>
                        <p>{userData.name}</p>
                        <p><FontAwesomeIcon className='fa-solid' icon={faEnvelope} />&nbsp;&nbsp;&nbsp;{userData.email}</p>
                        <p><FontAwesomeIcon className='' icon={faPhone} />&nbsp;&nbsp;&nbsp;{userData.phone}</p>
                        <p><FontAwesomeIcon className='' icon={faGlobe} />&nbsp;&nbsp;&nbsp;{userData.website}</p>
                    </div>
                    <div className='footer'>
                        <div><button className='icon like 'onClick={()=>handleToggle(userData.id)}>
                            {
                               like[userData.id]?<span><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ff0000" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></span>:
                               <FontAwesomeIcon  className='fa-lg solid ' icon={faHeart} />
                            }
                            </button></div>
                            <div className="divider"></div> 
                        <div><button className='icon' onClick={()=>handleEdit(userData)}><FontAwesomeIcon className='fa-lg' icon={faEdit}/></button> </div>
                        <div className="divider"></div>
                        <div><button className='icon' onClick={()=>handleDelete(userData.id)}><FontAwesomeIcon className='fa-lg' icon={faTrash}/></button> </div>
                    </div>
                </div>
            ))
            }
        </div>
    )   
}