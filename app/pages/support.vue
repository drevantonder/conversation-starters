<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Support</h1>
    
    <div class="prose prose-gray max-w-none">
      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">Get Help</h2>
        <p class="mb-4">
          Need assistance with Convo Starter? We're here to help! Here are the ways you can get support:
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">Contact Us</h2>
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <p class="mb-4">
            <strong>Email Support:</strong>
            <a href="mailto:andre@drevan.me" class="text-blue-600 hover:text-blue-800 ml-2">
              andre@drevan.me
            </a>
          </p>
          <p class="text-sm text-gray-600">
            We typically respond within 24-48 hours during business days.
          </p>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        
        <div class="space-y-6">
          <div class="border-l-4 border-blue-500 pl-4">
            <h3 class="font-semibold mb-2">How does Convo Starter work?</h3>
            <p class="text-gray-700">
              Convo Starter generates conversation starters using AI to help break the ice in social situations. 
              The app provides fresh conversation topics that are updated regularly.
            </p>
          </div>

          <div class="border-l-4 border-blue-500 pl-4">
            <h3 class="font-semibold mb-2">Is my data safe?</h3>
            <p class="text-gray-700">
              Yes! We collect minimal analytics data and do not store any personal information. 
              See our <NuxtLink to="/privacy" class="text-blue-600 hover:text-blue-800">Privacy Policy</NuxtLink> for details.
            </p>
          </div>

          <div class="border-l-4 border-blue-500 pl-4">
            <h3 class="font-semibold mb-2">How often are conversation starters updated?</h3>
            <p class="text-gray-700">
              New conversation starters are generated automatically every hour to keep the content fresh and engaging.
            </p>
          </div>

          <div class="border-l-4 border-blue-500 pl-4">
            <h3 class="font-semibold mb-2">The app isn't working properly. What should I do?</h3>
            <p class="text-gray-700">
              Try closing and reopening the app first. If issues persist, please contact us at 
              <a href="mailto:andre@drevan.me" class="text-blue-600 hover:text-blue-800">
                andre@drevan.me
              </a> 
              with details about the problem.
            </p>
          </div>

          <div class="border-l-4 border-blue-500 pl-4">
            <h3 class="font-semibold mb-2">Can I suggest new features?</h3>
            <p class="text-gray-700">
              Absolutely! We love hearing from our users. Send your feature requests and feedback to our support email.
            </p>
          </div>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">App Information</h2>
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <p class="mb-2"><strong>App Name:</strong> Convo Starter</p>
          <p class="mb-2"><strong>Platform:</strong> iOS</p>
          <p class="mb-2"><strong>Service:</strong> AI-powered conversation starters</p>
          <p><strong>Website:</strong> <a href="https://convo-starters.drevan.me" class="text-blue-600 hover:text-blue-800">convo-starters.drevan.me</a></p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Support - Convo Starter',
  description: 'Get help and support for the Convo Starter app. Contact us for assistance.',
})
</script>