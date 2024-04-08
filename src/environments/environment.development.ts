export const environment = {
  URL_BACKEND: 'http://localhost:3000/api',
  dav: {
    GRANT_TYPE: 'client_credentials',
    CLIENT_ID: 'B9lAAOSf5oyOXYNdrAoMB2YxpI0cAKXDgp5ol9NIQsGpxEGo',
    CLIENT_SECRET: 'HfmvLkYR1hNWJ6ORnq5289IrGLRfeRz8GAAJkUea0J5wwTE3HVgzQqj2zH6AFULy',
    SCOPE: 'daviplata'
  },
  ban: {
    GRANT_TYPE: 'client_credentials',
    CLIENT_ID: '51daaeab18363acf525e749130d9a7a5',
    CLIENT_SECRET: 'cbb2a37ea5e783de41835a83362d5897',
    SCOPE: 'Product-balance:read:user TermsConditions:read:user TermsConditions-register:write:user Transfer-Intention:read:app Transfer-Intention:write:app'
  },
  twilio: {
    ACCOUNT: 'AC95dc22adb5573de09122822d3e625f26',
    TOKEN: '4bd22a6b941264c068b34406c924e596',
    FROM: '+19254063393',
    TO: '+573143071634',
  },
  url: {
    products: 'https://fakestoreapi.com',
    daviplata: 'http://54.221.169.106:3000',
    bancolombia: 'http://54.221.169.106:3001',
  }
};
