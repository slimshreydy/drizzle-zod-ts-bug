# `drizzle-zod` bug repro

This repo is a minimal repro for a bug in `drizzle-zod` where the zod schema generated by `drizzle-zod` cannot be exported correctly in TS projects using `declaration: true`.

The bug has been reported here: [https://github.com/drizzle-team/drizzle-orm/issues/3732](https://github.com/drizzle-team/drizzle-orm/issues/3732)

## How to set up this repo

1. Clone this repo
2. Run `npm ci`
3. Open the `zod.ts` file in an IDE that supports TS and you should see the type error of form `The inferred type of 'zInsertTestTableSchema' cannot be named without a reference to '../node_modules/drizzle-zod/schema.types.internal.mjs'. This is likely not portable. A type annotation is necessary.ts(2742)`
