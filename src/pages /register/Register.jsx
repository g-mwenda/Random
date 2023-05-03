 
import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama social.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate ex voluptates magnam libero accusantium, dolore ipsum deserunt autem qui facilis obcaecati repudiandae, impedit culpa iusto dolores rerum pariatur iste!</p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
          
         
          
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="email"  placeholder="Email"/>
            <input type="password"  placeholder="Password"/>
            <input type="text"  placeholder="Name"/>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;