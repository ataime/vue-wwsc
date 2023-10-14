import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useCounterStore = defineStore('category', () => {
  const categoryList = ref([])
  const getCategory = async () => {
    const res = await getCategoryAPI();
    categoryList.value = res.result;
  }
  onMounted(()=>getCategory())
  return { categoryList, getCategory }
})
