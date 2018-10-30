import React from 'react';
import { Form } from "semantic-ui-react";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AdType.css';

class AdType extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>

          <Form>
            <br/>
            <h1>Add Ad Type</h1>

            <Form.Group widths='equal'>
              <Form.Input fluid label='Name' placeholder='Ad Name' />
              <Form.Input fluid label='Price' placeholder='Ad Price' />
            </Form.Group>

            <Form.Button>Add</Form.Button>

          </Form>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(AdType);
