import React from 'react';
import { Grid, Divider } from "semantic-ui-react";
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

    this.state = {
      adTypes,
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
    let itemsCopy = items.slice(0);
    const index = itemsCopy.indexOf(type);

    if(index >= 0) {
      itemsCopy.splice(index, 1);

      this.setState({
        items: itemsCopy
      });
    }
  };


  render() {
    const { items, adTypes, total } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>

          <br/>
          <Grid columns={3} divided>
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
