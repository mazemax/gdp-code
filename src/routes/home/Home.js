import React from 'react';
import { Grid, Divider, Form } from "semantic-ui-react";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Ad from './Ad';
import Cart from './Cart';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);

    const adTypes = ['classic', 'standout', 'premium'];
    const customerOptions = [
      { key: 'c1', text: 'Unilever', value: 'unilever' },
      { key: 'c2', text: 'Apple', value: 'apple' },
      { key: 'c3', text: 'Nike', value: 'nike' },
      { key: 'c4', text: 'Ford', value: 'ford' },
    ];

    this.state = {
      adTypes,
      customerOptions,
      items: [],
      total: 0
    };
  }

  handleAdd = (type) => {
    const {items} = this.state;

    this.setState({
      items: items.concat([type])
    });
  };

  handleRemove = (type) =>  {
    const {items} = this.state;
    const itemsCopy = items.slice(0);
    const index = itemsCopy.indexOf(type);

    if(index >= 0) {
      itemsCopy.splice(index, 1);

      this.setState({
        items: itemsCopy
      });
    }
  };


  render() {
    const { items, adTypes, customerOptions, total } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>

          <br/>
          <Grid columns={3} divided>

            <Grid.Row>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <h2>Customer</h2>&nbsp;&nbsp;&nbsp;&nbsp;
              <Form.Group widths='equal'>
                <Form.Select fluid options={customerOptions} placeholder='Customer' />
              </Form.Group>
            </Grid.Row>

            <Grid.Row>

              <Grid.Column>
                <h2>Ads</h2>
                <Divider/>
                <Ad
                  adTypes={adTypes}
                  items={items}
                  handleAdd={this.handleAdd}
                  handleRemove={this.handleRemove}
                />
              </Grid.Column>

              <Grid.Column>
                <h2>Cart</h2>
                <Divider/>
                <Cart
                  items={items}
                />
              </Grid.Column>

              <Grid.Column>
                <h2>Total Expected</h2>
                <Divider/>
                <span className={s.totalPrice}>$ {total}</span>
              </Grid.Column>

            </Grid.Row>
          </Grid>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
