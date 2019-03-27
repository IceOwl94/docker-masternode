export default class BitgBuilder {
    build(config: string) {
        // 0:alias 1:ipPort 2:pk 3:txHash 4:txIndex
        const tokens = config.split(' ');

        return (`   bitg-${tokens[0]}:
        image: 'bitg'
        environment:
        - MNPRVKEY=${tokens[2]}
        - MY_IP=${tokens[1].split(':')[0]}
        - PORT=${tokens[1].split(':')[1]}
        build:
            context: ./wallets/BITG
            dockerfile: ./Dockerfile
`);
    }
}