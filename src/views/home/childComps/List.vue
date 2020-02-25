<template>
  <div class="list" v-if="list">
    <ListItem v-for="item in list" :key="item.id" :itemInfo="item"/>
  </div>
</template>

<script>
import ListItem from "./ListItem"
export default {
  name: "List",
  components: {
    ListItem
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
}
</script>
<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
