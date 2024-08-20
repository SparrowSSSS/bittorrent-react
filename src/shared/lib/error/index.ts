export const getErrorMessage = (error: Error) => {
    return `${error.name} : \n${error.message}`;
};
