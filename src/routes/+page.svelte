<script>
  import HeaderBubble from "./headerBubble.svelte";
</script>

<div class="splash-screen">
  <div class="header">
    <h1 class="first bubble with-tail jua">온라인</h1>
    <h1 class="second bubble with-tail jua">그루밍예방</h1>
    <h1 class="third bubble with-tail jua">퀴즈</h1>
  </div>
</div>

<style>
  .jua {
    font-family: "Jua", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  :root {
    background-color: #ffdd2d;
  }

  .splash-screen {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 5rem 1rem 0;
  }

  .header {
    position: relative;
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .bubble.second {
    color: #ffdd2d;
    -webkit-text-stroke: 3px #000;
  }

  /* Bubble base style */
  .bubble {
    position: relative;
    background: white;
    border: 6px solid black;
    border-radius: 3rem;
    width: fit-content;
    height: fit-content;
    font-family: "Jua", sans-serif;
    margin: 1rem;
  }

  /* Tail */
  .bubble::after {
    content: "";
    position: absolute;
    bottom: -18px;
    left: 50%;
    transform: translateX(-50%) rotate(-45deg);
    width: 20px;
    height: 20px;
    background: white;
    border-left: 6px solid black;
    border-bottom: 6px solid black;
    border-bottom-left-radius: 4px;
  }

  /* ============================
   DESKTOP
============================ */
  @media (min-width: 601px) {
    .bubble {
      font-size: 6rem;
      padding: 1rem 1.5rem;
    }

    .first {
      transform: translateX(5rem);
      z-index: 10;
    }

    .second {
      transform: translate(-5.5rem, -3rem);
      z-index: 5;
    }

    .third {
      transform: translate(12.5rem, -10rem);
      z-index: 10;
    }
  }

  /* ============================
   MOBILE
============================ */
  @media (max-width: 600px) {
    .bubble {
      font-size: 4rem;
      padding: 0.75rem 1rem;
      border-radius: 2rem;
    }

    .first {
      transform: translateX(2rem);
      z-index: 10;
    }

    .second {
      transform: translate(-3rem, -2.5rem);
      z-index: 5;
    }

    .third {
      transform: translate(6rem, -6.5rem);
      z-index: 10;
    }
  }
</style>
