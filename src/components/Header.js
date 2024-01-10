import React from 'react';
import './Header.css';
import videoBg from '../assets/Primera Fuerza 2023.mp4'

export default function Header(){
    return( 
        <div className='header-background'>
            <h1 className='header-title'>Asociacion de Tenis de Mesa de Nuevo Leon</h1>
            <video src={videoBg} className='header-background-video' autoPlay loop muted/>
        </div>
    );
}
