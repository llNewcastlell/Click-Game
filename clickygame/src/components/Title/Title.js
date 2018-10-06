import React, {Component }from "react";
import "./Title.css";


class Title extends Component{
    render(){
        return(
            <div>
            <h1 className="title">Score: {this.props.score} </h1>
            <span> <h1>HighScore: {this.props.highscore}</h1></span>
            <span> <h1>Message: {this.props.message}</h1></span>
            
            
            </div>
        );
    }
}
// const Title = props => 




export default Title;
