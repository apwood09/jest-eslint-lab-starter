
// Utility Functions

/**
 * Capitalizes the first letter of each word in the input string.
 * @param {string} input - The input string.
 * @returns {string} - The formatted string.
 */
function capitalizeWords(input) {
  return input
    .toLowerCase()
    .replace(/\b\w/g, (match) => match.toUpperCase());
}


/**
 * Filters active users from the array.
 * @param {Array} users - An array of user objects.
 * @returns {Array} - An array of active user objects.
 */
function filterActiveUsers(users) {
  return users.filter(user => user.active === true);
}
/**
 * Logs an action performed by a user with a timestamp.
 * @param {string} action - The action performed.
 * @param {string} username - The name of the user.
 * @returns {string} - The log message.
 */
function logAction(action, username) {
    // Validation Logic Added
    if (!action || !action.trim() || !username || !username.trim()) {
        return 'Error: Invalid Input';
    }
    // Trim whitespace 
    const sanitizedAction = action.trim();
    const sanitizedUsername = username.trim();

    const timestamp = new Date().toISOString();
    return `User ${sanitizedUsername} performed ${sanitizedAction} at ${timestamp}`;
}

module.exports = { capitalizeWords, filterActiveUsers, logAction };
