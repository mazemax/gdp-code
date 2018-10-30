import React from "react";
import PropTypes from 'prop-types';
import uuidv4 from "uuid/v4";
import startCase from 'lodash/startCase';
import { Button, Icon } from "semantic-ui-react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Home.css";

class Ad extends React.Component {

  static propTypes = {
    adTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleAdd: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired
  };

  render() {
    const { items, adTypes, handleAdd, handleRemove } = this.props;

    return (
      adTypes.map(type => (
        <span key={uuidv4()}>
          <Icon name='box' size='large' color='grey' /> {startCase(type)}
          &nbsp;&nbsp;&nbsp;
          <Button.Group>
             <Button disabled={(items.length === 0) || (items.indexOf(type) < 0)} icon='minus' onClick={() => handleRemove(type)} />
             <Button icon='plus' onClick={() => handleAdd(type)} />
          </Button.Group>
          <br/><br/>
        </span>
      ))
    );
  }
}

export default withStyles(s)(Ad);
