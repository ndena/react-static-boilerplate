import fs from 'fs'
import path from 'path'
import { PUBLIC_DIR } from './paths'

const file = path.join(PUBLIC_DIR, 'assets', 'manifest.json')

const manifest = JSON.parse(fs.readFileSync(file))


export default manifest
