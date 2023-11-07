import Navbar from "./Navbar";
import Footer from "./Footer";

function Mybar() {
  return (
    <div className="global">
      <div>
        {" "}
        <Navbar />
      </div>
      <div className="flexgrow1" />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Mybar;
