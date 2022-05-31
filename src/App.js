import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('songs');
  }, []);
  const onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };
  return (
    <div className='ui conatiner'>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className='ui row'>
          <div className='eleven wide column' >
            <VideoDetails video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList
              onVideoSelect={(video) => selectedVideo(video)} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;