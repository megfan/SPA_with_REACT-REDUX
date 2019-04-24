import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { searchResult } from '../store/actions/itemActions'

class Header extends Component {
  // renderInput({input, label}){
  //  return (
  //     <div className="field">
  //       <label>{label}</label>
  //       <input 
  //         onChange={input.onChange}
  //         defaultValue = {input.value}
  //         autoComplete="off"/>
  //     </div>
  //  );
  // }
  renderError({ error, touched }){
    if(touched && error){
      return (
        <div className="ui error message">
          <div className="header">{error}</div>        
        </div>
      );
    }
  }
    renderInput = ({ input, label, meta }) => {
        return (
          <div className="field">
            <label>{label}</label>
            <input {...input} autoComplete="off"/>
            {this.renderError(meta)}
          </div>
        );
    }


  onSubmit = (search) => {
    console.log(search);
    this.props.searchResult(search.search);
  }
  render() {
    return (
    <header className="app__header">
      <h1 className="app__header--title">SPACER</h1> 
      <p>Begin your journey through aour amazing galaxy,
      ans discover places you never even heard of.</p>    

      <form className="app__search error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="search" component={this.renderInput} label="Type anything space-related to start."/>

        <button className="button submit">Submit</button>
      </form>
    </header>
    )}
};

const validate = (formValues) => {
  const errors = {};

  if(!formValues.title){
    errors.title = 'You must enter a title';
  }
  return errors;
};

const formWrapped = reduxForm({ 
  form: 'searchResult'
})(Header);

export default connect(null, { searchResult})(formWrapped);
// export default Header;