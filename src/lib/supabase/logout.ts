import { useRouter } from 'next/navigation';
import { createSupabaseBrowserClient } from './client';

const logout = async () => {
  console.log('sdsdsd');

  const supabase = createSupabaseBrowserClient();
  const { error } = await supabase.auth.signOut();

  // router.refresh()
};

export { logout };

