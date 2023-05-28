import "./register.css"

export default function Register() {
  return (
    <div className="register">
      <div className="registerTit">
      <form className="form">
        <h3>Register</h3>
      <div className="mb-3">
        <label for="exampleInputText" className="form-label">UserName</label>
        <input type="text" className="form-control" id="exampleInputText" aria-describedby="textHelp"/>
    </div>
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
