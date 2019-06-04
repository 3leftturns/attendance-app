import React from 'react';
import {Component} from 'react';


class Today extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: {}
    };
  } 

componentDidMount() {
  let date = this.getDate();
  this.setState({date: date});
}

getDate = () => {
  let now = new Date();

  let date = "" + (now.getMonth() + 1 )+ "/" + now.getDate() + "/" + now.getFullYear();

  return date;
  
  // objDate = new Date("10/11/2009"),
      // locale = "en-us",
      // month = objDate.toLocaleString(locale, { month: "long" });
  
  
  
  // or if you want the shorter date: (also possible to use "narrow" for "O"
  // console.log(objDate.toLocaleString(locale, { month: "short" }));  
} 

render() {
  return (
    <p>{this.state.date}</p>
  );
}

  }
export default Today;
