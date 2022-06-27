// This block manages the styles for the GUIs
// Especially the breakpoints, the maximum widths

import LeftGUI from "./leftgui/LeftGUI"
import RightGUI from "./rightgui/RightGUI"
import TopNavbarImported from "./topnavbar/TopNavbar"

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
      <RightGUI />
    </div>
  )
}

export const LeftNavbar = () => {
  return (
    <div className="GUI-wrapper GUI-breakpoint-width" id='GUI-left'>
      <LeftGUI />
    </div>
  )
}

export const TopNavbar = () => {
  return (
    <div>
      <TopNavbarImported />
    </div>
  )
}
