import React,{useEffect} from 'react'
import video from '../../assets/video.mp4'
import aeroplane from '../../assets/takeOff.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])


    return (
        <div className='home flex container'>
            <div className='mainText'>
                <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-Lasting Memories With us</h1>
            </div>
            <div className="homeVideo flex">

            </div>
            <div data-aos='fade-down' data-aos-duration='2500' className="homeImages flex">
                <video src={video} autoPlay muted loop className='video'></video>
            </div>
            <img src={aeroplane} alt="" className='plane' />
        </div>
    )
}

export default Home