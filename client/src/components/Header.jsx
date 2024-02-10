import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className=' bg-primary font-Raleway py-[10.9px]'>
            <div className=' w-[90%] mx-auto flex flex-wrap flex-col md:flex-row items-center '>
                <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg className="w-10 h-10 text-white p-2" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3426 21H21L17 15.5H21L16.881 10H21L14.0435 3L9.5 7.5M3 16L7.42372 11.9784C7.8038 11.6329 7.99384 11.4601 8.20914 11.3947C8.39876 11.337 8.60124 11.337 8.79086 11.3947C9.00616 11.4601 9.1962 11.6329 9.57628 11.9784L14 16M5 14.1818V19.4C5 19.9601 5 20.2401 5.10899 20.454C5.20487 20.6422 5.35785 20.7951 5.54601 20.891C5.75992 21 6.03995 21 6.6 21H10.4C10.9601 21 11.2401 21 11.454 20.891C11.6422 20.7951 11.7951 20.6422 11.891 20.454C12 20.2401 12 19.9601 12 19.4L12 14.1818" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span class="text-xl">Proper<span className='text-background text-xl'>tees</span></span>
                </Link>

                <nav className='md:border-l-2 md:mr-auto md:ml-4 md:py-1 flex flex-wrap items-center text-base justify-center '>
                    <Link to="/about" className="mr-5 md:ml-5 text-white hover:text-background text-xl ">About</Link>
                    <Link to="/about" className="mr-5 text-white hover:text-background text-xl ">Profile</Link>
                    <Link to="/about" className="md:mr-[15rem] mr-5 text-white hover:text-background text-xl ">Rent</Link>

                    <form className=' bg-slate-100 rounded flex items-center justify-center' >
                        <input type="text" placeholder='Search...' className='p-2 rounded-md md:w-[300px] bg-slate-100 focus:outline-none' />
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.77 18.3C9.2807 18.3 7.82485 17.8584 6.58655 17.031C5.34825 16.2036 4.38311 15.0275 3.81318 13.6516C3.24325 12.2757 3.09413 10.7616 3.38468 9.30096C3.67523 7.84029 4.39239 6.49857 5.44548 5.44548C6.49857 4.39239 7.84029 3.67523 9.30096 3.38468C10.7616 3.09413 12.2757 3.24325 13.6516 3.81318C15.0275 4.38311 16.2036 5.34825 17.031 6.58655C17.8584 7.82485 18.3 9.2807 18.3 10.77C18.3 11.7588 18.1052 12.738 17.7268 13.6516C17.3484 14.5652 16.7937 15.3953 16.0945 16.0945C15.3953 16.7937 14.5652 17.3484 13.6516 17.7268C12.738 18.1052 11.7588 18.3 10.77 18.3ZM10.77 4.74999C9.58331 4.74999 8.42327 5.10189 7.43657 5.76118C6.44988 6.42046 5.68084 7.35754 5.22672 8.45389C4.77259 9.55025 4.65377 10.7566 4.88528 11.9205C5.11679 13.0844 5.68824 14.1535 6.52735 14.9926C7.36647 15.8317 8.43556 16.4032 9.59945 16.6347C10.7633 16.8662 11.9697 16.7474 13.0661 16.2933C14.1624 15.8391 15.0995 15.0701 15.7588 14.0834C16.4181 13.0967 16.77 11.9367 16.77 10.75C16.77 9.15869 16.1379 7.63257 15.0126 6.50735C13.8874 5.38213 12.3613 4.74999 10.77 4.74999Z" fill="#000000" />
                            <path d="M20 20.75C19.9015 20.7504 19.8038 20.7312 19.7128 20.6934C19.6218 20.6557 19.5392 20.6001 19.47 20.53L15.34 16.4C15.2075 16.2578 15.1354 16.0697 15.1388 15.8754C15.1422 15.6811 15.221 15.4958 15.3584 15.3583C15.4958 15.2209 15.6812 15.1422 15.8755 15.1388C16.0698 15.1354 16.2578 15.2075 16.4 15.34L20.53 19.47C20.6704 19.6106 20.7493 19.8012 20.7493 20C20.7493 20.1987 20.6704 20.3893 20.53 20.53C20.4608 20.6001 20.3782 20.6557 20.2872 20.6934C20.1962 20.7312 20.0985 20.7504 20 20.75Z" fill="#000000" />
                        </svg>
                    </form>
                </nav>

                <Link to='/sign-in' className="inline-flex text-white items-center bg-background border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Login
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>

            </div>
        </header>
    );
}

export default Header;
