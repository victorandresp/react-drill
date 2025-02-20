export const TwitterFollowCard = ({fullName, userName, isFollowing = false}) => {
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src="https://unavatar.io/github/mdo" alt="avatar" />
                <div className="tw-followCard-info">
                    <strong>{ fullName }</strong>
                    <span className="tw-followCard-infoUserName">{ userName }</span>
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