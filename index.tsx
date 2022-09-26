import React, { useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import './style.css';

const App = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const handleUserName = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  const submitData = () => {
    console.log('login successfully');
    const data = JSON.stringify({
      email: { username },
      password: { password },
    });
    // axios
    //   .post('https://reqres.in/api/login', data, {
    //     headers: {
    //       authorization: 'Bearer QpwL5tke4Pnpja7X4',
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    const instance = axios.create({
      baseURL: 'https://reqres.in/api/login',
      headers: { Authorization: 'Bearer QpwL5tke4Pnpja7X4' },
    });
    // const res = instance.request({
    //   data: {
    //     email: { username },
    //     password: { password },
    //   },
    // });
    instance.post('data').then((res) => {
      console.log(res);
      console.log(res.data);
    });
    // axios({
    //   method: 'post',
    //   url: 'https://reqres.in/api/login',
    //   { headers: {"authorization" : token} },
    //   data: JSON.stringify({
    //     email: { username },
    //     password: { password },
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  return (
    <div>
      <div>
        <div>
          <h3>Hello there, Sign in to continue</h3>

          <div className="box">
            <form className="insideBox">
              <div>
                <label>Username/Email</label>
                <input type="email" onChange={handleUserName} />
                <div></div>
              </div>
              <div>
                <label>Password</label>
                <input type="password" onChange={handlePassword} />
                <div></div>
              </div>
              <button className="loginbtn" onClick={submitData}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
