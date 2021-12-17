import { useWeb3React } from '@web3-react/core';
import { injected } from './Connector';
import React from 'react';

interface Props {}

export const WalletConnector = (props: Props) => {
  const { active, account, library, activate, deactivate } = useWeb3React();
  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }
  return <div></div>;
};
