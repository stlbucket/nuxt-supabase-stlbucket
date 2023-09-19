import { serverSupabaseModuleOptions } from '#supabase/server'

export default defineEventHandler(async () => {
  return serverSupabaseModuleOptions()
})
