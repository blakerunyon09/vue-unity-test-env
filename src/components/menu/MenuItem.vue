<template>
  <div v-if="item.type === 'folder'" class="menu-item" @click="handleFolderClick" >
    {{item.label}}
  </div>
  <div v-else-if="problem" >
    <div class="menu-item" @click="handleProblemClick" >
      {{problem.displayTitle}}
    </div>
    <div v-if="isActiveProblem" class="problem-text-wrapper">
      <div class="problem-text" :class="{active: isActiveProblem}" >
        <MathText :text="problem.problemText" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex'
  import { SET_MENU_POINTER, CLEAR_PROBLEM_POINTER } from '../../../store/types'
  import MathText from '../shared/mathText.vue'

  export default {
    name: 'MenuItem',
    props: ['item'],
    components: {
      MathText
    },
    methods: {
      ...mapActions([ 'setProblemPointer' ]),
      ...mapMutations([ SET_MENU_POINTER, CLEAR_PROBLEM_POINTER ]),
      handleFolderClick() {
        this.SET_MENU_POINTER(this.item.id)
      },
      handleProblemClick() {
        if(!this.isActiveProblem) {
          this.setProblemPointer(this.problem)
        } else {
          this.CLEAR_PROBLEM_POINTER()
        }
      }
    },
    computed: {
      ...mapState({
      problems: state => state.menu.problems,
      problemPointer: state => state.menu.problemPointer,
      }),
      problem: function() {
        return this.problems?.find(problem => this.item.id === problem.contentId)
      },
      isActiveProblem: function() {
        return this.problem.contentId === this.problemPointer
      },
      problemText: function() {
        return this.problem.problemText
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
    border-bottom: 1px solid #2c3e50;
  }

  .menu-item:hover {
    background-color: #EBF1FD;
    color: #81C506;
  }

  .problem-text-wrapper {
    background-color: white;
  }

  .problem-text {
    height: 0;
    overflow: hidden
  }

  .active {
    height: 100%;
    padding: 20px;
    border-bottom: 1px solid #2c3e50;
  }

</style>
