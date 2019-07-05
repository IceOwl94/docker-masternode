export interface MasternodeConfig {
  alias: string,
  ip: string,
  privateKey: string,
  txHash: string,
  txIndex: string,
  ipWithoutSquareBrackets: string
}

export interface MasternodeArgs {
  SHORT_NAME: string;
  CONFIG_FILE: string;
  CONFIG_FOLDER: string;
  COIN_BLOCKS: string;
  WALLET: string;
  COIN_NAME: string;
  DAEMON_FILE: string;
  COIN_PORT: number;
}

export function tokenizeMasternodeConfigRow(row: string): MasternodeConfig {
  // 0:alias 1:ipPort 2:pk 3:txHash 4:txIndex
  const tokens = row.split(' ')

  const alias = tokens[0]
  const ip = tokens[1].substring(0, tokens[1].lastIndexOf(':'))
  const privateKey = tokens[2]
  const txHash = tokens[3]
  const txIndex = tokens[4]
  const ipWithoutSquareBrackets = ip.replace(/([\[\]])/g, '')

  return {
    alias, ip, privateKey, txHash, txIndex, ipWithoutSquareBrackets
  }
}
