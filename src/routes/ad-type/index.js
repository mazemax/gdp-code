import React from 'react';
import AdType from './AdType';
import Layout from '../../components/Layout';

async function action({ }) {

  return {
    title: 'AdType',
    chunks: ['ad-type'],
    component: (
      <Layout>
        <AdType />
      </Layout>
    ),
  };
}

export default action;
