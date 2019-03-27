export default class AbetBuilder {
    build(config: string) {
        // 0:alias 1:ipPort 2:pk 3:txHash 4:txIndex
        const tokens = config.split(' ');

        return (`   abet-${tokens[0]}:
        image: 'abet'
        environment:
        - MNPRVKEY=${tokens[2]}
        - MY_IP=${tokens[1].split(':')[0]}
        build:
            context: ./wallets/ABET
            dockerfile: ./Dockerfile
`);
    }
}