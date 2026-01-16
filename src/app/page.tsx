import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold mb-6">Welcome to ExpertConnect</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Connect with industry experts for mentorship and guidance.
            </p>
            <div className="flex gap-4">
                <Link
                    href="/auth"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
                >
                    Get Started
                </Link>
                <Link
                    href="/experts"
                    className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors"
                >
                    Browse Experts
                </Link>
            </div>
        </div>
    );
}
