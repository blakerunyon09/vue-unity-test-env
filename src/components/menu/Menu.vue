<template>
  <aside v-if="menuFileStructure">
    <MenuBreadCrumb 
      v-if="checkBreadCrumb" 
      :breadcrumb="breadcrumb" 
    />
    <MenuItem 
      v-for="(item, index) in currentMenu" 
      :key="menuFileStructure[item]" 
      :item="menuFileStructure[item]" 
      :index="index" 
    />
  </aside>
</template>

<script>
  import { mapState } from 'vuex'
  import MenuItem from './MenuItem.vue'
  import MenuBreadCrumb from './MenuBreadCrumb.vue'

  export default {
    name: 'Menu',
    components: {
      MenuItem,
      MenuBreadCrumb
    },
    beforeMount() {
      this.$store.dispatch("setMenuFileStructure")
      this.$store.dispatch("setProblems")
    },
    computed: {
      ...mapState({
      menuFileStructure: state => state.menu.menuFileStructure,
      menuPointer: state => state.menu.menuPointer,
      }),
      currentMenu: function() {
        return this.menuFileStructure[this.menuPointer].children
      },
      checkBreadCrumb: function() {
        return !this.menuFileStructure[this.menuPointer].parent.includes('menu')
      },
      breadcrumb: function() {
        return this.menuFileStructure[this.menuPointer]
      }     
    }
  }

</script>

<style scoped>
  aside {
    width: 30%;
    height: 100vh;
    overflow: scroll;
    background-color: #CAD3E5;
  }
</style>
