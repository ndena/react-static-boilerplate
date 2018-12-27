import fs from 'fs'
import path from 'path'
import { compile } from 'handlebars'

const html = fs.readFileSync(path.join(__dirname, 'Html.hbs'), 'utf-8')
export default compile(html)
