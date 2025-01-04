import { Button, Navbar,TextInput } from "flowbite-react";
import { Link,useLocation} from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa';

export default function Header() {
  const path=useLocation().pathname;
  return (
    <Navbar className="border-b-2">
        <Link to="/" className='self-center whitespace-nowrap text-sm 
        sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-pink-500 rounded-lg text-white'>Educational</span>
            blog
        </Link>
        <form className="relative hidden lg:flex items-center">
          <TextInput
            type="text"
            placeholder="Search..."
            
            
          />
          <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </form>
        <Button className="w-12 h-10 lg:hidden flex justify-center items-center" color="gray" pill>
            <AiOutlineSearch className="text-xl" />
        </Button>
        <div className="flex items-center gap-2 md:order-2">
          <Button className="w-12 h-10 hidden sm:inline" color="gray">
            <FaMoon/>
          </Button>
          <Link to='/sign-in'>
            <Button className="px-2 py-1 text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg" >
              Sign In
            </Button> 
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <div className="space-y-2 sm:flex sm:space-x-4 sm:space-y-0 sm:ml-4">
            <Navbar.Link active={path === '/'}className="block sm:inline" as={'div'}>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-500 dark:text-white"
              >
                Home
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/about'}className="block sm:inline" as={'div'}>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-500 dark:text-white"
              >
                About
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/projects'}className="block sm:inline" as={'div'}>
              <Link
                to="/projects"
                className="text-gray-700 hover:text-blue-500 dark:text-white"
              >
                Projects
              </Link>
            </Navbar.Link>
          
          
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
