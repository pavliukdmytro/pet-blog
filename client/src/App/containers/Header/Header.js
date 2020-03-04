import {connect} from 'react-redux';
import Header from '../../components/Header/Header.jsx';


const mapStateToProps = (state) => {
    return {
        user: state.currentUser
    }
};

export default connect(
    mapStateToProps, null
)(Header);
