import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
// import SocalLogger from '../Shared/SocalLogger/SocalLogger';
const Login = () => {

  const {signIn} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result =>{
          const User = result.user;

          if(User){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
          }
          navigate(from, {replace: true})

          
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-12">
      <img src={img} alt="" />
       </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-3xl text-center font-bold">Login</h1>
        <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
        </form>
        <p>New to car doctor <Link className='font-bold text-orange-600' to='/register'>Register</Link></p>
      </div>
      {/* <SocalLogger></SocalLogger> */}
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;