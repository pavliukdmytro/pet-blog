import {connect} from 'react-redux';
import Header from '../../components/Header/Header.jsx';
import {removeCurrentUser} from '../../../storage/actions/actions.js';

const mapStateToProps = (state) => {
    return {
        user: state.currentUser
    }
};

const mapDispatchToProps = { removeCurrentUser };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
