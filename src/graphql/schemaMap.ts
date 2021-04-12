import "graphql-import-node"

import * as userTypeDefs from "./schemas/user.graphql"
import * as emptyTypeDefs from "./schemas/empty.graphql";

import { makeExecutableSchema } from "graphql-tools"
import { GraphQLSchema } from "graphql"

import resolvers from "./resolverMap"

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [emptyTypeDefs, userTypeDefs],
    resolvers
})

export default schema;
