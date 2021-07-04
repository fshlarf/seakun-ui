import webpack from 'webpack'
require('dotenv').config()

const definePlugin = () => {
  const envObject = {
    ENV: {}
  }
  Object.keys(process.env).map((key) => {
    envObject.ENV[key] = JSON.stringify(process.env[key])
    return key
  })
  return ([
    new webpack.DefinePlugin(envObject)
  ])
}
export default definePlugin
