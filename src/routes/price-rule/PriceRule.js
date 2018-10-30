import React from 'react';
import { Form, Segment } from "semantic-ui-react";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PriceRule.css';

class PriceRule extends React.Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);

    const adTypes = [
      { key: 'a1', text: 'classic', value: 'classic' },
      { key: 'a2', text: 'standout', value: 'standout' },
      { key: 'a3', text: 'premium', value: 'premium' },
    ];
    const customerOptions = [
      { key: 'c1', text: 'Unilever', value: 'unilever' },
      { key: 'c2', text: 'Apple', value: 'apple' },
      { key: 'c3', text: 'Nike', value: 'nike' },
      { key: 'c4', text: 'Ford', value: 'ford' },
    ];

    this.state = {
      adTypes,
      customerOptions
    };
  }

  render() {
    const { adTypes, customerOptions } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>

          <Form>
            <br/>
            <h1>Add Price Rule</h1>

            <Form.Group widths='equal'>
              <Form.Select fluid label='Ad Type' options={adTypes} placeholder='Ad Type' />
              <Form.Select fluid label='Customer' options={customerOptions} placeholder='Customer' />
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
