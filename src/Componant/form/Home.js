import React from "react";
import "./Home.css";
import Slider from "../navigation/Slider";
import VMV from "../Page/VMV";
import Service from "../Page/Service";
export default function Home() {
  return (
    <div>
      <Slider />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx-auto"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <button to="/About" type="button" class="btn btn-warning shadow">
                Read more..
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission and Values */}

      <VMV/>

      <Service/>
      
    </div>
  );
}
