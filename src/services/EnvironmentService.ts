const LOCAL_SERVICES_FRONTEND = 'https://portal.dev.demo.catena-x.net'
const LOCAL_SERVICES_BACKEND = 'http://localhost:5000'

export const getHostname = () => window.location.hostname

export const isLocal = () => getHostname() === 'localhost'

export const getApiBase = () =>
  isLocal()
    ? LOCAL_SERVICES_BACKEND
    : window.location.origin.replace('portal', 'portal-backend')

export const getAssetBase = () =>
  `${isLocal() ? LOCAL_SERVICES_FRONTEND : ''}/assets`

export const getCentralIdp = () => {
  const hostname = getHostname()
  if (hostname === 'portal.int.demo.catena-x.net')
    return 'https://centralidp.demo.catena-x.net/auth'
  if (hostname === 'portal-pen.dev.demo.catena-x.net')
    return 'https://centralidp-pen.dev.demo.catena-x.net/auth'
  if (hostname === 'portal.catena-x.net')
    return 'https://centralidp.catena-x.net/auth'
  return 'https://wsl:8443/iamcentral/auth'
}

const EnvironmentService = {
  isLocal,
  getHostname,
  getApiBase,
  getAssetBase,
  getCentralIdp,
}

export default EnvironmentService