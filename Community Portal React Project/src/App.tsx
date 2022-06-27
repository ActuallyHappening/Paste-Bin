import Body from './components/body'
import { T_GlobalState } from './GlobalState'
import './styles.main.dev.css'

function AppFullscreen({ _G }: {_G: T_GlobalState}) {
  return (
    <main className="content content--fullscreen">
      <Body _G={_G}/>
    </main>
  )
}

export { AppFullscreen as default, AppFullscreen }
