
import styles from "./Inicio.module.css";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import { useEffect, useState } from "react";



function Inicio (){
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/AnataliaCandido/cinipop-api/videos')
        .then(resposta => resposta.json())
        .then(dados =>{
            setVideos(dados)
        })
    }, [])
    return(
        <>
            
            <Banner imagem="home"/>
            <Titulo>
                <h1>Um lugar para guardar seus videos e filmes! </h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                   return <Card {...video} key={video.id} />
                })}
            </section>
           
        </>  
    )
}

export default Inicio