import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import adminAxios from '../../Axios/adminAxios'
import { useNavigate } from 'react-router-dom'
import Post from '../../components/professionals/post/Post'
import CustomModal from '../../components/modal/CustomModal'

import ImageUpload from '../../components/professionals/post/ImageUpload'
import CreateCategory from '../../components/admin/category/CreateCategory'
import { adminLogout } from '../../Redux/AdminAuth'
import Sidebar from '../../components/admin/sidebars/Sidebar'
import Header from '../../components/admin/Header/Header'
import Report from '../../components/clients/MiddleContent/Report'
import LocationSearchInput from '../../components/clients/LocationSearchInput'
import RequirementShow from '../../components/clients/requirement/RequirementShow'


const Home = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
   const token = useSelector((state)=>state.AdminAuth.Token)
   console.log(token,'loploplop');
    // useEffect(()=>{
    //   console.log(token,'vvvvvvvvvvv');
    //   if(token){
    //     console.log('sucessfull');
    //   }else{
    //     navigate('/admin/login')
    //   }
    // })
 

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
    const hadleLogout = () => {
      dispatch(adminLogout());
      navigate("/admin/login");
    };
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* <h1>admin home</h1> */}
      <div>
      {/* <h1>React Modal Example</h1>
      <button onClick={openModal}>Open Modal</button> */}
{/* 
      <CustomModal isOpen={modalIsOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <ImageUpload />
      </CustomModal> */}
    </div>
   
 


    <Header />

    <Sidebar />
    <header className="bg-blue-500 py-4">
      <nav className="n">
        <div className="container mx-auto">

          <div className="flex items-center justify-between">
            <button type="button" className="text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* Your SVG icon */}
              </svg>
            </button>
            <a className="text-white text-2xl font-bold" href="index-register.html">
              <img className="h-8" src="images/logo.png" alt="logo" />
            </a>
            <div className="hidden md:flex space-x-4">
              <a className="text-white hover:text-blue-300" href="#">Home</a>
              <a className="text-white hover:text-blue-300" href="#">Newsfeed</a>
              <a className="text-white hover:text-blue-300" href="#">Timeline</a>
              <a className="text-white hover:text-blue-300" href="#">All Pages</a>
              <a className="text-white hover:text-blue-300" href="#">Contact</a>
            </div>
            <form className="hidden md:block">
              <div className="flex items-center space-x-2 rounded-full bg-white p-1">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {/* Search icon */}
                </svg>
                <input type="text" className="text-black placeholder-gray-500 bg-transparent focus:outline-none" placeholder="Search friends, photos, videos" />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>


    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 md:static">
          {/* Left Sidebar Content */}
          {/* ... */}
        </div>
        <div className="md:w-7/12 mx-auto">
          {/* Middle Content */}
          {/* ... */}
        </div>
        <div className="md:w-1/4 md:static">
          {/* Right Sidebar Content */}
          {/* ... */}
        </div>
      </div>
    </div>



    <div className="bg-gray-100">
      <div className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 md:static">
            <div className="bg-white p-4 rounded-lg shadow-md">
              {/* Profile Card */}
              {/* ... */}
            </div>
            <div className="bg-white mt-4 p-4 rounded-lg shadow-md">
              {/* Newsfeed Links */}
              {/* ... */}
            </div>
            <div className="bg-white mt-4 p-4 rounded-lg shadow-md">
              {/* Online Chat */}
              {/* ... */}
            </div>
          </div>
          <div className="md:w-7/12 mx-auto">
            <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
              {/* Post Create Box */}
              {/* ... */}
            </div>
            <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
              {/* Post Content */}
              {/* ... */}
            </div>
            <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
              {/* Another Post Content */}
              {/* ... */}
            </div>
            {/* Add more post content sections as needed */}
          </div>
          <div className="md:w-1/4 md:static">
            <div className="bg-white p-4 rounded-lg shadow-md sticky top-6">
              {/* Who to Follow */}
              {/* ... */}
            </div>
          </div>
        </div>
      </div>
    </div>




    <div className="col-md-3 static">
  <div className="profile-card bg-blue-500 text-white p-4 rounded-lg">
    <img src="images/users/user-1.jpg" alt="user" className="profile-photo" />
    <h5><a href="timeline.html" className="text-white">Sarah Cruiz</a></h5>
    <a href="#" className="text-white"><i className="ion ion-android-person-add"></i> 1,299 followers</a>
  </div>
  <ul className="nav-news-feed mt-4">
    <li><i className="icon ion-ios-paper text-blue-500"></i><div><a href="newsfeed.html" className="text-blue-500">My Newsfeed</a></div></li>
    <li><i className="icon ion-ios-people text-blue-500"></i><div><a href="newsfeed-people-nearby.html" className="text-blue-500">People Nearby</a></div></li>
    <li><i className="icon ion-ios-people-outline text-blue-500"></i><div><a href="newsfeed-friends.html" className="text-blue-500">Friends</a></div></li>
    <li><i className="icon ion-chatboxes text-blue-500"></i><div><a href="newsfeed-messages.html" className="text-blue-500">Messages</a></div></li>
    <li><i className="icon ion-images text-blue-500"></i><div><a href="newsfeed-images.html" className="text-blue-500">Images</a></div></li>
    <li><i className="icon ion-ios-videocam text-blue-500"></i><div><a href="newsfeed-videos.html" className="text-blue-500">Videos</a></div></li>
  </ul>
  <div id="chat-block" className="mt-4">
    <div className="title text-blue-500">Chat online</div>
    <ul className="online-users list-inline">
      <li><a href="newsfeed-messages.html" title="Linda Lohan"><img src="images/users/user-2.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot bg-green-500"></span></a></li>
      <li><a href="newsfeed-messages.html" title="Sophia Lee"><img src="images/users/user-3.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot bg-green-500"></span></a></li>
      <li><a href="newsfeed-messages.html" title="John Doe"><img src="images/users/user-4.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot bg-green-500"></span></a></li>
      <li><a href="newsfeed-messages.html" title="Alexis Clark"><img src="images/users/user-5.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot bg-green-500"></span></a></li>
      <li><a href="newsfeed-messages.html" title="James Carter"><img src="images/users/user-6.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot bg-green-500"></span></a></li>
      <li><a href="newsfeed-messages.html" title="Robert Cook"><img src="images/users/user-7.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot bg-green-500"></span></a></li>
      <li><a href="newsfeed-messages.html" title="Richard Bell"><img src="images/users/user-8.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot bg-green-500"></span></a></li>
      <li><a href="newsfeed-messages.html" title="Anna Young"><img src="images/users/user-9.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot bg-green-500"></span></a></li>
      <li><a href="newsfeed-messages.html" title="Julia Cox"><img src="images/users/user-10.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot bg-green-500"></span></a></li>
    </ul>
  </div>
</div>


<div className="create-post">
  <div className="row">
    <div className="col-md-7 col-sm-7">
      <div className="form-group">
        <img src="images/users/user-1.jpg" alt="" className="profile-photo-md" />
        <textarea
          name="texts"
          id="exampleTextarea"
          cols="30"
          rows="1"
          className="form-control bg-gray-200 p-2 rounded-md"
          placeholder="Write what you wish"
        ></textarea>
      </div>
    </div>
    <div className="col-md-5 col-sm-5">
      <div className="tools">
        <ul className="publishing-tools list-inline">
          <li><a href="#" className="text-blue-500"><i className="ion-compose"></i></a></li>
          <li><a href="#" className="text-blue-500"><i className="ion-images"></i></a></li>
          <li><a href="#" className="text-blue-500"><i className="ion-ios-videocam"></i></a></li>
          <li><a href="#" className="text-blue-500"><i className="ion-map"></i></a></li>
        </ul>
        <button className="btn btn-primary pull-right bg-blue-500 text-white">Publish</button>
      </div>
    </div>
  </div>
</div>



<div className="post-content">
  <img src="images/post-images/1.jpg" alt="post-image" className="img-responsive post-image" />
  <div className="post-container">
    <img src="images/users/user-5.jpg" alt="user" className="profile-photo-md float-left" />
    <div className="post-detail">
      <div className="user-info">
        <h5><a href="timeline.html" className="profile-link text-blue-500">Alexis Clark</a> <span className="following text-green-500">following</span></h5>
        <p className="text-muted">Published a photo about 3 mins ago</p>
      </div>
      <div className="reaction">
        <a className="btn text-green-500"><i className="icon ion-thumbsup"></i> 13</a>
        <a className="btn text-red-500"><i className="fa fa-thumbs-down"></i> 0</a>
      </div>
      <div className="line-divider border-t-2 border-gray-300"></div>
      <div className="post-text">
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
      </div>
      <div className="line-divider border-t-2 border-gray-300"></div>
      <div className="post-comment">
        <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm" />
        <p><a href="timeline.html" className="profile-link text-blue-500">Diana</a><i className="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
      </div>
      <div className="post-comment">
        <img src="images/users/user-4.jpg" alt="" className="profile-photo-sm" />
        <p><a href="timeline.html" className="profile-link text-blue-500">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
      </div>
      <div className="post-comment">
        <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
        <input type="text" className="form-control bg-gray-200 p-2 rounded-md" placeholder="Post a comment" />
      </div>
    </div>
  </div>
</div>



<div class="col-md-2 static">
  <div class="suggestions bg-gray-100 p-4 rounded-lg" id="sticky-sidebar">
    <h4 class="grey text-gray-700">Who to Follow</h4>
    <div class="follow-user flex items-center space-x-4">
      <img src="images/users/user-11.jpg" alt="" class="profile-photo-sm w-12 h-12 rounded-full" />
      <div>
        <h5><a href="timeline.html" class="text-blue-500">Diana Amber</a></h5>
        <a href="#" class="text-green-500">Add friend</a>
      </div>
    </div>
    <div class="follow-user flex items-center space-x-4">
      <img src="images/users/user-12.jpg" alt="" class="profile-photo-sm w-12 h-12 rounded-full" />
      <div>
        <h5><a href="timeline.html" class="text-blue-500">Cris Haris</a></h5>
        <a href="#" class="text-green-500">Add friend</a>
      </div>
    </div>
    <div class="follow-user flex items-center space-x-4">
      <img src="images/users/user-13.jpg" alt="" class="profile-photo-sm w-12 h-12 rounded-full" />
      <div>
        <h5><a href="timeline.html" class="text-blue-500">Brian Walton</a></h5>
        <a href="#" class="text-green-500">Add friend</a>
      </div>
    </div>
    <div class="follow-user flex items-center space-x-4">
      <img src="images/users/user-14.jpg" alt="" class="profile-photo-sm w-12 h-12 rounded-full" />
      <div>
        <h5><a href="timeline.html" class="text-blue-500">Olivia Steward</a></h5>
        <a href="#" class="text-green-500">Add friend</a>
      </div>
    </div>
    <div class="follow-user flex items-center space-x-4">
      <img src="images/users/user-15.jpg" alt="" class="profile-photo-sm w-12 h-12 rounded-full" />
      <div>
        <h5><a href="timeline.html" class="text-blue-500">Sophia Page</a></h5>
        <a href="#" class="text-green-500">Add friend</a>
      </div>
    </div>
  </div>
</div>










<div className="container mx-auto">
  <div className="flex flex-col md:flex-row">
    {/* Left Sidebar */}
    <div className="md:w-1/4 md:static">
      <div className="profile-card bg-blue-500 text-white p-4 rounded-lg">
        <img src="images/users/user-1.jpg" alt="user" className="profile-photo" />
        <h5><a href="timeline.html" className="text-white">Sarah Cruiz</a></h5>
        <a href="#" className="text-white"><i className="ion ion-android-person-add"></i> 1,299 followers</a>
      </div>
      <ul className="nav-news-feed mt-4">
        <li><i className="icon ion-ios-paper text-blue-500"></i><div><a href="newsfeed.html" className="text-blue-500">My Newsfeed</a></div></li>
        <li><i className="icon ion-ios-people text-blue-500"></i><div><a href="newsfeed-people-nearby.html" className="text-blue-500">People Nearby</a></div></li>
        <li><i className="icon ion-ios-people-outline text-blue-500"></i><div><a href="newsfeed-friends.html" className="text-blue-500">Friends</a></div></li>
        <li><i className="icon ion-chatboxes text-blue-500"></i><div><a href="newsfeed-messages.html" className="text-blue-500">Messages</a></div></li>
        <li><i className="icon ion-images text-blue-500"></i><div><a href="newsfeed-images.html" className="text-blue-500">Images</a></div></li>
        <li><i className="icon ion-ios-videocam text-blue-500"></i><div><a href="newsfeed-videos.html" className="text-blue-500">Videos</a></div></li>
      </ul>
      <div id="chat-block" className="mt-4">
        <div className="title text-blue-500">Chat online</div>
        <ul className="online-users list-inline">
          <li><a href="newsfeed-messages.html" title="Linda Lohan"><img src="images/users/user-2.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot bg-green-500"></span></a></li>
          {/* Add more online users */}
        </ul>
      </div>
    </div>
    
    {/* Middle Content */}
    <div className="md:w-7/12 mx-auto">
      <div className="create-post">
        <div className="row">
          <div className="col-md-7 col-sm-7">
            <div className="form-group">
              <img src="images/users/user-1.jpg" alt="" className="profile-photo-md" />
              <textarea
                name="texts"
                id="exampleTextarea"
                cols="30"
                rows="1"
                className="form-control bg-gray-200 p-2 rounded-md"
                placeholder="Write what you wish"
              ></textarea>
            </div>
          </div>
          <div className="col-md-5 col-sm-5">
            <div className="tools">
              <ul className="publishing-tools list-inline">
                <li><a href="#" className="text-blue-500"><i className="ion-compose"></i></a></li>
                <li><a href="#" className="text-blue-500"><i className="ion-images"></i></a></li>
                <li><a href="#" className="text-blue-500"><i className="ion-ios-videocam"></i></a></li>
                <li><a href="#" className="text-blue-500"><i className="ion-map"></i></a></li>
              </ul>
              <button className="btn btn-primary pull-right bg-blue-500 text-white">Publish</button>
            </div>
          </div>
        </div>
      </div>

      <div className="post-content">
        <img src="images/post-images/1.jpg" alt="post-image" className="img-responsive post-image" />
        <div className="post-container">
          <img src="images/users/user-5.jpg" alt="user" className="profile-photo-md float-left" />
          <div className="post-detail">
            <div className="user-info">
              <h5><a href="timeline.html" className="profile-link text-blue-500">Alexis Clark</a> <span className="following text-green-500">following</span></h5>
              <p className="text-muted">Published a photo about 3 mins ago</p>
            </div>
            <div className="reaction">
              <a className="btn text-green-500"><i className="icon ion-thumbsup"></i> 13</a>
              <a className="btn text-red-500"><i className="fa fa-thumbs-down"></i> 0</a>
            </div>
            <div className="line-divider border-t-2 border-gray-300"></div>
            <div className="post-text">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i>
              </p>
            </div>
            {/* Post comments */}
            {/* ... */}
          </div>
        </div>
      </div>

      {/* Additional post content sections */}
      {/* ... */}
    </div>
    
    {/* Right Sidebar */}
    <div className="md:w-1/4 md:static">
      <div className="suggestions bg-gray-100 p-4 rounded-lg" id="sticky-sidebar">
        <h4 className="grey text-gray-700">Who to Follow</h4>
        <div className="follow-user flex items-center space-x-4">
          <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm w-12 h-12 rounded-full" />
          <div>
            <h5><a href="timeline.html" className="text-blue-500">Diana Amber</a></h5>
            <a href="#" className="text-green-500">Add friend</a>
          </div>
        </div>
        {/* Add more follow-user sections */}
        {/* ... */}
      </div>
    </div>
  </div>
</div>





     <div className="container mx-auto">
  <div className="flex flex-col md:flex-row">
    {/* Left Sidebar */}
    <div className="md:w-1/4 md:static">
      <div className="profile-card bg-blue-500 text-white p-4 rounded-lg">
        <img src="images/users/user-1.jpg" alt="user" className="profile-photo w-20 h-20 rounded-full" />
        <h5><a href="timeline.html" className="text-white text-xl font-semibold">Sarah Cruiz</a></h5>
        <a href="#" className="text-white"><i className="ion ion-android-person-add"></i> 1,299 followers</a>
      </div>
      <ul className="nav-news-feed mt-4">
        <li><i className="icon ion-ios-paper text-blue-500"></i><div><a href="newsfeed.html" className="text-blue-500 hover:underline">My Newsfeed</a></div></li>
        <li><i className="icon ion-ios-people text-blue-500"></i><div><a href="newsfeed-people-nearby.html" className="text-blue-500 hover:underline">People Nearby</a></div></li>
        {/* Add more nav links */}
        {/* ... */}
      </ul>
      <div id="chat-block" className="mt-4">
        <div className="title text-blue-500 font-semibold">Chat online</div>
        <ul className="online-users list-inline">
          <li><a href="newsfeed-messages.html" title="Linda Lohan"><img src="images/users/user-2.jpg" alt="user" className="img-responsive profile-photo w-12 h-12 rounded-full" /><span className="online-dot bg-green-500"></span></a></li>
          {/* Add more online users */}
          {/* ... */}
        </ul>
      </div>
    </div>
    
    {/* Middle Content */}
    <div className="md:w-7/12 mx-auto">
      <div className="create-post bg-white p-4 rounded-lg shadow-md">
        <div className="row">
          <div className="col-md-7 col-sm-7">
            <div className="form-group">
              <img src="images/users/user-1.jpg" alt="" className="profile-photo-md w-10 h-10 rounded-full" />
              <textarea
                name="texts"
                id="exampleTextarea"
                cols="30"
                rows="1"
                className="form-control bg-gray-200 p-2 rounded-md resize-none focus:outline-none focus:bg-white"
                placeholder="What's on your mind?"
              ></textarea>
            </div>
          </div>
          <div className="col-md-5 col-sm-5">
            <div className="tools">
              <ul className="publishing-tools list-inline">
                <li><a href="#" className="text-blue-500"><i className="ion-compose"></i></a></li>
                <li><a href="#" className="text-blue-500"><i className="ion-images"></i></a></li>
                {/* Add more tools */}
                {/* ... */}
              </ul>
              <button className="btn btn-primary pull-right bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">Publish</button>
            </div>
          </div>
        </div>
      </div>

      <div className="post-content bg-white p-4 mt-4 rounded-lg shadow-md">
        <img src="images/post-images/1.jpg" alt="post-image" className="img-responsive post-image" />
        <div className="post-container">
          <img src="images/users/user-5.jpg" alt="user" className="profile-photo-md float-left w-14 h-14 rounded-full" />
          <div className="post-detail">
            <div className="user-info">
              <h5><a href="timeline.html" className="profile-link text-blue-500 font-semibold">Alexis Clark</a> <span className="following text-green-500">following</span></h5>
              <p className="text-muted">Published a photo about 3 mins ago</p>
            </div>
            <div className="reaction">
              <a className="btn text-green-500 hover:underline"><i className="icon ion-thumbsup"></i> 13</a>
              <a className="btn text-red-500 hover:underline"><i className="fa fa-thumbs-down"></i> 0</a>
            </div>
            <div className="line-divider border-t-2 border-gray-300 my-4"></div>
            <div className="post-text">
              <p className="text-gray-700">
                {/* Add your post text */}
                {/* ... */}
              </p>
            </div>
            {/* Post comments */}
            {/* ... */}
          </div>
        </div>
      </div>

      {/* Additional post content sections */}
      {/* ... */}
    </div>
    
    {/* Right Sidebar */}
    <div className="md:w-1/4 md:static">
      <div className="suggestions bg-gray-100 p-4 rounded-lg" id="sticky-sidebar">
        <h4 className="grey text-gray-700 font-semibold">Who to Follow</h4>
        <div className="follow-user flex items-center space-x-4">
          <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm w-12 h-12 rounded-full" />
          <div>
            <h5><a href="timeline.html" className="text-blue-500 hover:underline">Diana Amber</a></h5>
            <a href="#" className="text-green-500 hover:underline">Add friend</a>
          </div>
        </div>
        {/* Add more follow-user sections */}
        {/* ... */}
      </div>
    </div>
  </div>
</div>
 











<header className="bg-blue-600 py-4">
  <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-white text-2xl font-semibold">Social Connect</h1>
    <div className="flex items-center space-x-4">
      <input
        type="text"
        className="bg-gray-200 px-2 py-1 rounded-md focus:outline-none"
        placeholder="Search"
      />
      <button className="btn btn-primary bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded-lg">
        New Post
      </button>
      <img
        src="images/users/user-1.jpg"
        alt="user"
        className="profile-photo w-10 h-10 rounded-full"
      />
    </div>
  </div>
</header>





<div className="container mx-auto">
  <div className="flex flex-col md:flex-row gap-4">
    {/* Left Sidebar */}
    <div className="md:w-1/4">
      <div className="profile-card bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg shadow-lg">
        <img src="images/users/user-1.jpg" alt="user" className="profile-photo w-24 h-24 rounded-full mx-auto mb-4" />
        <h5 className="text-2xl font-semibold text-center"><a href="timeline.html" className="hover:underline">Sarah Cruiz</a></h5>
        <p className="text-center text-sm"><a href="#" className="text-white hover:underline"><i className="ion ion-android-person-add"></i> 1,299 followers</a></p>
      </div>
      <ul className="nav-news-feed mt-6 space-y-2">
        <li className="flex items-center">
          <i className="icon ion-ios-paper text-blue-500"></i>
          <a href="newsfeed.html" className="text-blue-500 hover:underline ml-2">My Newsfeed</a>
        </li>
        <li className="flex items-center">
          <i className="icon ion-ios-people text-blue-500"></i>
          <a href="newsfeed-people-nearby.html" className="text-blue-500 hover:underline ml-2">People Nearby</a>
        </li>
        {/* Add more nav links */}
        {/* ... */}
      </ul>
      <div id="chat-block" className="mt-6">
        <div className="title text-blue-500 font-semibold mb-2">Chat online</div>
        <ul className="online-users list-inline space-x-2">
          <li>
            <a href="newsfeed-messages.html" title="Linda Lohan">
              <img src="images/users/user-2.jpg" alt="user" className="img-responsive profile-photo w-12 h-12 rounded-full" />
              <span className="online-dot bg-green-500"></span>
            </a>
          </li>
          {/* Add more online users */}
          {/* ... */}
        </ul>
      </div>
    </div>

    {/* Middle Content */}
    <div className="md:w-7/12">
      <div className="create-post bg-white p-4 rounded-lg shadow-lg">
        <div className="flex items-center">
          <img src="images/users/user-1.jpg" alt="" className="profile-photo-md w-12 h-12 rounded-full" />
          <textarea
            name="texts"
            id="exampleTextarea"
            cols="30"
            rows="1"
            className="form-control bg-gray-100 p-2 rounded-md resize-none ml-2 focus:outline-none focus:bg-white"
            placeholder="What's on your mind?"
          ></textarea>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <ul className="publishing-tools list-inline flex space-x-2">
            <li><a href="#" className="text-blue-500 hover:underline"><i className="ion-compose"></i></a></li>
            <li><a href="#" className="text-blue-500 hover:underline"><i className="ion-images"></i></a></li>
            {/* Add more tools */}
            {/* ... */}
          </ul>
          <button className="btn btn-primary bg-blue-500 hover:bg-blue-600 focus:outline-none px-6 py-2 rounded-lg text-white">Publish</button>
        </div>
      </div>

      <div className="post-content bg-white p-4 mt-4 rounded-lg shadow-lg">
        <img src="images/post-images/1.jpg" alt="post-image" className="img-responsive post-image w-full h-48 object-cover rounded-lg" />
        <div className="post-container mt-4">
          <img src="images/users/user-5.jpg" alt="user" className="profile-photo-md float-left w-14 h-14 rounded-full" />
          <div className="post-detail ml-16">
            <div className="user-info">
              <h5><a href="timeline.html" className="profile-link text-blue-500 font-semibold hover:underline">Alexis Clark</a> <span className="following text-green-500">following</span></h5>
              <p className="text-muted">Published a photo about 3 mins ago</p>
            </div>
            <div className="reaction flex space-x-4 mt-2">
              <a className="btn text-green-500 hover:underline"><i className="icon ion-thumbsup"></i> 13</a>
              <a className="btn text-red-500 hover:underline"><i className="fa fa-thumbs-down"></i> 0</a>
            </div>
            <div className="line-divider border-t-2 border-gray-300 my-4"></div>
            <div className="post-text">
              <p className="text-gray-700">
                {/* Add your post text */}
                {/* ... */}
              </p>
            </div>
            {/* Post comments */}
            {/* ... */}
          </div>
        </div>
      </div>

      {/* Additional post content sections */}
      {/* ... */}
    </div>

    {/* Right Sidebar */}
    <div className="md:w-1/4">
      <div className="suggestions bg-gray-100 p-4 rounded-lg shadow-lg" id="sticky-sidebar">
        <h4 className="grey text-gray-700 font-semibold">Who to Follow</h4>
        <div className="follow-user mt-4 flex items-center space-x-2">
          <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm w-12 h-12 rounded-full" />
          <div>
            <h5><a href="timeline.html" className="text-blue-500 hover:underline">Diana Amber</a></h5>
            <a href="#" className="text-green-500 hover:underline">Add friend</a>
          </div>
        </div>
        {/* Add more follow-user sections */}
        {/* ... */}
      </div>
    </div>
  </div>
</div>










<>
    
    <nav class="border-b px-4 py-2 bg-white">
      <div class="flex flex-wrap items-center justify-between md:justify-around">
      
        <img class="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png" alt="instagram"/>
    
       
        <div class="relative hidden sm:block text-gray-500">
          <input class="search-bar max-w-xs border rounded bg-gray-200 px-4
                text-center outline-none focus:border-gray-400" type="search" placeholder="Search"/>
          <i class="fa fa-search absolute top-0 left-0 ml-12 mt-1"></i>
        </div>
    
        <div class="space-x-4">
          <a class="inline-block bg-blue-500 px-2 py-1 text-white font-semibold 
                               text-sm rounded" href="#">Log In</a>
          <a class="inline-block text-blue-500 font-semibold text-sm" href="#">Sign Up</a>
        </div>
      </div>
    </nav>
    
    <main class="bg-gray-100 bg-opacity-25">
    
      <div class="lg:w-8/12 lg:mx-auto mb-8">
    
        <header class="flex flex-wrap items-center p-4 md:py-8">
    
          <div class="md:w-3/12 md:ml-16">
          
            <img class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                         border-2 border-pink-600 p-1" src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="profile"/>
          </div>
    
      
          <div class="w-8/12 md:w-7/12 ml-4">
            <div class="md:flex md:flex-wrap md:items-center mb-4">
              <h2 class="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                mrtravlerrr_
              </h2>
    
          
              <span class="inline-block fas fa-certificate fa-lg text-blue-500 
                                   relative mr-6 text-xl transform -translate-y-2" aria-hidden="true">
                <i class="fas fa-check text-white text-xs absolute inset-x-0
                                   ml-1 mt-px"></i>
              </span>
    
       
              <a href="#" class="bg-blue-500 px-2 py-1 
                            text-white font-semibold text-sm rounded  text-center 
                            sm:inline-block block">Follow</a>
            </div>
    
       
            <ul class="hidden md:flex space-x-8 mb-4">
              <li>
                <span class="font-semibold">136</span>
                posts
              </li>
    
              <li>
                <span class="font-semibold">40.5k</span>
                followers
              </li>
              <li>
                <span class="font-semibold">302</span>
                following
              </li>
            </ul>
    
     
            <div class="hidden md:block">
              <h1 class="font-semibold">Mr Travlerrr...</h1>
              <span>Travel, Nature and Music</span>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
    
          </div>
    
       
          <div class="md:hidden text-sm my-2">
            <h1 class="font-semibold">Mr Travlerrr...</h1>
            <span>Travel, Nature and Music</span>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
    
        </header>
    
    
        <div class="px-px md:px-3">
    
         
          <ul class="flex md:hidden justify-around space-x-8 border-t 
                    text-center p-2 text-gray-600 leading-snug text-sm">
            <li>
              <span class="font-semibold text-gray-800 block">136</span>
              posts
            </li>
    
            <li>
              <span class="font-semibold text-gray-800 block">40.5k</span>
              followers
            </li>
            <li>
              <span class="font-semibold text-gray-800 block">302</span>
              following
            </li>
          </ul>
    
      
          <ul class="flex items-center justify-around md:justify-center space-x-12  
                        uppercase tracking-widest font-semibold text-xs text-gray-600
                        border-t">
        
            <li class="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
              <a class="inline-block p-3" href="#">
                <i class="fas fa-th-large text-xl md:text-xs"></i>
                <span class="hidden md:inline">post</span>
              </a>
            </li>
            <li>
              <a class="inline-block p-3" href="#">
                <i class="far fa-square text-xl md:text-xs"></i>
                <span class="hidden md:inline">igtv</span>
              </a>
            </li>
            <li>
              <a class="inline-block p-3" href="#">
                <i class="fas fa-user border border-gray-500
                                 px-1 pt-1 rounded text-xl md:text-xs"></i>
                <span class="hidden md:inline">tagged</span>
              </a>
            </li>
          </ul>
       
          <div class="flex flex-wrap -mx-px md:-mx-3">
    
           
            <div class="w-1/3 p-px md:px-3">
      
              <a href="#">
                <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
       
                  <img class="w-full h-full absolute left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image"/>
    
                  <i class="fas fa-square absolute right-0 top-0 m-1"></i>
    
                  <div class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                    left-0 top-0 hidden">
                    <div class="flex justify-center items-center 
                                        space-x-4 h-full">
                      <span class="p-2">
                        <i class="fas fa-heart"></i>
                        412K
                      </span>
    
                      <span class="p-2">
                        <i class="fas fa-comment"></i>
                        2,909
                      </span>
                    </div>
                  </div>
    
                </article>
              </a>
            </div>
    
            <div class="w-1/3 p-px md:px-3">
              <a href="#">
                
                <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
                  <img class="w-full h-full absolute left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1498409570040-05bf6d3dd5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image"/>
    
                  <div class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                    left-0 top-0 hidden">
                    <div class="flex justify-center items-center 
                                        space-x-4 h-full">
                      <span class="p-2">
                        <i class="fas fa-heart"></i>
                        412K
                      </span>
    
                      <span class="p-2">
                        <i class="fas fa-comment"></i>
                        1,993
                      </span>
                    </div>
                  </div>
    
                </article>
              </a>
            </div>
    
            <div class="w-1/3 p-px md:px-3">
              <a href="#">
                <article class="post bg-gray-100 text-white relative pb-full  md:mb-6">
                  <img class="w-full h-full absolute left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image"/>
              
                  <div class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                    left-0 top-0 hidden">
                    <div class="flex justify-center items-center 
                                        space-x-4 h-full">
                      <span class="p-2">
                        <i class="fas fa-heart"></i>
                        112K
                      </span>
    
                      <span class="p-2">
                        <i class="fas fa-comment"></i>
                        2,090
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>
    
            <div class="w-1/3 p-px md:px-3">
              <a href="#">
                <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
                  <img class="w-full h-full absolute left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="image"/>
    
                  <i class="fas fa-video absolute right-0 top-0 m-1"></i>
    
                
                  <div class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                    left-0 top-0 hidden">
                    <div class="flex justify-center items-center 
                                        space-x-4 h-full">
                      <span class="p-2">
                        <i class="fas fa-heart"></i>
                        841K
                      </span>
    
                      <span class="p-2">
                        <i class="fas fa-comment"></i>
                        909
                      </span>
                    </div>
                  </div>
    
                </article>
              </a>
            </div>
    
            <div class="w-1/3 p-px md:px-3">
              <a href="#">
                <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
                  <img class="w-full h-full absolute left-0 top-0 object-cover" src="https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" alt="image"/>
               
                  <div class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                    left-0 top-0 hidden">
                    <div class="flex justify-center items-center 
                                        space-x-4 h-full">
                      <span class="p-2">
                        <i class="fas fa-heart"></i>
                        120K
                      </span>
    
                      <span class="p-2">
                        <i class="fas fa-comment"></i>
                        3,909
                      </span>
                    </div>
                  </div>
    
                </article>
              </a>
            </div>
    
          </div>
        </div>
      </div>
    </main>
        </>


<Post />





<div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
    <button type="button" class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
    <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Shoes</button>
    <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Bags</button>
    <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Electronics</button>
    <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming</button>
</div>
<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""/>
    </div>
</div>



<Report />

<LocationSearchInput />



    </div>
  )
}

export default Home
