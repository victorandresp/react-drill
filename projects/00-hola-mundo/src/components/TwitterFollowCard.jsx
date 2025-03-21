
import { useState } from "react"

export const TwitterFollowCard = ({children, verifiedBadge, formatUserName, userName, initialIsFollowing = false }) => {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const textFollow = !isFollowing ? 'Seguir' : 'Siguiendo'
    const buttonUnfollowClass = isFollowing ? 'is-following' : ''
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={`https://unavatar.io/twitter/${userName}`} alt="avatar" />
                <div className="tw-followCard-info">
                    <strong>{ children }<span className="tw-followCard-badge">{verifiedBadge}</span></strong>
                    <span className="tw-followCard-infoUserName">{ formatUserName(userName) }</span>
                </div>
            </header>
            <aside>
                <button
                 onClick={() => setIsFollowing(!isFollowing)} 
                 className={"tw-followCard-button "+ buttonUnfollowClass}
                >
                    {textFollow}
                </button>
            </aside>
        </article>
    )
}