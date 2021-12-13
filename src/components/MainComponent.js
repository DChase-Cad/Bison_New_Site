import React, {useEffect} from 'react';

import HomeComponent from './HomeComponent';
import Header from './Header'
import Footer from './Footer'

// IMPORTS FOR MENU LINKS
import TwoForged from './Bison/TwoJaw/twoforged';
import TwoSemi from './Bison/TwoJaw/twosemi';
import ThreeForged from './Bison/ThreeJaw/ThreeForged';
import ThreeHD from './Bison/ThreeJaw/ThreeHD';
import ThreeLive from './Bison/ThreeJaw/ThreeLive';
import ThreeSemi from './Bison/ThreeJaw/ThreeSemi';
import ThreeSetTru from './Bison/ThreeJaw/ThreeSetTru';
import FourScrollForged from './Bison/FourJaw/Scroll/FourScrollForged';
import FourScrollSemi from './Bison/FourJaw/Scroll/FourScrollSemi';
import FourScrollSetTru from './Bison/FourJaw/Scroll/FourScrollSetTru';
import SixForged from './Bison/SixJaw/SixForged';
import SixSemi from './Bison/SixJaw/SixSemi';
import SixSetTru from './Bison/SixJaw/SixSetTru';
import FourIndForged from './Bison/FourJaw/Independent/FourIndForged'
import FourIndHD from './Bison/FourJaw/Independent/FourIndHD'
import FourIndSemi from './Bison/FourJaw/Independent/FourIndSemi'
import FourComboForged from './Bison/FourJaw/Combination/FourComboForged';
import FourComboSemi from './Bison/FourJaw/Combination/FourComboSemi';

import { Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar';


let title = 'Bison Lathe Chucks'

export default function MainComponent() {
    useEffect(() => {
        document.title = title
    }, []);
    return (
        <>
            <div className="container-fluid">
                <Header />
                <div className="container home-width">
                    <div className="mx-auto main-bg d-flex">
                        <Sidebar className="justify-self-start min-100" />
                        <Routes> 
                            <Route path='/home' element={<HomeComponent />} />

                            {/* 2 jaw routing */}
                            <Route path='/twoforged' element={<TwoForged />} />
                            <Route path='/twosemi' element={<TwoSemi />} />

                            {/* 3 jaw routing */}
                            <Route path='/threeforged' element={<ThreeForged />} />
                            <Route path='/threehd' element={<ThreeHD />} />
                            <Route path='/threelive' element={<ThreeLive />} />
                            <Route path='/threesemi' element={<ThreeSemi />} />
                            <Route path='/threesettru' element={<ThreeSetTru />} />

                            {/* 4j scroll routing */}
                            <Route path='/fourscrollforged' element={<FourScrollForged />} />
                            <Route path='/fourscrollsemi' element={<FourScrollSemi />} />
                            <Route path='/fourscrollsettru' element={<FourScrollSetTru />} />

                            {/* 4j independent routing */}
                            <Route path='/fourindforged' element={<FourIndForged />} />
                            <Route path='/fourindsemi' element={<FourIndSemi />} />
                            <Route path='/fourindhd' element={<FourIndHD />} />


                            {/* 4j combo routing */}
                            <Route path='/fourcombosemi' element={<FourComboSemi />} />
                            <Route path='/fourcomboforged' element={<FourComboForged />} />


                            {/* 6j routing */}
                            <Route path='/sixsettru' element={<SixSetTru />} />
                            <Route path='/sixforged' element={<SixForged />} />
                            <Route path='/sixsemi' element={<SixSemi />} />


                            {/* <Redirect to='/home' /> */}
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </>

    );


}