import { getUserSession } from '@/actions/getUserSession';
import SignInForm from '@/components/sign-in';
import { redirect } from 'next/navigation';

export default async function Page() {
  const {
    data: { session },
  } = await getUserSession();
  if (session) redirect('/admin/dashboard/generate-invoice');

  return <SignInForm />;
}
