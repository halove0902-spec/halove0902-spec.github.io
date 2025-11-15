import heroImage from '../../assets/hero_image.jpg';
import Spacing from '../../components/Spacing';
import './index.css';

function Main() {
  return (
    <>
      <div className="main-container">
        <Spacing />
        <div className="container">
          <div className="welcome">
            <h1>TYCA 더청년컨설팅연대</h1>
            <p>the youth consulting alliance</p>
          </div>
        </div>
        <Spacing />
        <div className="container">
          <div className="hero">
            <img src={heroImage} alt="Hero Image" />
          </div>
        </div>
        <Spacing size={120} />
      </div>
    </>
  );
}

export default Main;
