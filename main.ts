
interface User {
    id:number;
    name: string;
    email: string;
    role?: string;
}

const users: User[] = [
       {id:1, name:"Alice",email:"m.eloheeka12@gmail.com"},
       {id:2, name:"John",email:"john10@gmail.com",role:"admin"},
       {id:3, name:"Max",email:"max@gmail.com",role:"Student"},
       {id:5, name:"Keza",email:"keza@gmail.com",role:"Teacher"},
       {id:6, name:"Mico",email:"mico@gmail.com",role:"admin"}
]

 function getUserInfo(users: User): void {
    console.log(`${users.name} (id :${users.id}) -email: ${users.email} role: ${users.role ? users.role : "role not assigned"}`)
 }

//  function listAdmins(users: User[]): void{
//       const admins =  users.filter(user => user.role === "admin");
//        for(const admin of admins){
//         getUserInfo(admin);
//     }
    
// }

// listAdmins(users);

// function getUserByRole(users: User[], role: string) : User[] {
//     const result = users.filter(user => user.role?.toLowerCase() === role.toLowerCase());
//     result.forEach(u => getUserInfo(u));
//     return result;
// }

// getUserByRole(users, "teacher");

// function getUserByEmail(users:User[],email:string) :User[]{
//   const result = users.filter(user => user.email?.toLowerCase() === email.toLowerCase());
//   result.forEach(u => getUserInfo(u));
//   return result;
// }

// getUserByEmail(users,"m.eloheeka12@gmail.com")
 
// function getUserByName(users:User[],name:string) :User[]{
//   const result = users.filter(user => user.name?.toLowerCase() === name.toLowerCase());
//   result.forEach(u => getUserInfo(u));
//   return result;
// }

// getUserByName(users,"mico")
 
// function getUserById(users:User[],id:number) :User[]{
//   const result = users.filter(user => user.id === id);
//   result.forEach(u => getUserInfo(u));
//   return result;
// }

// getUserById(users,4);

// function searchUsers(users: User[], query:string|number) :User[]{
//     const querystr = query.toString().toLowerCase();

//     const result = users.filter(user =>
//         user.name.toLowerCase().includes(querystr) ||
//         user.email.toLowerCase().includes(querystr) ||
//         user.id.toString() === querystr ||
//         user.role?.toLowerCase() === querystr
//     )

//     result.forEach(u => getUserInfo(u));
//     return result;

// }
 
// searchUsers(users,"max");
// searchUsers(users, 5);

function addUser(users: User[], newUser : User): void{
   if(users.find(user => user.id === newUser.id || user.email.toLowerCase() === newUser.email.toLowerCase())){
    console.log(`User with id ${newUser.id} and ${newUser.email} already exists.`);
    return;
   }else{
    users.push(newUser);
    console.log("User added successfully.");
   }
} 

addUser(users, {id:7, name:"Sara", email:"saraSasa11@gmail.com", role:"Student"})
console.log(users);

function updateUser(users: User[], userId:number, update:Partial<User>): void{
    const userIndex = users.findIndex(user => user.id === userId);
    if(userIndex === -1){
        console.log(`User with id ${userId} not found.`);
    }else{
        users[userIndex] = {...users[userIndex],...update} as User;
        console.log(`User with id ${userId} updated successfully.`);
    }
}

function updateRole(users: User[], userId:number, newRole:string) :void{
    const userIndex = users.findIndex(user => user.id === userId);
    if(userIndex === -1){
        console.log(`User with id ${userId} not found.`);
    }else{
        users[userIndex]!.role = newRole ;
        console.log(`User with id ${userId} role updated to ${newRole} successfully.`);
    }

}

class UserManagement{
    users: User[];
    currentUser: User | null;

    constructor(users: User[], currentUser:User | null){
        this.users = users;
        this.currentUser = currentUser;
    }

    addUser(newUser: User): void{
      if(!this.currentUser || this.currentUser.role?.toLowerCase() !== "admin"){
        console.log("Only admin users can add new users.");
        return;
      }
      if(this.users.find(user => user.id === newUser.id || user.email.toLowerCase() === newUser.email.toLowerCase())){
         console.log(`User with id ${newUser.id} and ${newUser.email} already exists.`);
         return;
   }else{
    this.users.push(newUser);
    console.log("User added successfully.");
   }
 };
   
 updateUser(userId:number, update:Partial<User>){

    const userIndex = this.users.findIndex(user => user.id === userId);
    if(userIndex === -1){
        console.log(`User with id ${userId} not found.`);
    }else{
        this.users[userIndex] = {...users[userIndex],...update} as User;
        console.log(`User with id ${userId} updated successfully.`);
    }

    };
getUserById(userId:number): User | null{
       const user = this.users.find(u => u.id === userId) || null;
       return user;
    }
listUsers(): void {
    console.log("\n📋 All Users List:");
    this.users.forEach(user => this.getUserInfo(user));
   }
searchUsers(query: string | number): User[] {
    const queryStr = query.toString().toLowerCase();

    const result = this.users.filter(user =>
        user.name.toLowerCase().includes(queryStr) ||
        user.email.toLowerCase().includes(queryStr) ||
        user.id.toString() === queryStr ||
        user.role?.toLowerCase() === queryStr
    );

    result.forEach(u => this.getUserInfo(u));
    return result;
}
getUserInfo(user: User): void {
    console.log(`${user.name} (id: ${user.id}) - email: ${user.email} role: ${user.role ? user.role : "role not assigned"}`);
}

deleteUser(userId: number): void {
    if (!this.currentUser || this.currentUser.role?.toLowerCase() !== "admin") {
        console.log(" Only admins can delete users.");
        return;
    }

    const userIndex = this.users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        console.log(`⚠️ User with id ${userId} not found.`);
        return;
    }

    this.users.splice(userIndex, 1);
    console.log(`🗑️ User with id ${userId} deleted successfully.`);
}



}