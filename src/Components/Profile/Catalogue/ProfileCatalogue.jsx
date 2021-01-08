import React from 'react'
import NavBar from '../../Extras/NavBar'
import SubNav from '../../Extras/SubNav'
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'
import ThirdCard from './ThirdCard'

const ProfileCatalogue = () => {
    return (
        <div className="h-full">
            <NavBar/>
            <SubNav/>
            <FirstCard/>
            <SecondCard/>
            <ThirdCard/>
        </div>
    )
}

export default ProfileCatalogue
