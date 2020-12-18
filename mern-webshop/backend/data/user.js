import bcrypt from "bcryptjs"


const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456",10),
    isAdmin: true,
  },
  {
    name: "Valaki 2",
    email: "vki@example.com",
    password: bcrypt.hashSync("123456",10),
  },
  {
    name: "Valaki 3",
    email: "vki2@example.com",
    password: bcrypt.hashSync("123456",10),
  },
];

export default users
