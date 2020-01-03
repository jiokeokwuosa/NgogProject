import React, {useEffect} from 'react';
import SportsTemplate from '../includes/SportTemplate';

const Athletics= () => {
  useEffect(()=>{
    window.scrollTo(0, 0);    
  })
  return (
    <>
      <SportsTemplate id='athleticsFirstSection' title='Athletics' firstContent='Our athletics game is very competitive and requiring physical skill. It is group into 100m and 4x 100m relay.' secondContent='Athletics is the largest single sport. It is also called track-and-field sports or track and field, a variety of competitions in running, walking, jumping, and throwing events.'/>
    </>
  );
}
export default Athletics;
