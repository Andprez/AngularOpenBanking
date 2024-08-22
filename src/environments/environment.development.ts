export const environment = {
  URL_BACKEND: 'http://localhost:3000/api',
  URL_FAKEAPI: 'https://fakestoreapi.com',
  //api que retorna IP de una url
  URL_IP: 'https://api.ipify.org?format=json',
  URL_CENTRAL_R: 'http://127.0.0.1:4002',
  TWILIO_ACTIVE: false,
  TASA_EA: 19,
  TASA_MV: 1.46,
  VALOR_SEGURO: 2149,
  LLAVE_API_CENTRALES_R:"ESTAESMIAPIKEY",
  DAV: {
    //BASEURL:'http://18.119.28.121:3002',
    //BASEURL: 'http://3.143.204.139:3002',
    BASEURL: 'http://localhost:3002',
    GRANT_TYPE: 'client_credentials',
    CLIENT_ID: 'B9lAAOSf5oyOXYNdrAoMB2YxpI0cAKXDgp5ol9NIQsGpxEGo',
    CLIENT_SECRET:
      'HfmvLkYR1hNWJ6ORnq5289IrGLRfeRz8GAAJkUea0J5wwTE3HVgzQqj2zH6AFULy',
    SCOPE: 'daviplata',
    NOTIFICATION_TYPE: 'API_DAVIPLATA',
    COMERCIO_ID: '0010203040',
    TERMINAL_ID: 'ESB10934',
    USER_TEST: { tipoDocumento: '01', numeroDocumento: '1134568019' },
    CREDITO:{
      MONTO_MIN_CRED: 1500000,
      SCORE_MIN_CRED: 725
    }
    // USER_TEST: { tipoDocumento: '02', numeroDocumento: '786630' },
    // USER_TEST: { tipoDocumento: '04', numeroDocumento: '1389123506' },
  },
  BAN: {
    //BASEURL:'http://18.119.28.121:3002',
    //BASEURL: 'http://3.143.204.139:3001',
    BASEURL: 'http://localhost:4001',
    GRANT_TYPE: 'client_credentials',
    CLIENT_ID: '51daaeab18363acf525e749130d9a7a5',
    CLIENT_SECRET: 'cbb2a37ea5e783de41835a83362d5897',
    SCOPE:
      'Product-balance:read:user TermsConditions:read:user TermsConditions-register:write:user Transfer-Intention:read:app Transfer-Intention:write:app',
    COMMERCE_URL: 'https://gateway.com/payment/route?commerce=Telovendo',
    CONFIRMATION_URL:
      'https://pagos-api-dev.tigocloud.net/bancolombia/callback',
    CREDITO:{
      MONTO_MIN_CRED: 2000000,
      SCORE_MIN_CRED: 750
    }      
  },
};
