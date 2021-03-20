import React from 'react';
import pet_connect from '../images/pet_connect.png';
import newdog from '../images/newdog.jpg';
import vet from '../images/vet.png';
function Doctorpage() {
    return (

        <div class="container-fluid">

            <div class="row">
                <div class="col-lg-7 form-block px-4">
                    <div class="col-lg-8 col-md-6 col-sm-8 col-xs-12 form-box">
                        <div class="text-center mb-3 mt-5">

                            <img src={pet_connect} width="350px" />
                        </div>
                        <h4 class="text-center mb-4">
                           Doctor Info
					</h4>
                        <form>
                            <div class="form-input">
                                <span><i class="fas fa-user-alt"></i></span>
                                <input type="text" name="" placeholder="Qualification" tabindex="10" required />
                            </div>
                            <div class="form-input">
                                <span><i class="fa fa-key"></i></span>
                                <input type="text" name="" placeholder="Experience" required />
                            </div>
                            <div class="form-input">
                                <span><i class="fas fa-user-alt"></i></span>
                                <input type="text" name="" placeholder="Office Address" tabindex="10" required />
                            </div>

                            

                            <div class="mb-5">
                                <button type="submit" class="btn btn-block">
                                    Submit
							</button>
                            </div>

                            
                        </form>
                    </div>
                </div>

                <div class="col-lg-5 form-block px-4">
                    <img src={vet} width="500px" />
                </div>


            </div>
        </div>
        
    )
}

export default Doctorpage;