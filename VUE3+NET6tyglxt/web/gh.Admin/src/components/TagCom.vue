<template>
    <div class="tag-group my-2 flex flex-wrap gap-1 items-center">
      <!-- a标签href跳转页面会刷新，导致历史tag丢失，所以通过事件触发的机制来实现路由的跳转 -->
      <el-tag  class="mx-1" closable :disable-transitions="false" type=""
        effect="dark" >
        <el-link :underline="false"><span class="tagName">123</span></el-link>
      </el-tag>
    </div>
  
  </template>