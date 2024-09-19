<template>
  <div>
    <nav
      class="py-2 sm:px-2  bg-backgroundColor border-b border-gray-400"
    >
      <div class="px-10 xl:px-20 2xl:px-32 flex justify-between items-center">
        <div class="flex items-center">
          <div>
            <LoGo />
          </div>
          <div>
            <NavLink type="desktop"/>
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <ButtonItem type="login" />
          <ButtonItem type="getStarted" class="hidden sm:flex" />
        </div>
        <span class=" lg:hidden flex items-center">
        <i
          class="pi pi-bars text-textColor hover:text-btnColor"
          v-if="!toggle"
          @click="toggleMenu"
        />
        <i
          class="pi pi-times text-textColor hover:text-btnColor"
          v-if="toggle"
          @click="toggleMenu"
        />
        <NavLink type="mobile" class="lg:hidden" v-if="toggle"/>
      </span>
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
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleMenu() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
