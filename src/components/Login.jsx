import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import { auth } from '../firebase'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
          .then((auth) => {
              navigate('/')
          })
          .catch(err => {
              alert(err.message)
          })
    }
    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
          .then((auth) => {
              navigate('/')
          })
          .catch(err => {
              alert(err.message)
          })
    }

  return (
    <div className='login'>
        <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className='login-logo'/>
        </Link>
        <div className="login-container">
          <h1>Sign In</h1>
          <form>
              <h5>Email</h5>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
              <h5>Password</h5>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                  <button className="login-signin-button" type="submit" onClick={login}>Sign in</button>
          </form>
          <p>
              By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
          </p>
          <button
              className="login-register-button"
              onClick={register}
          >Create your Amazon account</button>
      </div>
    </div>
  )
}

export default Login