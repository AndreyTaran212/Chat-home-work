import React from 'react';
import { connect } from 'react-redux';
import { createLoginRequestAction } from '../../../actions';
import { Field, Formik, Form } from 'formik';

let LoginForm = props => {

  const handleSubmit = (values) => {
    props.login(values);
  };

  return (
    <Formik onSubmit={ handleSubmit } initialValues={ {
      login: '',
      password: '',
    } }>
      {
        ({}) => (
          <Form>
            <Field name={ 'login' } type={ 'text' } placeholder={ 'login' }/>
            <br/>
            <Field name={ 'password' } type={ 'password' }
                   placeholder={ 'password' }/>
            <br/>
            <button type={ 'submit' }>login</button>
          </Form>
        )
      }
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ( {
  login: (data) => dispatch(createLoginRequestAction(data)),
} );

export default connect(null, mapDispatchToProps)(LoginForm);
