<script setup lang="ts">
import { computed } from "vue";
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { getMessage } from "../i18n";

const { frontmatter, localeIndex } = useData();

const readingTimeMessages = computed(() => {
  return getMessage(localeIndex.value).readingTime;
});
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <div
        v-if="frontmatter.readingTime"
        style="
          color: var(--vp-c-text-2);
          font-size: 14px;
          margin-bottom: 12px;
        "
      >
        ⏱ {{ readingTimeMessages.label }}
        {{ frontmatter.readingTime.minutes }} {{ readingTimeMessages.minute }} ·
        {{ frontmatter.readingTime.words }} {{ readingTimeMessages.word }}
      </div>
    </template>
  </DefaultTheme.Layout>
</template>
