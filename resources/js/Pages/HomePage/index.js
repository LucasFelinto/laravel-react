import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import route from "ziggy";

import { Container } from "./style";

const HomePage = ({ user }) => {
    return (
        <div>
            <Container>Hello World</Container>
            {user}
            <InertiaLink href={route("home")}>Home</InertiaLink>
            <InertiaLink href={route("login")}>Login</InertiaLink>
        </div>
    );
};

export default HomePage;
