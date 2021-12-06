import Axios from 'axios';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {auth} from '../_actions/user_action'


export default function(SpecificComponent, option, adminRout = null) {

    // =====option=====
    // null => 아무나 가능
    // true => 로그인한 유저만 출입가능
    // false => 로그인한 유저 출입불가

    // adminRout
    // true: 관리자만 가능
    function AuthenticationCheck(props) {
        useEffect(() => {
            dispatch(auth()).then(response =>  {
                console.log(response);

                if (!response.payload.isAuth) {
                    if(option) {
                        props.history.push('/login')
                    } else {
                        if(adminRout && !response.payload.isAdmin) {
                            props.history.push('/')
                        } else {
                            if(!option)
                                props.history.push('/')

                        }
                    }
                }
            })
        })
    }
    return AuthenticationCheck;
}