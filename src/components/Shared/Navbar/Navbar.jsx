import { Link } from "react-router-dom";
import logo from '../../../../public/car-icon.png'
// import { useContext } from "react";
// import { AuthContext } from "../../../providers/AuthProviders";

const NavBar = () => {


//   const {user , logOut} = useContext(AuthContext)

//   const handleLogOut = () =>{
//     logOut()
//     .then(() => {
      
//     })
//     .then(error => console.log(error))
//   }

  const navItmes = <>
  
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/login'>Login</Link></li>
    <li><Link to='/bookings'>My Booking</Link></li>
    
    {/* {user ?  <>
    <li><Link to='/bookings'>My Booking</Link></li>
      <li><button onClick={handleLogOut}>LOG OUT</button></li>
    </> :
    <li><Link to='/login'>Login</Link></li>} */}
  </>
    return (
        <div>
            <div className="navbar bg-base-100 h-28 mb-6">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {navItmes}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
        <img className="w-6 h-6" src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItmes}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-warning">Appointment</button>
  </div>
</div>
        </div>
    );
};

export default NavBar;