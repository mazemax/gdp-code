import React from 'react';
import Admin from './Admin';
import Layout from '../../components/Layout';

async function action({ }) {

  return {
    title: 'Admin',
    chunks: ['admin'],
    component: (
      <Layout>
        <Admin />
      </Layout>
    ),
  };
}

export default action;
