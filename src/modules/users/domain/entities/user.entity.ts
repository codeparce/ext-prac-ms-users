export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
  
    static create(name: string, email: string, password: string): User {
      const user = new User();
      user.name = name;
      user.email = email;
      user.password = password;
      user.createdAt = new Date();
      return user;
    }
  }