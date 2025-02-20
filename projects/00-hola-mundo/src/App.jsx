import "./App.css"
import { Fragment } from "react";
import { TwitterFollowCard }  from "./components/TwitterFollowCard.jsx";

export const App = () => {
    return (
        <Fragment>
            <TwitterFollowCard fullName="Victor Andres Ponce" userName="@victorandresp" />
            <TwitterFollowCard fullName="Miguel Angel Duran" userName="@midudev" />
            <TwitterFollowCard fullName="Kai Cenat" userName="@kaicenat" />
        </Fragment>
    )
}