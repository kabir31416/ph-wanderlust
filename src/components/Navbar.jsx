import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between p-4'>
            
            <div>
                <ul className='flex gap-4'>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/destination"}>Destination</Link></li>
                <li><Link href={"/my-bookings"}>My Bookings</Link></li>
                <li><Link href={"/add-destination"}>Add Destination</Link></li>
            </ul>
            </div>

            <div>
                <Image src={"/assets/Wanderlast.png"} alt="avatar" width={162} height={24}/>
            </div>

            <div>
                <ul className='flex gap-4'>
                <li><Link href={"/profile"}>Profile</Link></li>
                <li><Link href={"/auth/sign-in"}>Sign In</Link></li>
                <li><Link href={"/auth/sign-out"}>Sign Out</Link></li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;