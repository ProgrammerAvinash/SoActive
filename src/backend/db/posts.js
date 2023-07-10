import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Get fit ",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: 2,
          firstName: "John ",
          lastName: "Smith",
          username: "johnsmith@gmail.com",
          password: "1234abcd",
          userHandler: "johnsmith",
          profilePic:
            "https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2021, 6, 18, 26, 30),
          updatedAt: formatDate(),
        },
        {
          _id: uuid(),
          firstName: "Nina",
          lastName: "Jones",
          username: "Nickj@gmail.com",
          password: "Nickj",
          userHandler: "Nickj",
          profilePic:
            "https://images.unsplash.com/photo-1593431763017-c689a61b729a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2022, 9, 12, 26, 30),
          updatedAt: formatDate(),
        },
        {
          _id: uuid(),
          firstName: "user",
          lastName: "dummy",
          username: "userD@gmail.com",
          password: "Dummy123",
          userHandler: "Dummy",
          profilePic:
            "https://images.unsplash.com/photo-1593431763017-c689a61b729a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2021, 8, 22, 26, 30),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "Nickj@gmail.com",
        text: "Great !",
      },
    ],
    username: "avinash.yadav271@gmail.com",
    profilePic:
      "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userHandler: "AvinashY",
    file: "https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

    createdAt: new Date(2022, 11, 9, 11, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Gym is fun  ",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: 2,
          firstName: "John ",
          lastName: "Smith",
          username: "johnsmith@gmail.com",
          password: "1234abcd",
          userHandler: "johnsmith",
          profilePic:
            "https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2001, 5, 15, 26, 30),
          updatedAt: formatDate(),
        },

        {
          _id: uuid(),
          firstName: "Nina",
          lastName: "Jones",
          username: "Nickj@gmail.com",
          password: "Nickj",
          userHandler: "Nickj",
          profilePic:
            "https://images.unsplash.com/photo-1593431763017-c689a61b729a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2021, 5, 12, 26, 30),
          updatedAt: formatDate(),
        },
        {
          _id: uuid(),
          firstName: "user",
          lastName: "dummy",
          username: "userD@gmail.com",
          password: "Dummy123",
          userHandler: "Dummy",
          profilePic:
            "https://images.unsplash.com/photo-1593431763017-c689a61b729a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2021, 5, 25, 26, 30),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "Nickj@gmail.com",
        text: "Great keep it up!",
      },
      {
        _id: uuid(),
        username: "johnsmith@gmail.com",
        text: "Wow!",
      },
    ],
    username: "avinash.yadav271@gmail.com",
    profilePic:
      "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userHandler: "AvinashY",
    file: "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdAt: new Date(2023, 1, 9, 11, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Run Run Run !! ",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: 2,
          firstName: "John ",
          lastName: "Smith",
          username: "johnsmith@gmail.com",
          password: "1234abcd",
          userHandler: "johnsmith",
          profilePic:
            "https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2020, 5, 19, 26, 30),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "johnsmith@gmail.com",
        text: "Good !",
      },
    ],
    username: "avinash.yadav271@gmail.com",
    profilePic:
      "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userHandler: "AvinashY",
    file: "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdAt: new Date(2023, 5, 18, 12, 8, 15),
    updatedAt: formatDate(),
  },
];
