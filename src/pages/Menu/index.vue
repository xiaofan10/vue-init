<template>
  <div>
    <Menu
      :default-active="defaultActive"
      class="menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
        <m-item v-for="(item, i) in MENU_LIST" :key="item.path" :item="item" :index="i + 1" />
    </Menu>
  </div>
</template>

<script>
  import {
    Menu,
    MenuItem,
    MenuItemGroup,
    Submenu,
  } from "element-ui";
  import {MENU_LIST} from '../../cons/navCons'
  import MItem from './menuItem'

  export default {
    props: {
      defaultActive: {}
    },
    components: {
      Menu,
      MenuItem,
      MenuItemGroup,
      Submenu,
      MItem,
    },
    data() {
      return {
        MENU_LIST,
      }
    },
    mounted() {
      console.log(MENU_LIST)
    }
  }
</script>