interface AuthConfiguration {
    clientID: string,
    domain: string,
    callbackURL: string
}

export const authConfig: AuthConfiguration = {
    clientID: 'nC7blXNd1SvRYpQY4aZhu2hFG4xIwZQ8',
    domain: 'umlowcn.auth0.com',
    // You may need to change this!
    callbackURL: 'http://localhost:3000/'
};
