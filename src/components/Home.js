import React, {useDebugValue, useEffect} from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import db from '../firebase'
import { collection, getDocs} from "firebase/firestore";
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'

function Home() {
    const dispatch = useDispatch();
    useEffect(()=>{
     console.log("Hi mom!");
      const collRef= collection(db, 'movies');
      getDocs(collRef)
        .then((snapshot)=> {
         let vals=[];
         snapshot.docs.forEach((doc) =>{
          vals.push({...doc.data(), id:doc.id})
         })
         console.log(vals);
        })
        .catch(err=>{
          console.log(err.message);
        })
    }, []);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;        
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`