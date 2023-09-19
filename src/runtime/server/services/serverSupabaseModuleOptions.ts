import { useRuntimeConfig } from '#imports'
import { useSupabaseModuleOptions } from '../../composables/useSupabaseModuleOptions'
import { ModuleOptions } from '@nuxt/schema'

export const serverSupabaseModuleOptions = (): ModuleOptions => {
  const runtimeConfig = useRuntimeConfig()
  const moduleOptions = useSupabaseModuleOptions(runtimeConfig)
  const { SUPABASE_SERVICE_KEY: serviceKey } = runtimeConfig

  return {
    ...moduleOptions,
    serviceKey: serviceKey
  }
}
