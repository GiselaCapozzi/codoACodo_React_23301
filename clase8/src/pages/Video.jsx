import style from '../styles/video.module.css';

import { datosVideos } from '../datos';

const Video = () => {
  return (
    <div className={style.container}>
      {
        datosVideos.map((video, index)=> (
          <video 
          src= {video}
          width='450px'
          height='250px'
          className={style.video}
          controls
          key={index}
          >
          </video>
        ))
      }
    </div>
  )
}

export default Video