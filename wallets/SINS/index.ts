import {MasternodeArgs} from '../../src/utils'

export const args: MasternodeArgs = {
  COIN_NAME: 'safeinsure',
  SHORT_NAME: 'sins',
  CONFIG_FILE: 'safeinsure.conf',
  CONFIG_FOLDER: '/root/.safeinsure',
  DAEMON_FILE: 'safeinsured',
  COIN_PORT: 39105,
  WALLET: 'https://github.com/SafeInsure/sins-coin/releases/download/v1.0.0.9/safeinsure-1.0.0-x86_64-linux-gnu.tar.gz',
  COIN_BLOCKS: 'https://github.com/IceOwl94/docker-masternode/releases/download/0.1.0/sins-bootstrap.zip',
}
