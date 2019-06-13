import {
  gql
} from 'apollo-server-express';

const schema = gql`
  type Query {
    user(id: ID!): User
    userByLastName(lastName: String!): [User]
    users: [User!]
    me: User

    messages: [Message!]!
    message(id: ID!): Message
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    email: String
  }

  type Message {
    id: ID!
    text: String!
    user: User!
  }
`;

export default schema;
