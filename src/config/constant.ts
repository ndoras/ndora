import path from 'path'

export const LogPath = path.resolve(__dirname, '../../logs/koa.log')

export const JwtSecret = 'jwtSecretNdora';

export const JwtWhileList = [
    /\/v1\/oauth2\/authorize/,
    /\/v1\/oauth2\/token/,
    /\/oauth2\/auth/,
    /\/user\/login/,
    /docs/,
]

export const PORT: string =
    typeof process.env.PORT !== 'undefined' ? process.env.PORT : '8081';