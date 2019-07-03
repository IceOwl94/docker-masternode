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
          dockerfile: ./SINS/Dockerfile
        ports:
          - '${ip.replace(/([\[\]])/g, '')}:39105:39105'
`)
}
