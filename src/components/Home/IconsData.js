import React from 'react';
// import icon_1 from '../../asset/icon_1.avif'
// import icon_2 from '../../asset/icon_2.avif'
// import icon_3 from '../../asset/icon_3.avif'
// import icon_4 from '../../asset/icon_4.avif'
import './IconsData.css'
const IconsData = () => {
    const allIcons = [
        {
            name: "Organic Products",
            image: 'https://cdn.shopify.com/s/files/1/0566/8981/9857/files/icon-4_462465a3-aa44-40d2-8357-03cd832d4b66_200x200.png?v=1637660423',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse'
        },

        {
            name: "No Pesticides",
            image: 'https://cdn.shopify.com/s/files/1/0566/8981/9857/files/icon-1_55c6b8d7-d6ec-421c-8dcd-b55a5f751856_200x200.png?v=1637660427',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse  '
        },

        {
            name: "Fresh Eatables",
            image: 'https://cdn.shopify.com/s/files/1/0566/8981/9857/files/icon-2_61644156-944e-4479-93db-4d85dd537942_200x200.png?v=1637660425',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse'
        },

        {
            name: "Healthy Life",
            image: 'https://cdn.shopify.com/s/files/1/0566/8981/9857/files/icon-3_419a24ed-6e59-4613-84a5-024cc865077e_200x200.png?v=1637660424',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse '
        }

    ]
    return (
        <div className='flex items-center justify-center lg:my-20'>
            <div className='grid lg:grid-cols-4 grid-cols-1 px-12'>
                {allIcons.map((icon, index) => <div className='zoom'>
                    <div className='flex justify-center'>
                        <img className='icon_image w-44 ' src={icon.image} alt="" />
                        <div className='relative'>
                            <h4 className='text-2xl  index absolute bottom-3 right-1'>{index + 1}</h4>
                        </div>
                    </div>
                    <div >
                        <h1 className='text-3xl my-5 font-semibold text-center hover:text-[#5DA88E]'>{icon.name}</h1>

                        <p className='text-center'>{icon.details}</p>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default IconsData;