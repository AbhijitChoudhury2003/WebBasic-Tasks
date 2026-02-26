////User Data Fetch using Async and Await with Error Handling
async function fetchUserData(userId) {
    try {
        // Simulating an API call with a delay
        const userData = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userId === 1) {
                    resolve({ name: 'Alice', age: 30 });
                }
                else {
                    reject(new Error('User not found'));
                }
            }, 2000);
        });
        return userData;
    }
    catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Rethrow the error after logging
    }
}
fetchUserData(1)
    .then((userData) => {
    console.log('User Data:', userData);
})
    .catch((error) => {
    console.error('Error:', error);
});
fetchUserData(2)
    .then((userData) => {
    console.log('User Data:', userData);
})
    .catch((error) => {
    console.error('Error:', error);
});
export {};
