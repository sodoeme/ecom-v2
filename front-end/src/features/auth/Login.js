import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import usePersist from "../../hooks/usePersist";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [persist, setPersist] = usePersist();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  if (useAuth().roles.length > 0) {
    return <Navigate to="/" replace />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const accessToken = await login({ email: username, password });
      console.log(accessToken);
      dispatch(setCredentials({ accessToken: accessToken.data }));
      setUsername("");
      setPassword("");
      navigate("/favorites");
    } catch (err) {
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
    }
  };

  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);

  return (
    <>
      <div class="signup-signin-form">
        <div class="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              ref={userRef}
              value={username}
              onChange={handleUserInput}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handlePwdInput}
              value={password}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
