import { ApolloServer } from 'apollo-server-express';

import cors from 'cors';
import express from 'express';

const app = express();
app.use( cors() );

import users from '../data/users';
import schema from './schema';
import resolvers from './resolvers'

const apollo = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    me: users[0],
  }
});

apollo.applyMiddleware({
  app,
  path: '/graphiql'
});

app.listen({ port: 3000 }, () => {
  console.log('Apollo on localhost:3000');
});
