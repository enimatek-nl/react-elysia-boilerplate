import {Elysia, t} from "elysia";
import {jwt} from "@elysiajs/jwt";
import {PrismaClient} from "@prisma/client";

export const prisma = new PrismaClient({datasourceUrl: 'file:dbfilename.db'});

export const base = new Elysia()
    .model({})
    .use(jwt({
        name: 'jwt',
        secret: 'my_long_key'
    }));
