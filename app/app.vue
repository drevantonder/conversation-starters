<template>
  <Head>
    <Meta name="theme-color" media="(prefers-color-scheme: light)" content="#f8fafc" />
    <Meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0f172b" />
  </Head>
  
  <Body class="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white" />

  <div class="min-h-screen grid grid-rows-[auto_1fr_auto]">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    
    <h1 class="text-lg font-bold text-center py-4">Conversation<span class="text-violet-500">Starters</span></h1>

    <NuxtPage />

    <footer class="invisible">
      © {{ new Date().getFullYear() }} André van Tonder
    </footer>
  </div>
</template>
