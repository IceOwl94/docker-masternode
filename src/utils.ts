export function getIpFromToken(token: string) {
  return token.substring(0, token.lastIndexOf(':'))
}
