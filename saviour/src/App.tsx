import { FAQ } from "./components/FAQ"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { IDOEvent } from "./components/IDOEvent"
import { Introduction } from "./components/Introduction"
import { RoadMap } from "./components/RoadMap"
import { TokenOmics } from "./components/TokenOmics"

function App() {
  return (
    <>
      <Header/>
      <Introduction/>
      <IDOEvent/>
      <TokenOmics/>
      <RoadMap/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default App
