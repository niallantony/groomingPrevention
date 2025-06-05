<script>
  import Icon from "@iconify/svelte";
</script>

<div class="splash-screen">
  <div class="header">
    <h1 class="first bubble with-tail jua">온라인</h1>
    <h1 class="second bubble with-tail jua">그루밍예방</h1>
    <div class="icon">
      <Icon width="88px" icon="wpf:speech-bubble" />
    </div>
    <h1 class="third bubble with-tail jua">퀴즈</h1>
  </div>
  <a href="/start" class="jua">시작하기</a>
</div>

<style>
  :global(:root, html, body) {
    margin: 0;
    overflow: hidden;
    max-width: 100dvw;
    max-height: 100dvh;
  }
  .jua {
    font-family: "Jua", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  a {
    padding: 1rem;
    border: 3px solid black;
    border-radius: 2rem;
    font-size: 3rem;
    color: black;
    background-color: #abdbe3;
    box-shadow: 0 6px black;
    text-decoration: none;
  }

  a:active {
    transform: translateY(6px);
    box-shadow: none;
  }

  a:hover {
    background-color: white;
  }

  .splash-screen {
    height: 100dvh;
    background-color: #ffdd2d;
    max-width: 100dvw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem 0;
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
    min-width: fit-content;
    white-space: nowrap;
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
    .icon {
      position: absolute;
      z-index: 20;
      transform: translate(18rem, -3rem);
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
    .icon {
      position: absolute;
      z-index: 20;
      transform: translate(8.5rem, -2rem);
    }

    .first {
      transform: translateX(2rem);
      z-index: 10;
    }

    .second {
      transform: translate(-2.5rem, -2.5rem);
      z-index: 5;
    }

    .third {
      transform: translate(7.5rem, -6.5rem);
      z-index: 10;
    }
  }
</style>
