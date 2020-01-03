import React, {useEffect} from 'react';
import SportsTemplate from '../includes/SportTemplate';

const Scrabble= () => {
  useEffect(()=>{
    window.scrollTo(0, 0);    
  })
  return (
    <>
      <SportsTemplate id='scrabbleFirstSection' title='Scrabble' firstContent= "Scrabble is a word game in which two to four players score points by placing tiles, each bearing a single letter, onto a game board divided into a 15×15 grid of squares." secondContent="Scrabble is a word game in which two to four players score points by placing tiles, each bearing a single letter, onto a game board divided into a 15×15 grid of squares."/>
    </>
  );
}
export default Scrabble;
