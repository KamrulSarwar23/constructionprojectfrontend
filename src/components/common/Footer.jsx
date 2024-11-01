import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <h3>UrbanEdge Constructions</h3>
            <div className="pe-5">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <h3>Our Services</h3>
            <ul>
              <li>
                <a href="">Speciality Construction</a>
              </li>

              <li>
                <a href="">Civil Construction</a>
              </li>
              <li>
                <a href="">Residential Construction</a>
              </li>
              <li>
                <a href="">Corporate Construction</a>
              </li>
              <li>
                <a href="">Building Construction</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>

              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="">01851-939223</a>
              </li>

              <li>
                <a href="">kh4035209@gmail.com</a>
              </li>
              <li>
                <a href="">Chittagong, Bangladesh</a>
              </li>
            </ul>
          </div>
          <hr />

          <div className="text-center pt-4">
            Copyright @2024 UrbanEdge Construction. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
