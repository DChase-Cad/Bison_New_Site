import React from 'react';
import {Helmet} from 'react-helmet';
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

import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from './sidebar';


let page_title=''

export default function MainComponent() {

    return (
        <>
            <div className="container-fluid">
                <Header />
                <div className="container home-width">
                    <div className="mx-auto main-bg d-flex">
                        <Sidebar className="justify-self-start min-100" />
                        <Switch className="justify-self-end">
                            <Route path='/home' component={HomeComponent} />

                            {/* 2 jaw routing */}
                            <Route path='/twoforged' component={TwoForged} />
                            <Route path='/twosemi' component={TwoSemi} />

                            {/* 3 jaw routing */}
                            <Route path='/threeforged' component={ThreeForged} />
                            <Route path='/threehd' component={ThreeHD} />
                            <Route path='/threelive' component={ThreeLive} />
                            <Route path='/threesemi' component={ThreeSemi} />
                            <Route path='/threesettru' component={ThreeSetTru} />

                            {/* 4j scroll routing */}
                            <Route path='/fourscrollforged' component={FourScrollForged} />
                            <Route path='/fourscrollsemi' component={FourScrollSemi} />
                            <Route path='/fourscrollsettru' component={FourScrollSetTru} />

                            {/* 4j independent routing */}
                            <Route path='/fourindforged' component={FourIndForged} />
                            <Route path='/fourindsemi' component={FourIndSemi} />
                            <Route path='/fourindhd' component={FourIndHD} />
                            

                            {/* 4j combo routing */}
                            <Route path='/fourcombosemi' component={FourComboSemi} />
                            <Route path='/fourcomboforged' component={FourComboForged} />
                            

                            {/* 6j routing */}
                            <Route path='/sixsettru' component={SixSetTru} />
                            <Route path='/sixforged' component={SixForged} />
                            <Route path='/sixsemi' component={SixSemi} />
                            

                            <Redirect to='/home' />
                        </Switch>
                    </div>
                </div>
                <Footer />
            </div>
        </>

    );


}