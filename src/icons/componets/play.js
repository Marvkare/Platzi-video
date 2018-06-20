import React from 'react';
import Icon from './icon';

function Play(props){
  return(
      <Icon {...props}>
          <path d="M6 4l20 12-20 12z"></path>
      </Icon>
  )
}
function Pause (props){
  return(
    <Icon {...props}>
    <path d="M4 4h10v24h-10zM18 4h10v24h-10z"></path>
    </Icon>)
}

function FullScreen(props){
  return(<Icon {...props}>
    <path d="M32 0h-13l5 5-6 6 3 3 6-6 5 5z"></path>
    <path d="M32 32v-13l-5 5-6-6-3 3 6 6-5 5z"></path>
    <path d="M0 32h13l-5-5 6-6-3-3-6 6-5-5z"></path>
    <path d="M0 0v13l5-5 6 6 3-3-6-6 5-5z"></path>
  </Icon>)
}

function Volumen(props){
  return(<Icon {...props}>
    <path d="M27.814 28.814c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.739-2.739 4.247-6.38 4.247-10.253s-1.508-7.514-4.247-10.253c-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c3.305 3.305 5.126 7.7 5.126 12.374s-1.82 9.069-5.126 12.374c-0.293 0.293-0.677 0.439-1.061 0.439zM22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z"></path>
  </Icon>)
}
export default {Play, Pause, FullScreen, Volumen};
