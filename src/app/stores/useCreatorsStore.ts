import type { Creator } from "~/shared/model/typesCreator";
import creators from '../data/creators.json';

export const useCreatorsStore = defineStore('creators', {
  state: () => ({
    creators: creators as Creator[]
  }),

  getters: {
    // Возвращает всех создателей
    getCreators: (state) => state.creators,

    // Возвращает создателей, отсортированных по общему количеству продаж
    getTopByTotalSales: (state) => {
      return [...state.creators].sort((a, b) => b.totalSales - a.totalSales);
    }
  },

  actions: {
    // Возвращает создателя по ID
    getCreatorById(id: number): Creator | null {
      return this.creators.find(creator => creator.id === id) || null;
    }
  }
});