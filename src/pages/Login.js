import React, { Component, useState }  from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

async function loginUser(credentials) {

    const formData = new URLSearchParams();
    formData.append('username', credentials.username);
    formData.append('password', credentials.password);

    /*return fetch('https://api-mediamanagerone-cms.azurewebsites.net/login-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    }).then(data => data.json())*/

   return fetch('https://api-mediamanagerone-cms.azurewebsites.net/login-user', {method: 'POST', body: formData}).then(data => data.json());
}

export default function Login({ setToken }){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const jsonLogin = await loginUser({
            username,
            password
        });
    
        if(jsonLogin.success)
        {
            //setToken(jsonLogin.content.accessToken);
            setToken(jsonLogin.content);
        }
        
    }
    
    return (
        <div className="App"><div className="content bg-white sm:bg-gray-100 dark:bg-gray-800 sm:dark:bg-gray-800 dark:text-gray-400">
        <div className="flex items-center justify-center h-screen">
            <div className="sm:grid sm:grid-flow-col sm:grid-cols-2 mx-auto max-w-2xl p-5 sm:bg-white rounded-[30px] m-5 dark:sm:bg-gray-700">
                <div className="p-5 pl-9">
                    <div className="mb-12 h-[25px] sm:h-[20px] relative">
                        <img src="logo.dark.png" className="invisible dark:visible absolute h-full" />
                        <img src="logo.png" className="visible dark:invisible absolute h-full" />
                    </div>

                    <h3 className="text-md font-bold text-left mb-6">Welcome to <br />Media Manager</h3>
                    <form onSubmit={handleSubmit}>
                        
                        <div className="relative">
                            <div className="flex absolute inset-y-1 left-1 items-center py-2 px-2 pointer-events-none bg-white dark:bg-gray-600 rounded-md">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                            </div>
                            <input type="text" className="block pl-12 p-2.5 w-full text-gray-900 bg-gray-100 rounded-lg border border-gray-200 sm:text-xs focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="Username" onChange={e => setUserName(e.target.value)} />
                        </div>
                    
                        <div className="relative mt-3">
                            <div className="flex absolute inset-y-1 left-1 items-center py-2 px-2 pointer-events-none bg-white dark:bg-gray-600 rounded-md">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" /></svg>
                            </div>
                            <input type="password" className="block pl-12 p-2.5 w-full text-gray-900 bg-gray-100 rounded-lg border border-gray-200 sm:text-xs focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        </div>
                    
                        <div className="block text-gray-400 text-xs text-right mt-3 mb-6">Forgot password?</div>
                        
                        <button type="submit" className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg mt-4">Sign In</button>
                        
                        <div className="mt-10">
                            <p className="text-xs text-center text-gray-600 dark:text-gray-400">&copy;2022 Company. All rights reserved.</p>
                        </div>

                    </form>
                </div>
                <div className="">
                    <div id="box-loginIllus" className="invisible sm:visible w-64 ml-8 rounded-[30px] h-full">
                    </div>
                </div>
            </div>

        </div>
        </div></div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}