/* 
* an array of routes that are accessable to the public.
* these routes do not require authentication.
* @type {string[]}
=
*/
export const publicRoutes = ['/'];

/*
 * an array of routes that are used for authentication.
 * these routes will redirect logged in users to /admin/dashboard/generate-invoice.
 * @type {string[]}
 */
export const authRoutes = ['/sign-in', '/sign-up', '/'];

/*
 * the prefix for API authentication routes.
 * routes that starts with this prefix are used api authentication perposes .
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/*
 * the default redirect path after logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/admin/dashboard/generate-invoice';
