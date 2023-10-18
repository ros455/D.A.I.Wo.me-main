import { createConfig, configureChains, useToken } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import { bsc } from 'wagmi/chains'

import erc20 from '../web3/erc20.json'
import router from '../web3/router.json'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [bsc],
  [publicProvider()],
)

export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  logger: {
    warn: null,
  },
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: process.env.REACT_APP_WALLETCONNECT_PROJECT_ID,
        metadata: {
          name: 'D.A.I.Wo',
          description: 'd.a.i.wo',
          url: 'https://daiwo.ai',
          icons: ['https://daiwo.ai/public/icons/icon_daiwo_coin.svg'],
        },
      }
    }),
  ],
})

export const USDT = {
  address: process.env.REACT_APP_USDT_ADDRESS,
  abi: erc20,
  chainId: process.env.REACT_APP_NETWORK === "dev" ? 97 : 56,
}

export const DAIWO = {
  address: process.env.REACT_APP_DAIWO_ADDRESS,
  abi: erc20,
  chainId: process.env.REACT_APP_NETWORK === "dev" ? 97 : 56,
}

export const PANCAKE_ROUTER = {
  address: process.env.REACT_APP_PANCAKE_ROUTER_ADDRESS,
  abi: router,
  chainId: process.env.REACT_APP_NETWORK === "dev" ? 97 : 56,
}