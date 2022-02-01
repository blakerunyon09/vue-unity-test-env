<template>
  <div v-if="item.type === 'folder'" class="menu-item folder" @click="handleFolderClick" >
    {{item.label}}
  </div>
  <div v-else-if="problem" class="problem-container">
    <div class="menu-item problem" @click="handleProblemClick" >
      {{this.index + 1}}. {{problem.displayTitle}}
    </div>
    <div class="problem-text-wrapper">
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
    props: ['item', 'index'],
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
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    border-bottom: 1px solid white;
  }

  .menu-item:hover {
    background-color: #EBF1FD;
    color: #81C506;
  }

  .folder {
    background-color: #CAD3E5;
    text-transform: uppercase;
  }

  .problem-container {
    border-top: 1px solid #CAD3E5;
  }

  .problem {
    background-color: white;
    text-transform: capitalize;
  }

  .problem-text-wrapper {
    background-color: white;
  }

  .problem-text {
    height: 0;
    overflow: hidden;
  }

  .active {
    height: 100%;
    padding: 20px;
  }

</style>
