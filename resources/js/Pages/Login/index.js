import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import route from "ziggy";

const Login = ({ user }) => {
    return (
        <div>
            <h1>Login</h1>
            {user}
            <InertiaLink href={route("home")}>Home</InertiaLink>
            <InertiaLink href={route("login")}>Login</InertiaLink>
        </div>
    );
};

export default Login;
