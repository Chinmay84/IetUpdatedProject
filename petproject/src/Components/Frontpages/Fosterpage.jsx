import React from "react";
import pet_connect from "../../images/pet_connect.png";
import vet from '../../images/vet.png';
//import foster_logo from '../../images/foster_logo.jpg';
//import fosterimg from '../../images/fosterimg.jpg';
function Fosterpage() {
    return (
        <div class="container-fluid">

            <div class="row">
                <div class="col-lg-6 form-block px-4 text-left justify-content-lg-start">
                    <div class="col-lg-8 col-md-6 col-sm-8 col-xs-12 form-box">
                        <div class="text-left mb-5 mt-5 ">

                            <img src={pet_connect} class="img-fluid" width="350px" />
                        </div>
                        <h2 class="text-center mb-4 align-bottom">
                            Foster Service Discription
					    </h2>
                        <h3 class="text-center mb-4 align-bottom">
                        please provide here your All services to help All user </h3>
                        <div class="text-left mb-5 mt-5">


                        </div>
                       

                        <div class="text-left mb-5 mt-5">


                        </div>
                        <div class="text-left mb-3 mt-3">
                        </div>
                        
                    </div>
                </div>

                <div class="col-lg-6 form-block px-4 text-left justify-content-lg-start">
                    <div class="col-lg-12 col-md-6 col-sm-8  form-box">
                        <div class="text-left mb-5 mt-5">


                        </div>
                        <h4 class="text-center mb-4 align-bottom">
                            Foster Discription
					    </h4>
                        <form>
                            <div class="form-input">
                                <span><i class="fas fa-user-alt"></i></span>
                                <textarea class="form-control" row="5" id="comment"></textarea>
                            </div>
                            <div class="form-input">
                                <span><i class=""></i></span>
                                <textarea class="form-control" row="5" id="comment"></textarea>
                            </div>
                            </form>
                        <div class="mb-3">
                           
                        </div>
                        
                        <button type="submit" class="btn btn-block">
                            Submit
							</button>
                        <div class="text-left mb-5 mt-5">


                        </div>
                        <div class="text-left mb-5 mt-5">


                        </div>
                        
                    </div>
                </div>
               

              


            </div>
        </div>

    )
}
export default Fosterpage;

  