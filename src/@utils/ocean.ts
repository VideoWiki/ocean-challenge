import { ConfigHelper, Config } from '@oceanprotocol/lib'
// import contractAddresses from '@oceanprotocol/contracts/artifacts/address.json'

export function getOceanConfig(network: string | number): Config {
  const config = new ConfigHelper().getConfig(
    network,
    network === 'polygon' ||
      network === 'moonbeamalpha' ||
      network === 1287 ||
      network === 'bsc' ||
      network === 56 ||
      network === 'gaiaxtestnet' ||
      network === 2021000
      ? undefined
      : 'f94b1da081a44bc6bd8d10ed26cd0b4e'
  ) as Config
  return config as Config
}

export function getDevelopmentConfig(): Config {
  return {
    // factoryAddress: contractAddresses.development?.DTFactory,
    // poolFactoryAddress: contractAddresses.development?.BFactory,
    // fixedRateExchangeAddress: contractAddresses.development?.FixedRateExchange,
    // metadataContractAddress: contractAddresses.development?.Metadata,
    // oceanTokenAddress: contractAddresses.development?.Ocean,
    // There is no subgraph in barge so we hardcode the Goerli one for now
    subgraphUri: 'https://v4.subgraph.goerli.oceanprotocol.com'
  } as Config
}
