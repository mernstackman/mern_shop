export const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// Should at least 6 characters long, contains a special character, number, uppercase and lowercase letter
export const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;

// Should not contain special characters
export const userRegex0 = /[$&+,:;=\\\\?@#|/\'\"\`\~<>.^*()%!-\s]/;
export const userRegex = /^[A-Za-z0-9_]*$/;
