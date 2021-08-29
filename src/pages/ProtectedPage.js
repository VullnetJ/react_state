import React, {useEffect} from 'react';
import {  useHistory } from 'react-router';
//Redirect from 'react-router
export const ProtectedPage = () => {
    const history = useHistory();
    const isAuthed = false;

    useEffect(() => {
        if (!isAuthed){
            history.push('/');
        }
    });

    return (
        <h1>Only Authed users should be able to see this</h1>
    )
          // <Redirect to="/"></Redirect>
    // return isAuthed ?(
    // <h1>Only Authed users should be able to see this</h1>
    // )
    //  :   <Redirect to="/"></Redirect>

}
