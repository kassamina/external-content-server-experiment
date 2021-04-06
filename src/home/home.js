import logo from '../logo.svg';
import './home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
      </header>
    </div>
  );
}
export default Home;

