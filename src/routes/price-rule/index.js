import React from 'react';
import PriceRule from './PriceRule';
import Layout from '../../components/Layout';

async function action() {

  return {
    title: 'PriceRule',
    chunks: ['price-rule'],
    component: (
      <Layout>
        <PriceRule />
      </Layout>
    ),
  };
}

export default action;
