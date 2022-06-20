import Body from './components/body'
import './styles.main.dev.css'

function AppFullscreen({ _G }: {_G: Object}) {
  return (
    <main className="content content--fullscreen">
      <Body _G={_G}/>
    </main>
  )
}

export { AppFullscreen as default, AppFullscreen }
