import {MasternodeArgs} from '../../src/utils'

export const args: MasternodeArgs = {
  COIN_NAME: 'safeinsure',
  SHORT_NAME: 'sins',
  CONFIG_FILE: 'safeinsure.conf',
  CONFIG_FOLDER: '/root/.safeinsure',
  DAEMON_FILE: 'safeinsured',
  COIN_PORT: 39105,
  WALLET: 'https://github.com/SafeInsure/sins-coin/releases/latest/download/safeinsure-1.0.0-x86_64-linux-gnu.tar.gz',
  COIN_BLOCKS: 'https://github.com/altbet/bootstraps/releases/download/352483/bootstrap.zip',
}
