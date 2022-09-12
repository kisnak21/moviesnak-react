import "./App.css"
import NavigationBar from "./components/navbar"
import Intro from "./components/intro"
import Trending from "./components/trending"
import ListMovie from "./components/film"
import AnimeMovie from "./components/anime"

import "./style/LandingPage.css"


function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="film">
        <ListMovie />
      </div>

      <div className= "anime">
      <AnimeMovie />
    </div>
    </div>

    
  )
}

export default App