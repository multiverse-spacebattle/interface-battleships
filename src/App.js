import {useNetwork, ChainId, useChainId, useAddress, useDisconnect, useCoinbaseWallet } from '@thirdweb-dev/react';



function App() {
  const address = useAddress();
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const disconnectWallet = useDisconnect();
  const chainId = useChainId();

  const [, switchNetwork] = useNetwork();

  return (
    <div>
      {address ? (
        <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your address: {address}</p>
        </>
      ) : (
        <button onClick={connectWithCoinbaseWallet}>Connect with Coinbase Wallet</button>
      )}
    <button onClick={() => switchNetwork(ChainId.Mumbai)}>
      Switch To Mumbai
    </button>
    <button onClick={() => switchNetwork(ChainId.FantomTestnet)}>
      Switch To FantomTestnet
    </button>
    <button onClick={() => switchNetwork(ChainId.AvalancheFujiTestnet)}>
      Switch To AvalancheFujiTestnet
    </button>
    <div>ChainId: {chainId}</div>
    </div>
  );
}

export default App;
