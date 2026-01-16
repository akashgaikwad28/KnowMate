'use client';

import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { Session } from '@supabase/supabase-js';

export default function Header() {
    const [session, setSession] = useState<Session | null>(null);
    const router = useRouter();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event: string, session: Session | null) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.refresh();
    };

    return (
        <header className="w-full border-b bg-white">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="font-bold text-xl">
                    <Link href="/">{APP_NAME}</Link>
                </div>
                <nav className="flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium hover:text-gray-600 transition-colors">
                        Home
                    </Link>
                    <Link href="/experts" className="text-sm font-medium hover:text-gray-600 transition-colors">
                        Experts
                    </Link>
                    <Link href="/dashboard" className="text-sm font-medium hover:text-gray-600 transition-colors">
                        Dashboard
                    </Link>
                    {session ? (
                        <button
                            onClick={handleSignOut}
                            className="text-sm font-medium hover:text-gray-600 transition-colors text-red-600"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link href="/auth" className="text-sm font-medium hover:text-gray-600 transition-colors text-indigo-600">
                            Login
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}
