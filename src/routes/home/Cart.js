import React from "react";
import PropTypes from 'prop-types';
import uuidv4 from "uuid/v4";
import startCase from 'lodash/startCase';
import { Icon,  List, Transition } from "semantic-ui-react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Home.css";

class Cart extends React.Component {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  render() {
    const { items } = this.props;

    return (
      <span>
        {
          (items.length > 0) &&
          <Transition.Group as={List} duration={200} divided size='large' verticalAlign='middle'>
            {items.map(item => (
              <List.Item key={uuidv4()}>
                <Icon name='box' size='large' color='green' />
                <List.Content header={startCase(item)} />
              </List.Item>
            ))}
          </Transition.Group>
        }
      </span>
    );
  }
}

export default withStyles(s)(Cart);
