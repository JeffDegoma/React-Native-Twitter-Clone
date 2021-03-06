import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'


import typeDefs from '../graphql/schema';
import resolvers from '../graphql/resolvers';
import constants from './constants'
import { decodeToken } from '../services/auth'

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})


async function auth(req, res, next) {
    try {
        const token = req.headers.authorization;
        if(token) {
            const user = await decodeToken(token)
            req.user = user
        } else {
            req.user = null
        }
        return next()
    }   catch (error) {
        throw error;
    }
}

export default app => {
    app.use(bodyParser.json())
    app.use(auth)
    app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));


    app.use(constants.GRAPHQL_PATH, bodyParser.json(), graphqlExpress(req => ({
        schema,
        graphiql: true,
        context: {
            user: req.user
        }
    }))
    ) 
}