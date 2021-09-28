import React from 'react';
import HomeComponent from './HomeComponent';
import Header from './Header'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from './sidebar';




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
                            <Redirect to='/home' />
                        </Switch>
                    </div>
                </div>
                <Footer />
            </div>
        </>

    );


}