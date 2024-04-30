export const environment = {
  URL_BACKEND: 'http://localhost:4000/api',
  URL_FAKEAPI: 'https://fakestoreapi.com',
  URL_IP: 'https://api.ipify.org?format=json',
  TWILIO_ACTIVE: false,
  DAV: {
    // BASEURL: 'http://52.200.216.195:3000',
    BASEURL: 'http://localhost:3000',
    GRANT_TYPE: 'client_credentials',
    CLIENT_ID: 'B9lAAOSf5oyOXYNdrAoMB2YxpI0cAKXDgp5ol9NIQsGpxEGo',
    CLIENT_SECRET:
      'HfmvLkYR1hNWJ6ORnq5289IrGLRfeRz8GAAJkUea0J5wwTE3HVgzQqj2zH6AFULy',
    SCOPE: 'daviplata',
    NOTIFICATION_TYPE: 'API_DAVIPLATA',
    COMERCIO_ID: '0010203040',
    TERMINAL_ID: 'ESB10934',
    USER_TEST: { tipoDocumento: '01', numeroDocumento: '1134568019' },
    // USER_TEST: { tipoDocumento: '02', numeroDocumento: '786630' },
    // USER_TEST: { tipoDocumento: '04', numeroDocumento: '1389123506' },
  },
  BAN: {
    // BASEURL: 'http://52.200.216.195:3001',
    BASEURL: 'http://localhost:3001',
    GRANT_TYPE: 'client_credentials',
    CLIENT_ID: '51daaeab18363acf525e749130d9a7a5',
    CLIENT_SECRET: 'cbb2a37ea5e783de41835a83362d5897',
    SCOPE:
      'Product-balance:read:user TermsConditions:read:user TermsConditions-register:write:user Transfer-Intention:read:app Transfer-Intention:write:app',
    COMMERCE_URL: 'https://gateway.com/payment/route?commerce=Telovendo',
    CONFIRMATION_URL:
      'https://pagos-api-dev.tigocloud.net/bancolombia/callback',
  },
};
