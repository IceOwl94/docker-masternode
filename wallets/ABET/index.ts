import {getIpFromToken} from '../../src/utils'

export function build(config: string) {
  // 0:alias 1:ipPort 2:pk 3:txHash 4:txIndex
  const tokens = config.split(' ')
  const ip = getIpFromToken(tokens[1]);

  return (`   abet-${tokens[0]}:
        image: 'abet'
        environment:
          - MNPRVKEY=${tokens[2]}
          - MY_IP=${ip}
        build:
          context: ./wallets/ABET
          dockerfile: ./Dockerfile
        ports:
          - '[${ip}]:2238:2238'
`)
}
