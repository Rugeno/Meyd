import "/Users/shivan/Intern Project/src/app.scss"
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "/Users/shivan/Intern Project/src/components/navbar/Navbar.scss"

const Navbar= () => {

    const [active,setActive] = useState(false)
    const [open,setOpen] = useState(false);
    const {pathname} = useLocation()

    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() =>{
        window.addEventListener("scroll", isActive);

        return () =>{
            window.removeEventListener("scroll",isActive);
        };

    },[])

    const currentUser ={
        id:1,
        username:"Shivan Jung Kunwar",
        isSeller: true
    }
    return (
        <div className={active || pathname !=="/"? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className="link">
                    <span className="text">Intern</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>

                <div className='links'>
                    <span>Intern Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    {!currentUser?.isSeller && <span>Become Seller</span>}
                    {!currentUser && <button>Sign in</button>}
                    {currentUser && (
                        <div className="user" onClick={()=> setOpen(!open)}>
                            <img src="./src/images/p.png" alt="" />
                            <span>{currentUser?.username}</span>
                            { open &&<div className="options">
                                {
                                    currentUser?.isSeller&& (
                                        <>
                                        <Link className="link" to ="/mygigs">Clothes</Link>
                                        <Link className="link" to ="/add">Add New Clothes</Link>
                                        </>
                                    )
                                }
                                <Link className="link" to ="/orders">Orders</Link>
                                <Link className="link" to ="/">LogOut</Link>

                            </div>}
                        </div>
                    )}
                </div>
                
            </div>
            {(active || pathname !=="/") &&  (
                <>
                <hr />
                <div className='menu'>
                    <Link className="link menulink" to="/">
                        Graphic and Design
                    </Link>
                    <Link className="link menulink" to="/">
                        Popular products
                    </Link>
                    <Link className="link menulink" to="/">
                        Addidas
                    </Link>
                    <Link className="link menulink" to="/">
                        Zara
                    </Link>
                    <Link className="link menulink" to="/">
                        Gucci
                    </Link>
                    <Link className="link menulink" to="/">
                        Puma
                    </Link>
                    <Link className="link menulink" to="/">
                        Nike
                    </Link>
                </div>
                </>

            )}
           
            
        </div>
    );
   
};

export default Navbar