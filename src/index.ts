import express from "express"
import { ApolloServer } from "apollo-server-express"

import schema from "./graphql/schemaMap"
const PORT = 4000

const app = express()

const server = new ApolloServer({
    schema
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen(PORT, () => {
    console.log(`GraphQL is now running on http://localhost:${PORT}/graphql`)
})