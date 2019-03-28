import { readdirSync, readFileSync, writeFileSync } from 'fs';

export function build(configFolder: string) {
  const dockerFileContent = buildDockerCompose(configFolder)

  writeFileSync('docker-compose.yml', dockerFileContent);
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
${dockerComposeBody}`
}
