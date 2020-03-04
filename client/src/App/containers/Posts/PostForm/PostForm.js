import {connect} from 'react-redux';
import CreatePostBlock from '../../../components/Posts/PostForm/PostForm.jsx';
import {createPost} from '../../../../storage/actions/actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
};
const mapDispatchToProps = {
    createPost
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostBlock);