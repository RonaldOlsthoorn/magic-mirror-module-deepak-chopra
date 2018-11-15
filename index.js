import React, { Component } from 'react';
import config from './config.json';


export default class WisdomGenerator extends Component {

  constructor(props) {
    super(props);
    this.url = config.url;
    this.state = {
        quote: this.getQuote()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000 * 10 * 15
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({quote: this.getQuote()})
  }

  getQuote(){

    fetch(this.url)
      .then(res =>{
        res.json().then(
          result =>{
            console.log(this)
            this.setState({
              quote: result.quote
            });
          }
        );
      }
    ); 
  }

  render() {

    const css = `
      .my-element {
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
      }

      .my-h1 {
        text-align: center;
      }
    `

    return (
      <div className="my-element">
        <style>{css}</style>
        <h1 className="my-h1">{this.state.quote}</h1>
      </div>
    );
  }
}
