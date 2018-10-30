import React from 'react';
import Customer from './Customer';
import Layout from '../../components/Layout';

async function action() {

  return {
    title: 'Customer',
    chunks: ['customer'],
    component: (
      <Layout>
        <Customer />
      </Layout>
    ),
  };
}

export default action;
