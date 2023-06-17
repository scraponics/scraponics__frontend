import React, { useState } from 'react'
import publicimg from '../../assets/login.png'

// Css
import classes from '../Signin/Signin.module.css'

function Signin() {

     const [userDetails, setUserDetails] = useState({
       email: "",
       password: "",
     });

  return (
    <div>
      <div className={classes.signin}>
        <div className={classes.header}>
          <h1 className={classes.heading}>Register as a SCRAPONICS user</h1>
        </div>
        <div className={classes.header}>
          <h1 className={classes.heading}>Register as a SCRAPONICS Vendor</h1>
        </div>
        <div className={classes.header}>
          <h1 className={classes.welcome}>Welcome :)</h1>
        </div>
        <div className={classes.header}>
          <p className={classes.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            repellendus.
          </p>
        </div>
        <div className={classes.formContainer}>
          <img className={classes.image} src={publicimg} alt="sign in" />
          <form
            className={classes.form}
            onSubmit={(e) => setUserDetails(e.target.value)}
          >
            {/* user email */}
            <div className={classes.inputwrapper}>
              <p className={classes.label}>Email : </p>
              <div className={classes.form__group}>
                <input
                  type="email"
                  className={classes.form__email}
                  name="user Email"
                  placeholder="Enter your Mail Id"
                  value={userDetails.email}
                  onChange={() => {}}
                />
              </div>
            </div>

            {/* Password */}
            <div className={classes.inputwrapper}>
              <p className={classes.label}>Password : </p>
              <div className={classes.form__group}>
                <input
                  type="Password"
                  className={classes.form__password}
                  name="Password"
                  placeholder="Password"
                  value={userDetails.password}
                  onChange={() => {}}
                />
              </div>
            </div>
            <div className={classes.newuser}>
              <h4>
                New User ? <a href='##'>Register Here!!</a>
              </h4>
            </div>

            {/* details Login*/}
            <div className={classes.form__group}>
              <button className={classes.form__login} type="login">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin