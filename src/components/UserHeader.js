import React from 'react';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }
    
    render() {

        const { user } = this.props;
        
        if(!user) {
            return null;
        }
        
        return (
            <div className="header">{user.name}</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    //mapStateToProps has another argument ownProps which is 
    //a rference to the props that are to be passed
    //for precomputation we can use ownProps
    return { user: state.users.find(user => user.id === ownProps.userId) };
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);