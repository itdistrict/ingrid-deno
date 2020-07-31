// @ts-ignore
import { parse as flagParse } from "https://deno.land/std/flags/mod.ts";

export function parse(cfg: any): any {
    let envs = Deno.env.toObject();

    // Env
    // @ts-ignore
    for (let key of Object.keys(envs)) {
        if (key.toLowerCase() in cfg) {
            // @ts-ignore
            switch (typeof cfg[key.toLowerCase()]) {
                case "number":
                    // @ts-ignore
                    var y: number = +envs[key];
                    // @ts-ignore
                    cfg[key.toLowerCase()] = y;
                    break;
                default:
                    // @ts-ignore
                    cfg[key.toLowerCase()] = envs[key];
                    break;
            }
        }
    }

    // Flags
    var flagValues = flagParse(Deno.args);
    for (let key of Object.keys(flagValues)) {
        if (key.toLowerCase() in cfg) {
            console.log(key);
            // @ts-ignore
            switch (typeof cfg[key.toLowerCase()]) {
                case "number":
                    var y: number = +flagValues[key];
                    // @ts-ignore
                    cfg[key.toLowerCase()] = y;
                    break;
                default:
                    // @ts-ignore
                    cfg[key.toLowerCase()] = flagValues[key];
                    break;
            }
        }
    }

    return cfg;
}
