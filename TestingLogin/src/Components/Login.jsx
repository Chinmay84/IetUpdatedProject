import React from 'react'

function Login() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const [user, setuser] = useState({
        email:"",
        password:""
    })

    const addClickHandeler =async () => {
        const result =await Axios.post("http://localhost:8080/app/register/",{email,password})
         console.log(result);
         setemail('');
         setpassword('');
         setuser({email:result.data.email,password:result.data.password});
     }



    return (
        <div>
            <div className="w-50 mt-4 m-auto p-5 shadow-lg bg-white ">

                <h3>Register</h3>
                <hr />
                <div className="form-group row">
                    <label htmlFor="id" className="col-2 col-form-label">username</label>
                    <div className="col-10">
                        <input id="username" type="text" placeholder="username" className="form-control"
                            onChange={e => setemail(e.target.value)} value={email} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-2 col-form-label">password</label>
                    <div className="col-10">
                        <input id="password" type="password" placeholder="password" className="form-control"
                            onChange={e => setpassword(e.target.value)} value={password} />
                    </div>
                </div>
 

                <button className="btn btn-info btn-block" onClick={addClickHandeler}>Submit</button>
            </div>



            </div>
    )
}

const mapDispatchToProps =(state)=>{
    return{
        register: (userState) =>{
            
        }
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state,
    };
}

export default connect(mapStateToProps)(mapDispatchToProps)(Login)
