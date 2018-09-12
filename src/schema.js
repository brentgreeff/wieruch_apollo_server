import {
  gql
} from 'apollo-server-express';

const schema = gql`
  type Query {
    user(id: ID!): User
    me: User
  }

  type User {
    id: ID!
    username: String!
    email: String
  }
`;

export default schema;
