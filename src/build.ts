import {readdirSync, readFileSync, writeFileSync} from 'fs'
import {MasternodeArgs, MasternodeConfig, tokenizeMasternodeConfigRow} from './utils'

export function buildAndRun(configFolder: string) {
  const dockerFileContent = buildDockerCompose(configFolder)

  writeFileSync('docker-compose.yml', dockerFileContent);

  //#########################
  //## so much black magic ##
  //#########################
  // exec('docker-compose up -d', (err, stdout, stderr) =>{
  //   if(err){
  //     console.error(err)
  //     return
  //   }
  //
  //   console.log(`stdout: ${stdout}`)
  //   console.log(`stderr: ${stderr}`)
  // })
}

export function build(args: MasternodeArgs, masternodeConfig: MasternodeConfig) {

  return (`   ${args.SHORT_NAME}-${masternodeConfig.alias}:
        image: dm-${args.SHORT_NAME}
        environment:
          - MNPRVKEY=${masternodeConfig.privateKey}
          - MY_IP=${masternodeConfig.ip}
        build:
          context: ./wallets
          dockerfile: ./commons/Dockerfile
          args:
            - COIN_NAME=${args.COIN_NAME}
            - CONFIG_FILE=${args.CONFIG_FILE}
            - CONFIG_FOLDER=${args.CONFIG_FOLDER}
            - DAEMON_FILE=${args.DAEMON_FILE}
            - COIN_PORT=${args.COIN_PORT}
            - WALLET=${args.WALLET}
            - COIN_BLOCKS=${args.COIN_BLOCKS}
        ports:
          - '${masternodeConfig.ipWithoutSquareBrackets}:${args.COIN_PORT}:${args.COIN_PORT}'
`)
}

function buildDockerCompose(configFolder: string) {
  const configList = readdirSync(configFolder);

  const dockerComposeBody = configList
    // Filter out hidden files
    .filter(fileName => fileName.charAt(0) !== '.')
    // List of config file: BITG, ALTBET, ...
    .map(fileName => ({
      args: require(`../wallets/${fileName}`).args,
      buffer: readFileSync(configFolder + fileName)
    }))
    // Get content of single config file
    .map(({args, buffer}) => ({
      args,
      rows: buffer.toString().split('\n')
    }))
    // Build corresponding docker-compose fragment
    .map(({args, rows}) => {
      return rows
        .filter(row => row)
        .map(row => build(args, tokenizeMasternodeConfigRow(row))).join('')
    }).join('')

  return `version: '3'
services: 
${dockerComposeBody}
networks:
    default:
        driver: bridge
        driver_opts:
            com.docker.network.enable_ipv6: "true"
`;
}
