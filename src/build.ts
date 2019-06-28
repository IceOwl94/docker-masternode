import { readdirSync, readFileSync, writeFileSync } from 'fs';
import {exec} from 'child_process'

export function buildAndRun(configFolder: string) {
  const dockerFileContent = buildDockerCompose(configFolder)

  writeFileSync('docker-compose.yml', dockerFileContent);

  exec('docker-compose up -d', (err, stdout, stderr) =>{
    if(err){
      console.error(err)
      return
    }

    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
  })
}

function buildDockerCompose(configFolder: string) {
  const configList = readdirSync(configFolder);

  const dockerComposeBody = configList
    // Filter out hidden files
    .filter(fileName => fileName.charAt(0) !== '.')
    // List of config file: BITG, ALTBET, ...
    .map(fileName => ({
      builder: require(`../wallets/${fileName}`),
      buffer: readFileSync(configFolder + fileName)
    }))
    // Get content of single config file
    .map(({ builder, buffer }) => ({
      builder,
      rows: buffer.toString().split('\n')
    }))
    // Build corresponding docker-compose fragment
    .map(({ builder, rows }) => {
      return rows
        .filter(row => row)
        .map(row => builder.build(row)).join('')
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
