<template>
  <div>
    <nav class="p-4">
      <!-- Desktop  -->
      <ul :class="navClass">
        <li v-for="link in navLinks" :key="link.id" :class="relativeGroup">
          <!-- Top-level nav link -->
          <router-link v-if="!link.items" :to="link.link" :class="thbt">
            {{ link.title }}
          </router-link>

          <!-- Dropdown if the link has items (sub-links) -->
          <div v-else >
            <span :class="thbc">
              {{ link.title }}
            </span>
            <!-- Dropdown menu -->
            <ul :class="absoluteClass">
              <li
                v-for="subLink in link.items"
                :key="subLink.id"
                :class="hoverClass"
              >
                <router-link :to="subLink.link" :class="textHover">
                  {{ subLink.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
    
  </div>
</template>

<script>
import { navLinks } from "@/constants/index";
import { desktopNav,mobileNav } from "@/constants/styles";

export default {
  name: "NavLink",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      navLinks,
      desktopNav,
      mobileNav,
    };
  },
  computed: {
    navClass() {
      switch (this.type) {
        case "desktop":
          return this.desktopNav.navClass;
        case "mobile":
          return this.mobileNav.navClass;
        default:
          return "nav";
      }
    },
    relativeGroup() {
      switch (this.type) {
        case "desktop":
          return this.desktopNav.relativeGroup;
        case "mobile":
          return this.mobileNav.relativeGroup;
        default:
          return "nav";
      }
    },
    thbt() {
      switch (this.type) {
        case "desktop":
          return this.desktopNav.thbt;
        case "mobile":
          return this.mobileNav.thbt;
        default:
          return "nav";
      }
    },
    thbc() {
      switch (this.type) {
        case "desktop":
          return this.desktopNav.thbc;
        case "mobile":
          return this.mobileNav.thbc;
        default:
          return "nav";
      }
    },
    absoluteClass() {
      switch (this.type) {
        case "desktop":
          return this.desktopNav.absoluteClass;
        case "mobile":
          return this.mobileNav.absoluteClass;
        default:
          return "nav";
      }
    },
    hoverClass() {
      switch (this.type) {
        case "desktop":
          return this.desktopNav.hoverClass;
        case "mobile":
          return this.mobileNav.hoverClass;
        default:
          return "nav";
      }
    },
    textHover() {
      switch (this.type) {
        case "desktop":
          return this.desktopNav.textHover;
        case "mobile":
          return this.mobileNav.textHover;
        default:
          return "nav";
      }
    },
  },
};
</script>

<style lang="stylus" scoped></style>
