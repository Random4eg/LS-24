
import { LockIcon } from '../../../shared/Icons/LockIcon';
import { UserIcon } from '../../../shared/Icons/UserIcon';
import { Button } from '../../../shared/ui/button/Button';
import { Input } from '../../../shared/ui/input/Input';
import './Login.scss';

export const Login = () => {
  return (
    <div className="login">
        <Input placeholder='Enter your email' type='email' className='login__input'  
        icon={<UserIcon/>}/>
        <Input placeholder='Enter your password' type='password' className='login__input' 
        icon={<LockIcon/ >}/>
        
        <Button   type ='submit' variant='secondary' >
            <div className='login-btn'>Push to login</div> 
            </Button>
    </div>
  )
}



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.scss';
// import { Home } from '../../home/Home';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

// const handleLogin = (e) => {
//   e.preventDefault();
//   if (username !== '' && password !== '') {
//     if (username === 'admin' && password === 'admin') {
//       navigate(<Home/>);
//     } else {
//       setError('wrong name user or password');
//     }
//   } else {
//     setError('please fill in both fields');
//   }
// };

//   return (
//     <form className='login' onSubmit={handleLogin}>
//       <div>
//         <label>          
//           <input
//           placeholder='Enter your email:'
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>          
//           <input placeholder='Enter your password:'
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//       </div>
//       <button type="submit">Увійти</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </form>
//   );
// };

// export default Login;





