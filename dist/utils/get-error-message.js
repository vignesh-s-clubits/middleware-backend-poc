export const getErrorMessage = (error) => {
    if (error && error instanceof Error && "message" in error && error.message)
        return error.message;
    return "Error message not found in the 'error' object.";
};
//# sourceMappingURL=get-error-message.js.map