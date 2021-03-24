import { useState, useEffect } from 'react';
import Modal from './Modal';
import { getMovies } from '../utils/movieService';
import styled from 'styled-components';

/*_Styled components*/

export const MovieWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 700px;
    color: black;
    margin: auto;
  `

  export const StyledMovie = styled.div `
    text-align: left;
    cursor: pointer;
    background-color: white;
    color: black;
    margin: 1%;
    padding: 2%;
  `

  export const StyledImg = styled.img `
  width: 200px;
  float: right;
  `

/*funksjonen som kjører alt*/

const MovieList = () => {

  /*usestates*/
  const [filmer, setFilmer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const[video, setVideo] = useState([]);
  const [error, setError] = useState(null);



  /*kjører getdata når siden lastes og catcher error*/
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try{
      const movies = await getMovies();
      setFilmer(movies);
      
      setLoading(false);
      } catch (error)
    {
      setError(error);
    } 
   };
   setError(null);
  getData();
 }, []);
  
 /*lukker modal*/
  const closeModal = () => {
      setModal(false);
  }
  /*setter staten til video med videoUrl og title*/
  const modalMovie = ({...movie}) => {
      setVideo(movie);
      setModal(true);
  }

  return (
      <>
     
      <Modal modal={modal} setModal={setModal} filmer={filmer} video={video} closeModal={closeModal} />
      <section className="filmer">
        {error? <p>Noe gikk galt</p> : null}
      {filmer?.length > 0
        ? (
          <MovieWrapper>
            {filmer.map((movie, index) => (
              <StyledMovie key={index} onClick={() => modalMovie(movie)}>
                   <StyledImg src={movie.imageUrl}/>
                <h2>{movie.title}</h2>
                <p>
                  Lead actor: {movie.actor}</p>
                <p>
                  Plot: {movie.ingress}
                </p>
              </StyledMovie>
            ))}
          </MovieWrapper>
        ) : null}
      {loading ? <p>Loading</p> : null}
    </section>
    </>
  );
};

export default MovieList;