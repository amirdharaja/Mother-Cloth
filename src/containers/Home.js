
import React, { Component } from 'react';

import MainNav from '../components/Nav';
import { connect } from 'react-redux';


class Home extends Component {

    render() {
        return (
            <div className="Home">
                <MainNav />
                <h1>Welcome HOME</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state
}


export default connect(mapStateToProps)(Home);
