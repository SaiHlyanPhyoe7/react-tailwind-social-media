import React, {useState} from 'react';
import img1 from '../../../imagesToTest/profileImg/1.png'
import img2 from "../../../imagesToTest/profileImg/2.jpeg";
import kristen from '../../../imagesToTest/actress/kristenStewart.jpeg'
import taylor from '../../../imagesToTest/actress/taylorSwift.jpeg'
import olivia from '../../../imagesToTest/actress/oliviaRodrigo.png'
import avamax from '../../../imagesToTest/actress/avaMax.jpeg'
import duaLipa from '../../../imagesToTest/actress/duaLipa.jpeg'
import kylieJenner from '../../../imagesToTest/actress/kylie.jpeg'
import kendallJenner from '../../../imagesToTest/actress/kendall.jpeg'
import avrilLavigne from '../../../imagesToTest/actress/avrilLavigne.jpeg'
import yaelShelbie from '../../../imagesToTest/actress/yaelShelbie.jpeg'
import anaDeArmas from '../../../imagesToTest/actress/anadeArmas.jpeg'
import margotRobbie from '../../../imagesToTest/actress/margotRobbie.jpeg'
import mileyCyrus from '../../../imagesToTest/actress/mileyCyrus.jpeg'
import camilaCabello from '../../../imagesToTest/actress/camilaCabello.jpeg'
import deepikaPadukone from '../../../imagesToTest/actress/deepikaPadukone.jpeg'
import monicaBellucci from '../../../imagesToTest/actress/monicaBellucci.jpeg'
import aishwaryaRaiBachchan from '../../../imagesToTest/actress/aishwaryaRaiBachchan.jpeg'
import selena from '../../../imagesToTest/actress/selenaGomez.jpeg'

const FriendsRightSideBar = () => {
    const [data,setData] = useState([
        {
            id : 1,
            img : kristen,
            name: 'Kristen Stewart',
            number : '28',
            mutual1 : selena,
            mutual2 :aishwaryaRaiBachchan
        },
        {
            id : 2,
            img : taylor,
            name: 'Taylor Swift',
            number : '17',
            mutual1 : monicaBellucci,
            mutual2 : deepikaPadukone
        },
        {
            id : 3,
            img : olivia,
            name: 'Olivia Rodrigo',
            number : '35',
            mutual1 : camilaCabello,
            mutual2 : mileyCyrus
        },
        {
            id : 4,
            img : avamax,
            name: 'Ava Max',
            number : '44',
            mutual1 : margotRobbie,
            mutual2 : anaDeArmas
        },
        {
            id : 5,
            img : duaLipa,
            name: 'Dua Lipa',
            number : '62',
            mutual1 : yaelShelbie,
            mutual2 : avrilLavigne
        },
        {
            id : 6,
            img : kylieJenner,
            name: 'Kylie Jenner',
            number : '56',
            mutual1 : kendallJenner,
            mutual2 : selena
        },
        {
            id : 7,
            img : kendallJenner,
            name: 'Kendall Jenner',
            number : '37',
            mutual1 : kylieJenner,
            mutual2 : avrilLavigne
        },
        {
            id : 8,
            img : avrilLavigne,
            name: 'Avril Lavigne',
            number : '9',
            mutual1 : yaelShelbie,
            mutual2 : anaDeArmas
        },
        {
            id : 9,
            img : yaelShelbie,
            name: 'Yael Shelbie',
            number : '80',
            mutual1 : margotRobbie,
            mutual2 : mileyCyrus
        },
        {
            id : 10,
            img : anaDeArmas,
            name: 'Ana de Armas',
            number : '26',
            mutual1 : camilaCabello,
            mutual2 :deepikaPadukone
        },
        {
            id : 11,
            img : margotRobbie,
            name: 'Margot Robbie',
            number : '49',
            mutual1 : monicaBellucci,
            mutual2 :aishwaryaRaiBachchan
        },
        {
            id : 12,
            img : mileyCyrus,
            name: 'Miley Cyrus',
            number : '13',
            mutual1 : selena,
            mutual2 :kristen
        },
        {
            id : 13,
            img : camilaCabello,
            name: 'Camila Cabello',
            number : '49',
            mutual1 : taylor,
            mutual2 :olivia
        },
        {
            id : 14,
            img : deepikaPadukone,
            name: 'Deepika Padukone',
            number : '61',
            mutual1 : avamax,
            mutual2 : duaLipa
        },
        {
            id : 15,
            img : monicaBellucci,
            name: 'Monica Bellucci',
            number : '42',
            mutual1 : kylieJenner,
            mutual2 :kendallJenner
        },
        {
            id : 16,
            img : aishwaryaRaiBachchan,
            name: 'Aishwarya Rai Bachchan',
            number : '3',
            mutual1 : avrilLavigne,
            mutual2 :yaelShelbie
        },
        {
            id : 17,
            img : selena,
            name: 'Selena Gomez',
            number : '25',
            mutual1 : anaDeArmas,
            mutual2 :margotRobbie
        }

    ])
    const confirmHandler = (i) =>{
        setData(data.filter(x=>x.id !== i))
    }
    console.log(data)
    return (

        <div className='col-span-10 h-[100vh] overflow-scroll text-white grid grid-cols-6 h-full'>
            {
                data.map((data,index)=>{
                    return (
                        <div key={data.id} className='bg-gray-200 col-span-1 h-[380px] my-1 rounded-lg mx-1 duration-1000'>
                            <img src={data.img} className='h-[220px] shadow shadow-gray-600 mx-auto mt-2 rounded-lg' alt=""/>
                            <div className='mt-2'>
                                <h1 className='mx-3 text-[#E21D35]'>{data.name}</h1>
                                <div className='flex items-center relative mx-3'>
                                    <span className='flex items-center'>
                                        <img className='w-[16px] absolute left-[12px] rounded-full' src={data.mutual1} alt=""/>
                                        <img className='w-[16px] absolute rounded-full' src={data.mutual2} alt=""/>
                                    </span>
                                    <p className='ml-8 text-sm text-[#E21D35]'><span>{data.number}</span> mutual friends</p>
                                </div>
                                <div className=''>
                                    <button className='rounded-lg text-white flex mx-auto justify-center items-center w-[90%] py-1 my-1 bg-indigo-500 text-gray-300 hover:bg-indigo-400'
                                    onClick={()=>confirmHandler(data.id)}>Confirm</button>
                                    <button className='rounded-lg text-white flex mx-auto justify-center items-center w-[90%] py-1 my-1 bg-gray-500 text-gray-500 hover:bg-gray-600'
                                            onClick={()=>confirmHandler(data.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default FriendsRightSideBar;