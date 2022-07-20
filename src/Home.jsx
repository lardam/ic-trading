import ActionMapImg from './assets/action-map-1.png'

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
            <div id='alliances-container'>
                <div id='alliances-title-container'>
                    <h3 id='alliances-title'>we work with</h3>
                </div>
                <div id='alliances-img-container'>
                    <div className='alliances-img' id='alliance-1'><p>meat sector</p></div>
                    <div className='alliances-img' id='alliance-2'><p>agriculture sector</p></div>
                    <div className='alliances-img' id='alliance-3'><p>commodity market</p></div>
                </div>
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

export const HomeEn = () => {
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

//Español

export const Nosotros = () => {
    return(
        <div id="main-about">
        <div id="about-text-container">
          <h3 id="about-title">nosotros</h3>
          <p id="about-text">Somos una empresa especializada en el mercado alimenticio que opera en
                    el comercio internacional.<br/><br/>Hemos construido una relación estrecha con las industrias líderes
                    del sector a nivel global.</p>
        </div>
      </div>
    )
}

export const Accion = () => {
    return(
        <div id="main-action">
            <div id="action-text-container">
                <h3 id="action-title">¡que podemos hacer por ti?</h3>
                <p id="action-text">En un mercado cada vez más complejo trabajamos arduamente para lograr relaciones
                    de negocios estrechas y duraderas con los mejores proveedores del sector, para ofrecerle a usted la mejor
                    calidad de productos al mejor precio<br/><br/>Nuestro máximo objetivo: unir a los proveedor más solventes
                    con los clientes en la misma ecuación.</p>
            </div>
        </div>
    )
}

export const MapaDeAccion = () => {
    return(
        <div id="main-action-map">
            <div id="action-map-container">
                <h3 id="action-map-title">our action map</h3>
                <img src={ActionMapImg} alt="Our action map"></img>
            </div>
            <div id='alliances-container'>
                <div id='alliances-title-container'>
                    <h3 id='alliances-title'>trabajamos con</h3>
                </div>
                <div id='alliances-img-container'>
                    <div className='alliances-img' id='alliance-1'><p>sector ganadero</p></div>
                    <div className='alliances-img' id='alliance-2'><p>sector agricultor</p></div>
                    <div className='alliances-img' id='alliance-3'><p>commodities</p></div>
                </div>
            </div>
        </div>
    )
}

export const Mision = () => {
    return(
        <div id="main-mission">
            <div id="mission-text-container">
                <h3 id="mission-title">nuestra visión y misión</h3>
                <p id="mission-text">En ECOAL TRADE tenemos un gran sentido de responsabilidad en los retos
                que asumimos como compañía. En un mercado internacional muy dinámico e inestable es muy 
                importante generar transacciones comerciales basadas en la confianza y el buen trabajo.<br/><br/>
                Lo hacemos posible con trabajo, autoexigencia, seriedad, excelencia, acompañamiento y compromiso
                para con nuestros proveedores y nuestros clientes.</p>
            </div>
        </div>
    )
}

export const HomeEs = () => {
    return(
        <div id='home'>
            <div id='main-welcome-img'/>
            <Nosotros/>
            <div id="first-separator"/>
            <Accion/>
            <MapaDeAccion/>
            <Mision/>
        </div>
    )
}