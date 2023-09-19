export default defineNuxtConfig({
  modules: ['../src/module'],

  supabase: {
    // cookieOptions: {
    //   name: 'test',
    //   maxAge: 60 * 60,
    //   sameSite: 'strict',
    //   secure: false,
    // },
    // clientOptions: {
    //   auth: {
    //     flowType: 'implicit',
    //   },
    // },
    // redirect: true,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/unprotected', '/public/*']
    },
  },
  nitro: {
    routeRules: {
      '/clientonly': { ssr: false }
    },
  },
  runtimeConfig: {
    SUPABASE_SERVICE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU',
    SUPABASE_JWT_SECRET: 'super-secret-jwt-token-with-at-least-32-characters-long',
    SUPABASE_URI: 'postgresql://postgres:postgres@localhost:54322/postgres',  
    public: {      
      SUPABASE_URL: 'http://localhost:54321',
      SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0',
    }  
  },
})
