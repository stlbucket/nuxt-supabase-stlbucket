import { serverSupabaseModuleOptions } from '#supabase/server'

export default defineEventHandler(async event => {
  return serverSupabaseModuleOptions(event)
})
