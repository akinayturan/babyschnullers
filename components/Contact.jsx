import React from 'react';

const Contact = () => {
  return (
      <div>
        <section className="contact-info-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-info-one__single">
                  <div className="contact-info-one__icon"><i className="fas fa-envelope"></i>
                  </div>
                  <h2 className="contact-info-one__title">Publisher</h2>
                  <p className="contact-info-one__text">Şükrü Dursun, Konya, Turkey <br />info@jieas.com</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-info-one__single">
                  <div className="contact-info-one__icon"><i className="fas fa-tools"></i>
                  </div>
                  <h2 className="contact-info-one__title">Support Contact</h2>
                  <p className="contact-info-one__text">Şükrü Dursun <br />
                    info@jieas.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Contact;
