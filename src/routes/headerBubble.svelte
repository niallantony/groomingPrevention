<h1 class="bubble with-tail jua">
  <slot />
</h1>

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
    border: 6px solid black;
    border-radius: 3rem;
    max-width: 60%;
    margin: 1rem;
    width: fit-content;
    height: fit-content;
  }
  .with-tail::after {
    content: "";
    position: absolute;
    bottom: -17px;
    left: 50%;
    width: 20px;
    height: 20px;
    background: white;
    border-left: 6px solid black;
    border-bottom: 6px solid black;
    transform: rotate(-45deg);
    border-bottom-left-radius: 4px;
  }
</style>
