import React, { Component } from 'react';
import { connect } from 'react-redux';

class Items extends Component {
  renderList(){
    return (this.props.items.map(item => {
      return (item.map((elem, index) => {
        return(
          <div className="app__results__container--item" key={index}>
              <img src={elem.links[0].href} alt=""/>
              <div className="app__results__container--item--data">
                <h2>{elem.data[0].title}</h2>
                <h3>{elem.data[0].date_created}</h3>
                <p>
                {elem.data[0].description.length > 600 ? elem.data[0].description.substring(0,600) + '...' : null}</p>
              </div>              
          </div>
        )
      }));
    }));
  };
  render(){
    const { items } = this.props.items;
    return (
      <div className="app__results">
        <h1 className="app__results--title">Your results:</h1>
        <div className="app__results__container">
          {this.props.items === [] || this.props.items === undefined ? null : this.renderList()}
        </div>
      </div>
    )
  };
};

const mapStateToPops = (state) => {
  return {items: Object.values(state.items)}
};
export default connect(mapStateToPops)(Items);