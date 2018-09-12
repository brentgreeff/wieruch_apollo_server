import users from '../users';

const resolvers = {
  Query: {
    me: (parent, args, { me }) => {
      return me;
    },
    user: (parent, { id }) => {
      return users[parseInt(id)];
    },
    users: () => {
      return users;
    },
  },

  User: {
    fullName: (user, args, { me }) => {
      if (user == me) {
        return "Its ME";
      }
      return `${user.firstName} ${user.lastName}`;
    }
  }
};

export default resolvers;
