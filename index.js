const element = (
  // Write your code here.
  <div className="bg-container d-flex flex-column justify-content-center">
    <h1 className="h1">Congratulations</h1>
    <div className="card-container d-flex flex-column justify-content-center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="img"
      />
      <h1 className="h">Kiran V</h1>
      <p className="p">
        Vishnu Institute of computer Education and Technology Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
