import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
// import "./App.css";

class App extends Component {
state ={
  friends,
  message: "Click an image to begin, No clicking the same image twice.... tisk tisk",
  score: 0,
  highscore: 0,
  clicked:[]
};

clickHandler = id => {
console.log(id)
  //searches array for id that matches
  this.state.friends.find((friends, i) => {    
    console.log("HIIII")
      if (friends.id === id) {
          //checks clicked and toggles true
          if(friends.clicked === false) {
              friends.clicked = true    
                     
              //adds to score and update message
              this.setState({score : this.state.score + 1, 
              message: "You got this!!!", highscore: this.state.highscore +1});
              
              //shuffles characters
              this.state.friends.sort(() => Math.random() - 0.5);
              return true; 
          } else {
          this.gameOver();
          }
      }
      return false;
  });
  
}

gameOver = () => {
  //checks to set new highscore
  if (this.state.score > this.state.highscore) {
    this.setState({highscore: this.state.score});
  }
  //resets each friends.clicked to false
  this.state.friends.forEach(friends => {
    friends.clicked = false;
  });
  this.setState({score: 0, highscore: this.state.highscore, message: "Game Over! Click an image to try again."});
}




render() {
  return (
    <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore} message={this.state.message}></Title>
        <div className="logo"></div>
      {this.state.friends.map(friends => (
        <FriendCard
          clickHandler={this.clickHandler}
          id={friends.id}
          key={friends.id}
          name={friends.name}
          image={friends.image}
        />
      ))}
      
    </Wrapper>
  );
}
}







// const App = () => (
//   <Wrapper>
//     <h1 className="title">Click Game</h1>
//     <FriendCard
//       name={friends[0].name}
//       image={friends[0].image}
//       occupation={friends[0].occupation}
//       location={friends[0].location}
//     />
//     <FriendCard
//       name={friends[1].name}
//       image={friends[1].image}
//       occupation={friends[1].occupation}
//       location={friends[1].location}
//     />
//     <FriendCard
//       name={friends[2].name}
//       image={friends[2].image}
//       occupation={friends[2].occupation}
//       location={friends[2].location}
//     /> 
//   </Wrapper>
// );

export default App;
