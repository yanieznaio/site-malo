import React from 'react'

const MiniCardLogo = ({pos}) => {
  return (
    <div className="absolute  -mt-8 md:mt-9 inline-flex p-4 bg-[#F6F5F2] rounded-3xl shadow-xl " style={pos}>
            <div>
                <img src="/log.svg" alt="" className='w-10' />
            </div>
            <div className="mx-3">
                <span className="font-semibold">Coté environnement</span>
                <span className="block text-xs md:text-sm text-gray-500">Choisissez un expert pour vos aider</span>
            </div>
   
</div>
  )
}

export default MiniCardLogo