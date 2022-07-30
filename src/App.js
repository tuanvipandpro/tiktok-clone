import {useState, useEffect} from 'react';
import './App.css';
import Video from './components/video/Video';
import { db } from '../src/firebase';

function App() {
  const [videos, setVideos] = useState([])

  useEffect( () => {
    db.collection("videos").onSnapshot(snapshot => setVideos(snapshot.docs.map(doc => doc.data())))
  }, [])

  return (
    <div className="app">
      <div className="app__videos">
        {
          videos.map(
            ({messages, url, likes, shares, description, channel, song}, i) => {
              return <Video
                key={i}
                index={i}
                messages={messages}
                likes={likes}
                shares={shares}
                description={description}
                channel={channel}
                song={song}
                url={url}
              />              
            }
          )
        }
      </div>
    </div>
  );
}

export default App;
