<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";

const { frontmatter } = useData();
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
        ⏱ 阅读时间
        {{ frontmatter.readingTime.minutes }} 分钟 ·
        {{ frontmatter.readingTime.words }} 字
      </div>
    </template>
  </DefaultTheme.Layout>
</template>
