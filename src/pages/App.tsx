import React, { useState } from 'react';
import icone from '../assets/icone.svg';
import Botao from '../components/Botao';
import style from './App.module.scss'

function App() {
    return (
        <body>
            <div className={style.container_titulo}>
                <img src={icone} className='icone' alt='icone' />
                <h1 className={style.titulo}>Não sabe o que assistir?</h1>
            </div>

            <div>
                <Botao/>
            </div>
        </body>
    );
}

export default App;