
import "dotenv/config";
import * as env from "env-var";

export const envs = {
    PORT: env.get("PORT").required().asPortNumber(),
    MAILER_SERVICE: env.get("MAILER_SERVICE").required().asString(),
    MAILER_EMAIL: env.get("MAILER_EMAIL").required().asEmailString(),
    MAILE_SECRET_KEY: env.get("MAILE_SECRET_KEY").required().asString(),
    PROD: env.get("PROD").required().asBool(),
}

