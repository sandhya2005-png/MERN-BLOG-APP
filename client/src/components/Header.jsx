import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun, FaEllipsisV } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) setSearchTerm(searchTermFromUrl);
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', { method: 'POST' });
      const data = await res.json();
      if (res.ok) dispatch(signoutSuccess());
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = new URLSearchParams({ searchTerm }).toString();
    navigate(`/search?${searchQuery}`);
  };

  // Dynamic colors for theme
  const linkTextColor = theme === 'light' ? 'text-gray-900' : 'text-white';
  const linkHoverColor = theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-700';
  const ellipsisColor = theme === 'light' ? 'text-gray-900' : 'text-white';

  return (
    <Navbar fluid rounded className="border-b-2 relative">
      {/* Logo */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Educational
        </span>{' '}
        Blog
      </Link>

      {/* Desktop Search - moved slightly right */}
      <form
        onSubmit={handleSubmit}
        className="hidden lg:flex flex-1 ml-8"
      >
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      {/* Mobile Search Button */}
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-2 md:order-2">
        {/* Theme Toggle - visible on all screen sizes */}
        <Button
          className="w-10 h-10 bg-transparent hover:bg-gray-300 dark:hover:bg-gray-700"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-yellow-300" />
          )}
        </Button>

        {/* User Dropdown / Sign In */}
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="user" img={currentUser.profilePicture} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">{currentUser.email}</span>
            </Dropdown.Header>
            <Link to="/dashboard?tab=profile">
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}

        {/* Three-dot Menu Toggle */}
        <Button
          className={`w-10 h-10 ml-2 bg-transparent hover:bg-gray-300 dark:hover:bg-gray-700`}
          pill
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaEllipsisV className={ellipsisColor} />
        </Button>
      </div>

      {/* Links Menu */}
      {menuOpen && (
        <div
          className={`absolute right-4 top-16 rounded-lg p-2 flex flex-col gap-2 z-50 lg:min-w-[150px] ${
            theme === 'light' ? 'bg-white' : 'bg-gray-800'
          }`}
        >
          <Link
            to="/"
            className={`px-3 py-1 rounded ${linkTextColor} ${linkHoverColor} ${
              path === '/' ? 'bg-gray-300 dark:bg-gray-700' : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`px-3 py-1 rounded ${linkTextColor} ${linkHoverColor} ${
              path === '/about' ? 'bg-gray-300 dark:bg-gray-700' : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`px-3 py-1 rounded ${linkTextColor} ${linkHoverColor} ${
              path === '/projects' ? 'bg-gray-300 dark:bg-gray-700' : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
        </div>
      )}
    </Navbar>
  );
}
