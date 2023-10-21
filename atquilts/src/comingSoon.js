import logo from './hi_def_logo.png';
import './comingSoon.css';

function ComingSoon() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="underline" style={{fontFamily:"Lucida Handwriting"}}>
          Athena Lynn Quilts
        </h2>
          <p className={"underline"} style={{fontFamily:"Lucida Handwriting"}}>Coming Soon</p>

      </header>
    </div>
  );
}

export default ComingSoon;
