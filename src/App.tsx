import { Outlet } from "react-router-dom"
import { BouncingBalls } from "./components/bouncingballs/BouncingBalls"


function App() {
  return(
    <LayOut/>
    )
}



function LayOut(){
  return(
    <>
    <header>
      <h1>testing stuff</h1>
    </header>

    <main>
      <BouncingBalls/>
      <Outlet/>
    </main>
    <footer>
      <p>some important links</p>
    </footer>
    </>
  )
}

export default App
