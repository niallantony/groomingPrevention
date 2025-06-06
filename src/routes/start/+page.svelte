<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { base } from "$app/paths";

  let showFirst = $state(false);
  let showSecond = $state(false);
  let showLink = $state(false);

  onMount(() => {
    showFirst = true;

    setTimeout(() => {
      showSecond = true;
    }, 1500);

    setTimeout(() => {
      showLink = true;
    }, 3000);
  });
</script>

<div class="screen">
  <div class="container">
    <div class="intro">
      {#if showFirst}
        <p class="jua" in:fade>
          오픈채팅방에서 만난 도훈오빠와 연락하게 된지 2주가 됐다. 그동안 오빠는
          나의 고민을 들어주고 친절하게 대해줬다. 오빠는 25살 이라고 했고
          군인이라고 했다. 직접 만나보지는 않았지만 듬직하고 멋진 오빠라고
          생각한다.
        </p>
      {/if}
      {#if showSecond}
        <p class="jua" in:fade>
          선생님들은 채팅이 위험하다고 했지만 나에게는 절대 일어나지 않을
          일이라고 생각한다.
        </p>
      {/if}

      {#if showLink}
        <a href={`${base}/quiz`} class="jua" in:fade> 다음 </a>
      {/if}
    </div>
  </div>
</div>

<style>
  p {
    color: white;
    font-size: 1.5rem;
  }

  a {
    margin: 3rem;
    color: white;

    font-size: 1.5rem;
  }
  a::after {
    content: " >";
  }
  .screen {
    background-color: #669bbc;
    width: 100dvw;
    height: 100dvh;
    display: flex;
    justify-content: center;
  }
  .intro {
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem;
    align-items: center;
  }
  .jua {
    font-family: "Jua", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  /* ============================
   MOBILE
============================ */
  @media (max-width: 600px) {
    .intro {
      padding: 1rem;
    }
    .container {
      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: 600px) {
    .container {
      max-width: 560px;
      max-height: 960px;
      border-radius: 24px;
    }
  }
</style>
