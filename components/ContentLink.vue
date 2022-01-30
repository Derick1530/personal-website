<template>
  <nuxt-link :to="content.link" class="flex items-center py-2 sm:py-3 border-t border-b border-transparent hover:border-gray-300">
    <p class="mb-0 flex items-start flex-col lg:flex-row">
      <span>
        <span class="mr-1">{{ content.year }}</span>
        <code class="mr-2">{{ content.type }}</code>
      </span>
      <span>{{ content.title }}</span>
    </p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>
