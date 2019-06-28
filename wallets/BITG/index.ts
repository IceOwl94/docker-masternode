import {getIpFromToken} from '../../src/utils'

export function build(config: string) {
  // 0:alias 1:ipPort 2:pk 3:txHash 4:txIndex
  const tokens = config.split(' ')
  const ip = getIpFromToken(tokens[1]);

  return (`   bitg-${tokens[0]}:
        image: 'bitg'
        environment:
          - MNPRVKEY=${tokens[2]}
          - MY_IP=${ip}
        build:
          context: ./wallets/BITG
          dockerfile: ./Dockerfile
        ports:
            - '${ip.replace(/([\[\]])/g, '')}:9333:9333'
`)
}

