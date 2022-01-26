<template>
  <div v-if="item.type === 'folder'" class="menu-item" @click="handleFolderClick" >
    {{item.label}}
  </div>
  <div v-else-if="problem" >
    <div class="menu-item" @click="handleProblemClick" >
      {{problem.displayTitle}}
    </div>
    <div class="problem-text" >
      {{problem.problemText}}
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { SET_MENU_POINTER } from '../../../store/types'

  export default {
    name: 'MenuItem',
    props: ['item'],
    methods: {
      handleFolderClick() {
        this.$store.commit(SET_MENU_POINTER, this.item.id)
      },
      handleProblemClick() {
        console.log('NEED TO HANDLE UNITY PROBLEM LOAD HERE')
      }
    },
    computed: {
      ...mapState({
      problems: state => state.menu.problems,
      }),
      problem: function() {
        return this.problems?.find(problem => this.item.id === problem.contentId)
      }
    }
  }

</script>

<style scoped>
  .menu-item {
    width: calc(100% - 40px);
    padding: 20px;
    background-color: #CAD3E5;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
  }

  .menu-item:hover {
    background-color: #EBF1FD;
    color: #81C506;
  }

  .problem-text {
    padding: 20px;
  }
</style>
