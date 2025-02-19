import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function SearchPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Mock data for search results
  const mockProducts = [
    {
      id: 1,
      name: "Product A",
      description: "This is Product A",
      link: "shop/A",
    },
    {
      id: 2,
      name: "Product B",
      description: "This is Product B",
      link: "shop/B",
    },
    {
      id: 3,
      name: "Product C",
      description: "This is Product C",
      link: "shop/C",
    },
    {
      id: 4,
      name: "Product D",
      description: "This is Product D",
      link: "shop/D",
    },
    {
      id: 5,
      name: "Product E",
      description: "This is Product E",
      link: "shop/E",
    },
    {
      id: 6,
      name: "Product F",
      description: "This is Product F",
      link: "shop/F",
    },
    {
      id: 7,
      name: "Product G",
      description: "This is Product G",
      link: "shop/G",
    },
    {
      id: 8,
      name: "Product H",
      description: "This is Product H",
      link: "shop/H",
    },
  ];

  // Extract search query from URL on initial load
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("q") || "";
    setSearchQuery(query);
    performSearch(query);
  }, [location.search]);

  // Function to perform search
  const performSearch = (query) => {
    if (query) {
      const results = mockProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
    performSearch(searchQuery);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex items-center bg-gray-100 px-4 py-2 w-1/2 md:w-2/5">
          <Search size={18} className="text-gray-600" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-transparent outline-none ml-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>

      {/* Search Results */}
      <h1 className="text-2xl font-bold mb-4">
        Search Results for "{searchQuery}"
      </h1>

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {searchResults.map((product) => (
            <a href={product.link}>
              <div key={product.id} className="px-4 py-2">
                <h1 className="text-2xl font-semibold">{product.name}</h1>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
