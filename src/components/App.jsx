import React from "react";
import logo192 from "./logo192.png";
import personandcat from "./personandcat.jpg";
import star from "./616489.svg";
import Card from "./Card";
import profileAby from "./profileAby.jpg";
import cat2 from "./cat2.jpg";
import cat3 from "./cat3.jpg";
import cat4 from "./cat4.jpg";
import cat5 from "./cat5.jpg";
import cat6 from "./cat6.jpg";
function App() {


  return (
    <div>
      <header style={{

        backgroundImage: "url(" + "http://cdnweb01.wikitree.co.kr/webdata/editor/201910/11/img_20191011164715_fe47c4ac.jpg" + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right 22% top 100%",
        backgroundOrigin: "border-box",
        backgroundClip: "border-box",
        opacity: "0.9",






      }}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand">
            <img src={logo192} alt="" />
            <div className="navbar_div">YHS</div></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link btn btn-dark" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-dark" href="customers.html">Customers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-dark" href="detail.html">Detail</a>
              </li>

            </ul>
          </div>
        </nav>

        <section id="header_section">
          <h1 className="header_heading">Meet the Lovely Cat Nearby</h1>
          <h2 className="header_info">The lovely cats are waiting for you and
            really awesome and cute cat.</h2>
          <button class="btn btn-secondary btn-lg">I would like to pay off credit cards</button>
          <button class="btn btn-primary btn-lg">CHECK YOUR RATE</button>
          <h3 className="header_review">Excellent 5,599 reviews on ⭐⭐⭐⭐⭐</h3>
        </section>
        <div className="header_lists_div">
          <ul className="header_lists">
            <li className="header_list_item">$1,000 - $50,000§</li>
            <li className="header_list_item">3 & 5 YEAR TERMS*</li>
            <li className="header_list_item">NO PREPAYMENT PENALTY</li>
          </ul>
          <p className="header_lists_paragraph">All loans from Upstart-powered lenders. Loans from <a href="">these states</a> are made by <a href="">Cross River Bank.</a></p>
        </div>
      </header>
      <main>
        <section id="features">
          <h1 className="section_heading">Let's find out about our cat's characteristics.</h1>
          <div class="row">
            <Card 
            img={profileAby}
            name="Abyssinian"
            gender="SH"
            characteristic="Ticked coat; ruddy, red, blue and fawn colors"
            personality="Busy, active, agenda-driven and affectionate"
            />
            <Card 
            img={cat2}
            name="American Bobtail"
            gender="LH & SH"
            characteristic="Medium to large, naturally occurring, bobtailed cat"
            personality="Loving and intelligent"
            />
            <Card 
            img={cat3}
            name="American Curl"
            gender="LH & SH"
            characteristic="Ears curl back, away from the face; available in a variety of colors and patterns"
            personality="Energetic and affectionate"
            />
            <Card 
            img={cat4}
            name="American Shorthair"
            gender="SH"
            characteristic="Stocky, working breed: available in a wide variety of colors and patterns"
            personality="Even tempered and quiet"
            />
            <Card 
            img={cat5}
            name="American Wirehair"
            gender="SH"
            characteristic="Crimped, springy coat; available in a variety of colors and patterns"
            personality="Even temperament"
            />
            <Card 
            img={cat6}
            name="Balinese"
            gender="LH"
            characteristic=" LH variety of Siamese; chocolate, seal, blue and lilac point colors"
            personality="Vocal, affectionate, active"
            />
          </div>
        </section>
      </main>
      <hr/>
      <footer>
        <section id="footer">
          <h1 className="section_heading">If you're interested, please contact me one of the below.</h1>
           
          <a href=""><i class="fab fa-instagram"></i></a>
          <a href=""><i class="fab fa-twitter"></i></a>
          <a href=""><i class="fab fa-facebook-f"></i></a>
          <p>Copyright © 2020</p>
        </section>
      </footer>
    </div>

  );
}

export default App;
