import { Command, flags } from '@oclif/command'
import { readdirSync, readdir, readFileSync, writeFileSync } from 'fs';
import { Builder } from '../../../wallets/builder'

export default class Build extends Command {
  static description = 'build all docker-compose.*.yml files'

  static args = [
    {
      name: 'configFolder',
      default: './config/'
    }
  ]

  async run() {
    const { args } = this.parse(Build)

    const dockerFileContent = this.buildDockerCompose(args.configFolder)

    writeFileSync('docker-compose.yml', dockerFileContent);
  }

  buildDockerCompose(configFolder: string) {
    const configList = readdirSync(configFolder);

    const dockerComposeBody = configList
      // Filter out hidden files
      .filter(fileName => fileName.charAt(0) !== '.')
      // List of config file: BITG, ALTBET, ...
      .map(fileName => ({
        builder: require(`../../wallets/${fileName}`),
        buffer: readFileSync(configFolder + fileName)
      }))
      // Get content of single config file
      .map(({ builder, buffer }) => ({
        builder,
        rows: buffer.toString().split('\n')
      }))
      // Build corresponding docker-compose fragment
      .map(({ builder, rows }) => {
        const builderInstance: Builder = new builder.default()
        return rows.map(row => builderInstance.build(row)).join('')
      }).join('')

    return `
version: '3'
services: 
${dockerComposeBody}`
  }
}
