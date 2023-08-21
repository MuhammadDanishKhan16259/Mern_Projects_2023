// util/validation.js

// Function to validate client data
module.exports.validateClientData = (data) => {
    const errors = {};

    if (!data.firstname || typeof data.firstname !== 'string') {
        errors.firstname = 'Firstname is required';
    }

    if (!data.lastname || typeof data.lastname !== 'string') {
        errors.lastname = 'Lastname is required';
    }

    if (!data.phone || typeof data.phone !== 'string') {
        errors.phone = 'Phone is required';
    }

    if(!data.activity || typeof data.activity !== 'string') {
        errors.activity = 'Activity is required';
    }

    // Add more validation rules as needed

    // Return the errors object
    return errors;
};
