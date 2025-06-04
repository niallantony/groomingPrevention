<div class="bubble with-tail jua">
  <slot />
</div>

<style>
  .jua {
    font-family: "Jua", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  .bubble {
    font-size: 8em;
    position: relative;
    padding: 1rem 1.25rem;
    background: white;
    border: 2px solid black;
    border-radius: 1rem;
    max-width: 60%;
    margin: 1rem;
  }
  .with-tail::after {
    content: "";
    position: absolute;
    bottom: 0.75rem;
    left: -10px;
    width: 20px;
    height: 20px;
    background: white;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    transform: rotate(45deg);
    border-bottom-left-radius: 4px;
  }
</style>
