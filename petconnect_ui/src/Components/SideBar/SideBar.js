import { ChatOutlined, ExpandMoreOutlined, LocalHospital, PeopleOutline, StorefrontOutlined, VideoLibrary } from '@material-ui/icons'
import React from 'react'
import SideBarRow from './SideBarRow'
import './SideBar.css'


function SideBar(props) {
    return (
        <div className="sidebar">
            <SideBarRow src="https://www.pexels.com/photo/man-wearing-a-jacket-sitting-on-brown-wooden-crate-594610/" title="Chinmay Phade"/>
            <SideBarRow Icon={LocalHospital} titile="Vet"/>
            <SideBarRow Icon={PeopleOutline} title="Friends"/>
            <SideBarRow Icon={ChatOutlined} title="Marketplace"/>
            <SideBarRow Icon={StorefrontOutlined} title="MarketPlace"/>
            <SideBarRow Icon={VideoLibrary} title="Video"/>
            <SideBarRow Icon={ExpandMoreOutlined} title="MarketPlace"/>
        </div>
    )
}

export default SideBar
