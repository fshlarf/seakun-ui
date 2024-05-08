<template>
  <div>
    <div class="mt-6">
      <header class="flex justify-between items-center">
        <p class="text-base font-bold text-gray-secondary">Top 5 Artikel</p>
        <div class="flex items-center gap-1">
          <p class="text-primary text-xs">See all</p>
          <img
            src="/images/icons/atoms/arrow-green.svg"
            alt="see all"
            class="w-4 h-4"
          />
        </div>
      </header>
      <div class="space-y-3 mt-3">
        <section v-for="(article, id) in topArticle" :key="id">
          <div class="flex items-center gap-2">
            <img src="" alt="" class="w-[62px] h-[62px] rounded" />
            <div>
              <div
                class="text-primary bg-[#08A081]/10 rounded-[10px] h-[18px] w-max px-2 flex items-center justify-center font-semibold text-[10px]"
              >
                <p>{{ article.type }}</p>
              </div>
              <p class="mt-2 text-xs text-gray-secondary font-medium">
                {{ article.title }}
              </p>
              <p class="mt-[2px] text-[#66738F] text-[12px]">
                {{ article.date }}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topArticle: [
        {
          type: 'Produktivitas',
          title: 'Dropbox review: Still the best at syncing and sharing',
          date: '12 Januari 2024',
        },
        {
          type: 'Produktivitas',
          title: 'A Guide to Microsoft 365 | Productivity Software',
          date: '12 Januari 2024',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
