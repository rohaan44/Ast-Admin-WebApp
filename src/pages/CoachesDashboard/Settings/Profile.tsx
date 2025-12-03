import React, { useState } from 'react';
import ChangeProfile from '@/assets/ChangeProfile.png';
import SettingImage from '@/assets/SettingImage.png';
import { IoCameraOutline } from 'react-icons/io5';
import { MdOutlineArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profileImage, setProfileImage] = useState(ChangeProfile);
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: 'Timothy Doe',
    email: 'timothy@example.com',
    phone: '+1234567890',
    bio: 'Allenatore di forza certificato',
    specialization: 'Strength Training',
    identification: 'ID123456',
    certification: 'Cert123',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    console.log('Profile saved:', profile);
    alert('Profile saved successfully!');
    setTimeout(() => {
      navigate('/coaches/settings');
    }, 2000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <section className='w-full md:mb-0 md:mt-0 mt-16 mb-20 md:p-6 p-3'>
      <section className='flex flex-col lg:flex-row items-start gap-8'>
        <div className='w-full lg:w-[25rem] flex-shrink-0 flex flex-col items-start gap-3'>
          <div className='flex items-center justify-between mb-8 w-full gap-4'>
            <span
              onClick={() => navigate(-1)}
              className='bg-[#171717] cursor-pointer py-2 px-2 rounded-full text-xl'
            >
              <MdOutlineArrowBack />
            </span>
            <h1 className='text-sm sm:text-xl text-white font-bold'>
              Profilo e impostazioni
            </h1>
          </div>
          <div className='my-5 w-full flex flex-col items-center'>
            <div className='relative w-28 h-28 rounded-full overflow-hidden border-4 border-red-600 cursor-pointer'>
              <img
                src={profileImage}
                alt='Profile'
                className='w-full h-full object-cover'
              />

              <input
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                className='hidden'
                id='uploadDP'
              />

              <label
                htmlFor='uploadDP'
                className='absolute bottom-1 right-2 text-red-600 bg-black/50 px-1 py-[2px] rounded-full text-lg'
              >
                <IoCameraOutline />
              </label>
            </div>

            <div className='flex-1 w-full rounded-xl flex flex-col gap-4'>
              {Object.keys(profile).map((field) => (
                <div key={field} className='flex flex-col gap-1'>
                  <label className='text-gray-400 capitalize'>{field}</label>
                  <input
                    type='text'
                    name={field}
                    value={profile[field]}
                    onChange={handleChange}
                    className='px-4 py-4 rounded-md bg-[#1A1A1A] text-white outline-none'
                  />
                </div>
              ))}

              <button
                onClick={handleSave}
                className='mt-4 py-3 px-6 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition'
              >
                Salva Profilo
              </button>
            </div>
          </div>
        </div>

        <div className='flex-1 h-[100vh] hidden lg:flex items-center justify-center'>
          <div className='flex flex-col gap-2 items-center'>
            <div className='w-28 h-28'>
              <img src={SettingImage} className='w-full h-full object-cover' />
            </div>
            <h1 className='text-3xl font-semibold text-white'>Impostazioni</h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Profile;
