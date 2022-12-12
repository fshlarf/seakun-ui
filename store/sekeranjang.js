import SekeranjangService from '~/services/SekeranjangServices.js';
import moment from 'moment';

export const state = () => ({
  dataProduct: {
    list: [],
    pagination: {},
    loading: true,
  },
  filterProduct: {
    page: 1,
    limit: 10,
  },
  productUid: '',
  dataDetailProduct: {
    data: {},
    loading: true,
  },
  isAgreeTos: false,
  isProductAvailable: true,
  isLoadingCreateOrder: false,
  createdOrderUid: '',
  dataHelpOrder: {
    product: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    shippingAddress: '',
  },
  isShowModalTimeout: false,
  isShowModalBlackList: false,
  isLoadingCreateProduct: false,
  createdProductUid: '',
});

export const getters = {
  getProducts(state) {
    return state.dataProduct;
  },
  getProductUid(state) {
    return state.productUid;
  },
  getCreatedProductUid(state) {
    return state.createdProductUid;
  },
  getDetailProduct(state) {
    return state.dataDetailProduct;
  },
  getAgreeTos(state) {
    return state.isAgreeTos;
  },
  getProductAvailable(state) {
    return state.isProductAvailable;
  },
  getLoadingCreateOrder(state) {
    return state.isLoadingCreateOrder;
  },
  getDataHelpOrder(state) {
    return state.dataHelpOrder;
  },
  getShowModalTimeout(state) {
    return state.isShowModalTimeout;
  },
  getShowModalBlackList(state) {
    return state.isShowModalBlackList;
  },
  getCreatedOrderUid(state) {
    return state.createdOrderUid;
  },
  getLoadingCreateProduct(state) {
    return state.isLoadingCreateProduct;
  },
};

export const mutations = {
  SET_FILTER_PRODUCT(state, page) {
    state.filterProduct = {
      ...state.filterProduct,
      page,
    };
  },
  SET_PRODUCT_UID(state, uid) {
    state.productUid = uid;
  },
  SET_CREATED_PRODUCT_UID(state, uid) {
    state.createdProductUid = uid;
  },
  SET_LOADING_PRODUCT(state, loading) {
    state.dataProduct = {
      ...state.dataProduct,
      loading,
    };
  },
  SET_DATA_PRODUCTS(state, { data, pagination }) {
    state.dataProduct = {
      ...state.dataProduct,
      list: data,
      pagination,
    };
  },
  SET_PRODUCT_UID(state, uid) {
    state.productUid = uid;
  },
  SET_LOADING_DETAIL_PRODUCT(state, loading) {
    state.dataDetailProduct = {
      ...state.dataDetailProduct,
      loading,
    };
  },
  SET_DETAIL_PRODUCT(state, data) {
    state.dataDetailProduct = {
      ...state.dataDetailProduct,
      data,
    };
  },
  SET_AGREE_TOS(state, isAgree) {
    state.isAgreeTos = isAgree;
  },
  SET_PRODUCT_AVAILABLE(state, isAvailable) {
    state.isProductAvailable = isAvailable;
  },
  SET_LOADING_CREATE_ORDER(state, loading) {
    state.isLoadingCreateOrder = loading;
  },
  SET_DATA_HELP_ORDER(state, help) {
    state.dataHelpOrder = {
      product: help.productCode,
      fullName: help.name,
      email: help.email,
      phoneNumber: help.phone,
      address: help.address,
      shippingAddress: help.shippingAddress,
    };
  },
  SET_SHOW_MODAL_TIMEOUT(state, isShow) {
    state.isShowModalTimeout = isShow;
  },
  SET_SHOW_MODAL_BLACKLIST(state, isShow) {
    state.isShowModalBlackList = isShow;
  },
  SET_CREATED_ORDER_UID(state, uid) {
    state.createdOrderUid = uid;
  },
  SET_LOADING_CREATE_PRODUCT(state, loading) {
    state.isLoadingCreateProduct = loading;
  },
  SET_CREATED_PRODUCT_UID(state, uid) {
    state.createdProductUid = uid;
  },
};

export const actions = {
  applyFilterProduct({ dispatch, commit }, page) {
    commit('SET_FILTER_PRODUCT', page);
    dispatch('fetchProduct');
  },
  setAgreeTos({ commit }, isAgree) {
    commit('SET_AGREE_TOS', isAgree);
  },
  setProductUid({ commit }, uid) {
    commit('SET_PRODUCT_UID', uid);
  },
  setCreatedProductUid({ commit }, uid) {
    commit('SET_CREATED_PRODUCT_UID', uid);
  },
  setShowModalTimeout({ commit }, isShow) {
    commit('SET_SHOW_MODAL_TIMEOUT', isShow);
  },
  setShowModalBlacklist({ commit }, isShow) {
    commit('SET_SHOW_MODAL_BLACKLIST', isShow);
  },
  async fetchProduct({ commit, state }) {
    commit('SET_LOADING_PRODUCT', true);
    try {
      const SekeranjangServices = new SekeranjangService(this);
      const fetchProductList = await SekeranjangServices.getProducts(
        state.filterProduct
      );
      if (fetchProductList.data) {
        const { data, pagination } = fetchProductList.data;
        commit('SET_DATA_PRODUCTS', { data, pagination });
      } else {
        throw new Error(fetchProductList);
      }
    } catch (error) {
      console.log(error);
    }
    commit('SET_LOADING_PRODUCT', false);
  },
  async fetchDetailProduct({ commit, dispatch }, productUid) {
    commit('SET_AGREE_TOS', false);
    commit('SET_LOADING_DETAIL_PRODUCT', true);
    try {
      const SekeranjangServices = new SekeranjangService(this);
      const fetchProductDetail = await SekeranjangServices.getProductByUid(
        productUid
      );
      if (fetchProductDetail.data) {
        const { data } = fetchProductDetail.data;
        commit('SET_DETAIL_PRODUCT', data);
        commit('SET_AGREE_TOS', true);
        dispatch('checkProductAvailability');
      } else {
        throw new Error(fetchProductDetail);
      }
    } catch (error) {
      console.log(error);
    }
    commit('SET_LOADING_DETAIL_PRODUCT', false);
  },
  checkProductAvailability({ commit, state }) {
    if (
      state.dataDetailProduct.data.promoEndAt === 0 ||
      (state.dataDetailProduct.data.promoEndAt !== 0 &&
        moment().unix() < state.dataDetailProduct.data.promoEndAt)
    ) {
      commit('SET_PRODUCT_AVAILABLE', true);
    } else {
      commit('SET_PRODUCT_AVAILABLE', false);
    }
  },
  async createOrder({ commit, state, dispatch }, params) {
    commit('SET_LOADING_CREATE_ORDER', true);
    try {
      const SekeranjangServices = new SekeranjangService(this);
      const fetchCreateOrder = await SekeranjangServices.createOrder(params);
      if (fetchCreateOrder.data) {
        commit('SET_CREATED_ORDER_UID', fetchCreateOrder.data.data);
        dispatch('toSuccessCreateOrderPage');
      } else {
        throw new Error(fetchCreateOrder);
      }
    } catch (err) {
      if (
        err.response &&
        err.response.data.message.includes('blocked customer')
      ) {
        commit('SET_MODAL_BLACKLIST', true);
      }
      if (err.message.includes('20000ms')) {
        const dataHelper = {
          productCode: state.dataDetailProduct.data.sekeranjangCode,
          name: params.name,
          email: params.email,
          phone: params.phone,
          address: params.address,
          shippingAddress: params.shippingAddress,
        };
        commit('SET_DATA_HELP_ORDER', dataHelper);
      }
      console.log(err);
    }
    commit('SET_LOADING_CREATE_ORDER', false);
  },
  toSuccessCreateOrderPage({ state }) {
    this.$router.push(
      `/sekeranjang/order-success?product_id=${state.productUid}&order_id=${state.createdOrderUid}`
    );
  },
  async createProduct({ commit, dispatch }, payload) {
    commit('SET_LOADING_CREATE_PRODUCT', true);
    try {
      const SekeranjangServices = new SekeranjangService(this);
      const fetchCreateProduct = await SekeranjangServices.createProduct(
        payload
      );
      if (fetchCreateProduct.data) {
        const responses = fetchCreateProduct.data.data.split(',');
        commit('SET_CREATED_PRODUCT_UID', responses[0]);
        dispatch('toSuccessCreateProductPage');
      } else {
        throw new Error(fetchCreateProduct);
      }
    } catch (err) {
      console.log(err);
    }
    commit('SET_LOADING_CREATE_PRODUCT', false);
  },
  toSuccessCreateProductPage() {
    this.$router.push(this.$router.push('/sekeranjang/create-success'));
  },
};
