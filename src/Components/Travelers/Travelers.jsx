import React,{useEffect} from 'react'
import paris from '../../assets/paris.jpg'
import NewYork from '../../assets/NewYork.jpg'
import london from '../../assets/london.jpg'
import dubai from '../../assets/dubai.jpg'
import traveler1 from '../../assets/user1.jpg'
import traveler2 from '../../assets/user2.jpg'
import traveler3 from '../../assets/user3.jpg'
import traveler4 from '../../assets/user4.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler2,
    travelerName: 'IsraTech',
    socialLink: '@isratech8'
  },
  {
    id: 2,
    destinationImage: NewYork,
    travelerImage: traveler1,
    travelerName: 'Wilson Lindsey',
    socialLink: '@wilsonlindsey'
  },
  {
    id: 3,
    destinationImage: dubai,
    travelerImage: traveler3,
    travelerName: 'Nicole Web',
    socialLink: '@nicoleweb'
  },
  {
    id: 4,
    destinationImage: london,
    travelerImage: traveler4,
    travelerName: 'Linda Brad',
    socialLink: '@lindabrad'
  }
]

const Travelers = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>Top travelers of this month</h2>
        <div className="travelersContainer grid">
          {
            travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => {
              return (
                <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                  <img className='destinationImage' src={destinationImage} alt="paris" />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img className='travelerImage' src={travelerImage} alt="traveler1" />
                    </div>
                  </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Travelers