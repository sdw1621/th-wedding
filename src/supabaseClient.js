import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// 환경 변수가 제대로 설정되지 않았을 경우를 위한 예외 처리 허용
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
