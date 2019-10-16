import { store as createStore, module as sinaiModule, Getters, Mutations, Actions, install } from 'sinai'
import Vue from 'vue'
import axios from "axios";
import { Cover } from '@models';

Vue.use(install)

const api = axios.create({
    baseURL: process.env.VUE_APP_API_ROOT
});

class GlobalState {
    covers: Cover[] = [];
    galleryCount = 0
    page = 0;
    topBoxContent = ""
}

class GlobalGetters extends Getters<GlobalState>() {
}

class GlobalMutations extends Mutations<GlobalState>() {

    page(value: number) {
        this.state.page = value;
    }

    covers(values: Cover[]) {
        this.state.covers = values;
    }

    galleryCount(value: number) {
        this.state.galleryCount = value;
    }

    setTopBoxContent(value: string) {
        this.state.topBoxContent = value;
    }
}

class GlobalActions extends Actions<GlobalState, GlobalGetters, GlobalMutations>() {

    async getCovers(page: number) {
        if (page < 0) return;
        this.mutations.covers([]);
        const resp = await api.post("covers", {
            limit: 9,
            offset: 9 * page
        })
        this.mutations.covers(resp.data);
        this.mutations.page(page);
    }

    async countGalleries() {
        const resp = await api.post("countGalleries");
        this.mutations.galleryCount(resp.data.count);
    }

    async downloadGallery(url: string) {
        const resp = await api.post("downloadGallery", { url });
        return true;
    }
}

const global = sinaiModule({
    state: GlobalState,
    getters: GlobalGetters,
    mutations: GlobalMutations,
    actions: GlobalActions
})

const store = createStore(global, {
    strict: process.env.NODE_ENV !== 'production'
})

declare module 'vue/types/vue' {
    interface Vue {
        $store: typeof store
    }
}

export default store