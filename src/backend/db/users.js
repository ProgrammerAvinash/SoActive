import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Avinash",
    lastName: "Yadav",
    username: "avinash.yadav271@gmail.com",
    password: "123",
    userHandler: "AvinashY",
    profilePic:
      "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "An aspiring web developer1",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
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
    createdAt: formatDate(),
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
    createdAt: formatDate(),
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
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
