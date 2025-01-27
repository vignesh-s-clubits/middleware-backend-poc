export const isAdminOnly = (trpc) => trpc.middleware(async (opts) => {
    return opts.next({
        ctx: {
            role: "admin",
        },
    });
});
//# sourceMappingURL=is-admin-only.js.map