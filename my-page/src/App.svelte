<main class="flex items-center justify-center min-h-screen bg-zinc-900">
  <div class="text-5xl font-light text-white">
    testing<span class="inline-block">
      <span class="dot">.</span>
      <span class="dot">.</span>
      <span class="dot">.</span>
    </span>
  </div>
</main>

<style>
  @keyframes fade {
    0%, 60%, 100% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
  }

  .dot {
    animation: fade 1.4s infinite;
    opacity: 0;
  }

  .dot:nth-child(1) {
    animation-delay: 0s;
  }

  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }
</style>
