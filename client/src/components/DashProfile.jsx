import {useSelector} from 'react-redux';
import { TextInput } from 'flowbite-react';
import { Button } from 'flowbite-react';
export default function DashProfile() {
    const {currentUser} = useSelector(state => state.user)
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <div className='w-32 h-32 self-center cursor-pointer shodow-md-overflow-hidden rounded-full'>
          <img
            src={currentUser.profilePicture} alt='user'
            className='rounded-full w-full h-full object-cover border-8 border-[lightgray]'
          />
        </div>
        <TextInput
          type='text'
          id='username'
          placeholder='username'
          defaultValue={currentUser.username}
        />
        <TextInput
          type='email'
          id='email'
          placeholder='email'
          defaultValue={currentUser.email}
        />
        <TextInput
          type='password'
          id='password'
          placeholder='password'
        />
        <Button
          type='submit'
          className="px-2 py-1 text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg"
        >
          Update
        </Button>
        </form>
        <div className='text-red-500 flex justify-between mt-5'>
            <span className='cursor-pointer'>Delete Account</span>
            <span className='cursor-pointer'>Sign out</span>
        </div>
    </div>
  )
}
