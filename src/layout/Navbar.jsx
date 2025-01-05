
import "./Navbar.css";

const Navbar = () => {
  return (

      <nav className="nav-outer">
        <div className="left-handside">
          <div className="container diamond-shape"></div>
        </div>
        <div className="middle">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color:"white"
            }}
          >
            <span>FIFTY</span>
            <span
              style={{
                borderBottom: "1px solid white",
                width: "50px",
                margin: "0 10px",
              }}
            ></span>
            <span>FIFTH</span>
          </div>
        </div>
        <div className="right-handside"></div>
      </nav>
   

  );
};

export default Navbar;
