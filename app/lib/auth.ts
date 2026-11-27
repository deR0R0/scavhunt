import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { betterAuth } from "better-auth";
import { db } from "@/app/db/index"
import { genericOAuth } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import * as schema from "@/app/db/auth-schema"

const ION_CLIENT_ID = process.env.ION_OAUTH_CLIENT_ID;
const ION_CLIENT_SECRET = process.env.ION_OAUTH_CLIENT_SECRET;

if(ION_CLIENT_ID === undefined) {
    throw("ION_OAUTH_CLIENT_ID must be defined in .env.local. Get a client id @ https://ion.tjhsst.edu/oauth/applications")
}

if(ION_CLIENT_SECRET === undefined) {
   throw("ION_OAUTH_CLIENT_SECRET must be defined in .env.local. Get a client id @ https://ion.tjhsst.edu/oauth/applications") 
}

export const auth = betterAuth({
    database: drizzleAdapter(db, { provider: "pg", schema }),
    plugins: [
        genericOAuth({
            config: [{
                providerId: "something",
                clientId: ION_CLIENT_ID,
                clientSecret: ION_CLIENT_SECRET,
                authorizationUrl: "https://ion.tjhsst.edu/oauth/authorize",
                tokenUrl: "https://ion.tjhsst.edu/oauth/token",
                userInfoUrl: "https://ion.tjhsst.edu/api/profile"
            }]
        }),
        nextCookies(),
    ]
})