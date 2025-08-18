export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 mt-10">
      <div className="container max-w-6xl text-sm text-gray-600 dark:text-gray-300 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {year} Dharmik Patel. All rights reserved.</p>
        <a href="#hero" className="hover:underline">Back to top ↑</a>
      </div>
    </footer>
  );
}
