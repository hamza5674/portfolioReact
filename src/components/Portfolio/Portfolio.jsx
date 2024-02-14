import React from 'react'
import './style.css';
import image1 from '../../images/portfolio-1.jpg'
function Portfolio() {
    return (
        <>
            <div className='py-20'>
                <h1 className='mb-8 text-6xl font-bold'>Our Portfolio</h1>
                <p className='text-[#717173] mb-8 text-[18px]'>There are many variations of passages of Lorem Ipsum available, <br />
                    but the majority have suffered alteration.</p>
            </div>

            <div className='grid grid-cols-1 px-3 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='portfolio'>
                    <div className='thumbnail-inner'>
                        <div className='thumbnail'>
                            <img src={image1} alt="" />
                        </div>
                        <div className='bg-blr-image'>
                        <img src={image1} alt="" />
                        </div>

                    </div>
                    <div className='content'>
                        <div className='inner'>
                            <p>Development</p>
                            <h4 className='text-white'>Getting tickets to the next show</h4>
                            <div className='portfolio-button'>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


        </>
    )
}

export default Portfolio