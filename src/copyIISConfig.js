import * as fs from 'fs'

const webConfigPath = './build/web.config'

if (fs.existsSync(webConfigPath)) {
    fs.unlinkSync(webConfigPath)
}

fs.cpSync('./iisConfig/web.config', webConfigPath)