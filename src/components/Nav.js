
import React from 'react';
import { connect } from 'react-redux';

import "../styles/scss/style.scss";


class MainNav extends React.PureComponent {

    render() {
        return (
            <main>
                NAV BAR
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps)(MainNav);
