<template>
  <div>
    <div class="back-button" @click="handleClick" >back</div>
    <div class="folder-title">{{breadcrumb.label}}</div>
  </div>
</template>

<script>
  import { SET_MENU_POINTER } from '../../../store/types'

  export default {
    name: 'MenuBreadCrumb',
    props: ['breadcrumb'],
    methods: {
      handleClick() {
        this.$store.commit(SET_MENU_POINTER, this.breadcrumb.parent)
      }
    }
  }

</script>

<style>
  .back-button {
    color: #3F475A;
    margin: 10px;
    cursor: pointer;
  }

  .folder-title {
    background-color: #3F475A;
    color: #CDD0D3;
    padding: 20px;
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: default;
  }
</style>