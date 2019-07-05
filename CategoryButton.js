import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

export default class CategoryButton extends Component{
  constructor(props){
    super(props);
    this.state={
      defaultColor: true
    }
  }
  _onPressButton(){
    this.setState({
      defaultColor : !this.state.defaultColor
    });
  }
  render(){
    let bgColor=this.state.defaultColor ? "pink" : "white"
    
    return (
      <TouchableOpacity onPress={this._onPressButton.bind(this)}>
        <Text style={{borderRadius : 5, padding : "1%", paddingLeft :"10%", paddingRight :"10%", backgroundColor : bgColor}}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

styles = StyleSheet.create({
  choiceBox : {
    borderRadius : 5,
    padding : "1%",
    paddingLeft :"10%",
    paddingRight :"10%",
  },
});
