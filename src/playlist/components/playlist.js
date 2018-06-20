import React from 'react';
import Media from './media.js';
import {Play, Pause, FullScreen, Volumen} from '../../icons/componets/play.js'

function Playlist (props){
    const playlist = props.data.categories[0].playlist

    return(
      <div className="fila">
        <Play
        size={100}
        color="red"
        />

        {
          playlist.map((item)=>{
            return <Media title= {item.title} key={item.id} cover={item.cover}/>
          })
        }

      </div>
    )

}

export default Playlist;
