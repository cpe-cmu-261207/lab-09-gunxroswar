import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto" style={{ maxWidth: "800px" }}>
        <div className="vstack rounded-4 bg-white p-lg-4">
          <div className="d-flex">
            <img
              src="/kodtae.jpg"
              width="200"
              height="200"
              style={{ objectFit: "cover", minWidth: "200px" }}
              className="rounded-circle border-2"
            />
            <div className="d-flex flex-column p-2 rounded-3 ms-3 gap-3">
              <span className=" h1">Thirachai Gun Ngaoju </span>
              <span style={{ color: "gray" }}>
                Hola amigo,My name is Thirachai.I am 21 years old.I'd graduated
                from Chonrasadornumrung school.I love playing basketball,
                weight-lifting,do some exercise,cook the food and listen to any
                kind of music.In the future i wish i could coding like a pro.
              </span>
            </div>
          </div>
          <div className="text-center h4">
            <br />
            <br />
            <span className=" h3 border-5 p-3">My Skills</span>
            <br />
            <br />
          </div>
          {/* <!-- Cardsssss? --> */}
          <div className="vstack">
            <div className="card mb-3" style={{ maxWidth: "1000px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="/cooking.jpg" className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">Cooking</h4>
                    <p className="card-text " style={{ color: "gray" }}>
                      i love cooking very much.I has cooked since i was 5 years
                      old.My fisrt dishes is Kai-Jeaw.For now i can cook many
                      dishes can still learn how to do another.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card22222222 --> */}
            <div className="card mb-3" style={{ maxWidth: "1000px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="/basketball.jpg" class="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">Basketball</h4>
                    <p className="card-text " style={{ color: "gray" }}>
                      I am basketbasll player who play in Guard-Forward
                      position.I have excellent shooting and dribbring skills.I
                      also have high basketball iq that why i am good at passing
                      too.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card3333333333333333 --> */}
            <div className="card mb-3" style={{ maxWidth: "1000px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="/gaming.jpg" className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">Gaming</h4>
                    <p className="card-text " style={{ color: "gray" }}>
                      i like to play games especialy mmorpg, but i hate grinding
                      so much because it's drain my life and time too much.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center" style={{ color: "#2173de" }}>
              <span> © 2022 gunthirachai.com By Thirachai Ngaoju</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
