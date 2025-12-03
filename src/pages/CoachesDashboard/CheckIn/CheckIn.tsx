import { useState } from 'react';
import CheckInIcon from '@/assets/CheckInIcon.png';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import Profile from '@/assets/ProfileImage1.png';
import Coman from '@/assets/Coman.png';
import Back from '@/assets/FrontBody.png';
import Side from '@/assets/SideBody.png';
import Front from '@/assets/BackBody.png';
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from 'react-icons/io';
import { FaArrowLeft } from 'react-icons/fa6';
import CheckIn1 from './CheckIn1';

const athletes = [
  {
    name: 'John Doe',
    age: 30,
    date: 'Sep 20, 2024',
    weight: '78.5 kg',
    height: '182 cm',
    photos: 3,
    status: 'In attesa',
    avatar: Profile,

    stats: [
      { title: 'Peso', value: '78.5 kg', change: '+0.2 kg', type: 'up' },
      { title: 'Grasso', value: '18%', change: '-1%', type: 'down' },
      { title: 'Muscolo', value: '41%', change: '+2%', type: 'up' },
    ],

    photosList: [
      { title: 'Fronte', img: Front },
      { title: 'Lato', img: Side },
      { title: 'Dietro', img: Back },
    ],
  },

  {
    name: 'Mitchel Johnson',
    age: 28,
    date: 'Sep 19, 2024',
    weight: '79.3 kg',
    height: '180 cm',
    photos: 2,
    status: 'Recensito',
    avatar: Profile,

    stats: [
      { title: 'Peso', value: '79.3 kg', change: '+0.1 kg', type: 'up' },
      { title: 'Grasso', value: '20%', change: '0%', type: 'neutral' },
      { title: 'Muscolo', value: '39%', change: '+1%', type: 'up' },
    ],

    photosList: [
      { title: 'Fronte', img: Front },
      { title: 'Lato', img: Side },
      { title: 'Dietro', img: Back },
    ],
  },

  {
    name: 'Max William',
    age: 26,
    date: 'Sep 18, 2024',
    weight: '75.4 kg',
    height: '181 cm',
    photos: 3,
    status: 'In attesa',
    avatar: Profile,

    stats: [
      { title: 'Peso', value: '75.4 kg', change: '-0.3 kg', type: 'down' },
      { title: 'Grasso', value: '17%', change: '-2%', type: 'down' },
      { title: 'Muscolo', value: '43%', change: '+1%', type: 'up' },
    ],

    photosList: [
      { title: 'Fronte', img: Front },
      { title: 'Lato', img: Side },
      { title: 'Dietro', img: Back },
    ],
  },

  {
    name: 'Emily Carter',
    age: 25,
    date: 'Sep 16, 2024',
    weight: '70.5 kg',
    height: '168 cm',
    photos: 4,
    status: 'Recensito',
    avatar: Profile,

    stats: [
      { title: 'Peso', value: '70.5 kg', change: '+0.4 kg', type: 'up' },
      { title: 'Grasso', value: '22%', change: '-1%', type: 'down' },
      { title: 'Muscolo', value: '37%', change: '+1%', type: 'up' },
    ],

    photosList: [
      { title: 'Fronte', img: Front },
      { title: 'Lato', img: Side },
      { title: 'Dietro', img: Back },
    ],
  },

  {
    name: 'Oliver Smith',
    age: 32,
    date: 'Sep 15, 2024',
    weight: '82.1 kg',
    height: '185 cm',
    photos: 3,
    status: 'In attesa',
    avatar: Profile,

    stats: [
      { title: 'Peso', value: '82.1 kg', change: '-0.1 kg', type: 'down' },
      { title: 'Grasso', value: '19%', change: '-1%', type: 'down' },
      { title: 'Muscolo', value: '42%', change: '+1%', type: 'up' },
    ],

    photosList: [
      { title: 'Fronte', img: Front },
      { title: 'Lato', img: Side },
      { title: 'Dietro', img: Back },
    ],
  },

  {
    name: 'Sophia Wilson',
    age: 24,
    date: 'Sep 14, 2024',
    weight: '65.8 kg',
    height: '164 cm',
    photos: 2,
    status: 'Recensito',
    avatar: Profile,

    stats: [
      { title: 'Peso', value: '65.8 kg', change: '+0.3 kg', type: 'up' },
      { title: 'Grasso', value: '21%', change: '-1%', type: 'down' },
      { title: 'Muscolo', value: '36%', change: '+1%', type: 'up' },
    ],

    photosList: [
      { title: 'Fronte', img: Front },
      { title: 'Lato', img: Side },
      { title: 'Dietro', img: Back },
    ],
  },

  {
    name: 'Liam Brown',
    age: 29,
    date: 'Sep 13, 2024',
    weight: '77.2 kg',
    height: '179 cm',
    photos: 4,
    status: 'In attesa',
    avatar: Profile,

    stats: [
      { title: 'Peso', value: '77.2 kg', change: '-0.4 kg', type: 'down' },
      { title: 'Grasso', value: '18%', change: '-1%', type: 'down' },
      { title: 'Muscolo', value: '44%', change: '+2%', type: 'up' },
    ],

    photosList: [
      { title: 'Fronte', img: Front },
      { title: 'Lato', img: Side },
      { title: 'Dietro', img: Back },
    ],
  },

  {
    name: 'Ava Martinez',
    age: 27,
    date: 'Sep 12, 2024',
    weight: '68.4 kg',
    height: '170 cm',
    photos: 3,
    status: 'Recensito',
    avatar: Profile,

    stats: [
      { title: 'Peso', value: '68.4 kg', change: '+0.1 kg', type: 'up' },
      { title: 'Grasso', value: '23%', change: '0%', type: 'neutral' },
      { title: 'Muscolo', value: '35%', change: '+1%', type: 'up' },
    ],

    photosList: [
      { title: 'Fronte', img: Front },
      { title: 'Lato', img: Side },
      { title: 'Dietro', img: Back },
    ],
  },

  {
    name: 'James Anderson',
    age: 31,
    date: 'Sep 11, 2024',
    weight: '84.7 kg',
    height: '188 cm',
    photos: 2,
    status: 'In attesa',
    avatar: Profile,

    stats: [
      { title: 'Peso', value: '84.7 kg', change: '+0.5 kg', type: 'up' },
      { title: 'Grasso', value: '20%', change: '-1%', type: 'down' },
      { title: 'Muscolo', value: '40%', change: '+1%', type: 'up' },
    ],

    photosList: [
      { title: 'Fronte', img: Front },
      { title: 'Lato', img: Side },
      { title: 'Dietro', img: Back },
    ],
  },

  {
    name: 'Mia Thompson',
    age: 23,
    date: 'Sep 10, 2024',
    weight: '62.3 kg',
    height: '165 cm',
    photos: 4,
    status: 'Recensito',
    avatar: Profile,

    stats: [
      { title: 'Peso', value: '62.3 kg', change: '-0.2 kg', type: 'down' },
      { title: 'Grasso', value: '19%', change: '-1%', type: 'down' },
      { title: 'Muscolo', value: '38%', change: '+2%', type: 'up' },
    ],

    photosList: [
      { title: 'Fronte', img: Front },
      { title: 'Lato', img: Side },
      { title: 'Dietro', img: Back },
    ],
  },
];

const CoachesCheckIn = () => {
  const [selectedTab, setSelectedTab] = useState('Tutte');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAthlete, setSelectedAthlete] = useState(null);
  const [showCheckIn1, setShowCheckIn1] = useState(false);

  const filteredAthletes = athletes.filter((ath) => {
    const matchesSearch = ath.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesTab =
      selectedTab === 'Tutte'
        ? true
        : selectedTab === 'In attesa'
        ? ath.status === 'In attesa'
        : ath.status === 'Recensito';

    return matchesSearch && matchesTab;
  });

  return (
    <section className='w-full md:mb-0 md:mt-0 mt-16 mb-20 md:p-5 p-3'>
      {/* Title */}
      <div className='flex flex-row items-start lg:items-center justify-between w-full gap-4'>
        <span
          onClick={() => setSelectedAthlete(null)}
          className={`w-12 lg:hidden cursor-pointer bg-[#1E1E1E] rounded-full items-center justify-center h-12 
    ${selectedAthlete ? 'flex' : 'hidden'}
  `}
        >
          <FaArrowLeft />
        </span>

        <h1 className='text-lg md:text-2xl text-white font-bold'>
          Recensioni del check-in
        </h1>
      </div>

      <section className='flex items-start w-full justify-start gap-8'>
        {/* LEFT SIDE */}
        <div
          className={`w-full my-5 lg:w-[25rem] flex items-start flex-col gap-4 ${
            selectedAthlete ? 'hidden lg:flex' : 'flex'
          }`}
        >
          <div className='w-full  px-4 bg-[#151515] flex items-center gap-2 rounded-md border border-[#252525]'>
            <span>
              <CiSearch />
            </span>
            <input
              type='text'
              placeholder='Search Athlete'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full py-3 bg-transparent outline-none text-sm placeholder-gray-400'
            />
          </div>

          <div className='flex w-full items-center gap-2'>
            {['Tutte', 'In attesa', 'Recensite'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-3 py-1 rounded-full text-sm font-semibold 
                  ${
                    selectedTab === tab
                      ? 'bg-red-500 text-white'
                      : 'bg-[#1C1C1E] text-gray-300'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className='flex w-full flex-col gap-2'>
            {filteredAthletes.map((athlete, i) => (
              <div
                key={i}
                onClick={() => setSelectedAthlete(athlete)}
                className='w-full border-b border-[#252525] px-2 py-2 flex items-center justify-between  cursor-pointer transition'
              >
                <div className='flex items-center gap-4'>
                  <img
                    src={athlete.avatar}
                    className='w-12 h-12 rounded-full object-cover'
                  />

                  <div>
                    <h2 className='font-semibold text-[15px]'>
                      {athlete.name}
                    </h2>
                    <p className='text-xs text-gray-400'>{athlete.date}</p>
                    <p className='text-[11px] text-gray-400 mt-1'>
                      Peso: {athlete.weight} | Altezza: {athlete.height} | Foto:{' '}
                      {athlete.photos}
                    </p>
                  </div>
                </div>

                {/* Right Side */}
                <div className='flex flex-col items-end gap-2'>
                  {athlete.status === 'Recensito' ? (
                    <span className='px-1 sm:px-3 py-[0.6] sm:py-1 text-[8px] sm:text-[11px] text-center  bg-green-600 rounded-full  font-medium'>
                      Recensito
                    </span>
                  ) : (
                    <span className='px-1 sm:px-3 py-[0.6] sm:py-1 text-[8px] sm:text-[11px] bg-yellow-600 text-center rounded-full  font-medium'>
                      In attesa
                    </span>
                  )}

                  <MdOutlineArrowForwardIos className='text-gray-400 text-[18px]' />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`flex-1 lg:w-[auto] w-full items-center justify-center my-5 rounded-md p-2 sm:p-8 h-full ${
            selectedAthlete ? 'flex' : 'hidden lg:flex'
          } `}
        >
          {showCheckIn1 ? (
            <div className='w-full'>
              <CheckIn1 setShowCheckIn1={setShowCheckIn1} />
            </div>
          ) : !selectedAthlete ? (
            <div className='hidden lg:flex flex-col gap-2 items-center opacity-60'>
              <div className='w-24 h-24'>
                <img
                  src={CheckInIcon}
                  className='w-full h-full object-cover'
                  alt='Setting Icon'
                />
              </div>
              <h1 className='text-3xl font-semibold'>Check-In</h1>
              <p className='text-gray-400 text-sm'>
                Select an athlete to view details
              </p>
            </div>
          ) : (
            <section className={`w-full flex flex-col gap-4`}>
              <div className='border-b  border-[#1E1E1E] w-full '>
                <div className='flex items-center justify-center gap-2'>
                  <div>
                    <img
                      src={selectedAthlete.avatar}
                      className='w-28 h-28 rounded-full mx-auto object-cover mb-4'
                    />
                  </div>
                  <div className='flex items-start flex-col gap-1'>
                    <h1 className='text-2xl font-bold'>
                      {selectedAthlete.name}
                    </h1>
                    <span className='text-gray-400 text-sm'>
                      Eta: {selectedAthlete.age}
                    </span>
                    <p className='text-gray-400 text-sm'>
                      Date: {selectedAthlete.date}
                    </p>

                    <span className='py-[0.6] border border-[#34C759] text-[#34C759] text-xs rounded-full px-1'>
                      Attiva
                    </span>
                  </div>
                </div>
              </div>

              <div className='bg-[#1E1E1E] w-full flex flex-col items-start gap-5 rounded-md py-4 px-4'>
                <div className='grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 w-full gap-4 items-center'>
                  {selectedAthlete.stats?.map((item, index) => (
                    <div
                      key={index}
                      className='border bg-[#121212]  flex items-center justify-center rounded-md border-[#790600] h-[8rem] w-full'
                    >
                      <div className='flex flex-col items-center gap-1'>
                        <p>{item.title}</p>
                        <h1>{item.value}</h1>

                        <span className='flex items-center gap-1 text-sm'>
                          {item.type === 'up' ? (
                            <IoIosArrowRoundUp className='text-green-500 text-lg' />
                          ) : (
                            <IoIosArrowRoundDown className='text-red-500 text-lg' />
                          )}
                          {item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='grid grid-cols-3 w-full gap-4 items-center'>
                  {selectedAthlete.photosList?.map((photo, index) => (
                    <div
                      key={index}
                      className='flex flex-col items-center gap-1 w-full h-[8rem]'
                    >
                      <div className='flex items-start h-full w-full bg-[#252525] rounded-xl overflow-hidden'>
                        <img
                          src={photo.img}
                          className='object-contain w-full h-full'
                        />
                      </div>
                      <h1 className='text-lg font-semibold'>{photo.title}</h1>
                    </div>
                  ))}
                </div>

                <div className='flex items-start flex-col gap-4 w-full my-6'>
                  <div className='flex items-center justify-between rounded-md w-full py-4 px-4 bg-[#252525] '>
                    <div className='flex items-start flex-col gap-1'>
                      <h1 className='text-xl font-semibold'>
                        Nota dell'atleta
                      </h1>
                      <p className='text-sm text-[#FFFFFFB2] font-normal'>
                        Più lento in palestra questa settimana
                      </p>
                    </div>
                    <span className='w-6 flex items-center justify-center h-6'>
                      <img className='w-full h-full' src={Coman} />
                    </span>
                  </div>

                  <button
                    className='py-4 px-4 w-full bg-red-600 rounded-full'
                    onClick={() => setShowCheckIn1(true)}
                  >
                    Settimana precedente
                  </button>
                </div>
              </div>

              <div className='bg-[#1E1E1E] flex flex-col items-start gap-5 rounded-md py-4 px-4'>
                <h1 className='text-2xl font-semibold'>Allenamento lento</h1>
                <div className='flex items-start flex-col gap-2 w-full'>
                  <div className='bg-[#252525] py-4 px-2 rounded-md flex items-center justify-center w-full'>
                    <h1 className='text-sm font-normal text-[#FFFFFFB2]'>
                      Nutrizione: Aumentare i carboidrati del 5%
                    </h1>
                  </div>
                  <div className='bg-[#252525] py-4 px-2 rounded-md flex items-start justify-start w-full'>
                    <h1 className='text-sm font-normal text-[#FFFFFFB2]'>
                      Allenamento: aggiungi un giorno di riposo
                    </h1>
                  </div>
                  <div className='bg-[#34C7591A] border border-[#34C759] py-4 px-2 rounded-md flex items-start justify-start w-full'>
                    <h1 className='text-sm font-normal text-[#FFFFFFB2]'>
                      Obiettivo in linea con i piani - Consigliati piccoli
                      aggiustamenti
                    </h1>
                  </div>

                  <div className='flex my-5 flex-wrap items-center w-full justify-center gap-2'>
                    <button className='py-2 px-6 bg-[#34C759] rounded-full'>
                      Approvare
                    </button>
                    <button className='py-2 px-6 bg-[#8D8C8D] rounded-full'>
                      Modificare
                    </button>
                    <button className='py-2 px-6 bg-[#EB5725] rounded-full'>
                      Respinto
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>
    </section>
  );
};

export default CoachesCheckIn;
