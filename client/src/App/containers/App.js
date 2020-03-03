import {connect} from 'react-redux';
import {removeCurrentUser, addCurrentUser} from '../../storage/actions/actions.js';

import App from "../components/App.jsx";

const mapStateToProps = (state) => {
    return {
        user: state.currentUser
    }
};

const mapDispatchToProps = { removeCurrentUser, addCurrentUser };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)