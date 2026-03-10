const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

// capitalized words test 
describe('capitalizeWords', () => {
    // normal case
    test('capitalizes a simple two-word string', () => {
        expect(capitalizeWords("hello world")).toBe("Hello World"); 
    }); 

    test('handles mixed case input correctly', () => {
        expect(capitalizeWords("jAvAsCrIpT eXeRcIsEs")).toBe("Javascript Exercises");
    }); 

    // edge case
    test('returns an empty string for an empty input', () => {
        expect(capitalizeWords("")).toBe(""); 
    }); 

     test('capitalizes a single-word string', () => {
        expect(capitalizeWords("dog")).toBe("Dog");
        expect(capitalizeWords("DOG")).toBe("Dog");
    });


    test('handles string with special characters', () => {
        expect(capitalizeWords('hello-world')).toBe('Hello-World');
        expect(capitalizeWords('!javascript is fun')).toBe('!Javascript Is Fun'); // Assuming 'j' should be capitalized
    });

    test('preserves leading and trailing spaces', () => {
        // Input needs leading/trailing spaces as per description
        expect(capitalizeWords('  spaces  ')).toBe('  Spaces  ');
    });
}); 

// filter active user test
describe('filterActiveUser', () => {
    // array with mixed active/inactive users 
    test('should return only active users from a mixed array', () => {
        const mixedUsers = [
        { id: 1, name: 'Alice', active: true },
        { id: 2, name: 'Bob', active: false },
        { id: 3, name: 'Charlie', active: true },
        { id: 4, name: 'David', active: false },
        ];
        const expectedActiveUsers = [
        { id: 1, name: 'Alice', active: true },
         { id: 3, name: 'Charlie', active: true },
        ];
        // Assert that the result matches the expected array of active users
        expect(filterActiveUsers(mixedUsers)).toEqual(expectedActiveUsers);
    });

    // array with all inactive users
    test('should return an empty array when all users are inactive', () => {
        const allInactiveUsers = [
            { id: 5, name: 'Eve', active: false },
            { id: 6, name: 'Frank', active: false },
        ]; 
        const expectedActiveUsers = []; 
        // Assert that the result is an empty array
        expect(filterActiveUsers(allInactiveUsers)).toEqual(expectedActiveUsers);
    });

    // empty array
    test('should return an empty array when the input array is empty', () => {
        const emptyArray = []; 
        const expectedActiveUsers = []; 
        // Assert that filtering an empty array results in an empty array
        expect(filterActiveUsers(emptyArray)).toEqual(expectedActiveUsers);
    }); 
}); 

// log action test
describe('logAction', () => {
    // valid inputs 
    test('generates correct log string for valid user and action', () => {
        const result = logAction('login', 'john_doe'); 
        // Use match to check substring
        expect(result).toMatch('User john_doe performed login at');
    });

    test('trims whitespace from valid inputs', () => {
        const result = logAction('  upload  ', '  alice  '); 
        // Checks that the result has been trimmed
        expect(result).toMatch('User alice performed upload at'); 
    });

    // missing username or action 
    test('return error when username is missing (undefined)', () => {
        const result = logAction('login', undefined);
        expect(result).toBe('Error: Invalid Input');
    });

    test('returns error when action is missing (null)', () => {
        const result = logAction(null, 'john_doe'); 
        expect(result).toBe('Error: Invalid Input'); 
    }); 

    // empty strings 
    test('returns error when username is empty string', () => {
        const result = logAction('login', ''); 
        expect(result).toBe('Error: Invalid Input'); 
    }); 

    test('returns error when action is empty string', () => {
        const result = logAction('', 'john_doe'); 
        expect(result).toBe('Error: Invalid Input'); 
    }); 

    // whitespace only 
    test('returns error when username is only whitespace', () => {
        const result = logAction('login', '   ');
        expect(result).toBe('Error: Invalid Input');
    });
}); 