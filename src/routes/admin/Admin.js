import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Admin.css';
import Link from "../../components/Link";

class Admin extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>

          <br/>
          <h1>Admin</h1>

          <Link to="/ad-type">
            <Button icon>
              <Icon name='buysellads' size='massive' /><br/><br/>
              Add Ad Type
            </Button>
          </Link>
          &nbsp;&nbsp;

          <Link to="/customer">
            <Button icon>
              <Icon name='user circle' size='massive' /><br/><br/>
              Add Customer
            </Button>
          </Link>
          &nbsp;&nbsp;

          <Link to="/price-rule">
            <Button icon>
              <Icon name='dollar' size='massive' /><br/><br/>
              Add Price Rule
            </Button>
          </Link>
          &nbsp;&nbsp;

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Admin);
