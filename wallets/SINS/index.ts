import {MasternodeArgs, MasternodeConfig} from '../../src/utils'

export const args: MasternodeArgs = {
  SHORT_NAME: 'sins',
  CONFIG_FILE: 'safeinsure.conf',
  CONFIG_FOLDER: '/root/.safeinsure',
  COIN_BLOCKS: 'https://github.com/altbet/bootstraps/releases/download/352483/bootstrap.zip',
  WALLET: 'https://github.com/SafeInsure/sins-coin/releases/latest/download/safeinsure-1.0.0-x86_64-linux-gnu.tar.gz',
  COIN_NAME: 'safeinsure',
  DAEMON_FILE: 'safeinsured',
  COIN_PORT: 39105
}

export function build(masternodeConfig: MasternodeConfig) {

  return (`   ${args.SHORT_NAME}-${masternodeConfig.alias}:
        image: ${args.SHORT_NAME}
        environment:
          - MNPRVKEY=${masternodeConfig.privateKey}
          - MY_IP=${masternodeConfig.ip}
        build:
          context: ./wallets
          dockerfile: ./commons/Dockerfile
          args:
            - CONFIG_FILE=${args.CONFIG_FILE}
            - CONFIG_FOLDER=${args.CONFIG_FOLDER}
            - COIN_BLOCKS=${args.COIN_BLOCKS}
            - WALLET=${args.WALLET}
            - COIN_NAME=${args.COIN_NAME}
            - DAEMON_FILE=${args.DAEMON_FILE}
            - COIN_PORT=${args.COIN_PORT}
        ports:
          - '${masternodeConfig.ipWithoutSquareBrackets}:${args.COIN_PORT}:${args.COIN_PORT}'
`)
}
