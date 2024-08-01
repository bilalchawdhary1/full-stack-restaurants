const Footer = () => {
    return (
      <section id="footer">
      <div className="f-container">
        <div className="row">
          <div className="col-md-4">
            <div
              className="block wow fadeInLeft animated"
              data-wow-delay="200ms"
              style={{
                visibility: "visible",
                animationDelay: "200ms",
                animationName: "fadeInLeft"
              }}
            >
              <h3>
                CONTACT <span>INFO</span>
              </h3>
              <div className="info">
                <ul>
                  <li>
                    <h4>
                      <i className="fa fa-phone" />
                      Telefone
                    </h4>
                    <p>(000) 123 456 78- (000) 123 4567 89</p>
                  </li>
                  <li>
                    <h4>
                      <i className="fa fa-map-marker" />
                      Address
                    </h4>
                    <p>2046 Blue Spruce Lane Laurel Canada</p>
                  </li>
                  <li>
                    <h4>
                      <i className="fa fa-envelope" />E mail
                    </h4>
                    <p>rest@gmail.com - rest@mail.ru</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* .col-md-4 close */}
          <div className="col-md-4">
            <div
              className="block wow fadeInLeft animated"
              data-wow-delay="700ms"
              style={{
                visibility: "visible",
                animationDelay: "700ms",
                animationName: "fadeInLeft"
              }}
            >
              <h3>
                LATEST <span>BLOG POSTS</span>
              </h3>
              <div className="blog">
                <ul>
                  <li>
                    <h4>
                      <a href="#">Nov 9-2014</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adip iscing elit.
                      Curabitur ut blandit sapien
                    </p>
                  </li>
                  <li>
                    <h4>
                      <a href="#">Sep 8-2014</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adip iscing elit.
                      Curabitur ut blandit sapien
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* .col-md-4 close */}
          <div className="col-md-4">
            <div
              className="block wow fadeInLeft animated"
              data-wow-delay="1100ms"
              style={{
                visibility: "visible",
                animationDelay: "1100ms",
                animationName: "fadeInLeft"
              }}
            >
              <div className="gallary">
                <h3>
                  PHOTO <span>STREAM</span>
                </h3>
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/photo/photo-1.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/photo/photo-2.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/photo/photo-3.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/photo/photo-4.jpg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="social-media-link">
                <h3>
                  Follow <span>US</span>
                </h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* .col-md-4 close */}
        </div>
        {/* .row close */}
      </div>
      {/* .containe close */}
    </section>
    
    );
  };
  
  export default Footer;