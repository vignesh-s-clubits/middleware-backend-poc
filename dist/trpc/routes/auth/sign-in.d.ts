export declare const signIn: import("@trpc/server/unstable-core-do-not-import").MutationProcedure<{
    input: {
        password: string;
        userName: string;
    };
    output: {
        user: {
            ID: number;
            Email: string;
            Username: string;
            role: string;
        };
        token: string;
    };
}>;
