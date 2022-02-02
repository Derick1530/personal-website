<template>
  <div class="pb-12">
    <h1 class="md:text-center text-4xl mb-3 lg:mb-6 lg:text-6xl">
      {{ output }}
    </h1>
    <p class="md:text-center text-xl lg:mb-12 lg:text-2xl">
      Click on a need to remove it from the equation.
    </p>
    <div class="flex md:block">
      <div class="text-xl flex flex-col justify-between items-center mb-6 md:flex-row lg:mb-12 lg:text-2xl">
        <template v-for="(need, index) in needs">
          <span :key="`${need}${index}`" class="border rounded cursor-pointer text-center py-3 px-2 w-full xl:py-6 hover:border-black" :class="{ 'bg-black text-black': missingNeed === need }" @click="removeNeed(need)">
            {{ need }}
          </span>
          <span v-if="index < needs.length - 1" :key="`Plus${index}`" class="py-2 px-4">+</span>
        </template>
      </div>
    </div>
    <p class="text-xs mx-auto text-gray-400 md:text-center md:w-1/2">
      Adapted from Knoster, T., Villa R., & Thousand, J. (2000). A framework for thinking about systems change. In R.villa & J. Thousand (Eds.), Restructuring for caring and effective education: Piecing the puzzle together (pp. 93-126). Baltimore: Paul H. Brookes Publishing Co.
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      missingNeed: 'None',
      needs: [
        'Vision',
        'Skills',
        'Incentives',
        'Resources',
        'Action Plan'
      ]
    }
  },
  computed: {
    output () {
      switch (this.missingNeed) {
        case 'Vision': return 'No vision creates confusion.'
        case 'Skills': return 'No skills create anxiety.'
        case 'Incentives': return 'No incentives create resistance.'
        case 'Resources': return 'No resources create frustration.'
        case 'Action Plan': return 'No action plan creates false starts.'
        default: return 'Change is created when all needs are met.'
      }
    }
  },
  mounted () {
    window.addEventListener('click', (event) => {
      if (!this.needs.includes(event.target.innerText)) {
        this.missingNeed = 'None'
      }
    })
  },
  methods: {
    removeNeed (need) {
      this.missingNeed = need
    }
  }
}
</script>
