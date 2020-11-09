import React from 'react';
import {connect} from 'react-redux';

const Welcome = (props) => {
    return <div className="centered-container">
        <h1>This is the Welcome page</h1>
    </div>
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Welcome);