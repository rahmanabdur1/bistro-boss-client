import React, { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Login = () => {

  const {signIn} = useContext(AuthContext)
  const [disable, setDisable]=useState(true)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";


    const handleLogin = event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
    })
    }

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handlecaptha =(e)=>{
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false);
        }
        else {
            setDisable(true)
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
               <LoadCanvasTemplate/>
                </label>
                <input onBlur={handlecaptha} type="text" name="captch" placeholder="Type the captcha" className="input input-bordered" />

              </div>
              <div className="form-control mt-6">
                <input disabled={disable} type='submit' value="Login" className="btn btn-primary"/>
              </div>
            </form>
            <p className='text-center   mb-4'><small>New Here? <Link className='text-secondary' to="/signup">Create an account</Link> </small></p>
                        {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
    );
};

export default Login;