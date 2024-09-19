<template>
  <div>
    <nav class="p-4">
      <ul class="flex space-x-8">
        <li v-for="link in navLinks" :key="link.id" class="relative group">
          <!-- Top-level nav link -->
          <router-link
            v-if="!link.items"
            :to="link.link"
            class="text-textColor hover:text-btnColor transition"
          >
            {{ link.title }}
          </router-link>

          <!-- Dropdown if the link has items (sub-links) -->
          <div v-else class="">
            <span class="text-textColor hover:text-btnColor cursor-pointer">
              {{ link.title }}
            </span>
            <!-- Dropdown menu -->
            <ul
              class="absolute left-0 mt-2 w-40 bg-backgroundColor border border-gray-100 px-2 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <li
                v-for="subLink in link.items"
                :key="subLink.id"
                class="p-2 hover:bg-gray-500 rounded"
              >
                <router-link
                  :to="subLink.link"
                  class="block text-textColor hover:text-btnColor"
                >
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
export default {
  name: "NavLink",
  data() {
    return {
      navLinks,
    };
  },
};
</script>

<style lang="stylus" scoped></style>
