import {
  ApolloServer
} from 'apollo-server-express';

import users from '../data/users';
import schema from './schema'
import resolvers from './resolvers'

import cors from 'cors';
import express from 'express';

const app = express();
app.use( cors() );

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    me: users[0],
  }
});

server.applyMiddleware({
  app,
  path: '/graphql'
});

app.listen({ port: 3000 }, () => {
  console.log('Apollo on localhost:3000');
});
