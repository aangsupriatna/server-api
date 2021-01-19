# Server API with Express.js

## How to
### Install dependency
`yarn install`

### Configure [prisma.io](http://prisma.io)
`yarn prisma init`

then configure `.env` and `prisma/schema.prisma`

`.env` file example
`DATABASE_URL="mysql://root:123secret@localhost:3306/prisma?schema=public"`

`schema.prisma` file example
```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

### Run the server
`yarn dev`