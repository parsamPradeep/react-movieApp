import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
class Form extends Component {
  state = { data: {}, error: {} };

  validate = () => {
    const { data } = { ...this.state };
    const error = {};
    const options = { abortEarly: false };
    const result = Joi.validate(data, this.schema, options);
    if (!result.error) return null;
    for (let item of result.error.details) error[item.path[0]] = item.message;

    return Object.keys(error).length === 0 ? null : error;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleSubmit = e => {
    e.preventDefault();
    const error = this.validate();
    this.setState({ error: error || {} });
    if (error) return;
    this.doSubmit();
  };
  handleOnChange = ({ currentTarget: input }) => {
    const { data, error } = { ...this.state };

    const errorMassage = this.validateProperty(input);
    if (errorMassage) error[input.name] = errorMassage;
    else delete error[input.name];

    data[input.name] = input.value;
    this.setState({ data, error });
  };
  renderButton = label => {
    //disabled={this.validate()}
    return <button className="btn btn-primary">{label}</button>;
  };
  renderInput = (name, label, type = 'text') => {
    const { data, error } = { ...this.state };
    return (
      <Input
        name={name}
        type={type}
        value={data[name]}
        onChange={this.handleOnChange}
        label={label}
        error={error[name]}
      />
    );
  };
}

export default Form;
