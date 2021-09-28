import React from 'react';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, MenuItem, Menu, SubMenu } from 'react-pro-sidebar';

import { FaCog } from 'react-icons/fa';
import chuck from '../chuck_icon.png';


const Sidebar = () => {
    return (

        <div>
            <ProSidebar className="d-none d-md-block">
                <SidebarHeader className=''>
                    Bison Lathe Chucks
                </SidebarHeader>
                <SidebarContent>
                    <Menu className="base" iconShape="circle" popperArrow={false}>
                        {/* scroll chucks sub-menu */}
                        <SubMenu title="Scroll Chucks">
                            <SubMenu title="2-Jaw Scroll Chucks" className="">
                                <MenuItem >Forged-Steel Body</MenuItem>
                                <MenuItem >Semi-Steel Body</MenuItem>
                            </SubMenu>
                            <SubMenu title="3-Jaw Scroll Chucks">
                                <MenuItem>Set-Tru w/ fine adjustment</MenuItem>
                                <MenuItem>Forged-Steel Body</MenuItem>
                                <MenuItem>Semi-Steel Body</MenuItem>
                                <MenuItem>Heavy Duty Oil Country</MenuItem>
                                <MenuItem>Live Chucks</MenuItem>
                            </SubMenu>
                            <SubMenu title="4-Jaw Scroll Chucks">
                                <MenuItem>Set-Tru w/ fine adjustment</MenuItem>
                                <MenuItem>Forged-Steel Body</MenuItem>
                                <MenuItem>Semi-Steel Body</MenuItem>
                            </SubMenu>
                            <SubMenu title="6-Jaw Scroll Chucks">
                                <MenuItem>Set-Tru w/ fine adjustment</MenuItem>
                                <MenuItem>Forged-Steel Body</MenuItem>
                                <MenuItem>Semi-Steel Body</MenuItem>
                            </SubMenu>
                        </SubMenu>
                        {/* Independent Chucks Submenu */}
                        <SubMenu title="4-Jaw Independent" >
                            <MenuItem>Forged-Steel Body</MenuItem>
                            <MenuItem>Semi-Steel Body</MenuItem>
                            <MenuItem>Heavy Duty Oil Country</MenuItem>
                        </SubMenu>
                        {/* Combination Chucks Submenu */}
                        <SubMenu title="4-Jaw Combination" >
                            <MenuItem>Solid Jaw Forged-Steel Body</MenuItem>
                            <MenuItem>Solid Jaw Semi-Steel Body</MenuItem>
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