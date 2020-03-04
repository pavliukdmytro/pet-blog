import {connect} from 'react-redux';
import {addCurrentUser} from '../../../../storage/actions/actions.js';

import Registration from '../../../components/Auth/Registration/Registration.jsx';

const mapStateToProps = (state) => {
    return {
        user: state.currentUser
    }
};

const mapDispatchToProps = { addCurrentUser };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration)
