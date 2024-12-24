import { base } from "./base";
import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";

const app = new Elysia()
    .use(base)
    .use(cors())
    .use(swagger({
        documentation: {
            info: {
                title: 'swagger title',
                description: '',
                version: '0.0.1'
            }
        }
    }))
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.url}swagger`
);
