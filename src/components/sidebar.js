import React from 'react';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, MenuItem, Menu, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';



const Sidebar = () => {
    return (

        <div className='height-auto'>
            <ProSidebar className="h-100" breakPoint={'sm'} >
                <SidebarHeader>
                    Bison Lathe Chucks
                </SidebarHeader>
                <SidebarContent>
                    <Menu className="base" iconShape="circle" popperArrow={false}>
                        {/* scroll chucks sub-menu */}
                    <Link to='/home' />
                        <SubMenu title="Scroll Chucks">

                            {/* 2 jaw scroll menu section */}
                            <SubMenu title="2-Jaw Scroll Chucks" className="">
                                <MenuItem ><Link to='/twoforged' />Forged-Steel Body</MenuItem>
                                <MenuItem ><Link to='/twosemi' />Semi-Steel Body</MenuItem>
                            </SubMenu>

                            {/* Three jaw scroll menu section */}
                            <SubMenu title="3-Jaw Scroll Chucks">
                                <MenuItem>Set-Tru w/ fine adjustment<Link to='/threesettru' /></MenuItem>
                                <MenuItem>Forged-Steel Body<Link to='/threeforged' /></MenuItem>
                                <MenuItem>Semi-Steel Body<Link to='/threesemi' /></MenuItem>
                                <MenuItem>Heavy Duty Oil Country<Link to='/threehd' /></MenuItem>
                                <MenuItem>Live Chucks<Link to='/threelive' /></MenuItem>
                            </SubMenu>

                            {/* 4 jaw scroll menu section */}
                            <SubMenu title="4-Jaw Scroll Chucks">
                                <MenuItem>Set-Tru w/ fine adjustment<Link to='/fourscrollsettru' /></MenuItem>
                                <MenuItem>Forged-Steel Body<Link to='/fourscrollforged' /></MenuItem>
                                <MenuItem>Semi-Steel Body<Link to='/fourscrollsemi' /></MenuItem>
                            </SubMenu>

                            {/* 6 jaw scroll menu section */}
                            <SubMenu title="6-Jaw Scroll Chucks">
                                <MenuItem>Set-Tru w/ fine adjustment<Link to='/sixsettru' /></MenuItem>
                                <MenuItem>Forged-Steel Body<Link to='/sixforged' /></MenuItem>
                                <MenuItem>Semi-Steel Body<Link to='/sixsemi' /></MenuItem>
                            </SubMenu>
                        </SubMenu>

                        {/* Independent Chucks Submenu */}
                        <SubMenu title="4-Jaw Independent" >
                            <MenuItem>Forged-Steel Body<Link to='/fourindforged' /></MenuItem>
                            <MenuItem>Semi-Steel Body<Link to='/fourindsemi' /></MenuItem>
                            <MenuItem>Heavy Duty Oil Country<Link to='/fourindhd' /></MenuItem>
                        </SubMenu>
                        
                        {/* Combination Chucks Submenu */}
                        <SubMenu title="4-Jaw Combination" >
                            <MenuItem>Solid Jaw Forged-Steel Body<Link to='/fourcomboforged' /></MenuItem>
                            <MenuItem>Solid Jaw Semi-Steel Body<Link to='/fourcombosemi' /></MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    {/**
     *  You can add a footer for the sidebar ex: copyright
     */}
                </SidebarFooter>
            </ProSidebar>
        </div>
    );
};

export default Sidebar;