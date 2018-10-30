import React from 'react';
import { Form, Segment } from "semantic-ui-react";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PriceRule.css';

const options = [
  { key: 't', text: 'True', value: 'true' },
  { key: 'f', text: 'False', value: 'false' },
];

class PriceRule extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>

          <Form>
            <br/>
            <h1>Add Price Rule</h1>

            <Form.Group widths='equal'>
              <Form.Select fluid label='Ad Type' options={options} placeholder='Ad Type' />
              <Form.Select fluid label='Customer' options={options} placeholder='Customer' />
            </Form.Group>

            <Segment>
              <h2>Deal</h2>
              <Form.Group widths='equal'>
                <Form.Input fluid label='Buying Count' placeholder='Buying Count' type='number' />
                <Form.Input fluid label='Selling Count' placeholder='Selling Count' type='number' />
              </Form.Group>
            </Segment>

            <Segment>
              <h2>Price Drop</h2>
              <Form.Group widths='equal'>
                <Form.Input fluid placeholder='Price Drop' type='number' />
              </Form.Group>
            </Segment>

            <Segment>
              <h2>Purchase Discount</h2>
              <Form.Group widths='equal'>
                <Form.Input fluid label='Purchase Count' placeholder='Purchase Count' type='number' />
                <Form.Input fluid label='Discounted Price' placeholder='Discounted Price' type='number' />
              </Form.Group>
            </Segment>

            <Form.Button>Add</Form.Button>

          </Form>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(PriceRule);
