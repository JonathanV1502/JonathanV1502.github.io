<main>
  <div class="testing">
    testing<span class="dots">
      <span class="dot">.</span>
      <span class="dot">.</span>
      <span class="dot">.</span>
    </span>
  </div>
</main>

<style>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  .testing {
    font-size: 3rem;
    font-weight: 300;
  }

  .dots {
    display: inline-block;
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

  @keyframes fade {
    0%, 60%, 100% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
  }
</style>
