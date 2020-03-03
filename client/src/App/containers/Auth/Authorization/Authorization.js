import { connect } from 'react-redux';
import {addCurrentUser} from '../../../../storage/actions/actions.js';

import Authorization from '../../../components/Auth/Authorization/Authorization.jsx';

const mapStateToProps = (state) => {
    return {
        user: state.currentUser
    }
};

const mapDispatchToProps = { addCurrentUser };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Authorization)

