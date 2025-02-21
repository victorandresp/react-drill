export const TwitterFollowCard = ({verifiedBadge, formatUserName, fullName, userName, isFollowing = false}) => {
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={`https://unavatar.io/twitter/${userName}`} alt="avatar" />
                <div className="tw-followCard-info">
                    <strong>{ fullName }<span className="tw-followCard-badge">{verifiedBadge}</span></strong>
                    <span className="tw-followCard-infoUserName">{ formatUserName(userName) }</span>
                </div>
            </header>
            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}