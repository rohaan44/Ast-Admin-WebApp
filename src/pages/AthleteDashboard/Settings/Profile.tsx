import React, { useState } from 'react';
import Coach1 from '@/assets/Coach1.jpg';
import SettingImage from '@/assets/SettingImage.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import ResponsiveMenu from '@/components/ResponsiveMenu';

const Profile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(Coach1);
  // Profile form state
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
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // Live preview
    }
  };

  return (
    <section className='w-full  md:mb-0 md:mt-0 mt-16 mb-20 md:p-6 p-3'>
      <div className='flex flex-row items-start lg:items-center justify-between w-full gap-4'>
        <h1 className='text-3xl text-white font-bold'>
          Profilo e impostazioni
        </h1>
      </div>

      <section className='flex flex-col lg:flex-row items-start gap-8 mt-5'>
        {/* Sidebar */}
        <div className='w-full lg:w-[25rem] my-5 flex-shrink-0 flex flex-col items-center gap-3'>
          <div className='rounded-full overflow-hidden w-28 h-28 cursor-pointer border-2 border-gray-600'>
            <img
              src={profileImage}
              alt='Profile'
              className='w-full h-full object-cover'
              onClick={() => document.getElementById('uploadImage').click()}
            />
          </div>
          <div className='flex-1 w-full rounded-xl flex flex-col gap-4'>
            {/* Name */}
            <div className='flex flex-col gap-1'>
              <label className='text-gray-400'>Nome</label>
              <input
                type='text'
                name='name'
                value={profile.name}
                onChange={handleChange}
                className='px-4 py-4 rounded-md bg-[#1A1A1A] text-white outline-none'
              />
            </div>

            {/* Email */}
            <div className='flex flex-col gap-1'>
              <label className='text-gray-400'>Email</label>
              <input
                type='email'
                name='email'
                value={profile.email}
                onChange={handleChange}
                className='px-4 py-4 rounded-md bg-[#1A1A1A] text-white outline-none'
              />
            </div>

            {/* Phone */}
            <div className='flex flex-col gap-1'>
              <label className='text-gray-400'>Telefono</label>
              <input
                type='text'
                name='phone'
                value={profile.phone}
                onChange={handleChange}
                className='px-4 py-4 rounded-md bg-[#1A1A1A] text-white outline-none'
              />
            </div>

            {/* Bio */}
            <div className='flex flex-col gap-1'>
              <label className='text-gray-400'>Bio</label>
              <input
                type='text'
                name='bio'
                value={profile.bio}
                onChange={handleChange}
                className='px-4 py-4 rounded-md bg-[#1A1A1A] text-white outline-none'
              />
            </div>

            {/* Specialization */}
            <div className='flex flex-col gap-1'>
              <label className='text-gray-400'>Specializzazione</label>
              <input
                type='text'
                name='specialization'
                value={profile.specialization}
                onChange={handleChange}
                className='px-4 py-4 rounded-md bg-[#1A1A1A] text-white outline-none'
              />
            </div>

            {/* Identification */}
            <div className='flex flex-col gap-1'>
              <label className='text-gray-400'>Identificazione</label>
              <input
                type='text'
                name='identification'
                value={profile.identification}
                onChange={handleChange}
                className='px-4 py-4 rounded-md bg-[#1A1A1A] text-white outline-none'
              />
            </div>

            {/* Certification */}
            <div className='flex flex-col gap-1'>
              <label className='text-gray-400'>Certificazione</label>
              <input
                type='text'
                name='certification'
                value={profile.certification}
                onChange={handleChange}
                className='px-4 py-4 rounded-md bg-[#1A1A1A] text-white outline-none'
              />
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              className='mt-4 py-3 px-6 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition'
            >
              Salva Profilo
            </button>
          </div>
        </div>
        <div className='flex-1 h-[100vh] hidden lg:flex items-center justify-center'>
          <div className='flex flex-col gap-2 items-center'>
            <div className='w-28 h-28'>
              <img
                src={SettingImage}
                className='w-full h-full object-cover'
                alt='Setting Icon'
              />
            </div>
            <h1 className='text-3xl font-semibold text-white'>Impostazioni</h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Profile;
