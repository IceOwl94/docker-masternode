import {MasternodeArgs} from '../../src/utils'

export const args: MasternodeArgs = {
  COIN_NAME: 'bitgreen',
  SHORT_NAME: 'bitg',
  CONFIG_FILE: 'bitgreen.conf',
  CONFIG_FOLDER: '/root/.bitgreen',
  DAEMON_FILE: 'bitgreend',
  COIN_PORT: 9333,
  WALLET: 'https://github.com/bitgreen/bitgreen/releases/download/v1.3.1/bitgreen-1.3.1-x86_64-linux-gnu.tar.gz',
  COIN_BLOCKS: 'https://github.com/IceOwl94/docker-masternode/releases/download/0.1.0/bitg-bootsrap-750000.zip',
}
