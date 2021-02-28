import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import RoomIcon from '@material-ui/icons/Room';

const Footer = () => {
    return (
        <div className='col-12 text-center p-4'>
            <h3>Deja tu mail y enterate lo que Mike M tiene para vos!!</h3>
            <input className='email' type='email' placeholder='user@email.com'></input>
            <input className='submit' type='submit'></input>
            <div className='row'>
                <div className='col-12 d-flex flex-row justify-content-around align-items-center social-container'>
                    <a><InstagramIcon color="secondary" fontSize="large" /></a>
                    <a><FacebookIcon color="primary" fontSize="large" /></a>
                    <a><TwitterIcon color="primary" fontSize="large" /></a>
                    <a><RoomIcon color="secondary" fontSize="large" />Donde estamos?</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
