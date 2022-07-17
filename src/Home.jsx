import ActionMapImg from './assets/action-map.jpg'

export const About = () => {
    return(
        <div id="main-about">
        <div id="about-text-container">
          <h3 id="about-title">about</h3>
          <p id="about-text">We are a company specialized in the food market 
          that operates in the international trade.<br/><br/>We have built a close 
          relationship with the leading Industries in the food sector at a global level</p>
        </div>
      </div>
    )
}

export const Action = () => {
    return(
        <div id="main-action">
            <div id="action-text-container">
                <h3 id="action-title">what can we do for you?</h3>
                <p id="action-text">In an increasingly complex market, we work achieving
                close and lasting business relationships with the best suppliers in the sector
                to provide you with the best quality products at the best price.<br/><br/>
                Our maximum goal: to join the most solvent suppliers with the clients in the same equation.</p>
            </div>
        </div>
    )
}

export const ActionMap = () => {
    return(
        <div id="main-action-map">
            <div id="action-map-container">
                <h3 id="action-map-title">our action map</h3>
                <img src={ActionMapImg} alt="Our action map"></img>
            </div>
        </div>
    )
}

export const Mission = () => {
    return(
        <div id="main-mission">
            <div id="mission-text-container">
                <h3 id="mission-title">our vision and our mission</h3>
                <p id="mission-text">At IC TRADE we have a great sense of responsibility in the challenges
                we assume as a company. In a very dynamic and unstable global market every day, it is very
                 important to have commercial transactions based on trust and good work.<br/><br/>
                We make it possible with work, self-demand, seriousness, excellence, accompaniment and
                commitment to our suppliers and our customers.</p>
            </div>
        </div>
    )
}

export const Home = () => {
    return(
        <div id="home">
            <div id='main-welcome-img'/>
            <About/>
            <div id="first-separator"/>
            <Action/>
            <ActionMap/>
            <Mission/>
        </div> 
    )
}