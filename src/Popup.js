import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Popup.css';


export const Popup = ({ closePopup,userData }) => {
     const[val,setVal] = useState(userData);
     const changeHandler=(e)=>{
        setVal({...val,[e.target.name]:e.target.value})
     }


    return <>
        <div class="backdrop"></div>
            <main className="content">
                <div className='header'>
                    <div className='heading'>
                        <h2>Basic Details</h2>
                    </div>
                    <div >
                        <button className='cross'  onClick={()=>closePopup()}><FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                </div>
                <div className='form'>
                    <div className='name'>
                        <label>Name :&nbsp;&nbsp;</label><input name="name" onChange={(e)=>changeHandler(e)} type="text" value ={val.name} placeholder='Please enter the name'></input>
                    </div>
                    <div className='email'>
                        <label>Email :&nbsp;&nbsp;</label><input name="email" onChange={(e)=>changeHandler(e)} type="text" value ={val.email} placeholder='Please enter the email'></input>
                    </div>
                    <div className='mobile'>
                        <label>Mobile :&nbsp;&nbsp;</label><input name="phone" onChange={(e)=>changeHandler(e)} type="text" value ={val.phone} placeholder='Please enter the mobile'></input>
                    </div>
                    <div className='website'>
                        <label>Website :&nbsp;&nbsp;</label><input name = "website" onChange={(e)=>changeHandler(e)} type="text" value ={val.website} placeholder='Please enter the website'></input>
                    </div>
                </div>
                <div className='btn'>
                    <div><button className='cancle' onClick={()=>closePopup()}>Cancel</button></div>
                    <div><button className='ok' onClick={()=>closePopup(val)}>OK</button></div>
                </div>
            </main>
           
            </>
}