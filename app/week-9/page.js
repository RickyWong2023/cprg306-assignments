"use client";

import React from 'react';
import { useUserAuth } from "./_utils/auth-context";

const LandingPage = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn(params) {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error)
        }
        
    }

    async function handleSignOut(params) {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <div>
            {user ? (
                <>
                    <p>Welcome, {user.displayName} ({user.email})</p>
                    <button onClick={handleLogout}>Logout</button>
                    <button onClick={() => router.push('/shopping-list')}>Go to Shopping List</button>
                </>
            ) : (
                <button onClick={handleLogin}>Login with GitHub</button>
            )}
        </div>
    );
};

export default LandingPage;
