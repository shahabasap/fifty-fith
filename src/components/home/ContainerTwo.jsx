import "./ContainerTwo.css";

const ContainerTwo = () => {
  return (
    <div className="second-container">
      <div className="inner-container">
        {/* Left Section */}
        <div className="left">
          <div className="left-col"></div>
          <div className="left-col"></div>
          <div className="left-col"></div>
          <div className="left-col"></div>
          <div className="left-col"></div>

        </div>

        {/* Center Section */}
        <div className="center">
          <div className="main-content">
            <h4>
              <span className="circle"></span>WELCOME
            </h4>
            <h1>
              Fifty-Fifth is a full-service production studio in the heart of
              London. We work alongside agencies, brands, and artists to deliver
              films people remember.
            </h1>
            <button>ABOUT US</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="right">
          <div className="right-col"></div>
          <div className="right-col"></div>
          <div className="right-col"></div>
          <div className="right-col"></div>
          <div className="right-col"></div>

        </div>
      </div>
    </div>
  );
};

export default ContainerTwo;
