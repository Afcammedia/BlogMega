const Joi = require('joi');

const signupValidation = (newUser) => {
    const userSchema = Joi.object({
        username: Joi.string().min(2).required().messages({
            'username.base': `Please enter a valid username`,
            'username.empty': `Please enter a valid username`,
            'any.required': `Please enter a valid username`,
            'string.username': 'Please enter a valid username',
        }),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .min(6)
            .required()
            .messages({
                'password.base': `Password must be a string`,
                'password.empty': `Password cannot be empty`,
                'any.required': `Please enter a valid password`,
                'string.min': 'Password cannot be less than 6 characters',
            }),
        repeatPassword: Joi.ref('password'),
    });

    return userSchema.validate(newUser);
};

const courseValidator = (course) => {
    console.log('inside validator');
    const courseSchema = Joi.object({
        title: Joi.string().required().messages({
            'title.base': `Title must be a string`,
            'title.empty': `TItle cannot be empty`,
            'any.required': `Please enter a Course Title`,
            'string.title': 'Title must be a string',
        }),
        description: Joi.string().max(50).required().messages({
            'string.max': 'Description cannot be more than 50 characters',
            'description.base': `Description must be a string`,
            'description.empty': `Description cannot be empty`,
            'any.required': `Please enter a Course Description`,
            'string.description': 'Description must be a string',
        }),
        imageUrl: Joi.string().required().messages({
            'any.message': 'ImageUrl cannot be empty and must be a valid Url',
        }),
        isPublic: Joi.boolean(),
        createdBy: Joi.string().required().messages({
            'any.message': 'Please include a who created the course.',
        }),
    });
    return courseSchema.validate(course);
};

const loginValidation = (user) => {
    const userSchema = Joi.object({
        username: Joi.string().min(2).required().messages({
            'username.base': `Please enter a valid username`,
            'username.empty': `Please enter a valid username`,
            'any.required': `Please enter a valid username`,
            'string.username': 'Please enter a valid username',
        }),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .min(6)
            .required()
            .messages({
                'password.base': `Password must be a string`,
                'password.empty': `Password cannot be empty`,
                'any.required': `Please enter a valid password`,
                'string.min': 'Password cannot be less than 6 characters',
            }),
    });
    return userSchema.validate(user);
};
module.exports = {
    signupValidation,
    courseValidator,
    loginValidation,
};
