import Navbar from '../../layout/Navbar'
import './ContainerOne.css'

const ContainerOne = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="bottom-container">
        {/* Left Section */}
        <div className="bottom-left-outer">
          <div className="bottom-left-inner">
            <div className="selections-option">
              <div className="diamond-shape-cont-1"></div>
              <div className="diamond-shape-cont-1"></div>
              <div className="diamond-shape-cont-1"></div>
              <div className="diamond-shape-cont-1"></div>
            </div>
            <h4>THE DEMO</h4>
          </div>
        </div>

        {/* Right Section */}
        <div className="bottom-right">
          <div className="company-name">
            <div className="company-name-text">
              <span>FIFTY</span>
              <span className="company-name-line"></span>
              <span>FIFTH</span>
            </div>
          </div>
          <div>
            <h1 className="right-main-content">FILMS <br /> PEOPLE <br /> REMEMBER</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContainerOne
