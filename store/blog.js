export const state = () => ({
  activeCategory: {
    uid: '',
    name: 'Semua',
  },
  categoryList: [],
  allCategory: {
    uid: '',
    name: 'Semua',
  },
});

export const getters = {
  getActiveCategory(state) {
    return state.activeCategory;
  },
  getCategoryList(state) {
    return state.categoryList;
  },
};

export const mutations = {
  SET_ACTIVE_CATEGORY(state, category) {
    state.activeCategory = category;
  },
  SET_CATEGORY_LIST(state, category) {
    state.categoryList = [state.allCategory, ...category];
  },
};

export const actions = {
  resetActiveCategory({ commit, state }) {
    commit('SET_ACTIVE_CATEGORY', state.allCategory);
  },
  setActiveCategory({ commit }, category) {
    commit('SET_ACTIVE_CATEGORY', category);
  },
  setCategoryList({ commit, state }, { data, categoryUid }) {
    let activeCategory = state.activeCategory;
    if (categoryUid) {
      activeCategory = data.find((item) => item.uid === categoryUid);
    }
    commit('SET_CATEGORY_LIST', data);
    commit('SET_ACTIVE_CATEGORY', activeCategory);
  },
};
