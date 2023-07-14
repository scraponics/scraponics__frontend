import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logininduser } from '../../actions/AuthActions';

// styles
import loginImage from '../../assets/login.png'
import classes from './LoginIndUserComp.module.css';

const LoginIndUserComp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);

  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [condition, setCondition] = useState(true);


  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logininduser(userDetails, navigate));
    console.log("log in successfully");
  }


  return (
    <div className={classes.login}>
      <div className={classes.header}>
        <h1 className={classes.heading}>Welcome back! Login as an individual seller</h1>
      </div>


      <div className={classes.formContainer}>
        <img className={classes.image} src={loginImage} alt="login" />
        {condition ?
          <form className={classes.form} onSubmit={handleSubmit}>
            {/* user email */}
            <div className={classes.inputwrapper}>
              <p className={classes.label}>Email : </p>
              <div className={classes.form__group}>
                <input
                  type="email"
                  className={classes.form__email}
                  name='email'
                  placeholder='Enter your email'
                  value={userDetails.email}
                  onChange={handleChange}
                  autoComplete='on' />
              </div>
            </div>

            {/* user password */}
            <div className={classes.inputwrapper}>
              <p className={classes.label}>Password : </p>
              <div className={classes.form__group}>
                <input
                  type="password"
                  className={classes.form__password}
                  name='password'
                  placeholder='Enter your password'
                  value={userDetails.password}
                  onChange={handleChange}
                  autoComplete='on'
                />
              </div>
            </div>

            {/* confirm passowrd */}
            <div className={classes.inputwrapper}>
              <p className={classes.label}>Confirm passowrd : </p>
              <div className={classes.form__group}>
                <input
                  type="password"
                  className={classes.form__password}
                  name='confirmPassword'
                  placeholder='Enter your password'
                  value={userDetails.confirmPassword}
                  onChange={handleChange}
                  autoComplete='on'
                />
              </div>
            </div>

            <Link to='/signupinduser'>
              <p>Don't have an account - signup page</p>
            </Link>
            {/* details submit */}
            <div className={classes.form__group}>
              <button className={classes.form__submit} type='submit' disabled={loading}>
                {loading ?
                  <p>Loading</p>
                  :
                  <p>Log In</p>
                }
              </button>
            </div>
          </form>
          :
          <div className={classes.successfullContainer}>
            <p>You have succesfully logged in</p>
            <Link to='/DashboardUser/'>
              <p>click here to go to your - DASHBOARD</p>
            </Link>
          </div>
        }
      </div>

    </div>
  )
}

export default LoginIndUserComp