//User Role Manager using Type Alias with Union Types
function getUserPermissions(user) {
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
const user1 = { name: 'Alice', role: 'admin' };
const user2 = { name: 'Bob', role: 'editor' };
const user3 = { name: 'Charlie', role: 'viewer' };
console.log(getUserPermissions(user1));
console.log(getUserPermissions(user2));
console.log(getUserPermissions(user3));
export {};
