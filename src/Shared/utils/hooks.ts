import React, { useState, Component } from 'react';
import { User } from '../../Auth/interfaces/User';


export const setCurrentUser = (currentUser: User) =>{
    window.localStorage.setItem('user', JSON.stringify(currentUser))
}

export const getCurrentUser = () =>{
    return window.localStorage.getItem('user')
}