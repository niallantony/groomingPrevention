<div class="bubble with-tail">
  <slot />
</div>

<style>
  .bubble {
    font-size: 1.5em;
    position: relative;
    padding: 1rem 1.25rem;
    background: white;
    border-radius: 1rem;
    max-width: 60%;
    margin: 1rem;
    overflow: hidden;
  }
  .with-tail::after {
    content: "";
    position: absolute;
    bottom: 0.75rem;
    left: -9px;
    width: 20px;
    height: 20px;
    background: white;
    transform: rotate(45deg);
    border-bottom-left-radius: 4px;
  }
</style>
