import bcrypt from "bcrypt";
import { envVariables } from "../environment/variables.js";
export const generateHashedPassword = (password) => {
    const salt = bcrypt.genSaltSync(envVariables.PASSWORD_SALT_ROUNDS);
    return bcrypt.hashSync(password, salt);
};
//# sourceMappingURL=generate-hashed-password.js.map