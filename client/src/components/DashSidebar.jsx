import { Sidebar } from 'flowbite-react';
import { HiUser, HiArrowSmRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';

export default function DashSidebar() {
    const location = useLocation();
    const dispatch=useDispatch();
    const [tab, setTab] = useState('');
    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const tabFromUrl = urlParams.get('tab');
      if (tabFromUrl) {
        setTab(tabFromUrl);
      }
    },[location.search]);
    const handleSignout = async() =>{
        try{
          const res=await fetch('/api/user/signout',{
            method:"POST",
          });
          const data=await res.json();
          if(!res.ok){
            console.log(data.message);
          } else{
            dispatch(signoutSuccess());
          }
        } catch (error){
          console.log(error.message);
        }
      };
  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-1'>
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item active={tab === 'profile'} icon={HiUser} label='User' labelColor='dark' className="text-gray-800 dark:text-white bg-transparent dark:bg-gray-700" as='div'>
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer text-gray-800 dark:text-white bg-transparent dark:bg-gray-700' onClick={handleSignout}>
              Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    );
}
    