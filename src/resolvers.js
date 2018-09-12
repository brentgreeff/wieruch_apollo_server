const users = [
  {
    firstName: 'Brent',
    lastName: 'Greeff',
    email: 'brent@brent.com',
  },
  {
    firstName: 'Jan-Michael',
    lastName: 'Vincent',
  },
  {
    firstName: 'Jan-Michael',
    lastName: 'Vincent',
  },
];

const resolvers = {
  Query: {
    me: () => {
      return users[0];
    },
    user: (parent, { id }) => {
      return users[parseInt(id)];
    },
    users: () => {
      return users;
    },
  },

  User: {
    fullName: (user) => {
      return `${user.firstName} ${user.lastName}`;
    }
  }
};

export default resolvers;
