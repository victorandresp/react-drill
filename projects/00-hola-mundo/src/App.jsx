import "./App.css"
import { TwitterFollowCard } from "./components/TwitterFollowCard.jsx";

export const App = () => {
    const format = (userName) => `@${userName}`
    const verifiedButtonElement = <img src="verified.svg" width={20} /> // elements can be passed by props to childs components
    const kaiCenatUser = {
        initialIsFollowing: false,
        formatUserName: format,
        fullName: "Kai Cenat",
        userName: "kaicenat"
    }

    const users = [
        {
            verified: true,
            name: 'Victor Andres Ponce',
            userName: 'iamvictorandres',
            isFollowing: true
        },
        {
            verified: false,
            name: 'Miguel Angel Duran',
            userName: 'midudev',
            isFollowing: false
        },
        {
            verified: false,
            name: 'PARTYNEXTDOOR',
            userName: 'partynextdoor',
            isFollowing: false
        },
    ]
    return (
        <>
            {
                users.map((user) =>{
                    return (
                        <TwitterFollowCard 
                            key={user.userName}
                            userName={user.userName}
                            verifiedBadge={user.verified && verifiedButtonElement} // Note: shorthand if first value is truthy returns the second.
                            initialIsFollowing={user.isFollowing}
                            formatUserName={format}
                        >
                            {user.name}
                        </TwitterFollowCard>
                    )
                })
            };
        
            <TwitterFollowCard {...kaiCenatUser}>
                <span>Kai Cenat</span>
            </TwitterFollowCard>
        </>
    )
}