/// <reference types="react-scripts" />

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        REACT_APP_TWITTER_CLIENT_ID: string;
        REACT_APP_TWITTER_CLIENT_SECRET: string;
        REACT_APP_REDIRECT_URI: string;
        // NODE_ENV: 'development' | 'production' | 'test';
        // PORT?: string;
        // PWD: string;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}