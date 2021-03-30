import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../../actions/user_actions'
import QuestContainer from '../quests/quest_container'

class UserPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          user: null || this.props.user,
        };
    }


    componentDidMount(){
        if (!this.props.user){
            this.props.fetchUser(this.props.userId)
            .then(this.setState({
                user: this.props.user
            }))
        }
    }

    render() {
    if (!this.props.user){
        return null;
    }
    let quests = this.props.quests;
    let myQuests = [];
    const authorId = this.props.authorId;
    quests.forEach((quest)=>{
        if (quest.authorId === parseInt(authorId)){
            myQuests.push(quest)
        }
    })
    
    let avatar = this.props.user.avatar;
    let sortedQuests = myQuests.reverse();
    let showQuests = sortedQuests.map((quest, idx)=>(
        <QuestContainer key={idx} quest={quest} loc={"userpage"}/>
    ))
    
        return (<>
            <div className="user-page-top">
                <img src={avatar}/>
                <div className="user-page-username">{this.props.user.username}</div>
            </div>
            <div>{showQuests}</div>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let userId = ownProps.authorId;
    return {
    userId: userId,
    quests: Object.values(state.entities.quests),
    user: state.entities.users[userId]
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
})
    



export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

