

export const Cards = () => {
    return (
        <>
            <div className='fade-in'>
        <div className="container">
          <div className="card">
            <img src={require("../react.png")}></img>
            <div className="container1">
              <h4> React </h4>
            </div>
          </div>
          <div className="card">
            <img src={require("../javaScript.png")}></img>
            <div className="container1">
              <h4> JavaScript</h4>
            </div>
          </div>
          <div className="card">
            <img src={require("../firebase-main.png")}></img>
            <div className="container1">
              <h4> Firebase </h4>
            </div>
          </div>
                </div>
                <div className='home-p1'>
                    <p> please take a look at some of my other projects here: ParkMeBike </p>
                </div>
            </div>
      </>
    );

}