import {messageListProps} from '../types';

// начальная и конечная даты сообщений
const today: Date = new Date();
const yearAgo: Date = new Date(2019, 0, 1);

export const messageList: messageListProps = {
  '0001': {
    users: [
      {
        login: 'piligrim',
        avatarUrl: 'https://img.freepik.com/free-photo/_23-2147868989.jpg?size=626&ext=jpg'
      },
      {
        login: 'ryoka',
        avatarUrl: 'https://img.freepik.com/free-photo/3d_1048-6284.jpg?size=338&ext=jpg'
      }
    ],
    messages: [
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  '0002': {
    users: [
      {
        login: 'piligrim',
        avatarUrl: 'https://img.freepik.com/free-photo/_23-2147868989.jpg?size=626&ext=jpg'
      },
      {
        login: 'ryoka',
        avatarUrl: 'https://img.freepik.com/free-photo/3d_1048-6284.jpg?size=338&ext=jpg'
      }
    ],
    messages: [
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  '0003': {
    users: [
      {
        login: 'piligrim',
        avatarUrl: 'https://img.freepik.com/free-photo/_23-2147868989.jpg?size=626&ext=jpg'
      },
      {
        login: 'ryoka',
        avatarUrl: 'https://img.freepik.com/free-photo/3d_1048-6284.jpg?size=338&ext=jpg'
      }
    ],
    messages: [
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  '0004': {
    users: [
      {
        login: 'piligrim',
        avatarUrl: 'https://img.freepik.com/free-photo/_23-2147868989.jpg?size=626&ext=jpg'
      },
      {
        login: 'ryoka',
        avatarUrl: 'https://img.freepik.com/free-photo/3d_1048-6284.jpg?size=338&ext=jpg'
      }
    ],
    messages: [
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  '0005': {
    users: [
      {
        login: 'piligrim',
        avatarUrl: 'https://img.freepik.com/free-photo/_23-2147868989.jpg?size=626&ext=jpg'
      },
      {
        login: 'ryoka',
        avatarUrl: 'https://img.freepik.com/free-photo/3d_1048-6284.jpg?size=338&ext=jpg'
      }
    ],
    messages: [
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  '0006': {
    users: [
      {
        login: 'piligrim',
        avatarUrl: 'https://img.freepik.com/free-photo/_23-2147868989.jpg?size=626&ext=jpg'
      },
      {
        login: 'ryoka',
        avatarUrl: 'https://img.freepik.com/free-photo/3d_1048-6284.jpg?size=338&ext=jpg'
      }
    ],
    messages: [
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  '0007': {
    users: [
      {
        login: 'piligrim',
        avatarUrl: 'https://img.freepik.com/free-photo/_23-2147868989.jpg?size=626&ext=jpg'
      },
      {
        login: 'ryoka',
        avatarUrl: 'https://img.freepik.com/free-photo/3d_1048-6284.jpg?size=338&ext=jpg'
      }
    ],
    messages: [
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  '0008': {
    users: [
      {
        login: 'piligrim',
        avatarUrl: 'https://img.freepik.com/free-photo/_23-2147868989.jpg?size=626&ext=jpg'
      },
      {
        login: 'ryoka',
        avatarUrl: 'https://img.freepik.com/free-photo/3d_1048-6284.jpg?size=338&ext=jpg'
      }
    ],
    messages: [
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  '0009': {
    users: [
      {
        login: 'piligrim',
        avatarUrl: 'https://img.freepik.com/free-photo/_23-2147868989.jpg?size=626&ext=jpg'
      },
      {
        login: 'ryoka',
        avatarUrl: 'https://img.freepik.com/free-photo/3d_1048-6284.jpg?size=338&ext=jpg'
      }
    ],
    messages: [
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  '0010': {
    users: [
      {
        login: 'piligrim',
        avatarUrl: 'https://img.freepik.com/free-photo/_23-2147868989.jpg?size=626&ext=jpg'
      },
      {
        login: 'ryoka',
        avatarUrl: 'https://img.freepik.com/free-photo/3d_1048-6284.jpg?size=338&ext=jpg'
      }
    ],
    messages: [
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime(),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'ryoka',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  '0011': {
    users: [
      {
        login: 'piligrim',
        avatarUrl: 'https://img.freepik.com/free-photo/_23-2147868989.jpg?size=626&ext=jpg'
      },
      {
        login: 'ryoka',
        avatarUrl: 'https://img.freepik.com/free-photo/3d_1048-6284.jpg?size=338&ext=jpg'
      }
    ],
    messages: [
      {
        date: today.getTime() + Math.floor(Math.random() * (yearAgo.getTime() - today.getTime())),
        author: 'piligrim',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  '0012': {
    users: [],
    messages: []
  }
};