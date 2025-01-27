export const isUserOnly = (trpc) => trpc.middleware((opts) => {
    return opts.next({
        ctx: {
            role: "user",
        },
    });
});
//# sourceMappingURL=is-user-only.js.map