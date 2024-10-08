import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2'

const Register = () => {

  const { createUser} =useContext(AuthContext)

    const handleSignUp = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
         const userData = {name, email, password}
        createUser(email, password)
        .then(result =>{
          const loaderUser = result.user;

          console.log(loaderUser)
          if(loaderUser){

            fetch('http://localhost:5000/car',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(userData)
              } )
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
              })

          }
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
  <h1 className="text-3xl text-center font-bold">Sign Up</h1>
    <form onSubmit={handleSignUp}>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" placeholder="name" name='name' className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="text" placeholder="email" name='email' className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" name='password' className="input input-bordered" />
    </div>
    <div className="form-control mt-6">
      <input className="btn btn-primary" type="submit" value="Sign Up" />
    </div>
    </form>
    <p>Already have an account <Link className='font-bold text-orange-600' to='/login'>Login</Link></p>
  </div>
</div>
</div>
</div>
    </div>
    );
};

export default Register;
