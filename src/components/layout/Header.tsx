import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';

export default function Header() {
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
                </nav>
            </div>
        </header>
    );
}
