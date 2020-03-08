import React from "react";
import BackgroundInfo from './BackgroundInfo'
import ProtectYourself from './ProtectYourself'
import Myths from './Myths'

function OnMenuClick(props) {

  const pageToShow = props.pageToShow;

  if (pageToShow === 'Background Information'){
    return <BackgroundInfo/>
  }
  if (pageToShow === 'Protect Yourself'){
    return <ProtectYourself/>
  }
  if (pageToShow === 'Myths'){
    return <Myths/>
  }
   return <BackgroundInfo/>
}

export default OnMenuClick;
