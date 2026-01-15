export default function Footer() {
    return (
        <footer className="w-full border-t bg-gray-50 py-6 mt-auto">
            <div className="container mx-auto px-4 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} ExpertConnect. All rights reserved.</p>
            </div>
        </footer>
    );
}
