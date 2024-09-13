import Link from 'next/link';

interface BreadcrumbProps {
  city: string; // The current city for dynamic pages
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ city }) => {
  return (
    <nav className="breadcrumb mb-4 text-sm">
      <ul className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link href="/service-areas" className="text-blue-600 hover:underline">
            Service Areas
          </Link>
        </li>
        <li>/</li>
        <li className="text-gray-500">{city}</li> {/* Current city page */}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
