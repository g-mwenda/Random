import { Link } from "react-router-dom"
import "./login.scss"

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate ex voluptates magnam libero accusantium, dolore ipsum deserunt autem qui facilis obcaecati repudiandae, impedit culpa iusto dolores rerum pariatur iste!</p>
          <span>Don't you have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
          
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="text"  placeholder="Password"/>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login