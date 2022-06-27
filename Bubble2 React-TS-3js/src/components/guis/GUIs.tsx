// This block manages the styles for the GUIs
// Especially the breakpoints, the maximum widths

export const RandomGuiStuff = () => {
  return (
    <div>RandomGuiStuff
      <input type='button'></input>
      <input type='button'></input>
      <input type='button'></input>
      <input type='text'></input>
      <input type='number'></input>
      <input type='date'></input>
    </div>
  )
}

export const RightNavbar = () => {
  return (
    <div className="GUI-wrapper GUI-breakpoint-width" id='GUI-right'>
      Right GUI
      <RandomGuiStuff />
    </div>
  )
}

export const LeftNavbar = () => {
  return (
    <div className="GUI-wrapper GUI-breakpoint-width" id='GUI-left'>
      Left GUI
      <RandomGuiStuff />
    </div>
  )
}

export const TopNavbar = () => {
  return (
    <div>TopNavbar
      <RandomGuiStuff />
    </div>
  )
}
