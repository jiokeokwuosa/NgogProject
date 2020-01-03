import React, {useEffect} from 'react';
import SportsTemplate from '../includes/SportTemplate';

const Soccer= () => {
  useEffect(()=>{
    window.scrollTo(0, 0);    
  })
  return (
    <>
      <SportsTemplate id='soccerFirstSection' title='Soccer' firstContent= "Football, also known as soccer, game in which two teams of 11 players, using any part of their bodies except their hands and arms, try to manoeuver the ball into the opposing team’s goal." secondContent="Modern football originated in Britain in the 19th century. Since before medieval times, “folk football” games had been played in towns and villages according to local customs and with a minimum of rules."/>
    </>
  );
}
export default Soccer;
