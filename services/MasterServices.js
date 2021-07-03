import { API_MASTER_URL } from '~/constant/api.constants'
import httpRequest from '~/helper/http/httpRequest'

class MasterService {
  constructor (ctx) {
    this.ctx = ctx
    this.serviceApi = httpRequest(ctx, API_MASTER_URL).serviceApi
  }

  getProvider (params) {
    return this.serviceApi.get('/provider/customer', {
      params
    })
  }

  getProviderById (uid) {
    return this.serviceApi.get(`/provider/customer/${uid}`)
  }

  createProvider (params) {
    return this.serviceApi.post('/provider/customer', { ...params, fileIcon: 'sadasdas' })
  }

  updateProvider (uid, params) {
    return this.serviceApi.patch(`/provider/customer/${uid}/all`, { ...params, fileIcon: 'sadasdas' })
  }

  deleteProvider (uid) {
    return this.serviceApi.patch(`/provider/customer/${uid}/status`, {
      isActive: 0
    })
  }

  getPackage (params) {
    return this.serviceApi.get('/package/customer', {
      params
    })
  }

  getPackageById (uid) {
    return this.serviceApi.get(`/package/customer/${uid}`)
  }

  createPackage (params) {
    return this.serviceApi.post('/package/customer', {
      ...params
    })
  }

  updatePackage (uid, params) {
    return this.serviceApi.patch(`/package/customer/${uid}/all`, { ...params })
  }
}

export default MasterService
