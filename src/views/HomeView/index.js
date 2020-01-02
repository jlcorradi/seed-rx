import React, { Fragment, useRef } from 'react';
import HeaderSection from '../../layout/HeaderSection';
import { NotificationManager } from 'react-notifications';
import Http from '../../infra/Http';
import CurrencyInput from 'react-currency-input';
import useForm from '../../hooks/useForm';
import { ruleRunner } from '../../error-utils/ValidationHelper';
import { required, email } from '../../error-utils/ValidationRules';
import classnames from 'classnames';

const buttonClick = () => {
  Http.get('/api/todos').then(_response => {
    NotificationManager.success('Your GET request executed successifully!');
  });
};

export default () => {
  return (
    <Fragment>
      <HeaderSection title="Home" subtitle="Home View" />
      <div className="row">
        <div className="col-md-12">
          <div className="box">
            <HeaderSection title="Common components" />
            <p>This is how you make the header section look good:</p>
            <code>{'<HeaderSection title="Home" subtitle="Home View" />'}</code>
          </div>
          <div className="box mt-2">
            <HeaderSection
              title="Notification System"
              subtitle="Example"
            ></HeaderSection>
            <NotificationDemo />
          </div>
          <div className="box mt-2">
            <HeaderSection title="Api proxy"></HeaderSection>
            <p>
              There is an api proxy set up in order to prevent cors validation
              error while in development. You may change the appropriate section
              in webpack-config.js to make it suit your needs.
            </p>
            <p>
              All api requests are wrapped in a way that a loader component will
              show up after the set threshold, which is 500 milliseconds by
              default, but you can surely customize that.
            </p>
            <button className="btn btn-info" onClick={buttonClick}>
              Hit the backend
            </button>
          </div>
          <div className="box mt-2 mb-3">
            <HeaderSection title="Demo form with validation"></HeaderSection>
            <DemoForm></DemoForm>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const NotificationDemo = () => {
  const txtMessage = useRef(null);
  return (
    <>
      <div className="form-group">
        <label htmlFor="txtMessage">Type in your message</label>
        <input type="text" className="form-control" ref={txtMessage} placeholder="Message goes Here" />
      </div>
      <div className="form-group">
        <div className="btn-group">
          <button type="button" className="btn btn-info">
            Show Message
          </button>
          <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false" data-reference="parent">
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
            <a className="dropdown-item" href="#"
              onClick={() =>
                NotificationManager.success(txtMessage.current.value)
              }>
              <span className="text-success">Success</span>
            </a>
            <a className="dropdown-item" href="#"
              onClick={() => NotificationManager.info(txtMessage.current.value)}>
              <span className="text-info">Information</span>
            </a>
            <a className="dropdown-item" href="#"
              onClick={() =>
                NotificationManager.warning(txtMessage.current.value)
              }>
              <span className="text-warning">Warning</span>
            </a>
            <a className="dropdown-item" href="#"
              onClick={() =>
                NotificationManager.error(txtMessage.current.value)
              }>
              <span className="text-danger">Error</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const DemoForm = () => {
  const validations = [
    ruleRunner('name', 'Name', required),
    ruleRunner('email', 'Email', required, email),
  ]
  const [model, errors, submitted, onModelChange, onSubmit] = useForm({
    name: '',
    birthDate: '',
    salary: '',
    email: '',
    age: '',
  }, validations, formOnSubmit);

  function formOnSubmit(model) {
    Http.post('/api/employees', model);
  }

  function hasError(field) {
    return submitted && errors[field];
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="form-group" className={classnames({ 'error': hasError('name') })}>
        <label htmlFor="txtName">Name</label>
        <input type="text" className="form-control" placeholder="Type in your name" name="name" value={model['name']}
          onChange={e => onModelChange(e.target.name, e.target.value)} required />
        <span className="error">{errors.name}</span>
      </div>
      <div className="form-group" className={classnames({ 'error': hasError('email') })}>
        <label htmlFor="txtName">Email</label>
        <input type="email" className="form-control" placeholder="Type in your email" name="email" value={model['email']}
          onChange={e => onModelChange(e.target.name, e.target.value)} required />
        <span className="error">{errors.email}</span>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="txtName">Age</label>
            <input type="number" className="form-control" placeholder="Type in your age" name="age" value={model['age']}
              onChange={e => onModelChange(e.target.name, e.target.value)} />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label htmlFor="txtName">Salary</label>
            <CurrencyInput className="form-control" decimalSeparator="," thousandSeparator="." name="salary" value={model['salary']}
              onChangeEvent={(e, _masked, value) =>
                onModelChange(e.target.name, value)
              } />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label htmlFor="txtName">Birth Date</label>
            <input type="date" className="form-control" placeholder="Type in your Birth date" name="birthDate" value={model['birthDate']}
              onChange={e => onModelChange(e.target.name, e.target.value)} />
          </div>
        </div>
      </div>
      <div className="form-group">
        <input type="submit" className="btn btn-info" value="Submit" />
      </div>
    </form>
  );
};
