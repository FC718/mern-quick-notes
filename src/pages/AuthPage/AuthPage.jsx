import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from 'react';


export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main>
      <div>
      <h1>AuthPage</h1>
      <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'LOGIN' : 'SIGN UP'}</h3>
      </div>
      
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}
