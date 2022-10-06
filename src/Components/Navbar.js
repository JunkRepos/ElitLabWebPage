import React from 'react';
export default function Navbar() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
   const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <div class="h-24 items-center flex">
      <span class='logoText align-middle'>ElitLabs</span>
      <div class="navLeft">
        <div class="w-[72px] navTextBox">
          <span class='navText align-middle text-center'>courses</span>
        </div>
        <div class="w-[40px] navTextBox">
          <span class='navText align-middle text-center'>labs</span>
        </div>
        <div class="w-[90px] navTextBox">
          <span class='navText align-middle text-center'>resources</span>
        </div>
        <i class="navSearchIcon material-icons">search</i>
        <div class="navLoginIcon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352 96h64c17.7 0 32 14.3 32 32V384c0 17.7-14.3 32-32 32H352c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c53 0 96-43 96-96V128c0-53-43-96-96-96H352c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-7.5 177.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H160v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"></path></svg>
        </div>
        <div class="navSearchBox">
          <div class="input-icons flex items-center">
            <i class="pl-5 text-[1.3rem] font-bold material-icons icon-white">search</i>
            <input class='navSearch placeholder:text-white pl-8 py-2' placeholder='Search'/>
          </div>
        </div>
        <div class='navButton navLogin navLoginBox'>
          <div class="absolute top-[2rem] right-[calc(3%-0.9rem)] navLoginBack navButton"></div>
          <div class="absolute navButton navLogin flex items-center justify-center"><span>Login</span></div>
        </div>     
       </div>
    </div>
  )
}