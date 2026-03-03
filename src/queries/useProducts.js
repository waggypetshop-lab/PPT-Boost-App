import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabaseClient';

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_published', true)
        .eq('category', 'template');

      if (error) throw error;
      return data;
    },
  });
}
