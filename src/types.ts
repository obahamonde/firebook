import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type stsTokenManager = {
    accessToken: string
    idToken?: string
    refreshToken?: string
    expiresIn?: number
    tokenType?: string
}

export type User = {
    uid?: string
    name?: string
    email: string
    avatar?: string
    stsTokenManager?: stsTokenManager
}
