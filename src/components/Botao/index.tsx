import React, { useState } from 'react';
import style from './Botao.module.scss';

export default function Botao({ onClick }: any) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('')

    const geraFilme = () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTA5MzkwNTZiMmU1OTMwMTlmMDk0MWEyOWQ5MTQwOSIsInN1YiI6IjY0OTBlNjdjNTU5ZDIyMDBjNTc3ZWM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L2rJVJv1UMlDW3WvE28gOIh6Er_idzB375VkJVfvJ68'
            }
        };
        const paginaAleatoria = Math.floor(Math.random() * 300) + 1;
        const filmeAleatorio = Math.floor(Math.random() * 20) + 1;

        fetch(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${paginaAleatoria}`, options)
            .then(response => response.json())
            .then(response => {
                const movieName = response.results[filmeAleatorio].title;
                const movieDescription = response.results[filmeAleatorio].overview;
                const movieImage = `https://image.tmdb.org/t/p/w500${response.results[filmeAleatorio].poster_path}`;
                setName(movieName);
                setDescription(movieDescription);
                setImage(movieImage);
                console.log(response.results[filmeAleatorio].poster_path)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className={style.container_botao}>
            <button type="button" className={style.botao} onClick={onClick || geraFilme}>
                <p className={style.texto_botao}>Encontrar filme</p>
            </button>
            {name && description && image && (
                    <div className={style.container_filme}>
                        <div >
                            <h2 className={style.nome_filme}>{name}</h2>
                            <p className={style.descricao_filme}>{description}</p>
                        </div>
                        <img src={image} alt="imagem do filme" className={style.imagem_filme} />
                    </div>

            )}
        </div>
    );
}


