import {getIpFromToken} from '../../src/utils'

export function build(config: string) {
  // 0:alias 1:ipPort 2:pk 3:txHash 4:txIndex
  const tokens = config.split(' ')
  const ip = getIpFromToken(tokens[1])

  return (`   sins-${tokens[0]}:
        image: 'sins'
        environment:
          - MNPRVKEY=${tokens[2]}
          - MY_IP=${ip}
        build:
          context: ./wallets
          dockerfile: ./commons/Dockerfile
          args:
            - CONFIG_FILE=safeinsure.conf
            - CONFIG_FOLDER=/root/.safeinsure
            - COIN_BLOCKS=https://github.com/altbet/bootstraps/releases/download/352483/bootstrap.zip
            - WALLET=https://github.com/SafeInsure/sins-coin/releases/latest/download/safeinsure-1.0.0-x86_64-linux-gnu.tar.gz
            - COIN_NAME=safeinsure
            - DAEMON_FILE=safeinsured
            - COIN_PORT=39105
        ports:
          - '${ip.replace(/([\[\]])/g, '')}:39105:39105'
`)
}
