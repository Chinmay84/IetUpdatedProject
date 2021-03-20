import React from "react";

import pet_connect from '../images/pet_connect.png';
function Registration() {
    return (


        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 form-block px-4">
                    <div class="col-lg-8 col-md-6 col-sm-8 col-xs-12 form-box">
                        <div class="text-center mb-3 mt-5">
                            <img src={pet_connect} width="350px" />
                        </div>
                        <h4 class="text-center mb-4">
                            Create An Account
					</h4>
                        <form>
                            <div class="form-input">
                                <span><i class="fas fa-user-alt"></i></span>
                                <input type="text" name="" placeholder="Full Name" required />
                            </div>
                            <div class="form-input">
                                <span><i class="fas fa-laptop-code"></i></span>
                                <input type="email" name="" placeholder="Email" tabindex="10" required />
                            </div>


                            <div class="form-input">
                                <span><i class="fas fa-tablet-alt"></i></span>
                                <input type="text" name="" placeholder="Mobile No." required />
                            </div>

                            <div class="form-input">
                                <span><i class="fas fa-tablet-alt"></i></span>
                                <input type="text" name="" placeholder="Alternative Mobile No." required />
                            </div>
                            

                            <div class="form-input">
                                <span><i class="far fa-address-book"></i></span>
                                <input type="text" name="" placeholder="Address" tabindex="10" required />
                            </div>

                            <div class="form-input">
                                <span><i class="fas fa-city"></i></span>
                                <input type="text" name="" placeholder="City" tabindex="10" required />
                            </div>

                            <div class="form-input">
                                <span><i class="fas fa-city"></i></span>
                                <input type="text" name="" placeholder="State" tabindex="10" required />
                            </div>

                            <div class="form-input">
                                <span><i class=" fas fa-book-reader"></i></span>
                                <input type="text"  name="" placeholder="Pincode" tabindex="10" required />

                            </div>

                            


                            <div class="form-input">
                                <span><i class="fa fa-key"></i></span>
                                <input type="password" name="" placeholder="Password" required />
                            </div>

                            <div class="form-input">
                                <span><i class="fa fa-key"></i></span>
                                <input type="password" name="" placeholder=" Confirm-Password" required />
                            </div>

                            <div class="input">
                                <span><i class="fas fa-user-friends "></i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <label>Male<input type="radio" name="optradio" class="left-align" /></label>
                                <label>Female<input type="radio" name="optradio" /></label>
                            </div>

                            <div class="input">
                                <span><i class="fas fa-user-friends "></i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <label>User<input type="radio" name="optradio" class="left-align" /></label>
                                <label>Doctor<input type="radio" name="optradio" /></label>
                                <label>Foster<input type="radio" name="optradio" /></label>
                            </div>


                            <div class="mb-3 d-flex align-items-center">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="cb1" />
                                    <label class="custom-control-label" for="cb1">I agree all terms & conditions</label>
                                </div>
                            </div>

                            <div class="mb-3">
                                <button type="submit" class="btn btn-block">
                                    Register
							</button>
                            </div>



                            <div class="text-center mb-5">
                                Already have an account
							    <a class="login-link" href="login.html">   Login here </a>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>

    )
}
export default Registration;