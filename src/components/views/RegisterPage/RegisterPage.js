import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_action'


function RegisterPage() {
    const dispatch = useDispatch();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Password2, setPassword2] = useState("")
    const [Name, setName] = useState("")
    

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onPassword2Handler = (event) => {
        setPassword2(event.currentTarget.value)
    }

    const onNameHandler =  (event) => {
        setName(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }
        dispatch(loginUser(body))
        .then(response => {
            console.log(response.payload);
            if(response.payload.loginSuccess) {
                //props.history.push('/')
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
                <h2>회원가입</h2>
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Name</label>
                <input type="text" value={Email} onChange={onNameHandler} />
                <label>Password</label>
                <input type="Password" value={Password} onChange={onPasswordHandler} />
                <label>Confirm Password</label>
                <input type="Password" value={Password} onChange={onPassword2Handler} />
                <br />
                <button>
                    회원가입
                </button>
            </form>
        </div>
    )
}

export default RegisterPage
