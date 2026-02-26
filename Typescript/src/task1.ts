//User Role Manager using Type Alias with Union Types
type UserRole = 'admin' | 'editor' | 'viewer';

interface User {
    name: string;
    role: UserRole;
} 
function getUserPermissions(user: User): string {
  switch (user.role) {
    case 'admin':
      return 'Full access to all resources.';
    case 'editor':
      return 'Can edit content but cannot manage users.';
    case 'viewer':
      return 'Can view content but cannot edit or manage users.';
    default:
      return 'Unknown role.';
  }
}


const user1: User = { name: 'Alice', role: 'admin' };
const user2: User = { name: 'Bob', role: 'editor' };
const user3: User = { name: 'Charlie', role: 'viewer' };

console.log(getUserPermissions(user1));
console.log(getUserPermissions(user2));
console.log(getUserPermissions(user3));
