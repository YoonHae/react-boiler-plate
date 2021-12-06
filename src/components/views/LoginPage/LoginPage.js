
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_action'

function LoginPage() {
    const dispatch = useDispatch();
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    let navigate = useNavigate();

    const onUsernameHandler = (event) => {
        setUsername(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            username: Username,
            password: Password
        }
        dispatch(loginUser(body))
        .then(response => {
            console.log(response.payload);
            if(response.payload.loginSuccess) {
                navigate('/');
            } else {
                alert('Error')
            }
        })
    }
    
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{display: 'flex', flexDirection: 'column'}}
            onSubmit={onSubmitHandler}>
                <h2>Login</h2>
                <label>ID</label>
                <input type="text" value={Username} onChange={onUsernameHandler} />
                <label>Password</label>
                <input type="Password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button>
                    Login
                </button>
            </form>
        </div>
        
    )
}

export default LoginPage;
