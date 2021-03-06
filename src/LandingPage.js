const LandingPage = (props) => {
    return(
        <header className='landingPage'>
            <h1>Welcome to AniWho!</h1>
            <h2 className='landingText'>Guess as many character names as you can in 30 seconds!</h2>
            <h2 className='landingText'>Play using your keyboard or tap on the letters on screen</h2>
            <h2>The ` key can used to skip if you are stuck</h2>
            <button className='playButton' onClick={()=>{props.setDidStart(true)}}>Play!</button>
            <h1 className='landingText'>Good Luck!</h1>
        </header>
    )
}

export default LandingPage;