import { ModuleOptions, RuntimeConfig } from "@nuxt/schema"

export const useSupabaseModuleOptions = (): ModuleOptions => {
  const runtimeConfig = useRuntimeConfig()
  const {
    public: {
      SUPABASE_URL: url, 
      SUPABASE_KEY: key
    },
    SUPABASE_SERVICE_KEY: serviceKey,
  } = runtimeConfig

  // this check was moved from module.ts - they may not really be necessary
  if (!url) {
    // eslint-disable-next-line no-console
    console.warn('Missing `SUPABASE_URL` in `.env`')
  }
  if (!key) {
    // eslint-disable-next-line no-console
    console.warn('Missing `SUPABASE_KEY` in `.env`')
  }

  return {
    ...runtimeConfig.public.supabase,
    url: url,
    key: key,
    serviceKey: serviceKey
  }
}
