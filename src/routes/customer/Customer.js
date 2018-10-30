import React from 'react';
import PropTypes from 'prop-types';
import { Form } from "semantic-ui-react";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Customer.css';

class Customer extends React.Component {
  static propTypes = {
  };

  static contextTypes = { fetch: PropTypes.func.isRequired };

  state = {
    name: ''
  };

  handleAddCustomer = (event) => {
    event.preventDefault();

    // this.context.fetch(`/api/customer`, {
    //   method: 'POST',
    //   headers: {'Content-Type':'application/json'},
    //   body: {
    //     "name": this.state.name
    //   }
    // }).then((response) => {
    //     console.info('API for adding Customer');
    //     console.info(response);
    //   });
  };

  handleChange = (event) => {
    this.setState({name: event.target.value});
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>

          <Form onSubmit={this.handleAddCustomer}>
            <br/>
            <h1>Add Customer</h1>

            <Form.Group widths='equal'>
              <Form.Input fluid label='Name' placeholder='Customer Name' value={this.state.name} onChange={this.handleChange} />
            </Form.Group>

            <Form.Button type='submit'>Add</Form.Button>

          </Form>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Customer);
