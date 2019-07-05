import {MasternodeArgs} from '../../src/utils'

export const args: MasternodeArgs = {
  COIN_NAME: 'altbet',
  SHORT_NAME: 'abet',
  CONFIG_FILE: 'altbet.conf',
  CONFIG_FOLDER: '/root/.altbet',
  DAEMON_FILE: 'altbetd',
  COIN_PORT: 2238,
  WALLET: 'https://github.com/altbet/abet/releases/download/v.2.0.0.3/altbet-v2.0.0.3-ubu1604.tar.gz',
  COIN_BLOCKS: 'https://github.com/altbet/bootstraps/releases/download/352483/bootstrap.zip',
}
