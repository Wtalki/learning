<template>
  <div>
    <nav
      class="py-2 px-28  bg-backgroundColor border-b border-gray-400"
    >
      <div class="px-32 flex justify-between items-center">
        <div class="flex items-center ">
        <div>
          <LoGo />
        </div>
        <div>
          <NavLink />
        </div>
      </div>
      <div class="flex items-center space-x-3">
        <ButtonItem type="login" />
        <ButtonItem type="getStarted" />
      </div>
      </div>
    </nav>
    
  </div>
</template>

<script>
import LoGo from "@/components/logo/LoGo.vue";
import ButtonItem from "@/components/button/ButtonItem.vue";
import NavLink from "@/components/navbar/navlink/NavLink.vue";
export default {
  components: { ButtonItem, LoGo, NavLink },
};
</script>

<style lang="stylus" scoped></style>
