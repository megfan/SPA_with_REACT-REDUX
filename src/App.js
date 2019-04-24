import React, { Component } from 'react';
import Header from './components/Header'
import Items from './components/Items'

class App extends Component {
  // state = {
  //   search: ''
  // }
  // handleChange = (e) => {
  //   this.setState({
  //     search:  e.target.value
  //   })
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.searchResult(this.state.search);
  // }
  render() {
    return (
      <div className="app">
          <div>
            <Header/>
            <Items />
          </div>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {items: state.items}
// }
// const mapDispatchToProps = (dispatch) => {
//   return{
//     searchResult: (search) => dispatch(searchResult(search))
//   }
// }

export default App;
