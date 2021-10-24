<template>
  <Submenu
    v-if="item.children"
    index="item.path">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>{{item.meta.title}} {{index}}</span>
    </template>
    <M-item v-for="(subItem, j) in item.children" :item="subItem" :index="`${index}-${j + 1}`"></M-item>
  </Submenu>

  <Menu-item v-else :index="item.path" >
    <i class="el-icon-setting"></i>
    <span slot="title">{{item.meta.title}} {{index}}</span>
  </Menu-item>
</template>

<script>
  import {
    Menu,
    MenuItem,
    MenuItemGroup,
    Submenu,
  } from "element-ui";

  export default {
    name: 'MItem',
    props: {
      item: {},
      index: {}
    },
    components: {
      Menu,
      MenuItem,
      MenuItemGroup,
      Submenu,
    },
    computed: {
      subIndex: function () {
        return
      }
    }
  }
</script>