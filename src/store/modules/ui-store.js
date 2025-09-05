const ui = {
  state: () => ({
    isHamburgerMenuOpen: false, // 햄버거 메뉴가 열려 있는지 여부
    pageName: "Over View", // 현재 페이지 이름
    modalOptions: null, // 모달 옵션
  }),
  mutations: {
    /**
     * 모바일용 햄버거 메뉴를 열거나 닫는다.
     * @param state
     */
    openHamburgerMenu(state) {
      state.isHamburgerMenuOpen = true;
    },
    closeHamburgerMenu(state) {
      state.isHamburgerMenuOpen = false;
    },

    /**
     * 현재 페이지 이름을 설정한다.
     * @param state
     * @param pageName
     */
    setPageName(state, pageName) {
      state.pageName = pageName;
    },
  },
  actions: {
    toggleHamburgerMenu({ commit, state }) {
      if (state.isHamburgerMenuOpen) {
        commit("closeHamburgerMenu");
      } else {
        commit("openHamburgerMenu");
      }
    }
  },
};
export default ui;