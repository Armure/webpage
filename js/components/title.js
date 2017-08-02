const createTitle = text => {
  const title = document.createElement('h1')
  title.innerHTML = text
  title.style.fontSize = '6vw'
  title.style.letterSpacing = '2vw'
  title.style.width = '100%'
  title.style.textAlign = 'center'
  title.style.fontFamily = 'Century Gothic'
  title.style.position = 'absolute'
  title.style.top = '30%'
  title.style.left = '0'
  title.style.color = '#000000'
  title.style.opacity = '0.3'
  title.style.pointerEvents = 'none'
  document.body.appendChild(title)
}

export default createTitle
