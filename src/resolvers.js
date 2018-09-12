const users = [
  {
    username: `Brent Greeff`,
  },
  {
    username: `1 Jan-Michael Vincent`,
  },
  {
    username: `2 Jan-Michael Vincent`,
  },
];

const resolvers = {
  Query: {
    me: () => {
      return users[1];
    },
    user: (parent, { id }) => {
      return users[parseInt(id)];
    }
  }
};

export default resolvers;
