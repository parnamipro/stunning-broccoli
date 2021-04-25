import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (
    <div className="app">
      <h1>hi</h1>
      <div className="app_top">
      <img className="app_logo"
      alt=""
      src="https://img.icons8.com/cute-clipart/128/000000/instagram-new.png"/
      >
      <h1>Reels</h1>
      </div>
      <div className="app_videos">

      <VideoCard
      channel='parnami'
      avatarSrc='https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
      song='sample'
      url='https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
      likes={4444}
      shares={23}
      />
      <VideoCard
      channel='parnami'
      avatarSrc='https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
      song='sample'
      url='https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
      likes={44}
      shares={3}
      />
      <VideoCard
      channel='parnami'
      avatarSrc='https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
      song='sample'
      url='https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
      likes={4444}
      shares={2}
      />
      <VideoCard
      channel='parnami'
      avatarSrc='https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
      song='sample'
      url='https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
      likes={4}
      shares={23}

      />
      </div>
    </div>
  );
}

export default App;
