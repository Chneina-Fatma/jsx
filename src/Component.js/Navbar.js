import React from 'react'

function Navbar() {
  return (
    <div className='navbarr'>
<div className='navv'>
    <div id='Nav'>
       
        <div id='image'><img src='linkedin.png'></img></div>
         
         <div id='search'> <input className="outline" type="text" placeholder="Search" /></div>
         
         <div id='LIST'><ul>
          <div className='list'><li>Recherche</li></div>
          <div className='list'><li><a href='https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BDa3WIZtHQTyxut8LexPifw%3D%3D'><i class="fa-solid fa-house"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg></i><br></br>Aceuil</a></li></div>
          <div className='list'><li><a href='https://www.linkedin.com/mynetwork/?&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bo%2BAXrhzyRJiouzq6i7bOmQ%3D%3D'><i class="fa-solid fa-globe"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --<path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg></i><br></br>Reseau</a></li></div>
          <div className='list'><li><a href='https://www.linkedin.com/jobs/?&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bo%2BAXrhzyRJiouzq6i7bOmQ%3D%3D'></a>Offres d'emplois</li></div>
          <div className='list'><li><a href='https://www.linkedin.com/messaging/?&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bo%2BAXrhzyRJiouzq6i7bOmQ%3D%3D'><i class="fa-solid fa-message"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --<path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg></i><br></br>Messageries</a></li></div>
          <div className='list'><li><a href='https://www.linkedin.com/notifications/?&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bo%2BAXrhzyRJiouzq6i7bOmQ%3D%3D'><i class="fa-solid fa-bell"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --<path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg></i><br></br>Notifications</a></li></div>
          <div className='list'><li><a href='#'>Vue profil</a></li></div>
         
        </ul></div> 
    </div>
    </div>
    </div>
  )
}

export default Navbar