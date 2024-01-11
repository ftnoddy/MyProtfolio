import React from 'react'
import Typical from 'react-typical'
import './Profile.css';
export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className="colz">
                <div className='colz-icon'>
               
                    <a href='#'>
                        <i className='fa fa-facebook-square'>                           
                        </i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-google-plus-square'>                           
                        </i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-instagram'>                           
                        </i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-youtube-square'>                           
                        </i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-twitter'>                           
                        </i>
                    </a>

                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, IM <span className='highlighted-text'>Noddy</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                            loop ={Infinity}
                            steps= {[
                                "Noddy DEV",
                                1000,
                                "Full stack Devloper",
                                1000,
                                "MERN stack Devloper",
                                1000,
                                "React/React Native Dev",
                                1000,
                            ]}/>
                        </h1>
                        <span className='profile-role-tagline'>
                            Knack of bulding application with front and back end operation.
                        </span>
                    </span>
                </div>
                <div className='profile-option'>
                    <button className='btn primary-btn'>
                        {""}
                        Hire me
                        {" "}
                    </button>
                    <a href='Atindra mohan das_CV(NSEC).docx' download= 'Noddy Atindra mohan das_CV(NSEC).docx'>
                        <button className = 'btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>

    </div>
  )
}

