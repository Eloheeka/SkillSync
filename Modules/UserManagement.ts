import type { User } from '../Entities/User';

export class UserManagement{
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
        this.users[userIndex] = {...this.users[userIndex],...update} as User;
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