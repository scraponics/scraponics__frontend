import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { signuporg } from '../../actions/AuthActions';


// styles 
import signupImage from '../../assets/signup.png';
import classes from './SignupOrgComp.module.css';

const SignupOrgComp = () => {

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.authReducer.loading);

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    profilePicture: '',
    landmark: '',
    district: '',
    state: '',
    postalCode: '',
    gstNumber: '',
    password: ''
  });

  const [condition, setCondition] = useState(true);

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setUserDetails({ ...userDetails, profilePicture: base64 })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signuporg(userDetails));
    console.log("Registered");
  }

  return (
    <div className={classes.signup}>
      <div className={classes.header}>
        <h1 className={classes.heading}>Register as an Organisation</h1>
      </div>

      <div className={classes.formContainer}>
        <img className={classes.image} src={signupImage} alt="sign up" />
        {condition ?
          <form className={classes.form} onSubmit={handleSubmit}>
            {/* user name */}
            <div className={classes.inputwrapper}>
              <p className={classes.label}>Name : </p>
              <div className={classes.form__group}>
                <input
                  type="text"
                  className={classes.form__name}
                  name='name'
                  placeholder='Enter your name'
                  value={userDetails.name}
                  onChange={handleChange}
                  autoComplete='on'
                />
              </div>
            </div>

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
                  autoComplete='on'
                />
              </div>
            </div>


            {/* user phonenumber */}
            <div className={classes.inputwrapper}>
              <p className={classes.label}>Phone Number : </p>
              <div className={classes.form__group}>
                <input
                  type="text"
                  className={classes.form__phonenumber}
                  name='phoneNumber'
                  placeholder='Enter your phone number'
                  value={userDetails.phoneNumber}
                  onChange={handleChange}
                  autoComplete='on'
                />
              </div>
            </div>

            {/* profile image */}
            <div className={classes.inputwrapper}>
              <p className={classes.label}>Profile Image</p>
              <div className={classes.form__group}>
                <input
                  className={classes.form__image}
                  name='profilePicture'
                  type="file"
                  placeholder='upload profile picture'
                  onChange={handleFileUpload}
                  autoComplete='on'
                />
              </div>
            </div>

            <p style={{
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>Address : </p>

            {/* user landmark */}
            <div className={classes.inputwrapper}>
              <p className={classes.label}>Landmark : </p>
              <div className={classes.form__group}>
                <input
                  type="text"
                  className={classes.form__name}
                  name='landmark'
                  placeholder='nearby landmark'
                  value={userDetails.landmark}
                  onChange={handleChange}
                  autoComplete='on'
                />
              </div>
            </div>

            {/* user district */}
            <div className={classes.inputwrapper}>
              <p className={classes.label}>District : </p>
              <div className={classes.form__group}>
                <input
                  type="text"
                  className={classes.form__name}
                  name='district'
                  placeholder='Enter your District'
                  value={userDetails.district}
                  onChange={handleChange}
                  autoComplete='on'
                />
              </div>
            </div>

            {/* user state and postal code */}
            <div className={classes.inputwrapper}>
              <div className={classes.form__group}>
                <select
                  className={classes.form__select}
                  name="state"
                  value={userDetails.category}
                  placeholder='state'
                  onChange={handleChange} autoComplete='on'
                >
                  <option value="Assam">Assam</option>
                  <option value="Arunachal">Arunachal</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Nagaland">Nagaland</option>
                </select>
              </div>
              <div className={classes.form__group}>
                <input
                  type="number"
                  className={classes.form__name}
                  name='postalCode'
                  placeholder='PIN number'
                  value={userDetails.postalCode}
                  onChange={handleChange}
                  autoComplete='on'
                />
              </div>
            </div>
            {/* user gstnumber */}
            <div className={classes.inputwrapper}>
              <p className={classes.label}>GST Number : </p>
              <div className={classes.form__group}>
                <input
                  type="number"
                  className={classes.form__name}
                  name='gstNumber'
                  placeholder='Enter your GST Number'
                  value={userDetails.gstNumber}
                  onChange={handleChange}
                  autoComplete='on'
                />
              </div>
            </div>

            {/* user district */}
            <div className={classes.inputwrapper}>
              <p className={classes.label}>Password : </p>
              <div className={classes.form__group}>
                <input
                  type="password"
                  className={classes.form__name}
                  name='password'
                  placeholder='Enter your password'
                  value={userDetails.password}
                  onChange={handleChange}
                  autoComplete='on'
                />
              </div>
            </div>


            {/* scarp category */}
            <Link to='/logininduser'>
              <p>already have an account - login page</p>
            </Link>
            {/* details submit */}
            <div className={classes.form__group}>
              <button className={classes.form__submit} type='submit'>
                {loading ?
                  <p>Loading</p>
                  :
                  <p>Sign Up</p>
                }
              </button>
            </div>
          </form>
          :
          <div className={classes.successfullContainer}>
            <p>You have succesfully Registered</p>
            <Link to='/logininduser'>
              <p>click here to go to the - login page</p>
            </Link>
          </div>
        }
      </div>
    </div>
  )
}

export default SignupOrgComp;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
};