import { validateData } from './modules/data/validateData.js'
import { fillData } from './modules/data/fillData.js'
import { events } from './modules/events.js'
import { render } from './modules/render/render.js'

validateData()
fillData()
events()
render()
