import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';

import { redirect } from 'next/navigation';

import Chat from '@/components/Chat';

export default async function PricingPage() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  const user = session?.user;

  if (!session) {
    return redirect('/signin');
  }

  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-white flex flex-col">
          <Chat session={session}/>
        </main>
      </body>
    </html>
  );
}
