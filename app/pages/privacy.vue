<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Privacy Policy</h1>
    
    <div class="prose prose-gray max-w-none">
      <p class="text-lg mb-6">
        <strong>Effective Date:</strong> {{ effectiveDate }}
      </p>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">1. Information We Collect</h2>
        <p class="mb-4">
          Convo Starter collects minimal information to provide our conversation starter service:
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>Usage analytics through PostHog to understand how our app is used</li>
          <li>App interaction data to improve user experience</li>
          <li>No personal identifying information is collected or stored</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p class="mb-4">
          The limited data we collect is used solely to:
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>Improve the quality and relevance of conversation starters</li>
          <li>Analyze app performance and user engagement</li>
          <li>Identify and fix technical issues</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">3. Data Sharing</h2>
        <p class="mb-4">
          We do not sell, trade, or otherwise transfer your information to third parties, except:
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>Analytics data is processed by PostHog for usage insights</li>
          <li>When required by law or to protect our rights</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">4. Data Security</h2>
        <p class="mb-4">
          We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">5. Children's Privacy</h2>
        <p class="mb-4">
          Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">6. Changes to This Policy</h2>
        <p class="mb-4">
          We may update this privacy policy from time to time. Changes will be posted on this page with an updated effective date.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">7. Contact Us</h2>
        <p class="mb-4">
          If you have questions about this privacy policy, please contact us at:
          <a href="mailto:andre@drevan.me" class="text-blue-600 hover:text-blue-800">
            andre@drevan.me
          </a>
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
const effectiveDate = new Date('2025-06-16').toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

useSeoMeta({
  title: 'Privacy Policy - Convo Starter',
  description: 'Privacy policy for the Convo Starter app and service.'
})
</script>