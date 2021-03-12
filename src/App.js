import logo from './logo.svg';
import './App.css';
import imageInSrc from './imageInSrc.jpg';
import './style.css';

function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: "100vw" }}>

        <h1 className="title red">Malik Jouini</h1>

        <br/>

        <img src={imageInSrc} className="image" />

        

        <img src="/imageInPublic.jpg" className="image" />

      </div>

      <video width="320" height="240" controls>

        <source src="myVideo.mp4" type="video/mp4" />

      </video>
    </div>
  );
}

export default App;
