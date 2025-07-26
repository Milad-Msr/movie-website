import { useState } from "react"
import Search from "./components/Search"
import HeroCard from "./components/HeroCard"

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <main>
      
      <div className="pattern"/>

      <div className="wrapper">
        <header>
          <HeroCard />
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>

    </main>
  )
}

export default App