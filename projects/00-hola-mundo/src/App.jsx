import "./App.css"
import { TwitterFollowCard }  from "./components/TwitterFollowCard.jsx";

export const App = () => {
    const format = (userName) => `@${userName}`
    const verifiedButtonElement = <img src="verified.svg" width={20} /> // elements can be passed by props to childs components
    const  kaiCenatUser = { 
        formatUserName: format, 
        fullName: "Kai Cenat", 
        userName: "kaicenat"
    }
    return (
        <>
            <TwitterFollowCard 
                verifiedBadge={verifiedButtonElement}
                formatUserName={format} 
                fullName="Victor Andres Ponce" 
                userName="victorandresp"
            >
                <span>Victor Andres Ponce</span>
            </TwitterFollowCard>
            <TwitterFollowCard
                formatUserName={format}
                fullName="Miguel Angel Duran"
                userName="midudev"
            >
                <span>Migue Angel Duran</span>
            </TwitterFollowCard>
            <TwitterFollowCard { ...kaiCenatUser }>
                <span>Kai Cenat</span>
            </TwitterFollowCard>
        </>
    )
}