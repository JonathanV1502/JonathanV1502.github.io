<h1 style="color: #ee6c4d;">
  Thinking<span class="dots"></span>
</h1>

<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: #293241;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }

  .dots {
    display: inline-block;
    width: 3ch;
    text-align: left;
  }

  .dots::after {
    content: '';
    animation: dots 1.5s steps(4, end) infinite;
  }

  @keyframes dots {
    0%, 20% {
      content: '';
    }
    40% {
      content: '.';
    }
    60% {
      content: '..';
    }
    80%, 100% {
      content: '...';
    }
  }
</style>