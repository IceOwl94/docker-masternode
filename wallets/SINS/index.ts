import {MasternodeArgs} from '../../src/utils'

export const args: MasternodeArgs = {
  SHORT_NAME: 'sins',
  CONFIG_FILE: 'safeinsure.conf',
  CONFIG_FOLDER: '/root/.safeinsure',
  COIN_BLOCKS: 'https://github.com/altbet/bootstraps/releases/download/352483/bootstrap.zip',
  WALLET: 'https://github.com/SafeInsure/sins-coin/releases/latest/download/safeinsure-1.0.0-x86_64-linux-gnu.tar.gz',
  COIN_NAME: 'safeinsure',
  DAEMON_FILE: 'safeinsured',
  COIN_PORT: 39105
}
