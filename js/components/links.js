const createLink = text => {
  const link = document.createElement('h2')
  link.innerHTML = text
  link.style.fontSize = '1.5vw'
  link.style.letterSpacing = '0.5vw'
  link.style.fontFamily = 'Century Gothic'
  link.style.color = '#000000'
  link.style.pointerEvents = 'all'
  link.style.cursor = 'pointer'

  link.addEventListener('mouseover', () => {
    link.style.color = '#778899'
  })

  link.addEventListener('mouseleave', () => {
    link.style.color = '#000000'
  })

  return link
}

const getContainer = () => {
  const container = document.createElement('div')
  container.style.display = 'flex'
  container.style.bottom = '20%'
  container.style.justifyContent = 'space-around'
  container.style.alignItems = 'center'
  container.style.width = '100%'
  container.style.position = 'absolute'
  container.style.pointerEvents = 'none'
  return container
}

const createLinks = () => {
  const container = getContainer()

  const aboutMe = createLink('ABOUT')
  container.appendChild(aboutMe)

  const projects = createLink('PROJECTS')
  container.appendChild(projects)

  const contact = createLink('CONTACT')
  container.appendChild(contact)

  document.body.appendChild(container)
}

export default createLinks
