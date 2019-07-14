import {MasternodeArgs} from '../../src/utils'

export const args: MasternodeArgs = {
  COIN_NAME: 'altbet',
  SHORT_NAME: 'abet',
  CONFIG_FILE: 'altbet.conf',
  CONFIG_FOLDER: '/root/.altbet',
  DAEMON_FILE: 'altbetd',
  COIN_PORT: 8322,
  WALLET: 'https://github.com/altbet/abet/releases/download/v1.0.0.1/altbet-v1.0.0.1-ubu1604.tar.gz',
  COIN_BLOCKS: 'https://github.com/IceOwl94/docker-masternode/releases/download/0.1.0/abet-bootstrap.zip',
}
