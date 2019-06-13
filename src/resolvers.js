import users from '../data/users';
import messages from '../data/messages';

const resolvers = {
  Query: {
    me: (parent, args, { me }) => {
      return me;
    },
    user: (parent, { id }) => {
      return users.find(user => user.id == id);
    },
    userByLastName: (parent, { lastName }) => {
      return users.filter(user => user.lastName == lastName);
    },
    users: () => {
      return users;
    },
    messages: () => {
      return messages;
    },
    message: (parent, { id }) => {
      return messages.find(message => message.id == id);
    }
  },

  User: {
    fullName: (user, args, { me }) => {
      if (user == me) {
        return "Its ME";
      }
      return `${user.firstName} ${user.lastName}`;
    }
  },

  Message: {
    user: (message) => {
      return users[message.userId];
    }
  }
};

export default resolvers;
