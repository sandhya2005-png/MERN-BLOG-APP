import {Sidebar } from 'flowbite-react';
import {HiUser, HiArrowSmRight} from 'react-icons/hi';
import { useEffect,useState } from 'react';
import {Link, useLocation} from 'react-router-dom';

export default function DashSidebar() {
    const location = useLocation();
    const [tab, setTab] = useState('');
    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const tabFromUrl = urlParams.get('tab');
      if (tabFromUrl) {
        setTab(tabFromUrl);
      }
    },[location.search]);
  return (
    <Sidebar className="w-full md:w-56 bg-white dark:bg-gray-800">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=profile'>
                    <Sidebar.Item active={tab === 'profile'} icon={HiUser} label='User' labelColor='dark' className="text-gray-800 dark:text-white bg-transparent dark:bg-gray-700">
                        Profile
                    </Sidebar.Item>
                </Link>
                <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer text-gray-800 dark:text-white bg-transparent  dark:bg-gray-700'>
                    Sign Out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
    
  )
}
