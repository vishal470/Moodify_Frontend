import FaceExpression from "./components/FaceExpression"
import MoodSong from "./components/MoodSong"
import { useState } from 'react'


function App() {
  const [Songs, setSongs] = useState([])
  return (
    <div className="app-container">
      <div className="main-content">
        <div className="header">
          <h1>MOODIFY</h1>
          <p>Let your facial expression discover your perfect soundtrack</p>
        </div>
        
        <FaceExpression setSongs={setSongs} />
        {Songs.length > 0 && <MoodSong Songs={Songs} />}
      </div>
    </div>
  );
}

export default App
