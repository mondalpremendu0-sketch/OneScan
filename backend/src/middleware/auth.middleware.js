const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');

// Verifies the Clerk session token sent from the frontend.
// After this runs, req.auth.userId holds the Clerk user id.
const requireAuth = ClerkExpressRequireAuth({});

module.exports = requireAuth;
