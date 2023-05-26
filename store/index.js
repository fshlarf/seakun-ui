import MasterService from '~/services/MasterServices.js';
import OrderService from '~/services/OrderServices.js';
import { currencyFormat } from '~/helpers/word-transformation.js';
import moment from 'moment';
import { providerList } from '../constants/price-scheme';
import userHostProviders from '../constants/user-host-flow.json';

export const state = () => ({
  dataProviderSekurban: {},
  dataProvider: {
    list: [],
    loading: true,
  },
  dataProviderActive: {
    list: [],
    loading: true,
  },
  filterProvider: {
    page: 1,
    limit: 50,
  },
  filterProviderActive: {
    page: 1,
    limit: 50,
    keyword: '',
    category: '',
    type: 0,
  },
  dataProviderCategory: {
    list: [],
    loading: true,
  },
  filterProviderCategory: {
    page: 1,
    limit: 50,
  },
  dataGroup: {
    list: [],
    loading: true,
  },
  filterGroup: {
    page: 1,
    limit: 5,
    providerUid: '',
  },
  selectedProvider: {},
  selectedParam: {
    providerSlug: '',
    packageUid: '',
    variantUid: '',
  },
  dataListVariant: {
    list: [],
    loading: true,
  },
  dataCardVariant: {
    providerSlug: '',
    packageName: '',
    packageDetail: '',
    grandTotal: '',
    totalMonth: 0,
    buttonText: '',
    isPo: 0,
    isHost: 0,
  },
  dataHelperOrder: {
    package: '',
    fullName: '',
    email: '',
    phoneNumber: '',
  },
  isLoadingCreateOrder: false,
  isShowModalOrderTimeout: false,
  isShowModalConfirmation: false,
  isShowModalBlackList: false,
  dataDetailOrder: {
    data: {},
    loading: true,
  },
  waitingListOrderConfirmation: {
    status: 0,
    loading: true,
  },
  userHostProcedure: {},
});

export const getters = {
  getFilterProviderActive(state) {
    return state.filterProviderActive;
  },
  getProvidersActive(state) {
    return state.dataProviderActive;
  },
  getProviderCategory(state) {
    return state.dataProviderCategory;
  },
  getProviders(state) {
    return state.dataProvider;
  },
  getProviderSekurban(state) {
    return state.dataProviderSekurban;
  },
  getFilterGroup(state) {
    return state.filterGroup;
  },
  getGroups(state) {
    return state.dataGroup;
  },
  getSelectedProvider(state) {
    return state.selectedProvider;
  },
  getSelectedParam(state) {
    return state.selectedParam;
  },
  getListVariant(state) {
    return state.dataListVariant;
  },
  getDataCardVariant(state) {
    return state.dataCardVariant;
  },
  getLoadingCreateOrder(state) {
    return state.isLoadingCreateOrder;
  },
  getShowModalOrderTimeout(state) {
    return state.isShowModalOrderTimeout;
  },
  getShowModalConfirmation(state) {
    return state.isShowModalConfirmation;
  },
  getShowModalBlackList(state) {
    return state.isShowModalBlackList;
  },
  getDataHelperOrder(state) {
    return state.dataHelperOrder;
  },
  getDetailOrder(state) {
    return state.dataDetailOrder;
  },
  getWatingListConfirmation(state) {
    return state.waitingListOrderConfirmation;
  },
  getUserHostProcedure(state) {
    return state.userHostProcedure;
  },
};

export const mutations = {
  SET_INITIAL_PROVIDER_UID(state, uid) {
    state.filterGroup = {
      ...state.filterGroup,
      providerUid: uid,
    };
  },
  SET_FILTER_PROVIDER_ACTIVE(state, filter) {
    state.filterProviderActive = filter;
  },
  SET_FILTER_GROUP(state, providerUid) {
    state.filterGroup = {
      ...state.filterGroup,
      providerUid,
    };
  },
  SET_LOADING_PROVIDER_CATEGORY(state, loading) {
    state.dataProviderCategory = {
      ...state.dataProviderCategory,
      loading,
    };
  },
  SET_DATA_PROVIDER_CATEGORY(state, data) {
    state.dataProviderCategory = {
      ...state.dataProviderCategory,
      list: data,
    };
  },
  SET_LOADING_PROVIDER_ACTIVE(state, loading) {
    state.dataProviderActive = {
      ...state.dataProviderActive,
      loading,
    };
  },
  SET_DATA_PROVIDERS_ACTIVE(state, data) {
    state.dataProviderActive = {
      ...state.dataProviderActive,
      list: data,
    };
  },
  SET_LOADING_PROVIDER(state, loading) {
    state.dataProvider = {
      ...state.dataProvider,
      loading,
    };
  },
  SET_DATA_PROVIDERS(state, data) {
    state.dataProvider = {
      ...state.dataProvider,
      list: data,
    };
  },
  SET_DATA_PROVIDER_SEKURBAN(state, data) {
    state.dataProviderSekurban = data;
  },
  SET_LOADING_GROUP(state, loading) {
    state.dataGroup = {
      ...state.dataGroup,
      loading,
    };
  },
  SET_DATA_GROUPS(state, data) {
    state.dataGroup = {
      ...state.dataGroup,
      list: data,
    };
  },
  SET_SELECTED_PARAM(state, param) {
    state.selectedParam = param;
  },
  SET_SELECTED_PROVIDER(state, dataProvider) {
    state.selectedProvider = dataProvider;
    const hasPo = dataProvider.variants.some((variant) => {
      variant.isPo === 1;
    });
    const provider = providerList.find((provider) => {
      return provider.slug === dataProvider.slug;
    });
    state.selectedProvider = {
      ...state.selectedProvider,
      isPo: hasPo ? 1 : 0,
      member: provider.member,
    };
  },
  SET_LOADING_LIST_VARIANT(state, loading) {
    state.dataListVariant = {
      ...state.dataListVariant,
      loading,
    };
  },
  SET_DATA_LIST_VARIANT(state, data) {
    state.dataListVariant = {
      ...state.dataListVariant,
      list: data,
    };
  },
  SET_DATA_CARD_VARIANT(state, data) {
    state.dataCardVariant = data;
  },
  SET_LOADING_CREATE_ORDER(state, loading) {
    state.isLoadingCreateOrder = loading;
  },
  SET_DATA_HELPER_ORDER(state, data) {
    state.dataHelperOrder = {
      ...state.dataHelperOrder,
      provider: data.provider,
      variant: data.variant,
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
    };
  },
  SET_MODAL_ORDER_TIMEOUT(state, isShow) {
    state.isShowModalOrderTimeout = isShow;
  },
  SET_MODAL_CONFIRMATION(state, isShow) {
    state.isShowModalConfirmation = isShow;
  },
  SET_MODAL_BLACKLIST(state, isShow) {
    state.isShowModalBlackList = isShow;
  },
  SET_LOADING_DETAIL_ORDER(state, loading) {
    state.dataDetailOrder = {
      ...state.dataDetailOrder,
      loading,
    };
  },
  SET_DETAIL_ORDER(state, data) {
    const provider = providerList.find((provider) => {
      return provider.slug === data.provider.slug;
    });
    state.dataDetailOrder = {
      ...state.dataDetailOrder,
      data: {
        ...state.dataDetailOrder.data,
        ...data,
        member: provider.member,
      },
    };
  },
  SET_WAITING_LIST_LOADING(state, loading) {
    state.waitingListOrderConfirmation = {
      ...state.waitingListOrderConfirmation,
      loading,
    };
  },
  SET_WAITING_LIST_STATUS(state, status) {
    state.waitingListOrderConfirmation = {
      ...state.waitingListOrderConfirmation,
      status,
    };
  },
  SET_USERHOST_PROCEDURE(state, data) {
    state.userHostProcedure = data;
  },
};

export const actions = {
  applyFilterProvider({ dispatch, commit }, data) {
    commit('SET_FILTER_PROVIDER_ACTIVE', data);
    dispatch('fetchProviderActive');
  },
  setFilterProvider({ commit }, filter) {
    commit('SET_FILTER_PROVIDER_ACTIVE', filter);
  },
  setProvidersActive({ commit }, list) {
    commit('SET_DATA_PROVIDERS_ACTIVE', list);
  },
  setSelectedProvider({ commit }, provider) {
    commit('SET_SELECTED_PROVIDER', provider);
  },
  setSelectedParam({ commit }, param) {
    commit('SET_SELECTED_PARAM', param);
  },
  setDataCardVariant({ commit }, data) {
    commit('SET_DATA_CARD_VARIANT', data);
  },
  setModalConfirmation({ commit }, isShow) {
    commit('SET_MODAL_CONFIRMATION', isShow);
  },
  setModalBlackList({ commit }, isShow) {
    commit('SET_MODAL_BLACKLIST', isShow);
  },
  setModalOrderTimeout({ commit }, isShow) {
    commit('SET_MODAL_ORDER_TIMEOUT', isShow);
  },
  applyFilterGroup({ dispatch, commit }, providerUid) {
    commit('SET_FILTER_GROUP', providerUid);
    dispatch('fetchGroup');
  },
  async fetchProviderCategory({ commit, state }) {
    commit('SET_LOADING_PROVIDER_CATEGORY', true);
    try {
      const MasterServices = new MasterService(this);
      const fetchProviderCategory = await MasterServices.getProviderCategory(
        state.filterProviderCategory
      );
      if (fetchProviderCategory.data) {
        const { data } = fetchProviderCategory.data;
        commit('SET_DATA_PROVIDER_CATEGORY', data);
      } else {
        throw new Error(fetchProviderCategory);
      }
    } catch (err) {
      console.log(err);
    }
    commit('SET_LOADING_PROVIDER_CATEGORY', false);
  },
  async fetchProvider({ commit, state }, providerSlug) {
    commit('SET_LOADING_PROVIDER', true);
    commit('SET_LOADING_PROVIDER_ACTIVE', true);
    try {
      const MasterServices = new MasterService(this);
      const fetchProviderList = await MasterServices.getProvider(
        state.filterProvider
      );
      if (fetchProviderList.data) {
        const { data } = fetchProviderList.data;
        const providers = data.filter((provider) => {
          const excludeProviders = ['vidio', 'sekurban'];
          return !excludeProviders.includes(provider.slug);
        });
        const sekurban = data.find((provider) => {
          return provider.slug === 'sekurban';
        });
        commit('SET_DATA_PROVIDERS', providers);
        commit('SET_DATA_PROVIDER_SEKURBAN', sekurban);
        commit('SET_DATA_PROVIDERS_ACTIVE', providers);
        if (providerSlug) {
          const selectedProvider = data.find((provider) => {
            return provider.slug === providerSlug;
          });
          commit('SET_SELECTED_PROVIDER', selectedProvider);
          commit('SET_INITIAL_PROVIDER_UID', selectedProvider.uid);

          const selectedPackage = selectedProvider.variants.find((packet) => {
            return packet.uid === state.selectedParam.variantUid;
          });
          const dataCardVariant = {
            ...state.dataCardVariant,
            isPo: selectedPackage.isPo,
            isHost: selectedPackage.isHost,
          };
          commit('SET_DATA_CARD_VARIANT', dataCardVariant);
        }
      } else {
        throw new Error(fetchProviderList);
      }
    } catch (err) {
      console.log(err);
    }
    commit('SET_LOADING_PROVIDER', false);
    commit('SET_LOADING_PROVIDER_ACTIVE', false);
  },
  async fetchProviderActive({ commit, state }) {
    commit('SET_LOADING_PROVIDER_ACTIVE', true);
    try {
      const MasterServices = new MasterService(this);
      const fetchProviderList = await MasterServices.getProvider(
        state.filterProviderActive
      );
      if (fetchProviderList.data) {
        const { data } = fetchProviderList.data;
        const providers = data.filter((provider) => {
          return provider.slug !== 'vidio';
        });
        commit('SET_DATA_PROVIDERS_ACTIVE', providers);
      } else {
        throw new Error(fetchProviderList);
      }
    } catch (err) {
      console.log(err);
    }
    commit('SET_LOADING_PROVIDER_ACTIVE', false);
  },
  async fetchGroup({ commit, state, dispatch }) {
    commit('SET_LOADING_GROUP', true);
    if (state.dataProvider.list.length === 0) {
      while (state.dataProvider.list.length === 0) {
        await dispatch('delay', 100);
      }
    }
    try {
      const MasterServices = new MasterService(this);
      const fetchGroupList = await MasterServices.getAccountGroups(
        state.filterGroup
      );
      if (fetchGroupList.data) {
        const { data } = fetchGroupList.data;
        commit('SET_DATA_GROUPS', data);
      } else {
        throw new Error(fetchGroupList);
      }
    } catch (err) {
      console.log(err);
    }
    commit('SET_LOADING_GROUP', false);
  },
  delay({ state }, time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  },
  async fetchListVariant({ commit, state }, packageUid) {
    commit('SET_LOADING_LIST_VARIANT', true);
    try {
      const MasterServices = new MasterService(this);
      const fetchVariantList = await MasterServices.getVariantByPackageUid(
        packageUid
      );
      if (fetchVariantList.data) {
        const { data } = fetchVariantList.data;
        const activeVariants = data.filter((variant) => {
          return variant.active === true;
        });
        commit('SET_DATA_LIST_VARIANT', activeVariants);
        const selectedVariant = state.dataListVariant.list.find((variant) => {
          return variant.uid == state.selectedParam.variantUid;
        });
        const totalRupiah = currencyFormat(selectedVariant.grandTotal);
        const dataCard = {
          ...state.dataCardVariant,
          providerSlug: state.selectedParam.providerSlug,
          packageName: `${selectedVariant.providerName} - ${selectedVariant.packageName}`,
          packageDetail: `${
            selectedVariant.duration === 12
              ? `${totalRupiah} / 1 tahun`
              : `${totalRupiah} / ${selectedVariant.duration} bulan`
          }`,
          grandTotal: selectedVariant.grandTotal,
          totalMonth: selectedVariant.duration,
          buttonText: `${
            selectedVariant.duration === 12
              ? `1 tahun (${totalRupiah})`
              : `${selectedVariant.duration} bulan (${totalRupiah})`
          }`,
        };
        commit('SET_DATA_CARD_VARIANT', dataCard);
      } else {
        throw new Error(fetchVariantList);
      }
    } catch (err) {
      console.log(err);
    }
    commit('SET_LOADING_LIST_VARIANT', false);
  },
  async createOrder({ commit, dispatch }, params) {
    commit('SET_LOADING_CREATE_ORDER', true);
    try {
      const OrderServices = new OrderService(this);
      const fetchCreateOrder = await OrderServices.createOrder(params);
      if (fetchCreateOrder.data) {
        const dataResult = fetchCreateOrder.data.data;
        params = {
          ...params,
          customerUid: dataResult.customerUid,
          orderUid: dataResult.orderUid,
          type: dataResult.provider.type,
          redirectUrl: dataResult.redirectUrl,
        };
        localStorage.setItem(
          'swo',
          JSON.stringify({ ...dataResult, createdAt: moment().unix() })
        );
        dispatch('redirectPage', params);
      } else {
        throw new Error(fetchCreateOrder);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data.message.includes('blocked customer')
      ) {
        commit('SET_MODAL_CONFIRMATION', false);
        commit('SET_MODAL_BLACKLIST', true);
      }
      if (error.message.includes('20000ms')) {
        const dataHelpOrder = {
          package: state.dataCardVariant.packageName,
          fullName: params.name,
          email: params.email,
          phoneNumber: params.phoneNumber,
        };
        commit('SET_DATA_HELPER_ORDER', dataHelpOrder);
        commit('SET_MODAL_ORDER_TIMEOUT', true);
        commit('SET_MODAL_CONFIRMATION', false);
      }
      console.log(error);
    }
    commit('SET_LOADING_CREATE_ORDER', false);
  },
  redirectPage({ dispatch }, param) {
    if (!param.userhost && !param.ispreorder) {
      window.location.href = param.redirectUrl;
    } else {
      let urlPath = param.userhost
        ? 'thankyou/user-host'
        : 'thankyou/pre-order';
      this.$router.push({
        path: urlPath,
        query: {
          type: param.type,
          order_uid: param.orderUid,
          customer_uid: param.customerUid,
        },
      });
      localStorage.removeItem('swo');
    }
  },
  async getDetailOrder({ commit, dispatch }, orderUid, customerUid) {
    commit('SET_LOADING_DETAIL_ORDER', true);
    try {
      const OrderServices = new OrderService(this);
      const fetchDetailOrder = await OrderServices.getDetailOrder(
        orderUid,
        customerUid
      );
      if (fetchDetailOrder.data) {
        const detailOrder = fetchDetailOrder.data.data;
        commit('SET_DETAIL_ORDER', detailOrder);

        if (detailOrder.provider.package.isHost) {
          dispatch('setUserHostProcedure', detailOrder);
        }
      } else {
        throw new Error(fetchDetailOrder);
      }
    } catch (error) {
      if (error.response?.status == 404) {
        this.$refs.snackbar.showSnackbar({
          message: `Order Anda Tidak Ditemukan / Sudah Terbayarkan `,
          className: '',
          color: 'bg-red-400',
          duration: 4000,
        });
        setTimeout(
          function () {
            this.$router.push('/');
          }.bind(this),
          4000
        );
      }
      console.log(error);
    }
    commit('SET_LOADING_DETAIL_ORDER', false);
  },
  resetConfirmation({ commit }) {
    commit('SET_WAITING_LIST_STATUS', 0);
    commit('SET_WAITING_LIST_LOADING', true);
  },
  async updateOrderNotes({ commit }, payload) {
    commit('SET_WAITING_LIST_LOADING', true);
    try {
      const OrderServices = new OrderService(this);
      const fetchUpdateNotes = await OrderServices.updateOrderNotes(payload);
      if (fetchUpdateNotes.data) {
        commit('SET_WAITING_LIST_STATUS', 1);
      } else {
        throw new Error(fetchUpdateNotes);
      }
    } catch (error) {
      if (error.response?.status == 422 || error.response?.status == 403) {
        commit('SET_WAITING_LIST_STATUS', 2);
      }
    }
    commit('SET_WAITING_LIST_LOADING', false);
  },
  setUserHostProcedure({ commit }, detailOrder) {
    const procedure = userHostProviders.find((provider) => {
      return provider.slug === detailOrder.provider.slug;
    });
    commit('SET_USERHOST_PROCEDURE', procedure);
  },
};

export default { state, getters, mutations, actions };
