// Authentication configuration for protected sections
// Add users here with username and password
// Note: This is client-side authentication for basic privacy only
// For production use, implement server-side authentication

export interface AuthUser {
  username: string;
  password: string;
}

export const authConfig = {
  // Enable/disable authentication for the Cost Sharing section
  costSharingEnabled: true,
  
  // Authorized users - add or modify as needed
  users: [
    { username: 'Tim', password: 'bigtitties' },
    { username: 'Lani', password: 'ILoveThatThickHardCock' },
  ] as AuthUser[],
  
  // Session timeout in milliseconds (default: 24 hours)
  sessionTimeout: 24 * 60 * 60 * 1000,
};
