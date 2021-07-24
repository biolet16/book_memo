const StartLayout = () => {
    return (
    <>
        <p>What your favorite book?</p>
        <a href="/search">
            <form role="search">
                <label>Search for stuff</label>
                <input id="search" type="search" placeholder="Search..." autoFocus required disabled/>
            </form>
        </a>
    </>
    )
}

export default StartLayout;