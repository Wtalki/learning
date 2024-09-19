<template>
  <div >
    <NavBar/>
  </div>
</template>

<script >
import { defineComponent } from 'vue';
import {NavBar} from '@/components';

export default defineComponent({
  name: 'HomeView',
  components : { NavBar },
});
</script>
