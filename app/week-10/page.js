"use client";

import React from 'react';
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';


const SingInPage = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error)
        }}

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error)
        }}

    return (
        <main>
            <header>
                <h1>Firebase Auth</h1>
            </header>
            {user ? (
                <div>
                    <p>Welcome, {user.displayName}</p>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt={user.displayName} className="w-16 h-16 rounded-full" />
                    <Link href="/week-9/shopping-list">
                    <button className="bg-blue-500 text-white p-2 rounded py-2 px-4 mr-5">Shopping List</button></Link>
                    <button type="button" className="bg-green-500 text-black p-2 rounded py-2 px-4" onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <div>
                    <button type="button" className="bg-green-500 text-black p-2 rounded py-2 px-4" onClick={handleSignIn}>Sign In With Github</button>
                </div>
            )}
            </main>
            )};

export default SingInPage;
