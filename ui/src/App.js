import "./App.css";
import AllVideos from "./components/AllVideos";
import DownloadVideo from "./components/DownloadVideo";

function App() {
  return (
    <div className="App">
      <h1>Youtube Video Downloader</h1>
      <DownloadVideo />
      <AllVideos />
    </div>
  );
}

export default App;
