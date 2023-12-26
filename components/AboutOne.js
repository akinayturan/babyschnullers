import React, {Component} from 'react';

class AboutOne extends Component {
    constructor() {
        super()
        this.state = {
            startCounter: false
        }
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({startCounter: true});
        }
    }

    render() {
        return (
            <section className="about-one ">
                <img src="assets/images/circle-stripe.png" className="about-one__circle" alt=""/>
                <div className="container text-center">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">
                            👼Emzikzincirleri 💙💗
                        </h2>
                    </div>
                    <h3> 👼Schnullerketten 💗💙</h3>

                    <p className="about-one__text">
                        👇Für Bestellungen/Siparisleriniz icin:
                        <br />
                        📝 babyschnullers@gmail.com
                    </p>
                    <a className="thm-btn about-one__btn" target="_blank" href="https://wa.me/+4917661461787"><i className="fab fa-whatsapp" title="WhatsApp"></i> WhatsApp 📱</a>
                </div>
            </section>
        );
    }
}

export default AboutOne;