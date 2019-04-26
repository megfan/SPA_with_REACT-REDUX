import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { searchResult } from '../store/actions/itemActions';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Header extends Component {
  componentDidMount(){
    scroller.scrollTo('app', {
      duration: 500,
      delay: 0,
      smooth: true,
    });
  };

  renderError({ error, touched }){
    if(touched && error){
      return <div className="app__header--error">{error}</div>
    }
  };
  renderInput = ({ input, label, meta }) => {
      return (
        <div className="app__search">
          <label>{label}</label>
          <input {...input} autoComplete="off"/>
          {this.renderError(meta)}
        </div>
      );
  }
  onSubmit = (search) => {
    this.props.searchResult(search.search);
    scroller.scrollTo('app__results', {
      duration: 1800,
      delay: 100,
      smooth: true,
    });
  }
  render() {
    return (
      <header className="app__header">
        <h1 className="app__header--title">SPACER</h1> 
        <p>Begin your journey through aour amazing galaxy,
        ans discover places you never even heard of.</p>    
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
          <Field name="search" component={this.renderInput} label="Type anything space-related to start."/>
        </form>
      </header>
    )}
};

const validate = (formValues) => {
  const errors = {};

  if(!formValues.search){
    errors.search = 'The field is required';
  }
  return errors;
};

const formWrapped = reduxForm({ 
  form: 'searchResult',
  validate
})(Header);

export default connect(null, { searchResult})(formWrapped);