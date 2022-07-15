//Burger animation

 export const ToggleBurger = () => {
  const burger = document.getElementById('burger')
  const line1 = document.getElementById('line-1')
  const line2 = document.getElementById('line-2')
  const line3 = document.getElementById('line-3')
  const nav = document.getElementById('navbar')
  const navlinks = document.querySelectorAll('.navlink')
    
  if(burger.classList.contains('burger-off')) openNav()
  else if (burger.classList.contains('burger-on')) closeNav()

  navlinks.forEach((navlink) => {
    navlink.addEventListener('click', () => {
      closeNav()
    })
  })
  
  function openNav(){
    line1.style.animation = 'line-1 1s forwards'
    line2.style.animation = 'line-2 0.5s forwards'
    line3.style.animation = 'line-3 1s forwards'
    nav.style.right = '0'
    document.body.style.overflow = 'hidden'
    burger.classList.replace('burger-off', 'burger-on')
  }
  
  function closeNav(){
    line1.style.animation = 'close-line-1 1s forwards'
    line2.style.animation = 'close-line-2 0.5s forwards'
    line3.style.animation = 'close-line-3 1s forwards'
    nav.style.right = '100vh'
    document.body.style.overflow = 'visible'
    burger.classList.replace('burger-on', 'burger-off')
  }
}
