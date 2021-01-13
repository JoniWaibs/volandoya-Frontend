import React from 'react'
import NavBar from '../../Extras/NavBar'
import SubNav from '../../Extras/SubNav'
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'
import ThirdCard from './ThirdCard'
import FourthCard from './FourthCard'

const ProfileCatalogue = () => {
    return (
        <div className="h-full">
            <NavBar/>
            <SubNav/>
            <FirstCard/>
            <FourthCard/>
            <SecondCard/>
            <ThirdCard/>

        </div>
    )
}

export default ProfileCatalogue
