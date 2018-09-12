import {
  gql
} from 'apollo-server-express';

const schema = gql`
  type Query {
    user(id: ID!): User
    users: [User!]
    me: User
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    email: String
  }
`;

export default schema;
