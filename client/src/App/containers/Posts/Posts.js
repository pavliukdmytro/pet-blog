import {connect} from 'react-redux';
import Posts from '../../components/Posts/Posts/Posts.jsx';
import {createPost, removePost} from '../../../storage/actions/actions.js';
// import post from "../../../storage/reducers/post";

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

const mapDispatchToProps = {
    createPost,
    removePost
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);
