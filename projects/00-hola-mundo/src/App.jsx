import "./App.css"

export const App = () => {
    const title = "Boton";
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src="https://unavatar.io/github/mdo" alt="avatar" />
                <div className="tw-followCard-info">
                    <strong>Victor Andres Ponce</strong>
                    <span className="tw-followCard-infoUserName">@victorandresp</span>
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