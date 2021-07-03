import { API_MASTER_URL } from '~/constant/api.constants'
import httpRequest from '~/helper/http/httpRequest'

class MasterService {
  constructor (ctx) {
    this.ctx = ctx
    this.serviceApi = httpRequest(ctx, API_MASTER_URL).serviceApi
  }

  getProvider (params) {
    return this.serviceApi.get('/provider/user', {
      params
    })
  }

  getProviderById (uid) {
    return this.serviceApi.get(`/provider/user/${uid}`)
  }

  createProvider (params) {
    return this.serviceApi.post('/provider/user', { ...params, fileIcon: 'sadasdas' })
  }

  updateProvider (uid, params) {
    return this.serviceApi.patch(`/provider/user/${uid}/all`, { ...params, fileIcon: 'sadasdas' })
  }

  deleteProvider (uid) {
    return this.serviceApi.patch(`/provider/user/${uid}/status`, {
      isActive: 0
    })
  }

  getPackage (params) {
    return this.serviceApi.get('/package/user', {
      params
    })
  }

  getPackageById (uid) {
    return this.serviceApi.get(`/package/user/${uid}`)
  }

  createPackage (params) {
    return this.serviceApi.post('/package/user', {
      ...params
    })
  }

  updatePackage (uid, params) {
    return this.serviceApi.patch(`/package/user/${uid}/all`, { ...params })
  }
}

export default MasterService
