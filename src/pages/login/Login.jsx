import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <div className="loginTit">
      <form className="form">
        <h3 >LOGIN</h3>
        <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        
    </div>
    <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
        <button type="submit" className="btn-l">Submit</button>
      </form>
    </div>
      </div>
    
  )
}
