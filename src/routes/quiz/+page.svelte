<script lang="ts">
  import Icon from "@iconify/svelte";
  import SentMessage from "./sentMessage.svelte";
  import ReceivedMessage from "./receivedMessage.svelte";
  import { quiz } from "$lib/quizNodes";
  import { slide, fade } from "svelte/transition";
  import { onMount } from "svelte";

  let currentId = $state(0);

  let lastAnswer = $state("");
  let currentNode = $derived(quiz[currentId]);

  let showSent = $state(false);
  let showReceived = $state(false);
  let showOptions = $state(false);

  onMount(() => {
    setTimeout(() => {
      showReceived = true;
    }, 600);

    setTimeout(() => {
      showOptions = true;
    }, 1200);
  });
  const selectAnswer = (text: string, next: number): void => {
    lastAnswer = text;
    showSent = showReceived = showOptions = false;

    showSent = true;

    setTimeout(() => {
      currentId = next;
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

      {#if showReceived}
        <div in:slide>
          <ReceivedMessage>{currentNode.text}</ReceivedMessage>
        </div>
      {/if}
      {#if showOptions && currentNode.options}
        <div in:fade class="choice-box">
          {@render choice(
            "A",
            currentNode.options[0].label,
            currentNode.options[0].next,
          )}
          {@render choice(
            "B",
            currentNode.options[1].label,
            currentNode.options[1].next,
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

{#snippet choice(label: string, choice: string, next: number)}
  <button class="choice" onclick={() => selectAnswer(choice, next)}>
    {choice}
    <div class="choice-label">{label}</div>
  </button>
{/snippet}

<style>
  :global(body) {
    margin: 0;
  }
  .sent-message {
    width: 100%;
    display: flex;
    justify-content: flex-end;
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
      font-size: 1rem;
    }
  }
</style>
