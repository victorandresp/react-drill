import "./App.css"
import { Fragment } from "react";
import { TwitterFollowCard }  from "./components/TwitterFollowCard.jsx";

export const App = () => {
    const format = (userName) => `@${userName}`
    return (
        <Fragment>
            <TwitterFollowCard formatUserName={format} fullName="Victor Andres Ponce" userName="victorandresp" />
            <TwitterFollowCard formatUserName={format} fullName="Miguel Angel Duran" userName="midudev" />
            <TwitterFollowCard formatUserName={format} fullName="Kai Cenat" userName="kaicenat" />
        </Fragment>
    )
}