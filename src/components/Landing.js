import React, { Component } from 'react';
import LandingMain from './LandingMain';
import Footer from './Footer';

class Landing extends Component {

    render() {

        return (
            <section class="allboxes">
                <LandingMain />
                <Footer />
            </section>

        );
    }
}

export default Landing;