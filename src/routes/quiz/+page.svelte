<script lang="ts">
  import Icon from "@iconify/svelte";
  import SentMessage from "./sentMessage.svelte";
  import ReceivedMessage from "./receivedMessage.svelte";
  import { base } from "$app/paths";
  import { quiz } from "$lib/quizNodes";
  import { slide, fade } from "svelte/transition";
  import { onMount } from "svelte";

  let currentId = $state(0);

  let lastAnswer = $state("");
  let currentNode = $derived(quiz[currentId]);

  let showSent = $state(false);
  let showReceived = $state(false);
  let showOptions = $state(false);

  let totalScore = $state(10);

  onMount(() => {
    setTimeout(() => {
      showReceived = true;
    }, 600);

    setTimeout(() => {
      showOptions = true;
    }, 1200);
  });
  const selectAnswer = (text: string, next: number, score: number): void => {
    lastAnswer = text;
    currentId = next;
    showSent = showReceived = showOptions = false;

    showSent = true;

    totalScore += score;

    setTimeout(() => {
      showReceived = true;
    }, 1000);

    setTimeout(() => {
      showOptions = true;
    }, 2000);
  };
</script>

<div class="screen">
  <div class="chat-screen">
    <div class="chat-header">
      <Icon width="14px" color="#8a8a8a" icon="weui:back-filled" />
      <span class="sender">도훈오빠</span>
      <Icon width="28px" color="#8a8a8a" icon="iconamoon:search-bold" />
      <Icon
        width="28px"
        color="#8a8a8a"
        icon="iconamoon:menu-burger-horizontal-fill"
      />
    </div>
    <div class="chat-messages">
      {#if showSent && lastAnswer}
        <div class="sent-message" in:slide>
          <SentMessage>{lastAnswer}</SentMessage>
        </div>
      {/if}
      {#if currentNode.imageSent}
        <div class="sent-message image-message" in:slide>
          <SentMessage>
            <img
              width="128"
              alt="sent"
              src={`${base}${currentNode.imageSent}`}
            />
          </SentMessage>
        </div>
      {/if}

      {#if showReceived && !currentNode.terminus}
        <div in:slide>
          <ReceivedMessage>{currentNode.text}</ReceivedMessage>
        </div>

        {#if currentNode.imageReceived}
          <div class="received-image image-message" in:slide>
            <ReceivedMessage>
              <img
                width="128"
                alt="received"
                src={`${base}${currentNode.imageReceived}`}
              />
            </ReceivedMessage>
          </div>
        {/if}
      {:else if showReceived && currentNode.terminus}
        <div in:fade>
          {@render endScreen()}
        </div>
      {/if}
      {#if showOptions && currentNode.options}
        <div in:fade class="choice-box">
          {@render choice(
            "A",
            currentNode.options[0].label,
            currentNode.options[0].next,
            currentNode.options[0].score,
          )}
          {@render choice(
            "B",
            currentNode.options[1].label,
            currentNode.options[1].next,
            currentNode.options[0].score,
          )}
        </div>
      {/if}
    </div>
    <div class="chat-input">
      <div class="dummy-input">
        <Icon width="18px" icon="heroicons:hashtag-16-solid" />
        <Icon width="18px" icon="ph:smiley-sticker-bold" />
      </div>
    </div>
  </div>
</div>

{#snippet endScreen()}
  <div class="end-screen-overlay" in:fade>
    <div class="end-screen-content">
      <p class="end-text">
        {currentNode.text}
      </p>
      <span class="score">점수: {totalScore}</span>
      <a href={base}>돌아가기</a>
    </div>
  </div>
{/snippet}

{#snippet choice(label: string, choice: string, next: number, score: number)}
  <button class="choice" onclick={() => selectAnswer(choice, next, score)}>
    {choice}
    <div class="choice-label">{label}</div>
  </button>
{/snippet}

<style>
  :global(:root, html, body) {
    margin: 0;
    overflow: hidden;
    max-width: 100dvw;
    max-height: 100dvh;
  }
  .sent-message {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .image-message {
    margin-top: -26px;
    width: fit-content;
  }
  .received-image img {
    margin-right: 1rem;
  }
  .choice-box {
    display: flex;
    margin-top: auto;
  }
  .choice {
    flex: 1;
    position: relative;
    margin: 1rem;
    font-size: 1.5rem;
    padding: 1rem;
    border: 0;
    border-radius: 1rem;
    background-color: #ffeb00;
  }

  .choice:hover {
    background-color: #ffe000;
  }

  .choice-label {
    position: absolute;
    background-color: white;
    border-radius: 2rem;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-family: "Jua", sans-serif;
    font-size: 1rem;
    top: -1rem;
    left: -1rem;
  }
  .screen {
    width: 100dvw;
    height: 100dvh;
    background: #f2f2f2;
    font-family: "Helvetica Neue", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  .chat-input {
    border-top: 1px solid #ddd;
    padding: 12px 16px;
    background: #f9f9f9;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: #cce8ff;
  }
  .chat-input .dummy-input {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    background: #ffffff;
    padding: 10px 14px;
    border-radius: 20px;
    border: 1px solid #ccc;
    color: #888;
    font-size: 0.9rem;
  }

  .chat-header {
    background-color: #cce8ff;
    padding: 12px 16px;
    display: flex;
    position: relative;
    gap: 1rem;
    justify-content: flex-end;
  }

  .chat-header .sender {
    flex: 1;
    text-align: center;
    font-size: 1.5rem;
    font-family: "Jua", sans-serif;
    position: relative;
    width: 100dvw;
    transform: translateX(25px);
  }

  .chat-screen {
    border: 3px solid black;
    width: 540px;
    height: 960px;
    background: #ffffff;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .end-text {
    font-family: "Jua", sans-serif;
    font-size: 1.5rem;
  }
  .end-screen-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(30, 30, 30, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .end-screen-content {
    background: white;
    padding: 2rem;
    border-radius: 1.5rem;
    text-align: center;
    width: 80%;
    max-width: 300px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }

  .end-screen-content .score {
    font-family: "Jua", sans-serif;
    display: block;
    font-size: 2rem;
    margin-top: 1rem;
    font-weight: bold;
  }

  .end-screen-content a {
    display: inline-block;
    margin-top: 1.5rem;
    padding: 0.5rem 1rem;
    background: black;
    color: white;
    border-radius: 0.5rem;
    text-decoration: none;
    font-size: 1.5rem;
  }

  /* ============================
   MOBILE
============================ */
  @media (max-width: 600px) {
    .chat-screen {
      width: 100dvw;
      height: 100dvh;
      border: 0;
    }
    .choice {
      font-size: 1.2rem;
    }
  }
</style>
