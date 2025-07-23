
function HeroCard() {

  return (
    <div className="flex">
      <div className="z-18 hover:z-22 -rotate-15 translate-x-17 translate-y-18 hero-card">
        <img src="./1.jpg" className="w-full"/>
      </div>

      <div className="z-19 hover:z-21 -rotate-9 translate-x-10 translate-y-5 hero-card">
        <img src="./2.jpg" className=""/>
      </div>

      <div className="z-20 hero-card">
        <img src="./4.jpg" className=""/>
      </div>

      <div className="z-19 hover:z-21 rotate-9 -translate-x-10 translate-y-5 hero-card">
        <img src="./3.jpg" className=""/>
      </div>

      <div className="z-18 hover:z-22 rotate-15 -translate-x-17 translate-y-18 hero-card">
        <img src="./5.jpg" className=""/>
      </div>
    </div>
  )
}

export default HeroCard