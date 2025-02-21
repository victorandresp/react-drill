import "./App.css"
import { TwitterFollowCard }  from "./components/TwitterFollowCard.jsx";

export const App = () => {
    const format = (userName) => `@${userName}`
    const verifiedButtonElement = <img src="verified.svg" width={20} /> // elements can be passed by props to childs components
    return (
        <>
            <TwitterFollowCard 
                verifiedBadge={verifiedButtonElement}
                formatUserName={format} 
                fullName="Victor Andres Ponce" 
                userName="victorandresp" 
            />
            <TwitterFollowCard
                formatUserName={format}
                fullName="Miguel Angel Duran"
                userName="midudev"
            />
            <TwitterFollowCard
                formatUserName={format}
                fullName="Kai Cenat"
                userName="kaicenat"
            />
        </>
    )
}