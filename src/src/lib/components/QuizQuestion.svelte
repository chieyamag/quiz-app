<script lang="ts">
    import { score } from '$lib/stores/score';
    import { correctAnswers } from '$lib/stores/correctAnswers';
    import { get } from 'svelte/store';
    import confetti from 'canvas-confetti';
  
    export let question: string = '';
    export let questionNumber: number = 1;
    export let correctAnswer: boolean = true;
    export let explanation: string = '';
    export let backLink: string = '/';
    export let nextLink: string = '/';
    export let imageUrl: string = '';
  
    let isAnswered: boolean = false;
    let isCorrect: boolean = false;
    let showFlash = false;
    let showShake = false;
  
    function checkAnswer(answer: boolean): void {
      if (isAnswered) return;
  
      isAnswered = true;
      isCorrect = answer === correctAnswer;
  
      const currentList = get(correctAnswers);
  
      if (currentList.length < questionNumber) {
        correctAnswers.set([...currentList, isCorrect]);
  
        if (isCorrect) {
          score.update(n => n + 1);
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } else {
          showFlash = true;
          showShake = true;
          setTimeout(() => {
            showFlash = false;
            showShake = false;
          }, 800);
        }
      }
    }
  </script>
  
  <main class:flash={showFlash} class:shake={showShake}>
    <h2>第{questionNumber}問</h2>
    <p class="question">{@html question}</p>
  
    {#if imageUrl}
      <img src={imageUrl} alt="問題画像" class="quiz-image" />
    {/if}
  
    <div class="answer-buttons">
      <button class="maru" on:click={() => checkAnswer(true)}>〇</button>
      <button class="batsu" on:click={() => checkAnswer(false)}>✖</button>
    </div>
  
    {#if isAnswered}
      <p class="result">{isCorrect ? '正解！🎉' : '不正解 💀'}</p>
      <p class="explanation">{@html explanation}</p>
  
      <div class="nav-buttons">
        <a href={backLink} class="nav-button">◀ 前へ</a>
        <a href={nextLink} class="nav-button">次へ ▶</a>
      </div>
    {/if}
  </main>
  
  <style>
    main {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 2rem;
      min-height: 100vh;
      font-family: 'Meiryo UI', sans-serif;
      background-color: rgba(134, 238, 113, 0.217); /* 🔴 ここを追加！ */
    }
  
    h2 {
      font-size: 3rem;
      color: #4007e9;
      margin-bottom: 1.5rem;
    }
  
    .question {
      color: #0808eb;
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  
    .quiz-image {
      width: 250px;
      height: auto;
      margin-top: 1rem;
      border-radius: 8px;
      object-fit: contain;
    }
  
    .answer-buttons {
      display: flex;
      gap: 10rem;
      margin-top: 2rem;
      margin-bottom: 5rem;
    }
  
    .answer-buttons button {
      font-size: 3rem;
      width: 150px;
      height: 100px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s, background-color 0.3s;
    }
  
    .answer-buttons button:hover {
      transform: scale(1.1);
      opacity: 0.8;
    }
  
    .maru {
      background-color: #8754d4;
      color: white;
    }
  
    .maru:hover {
      background-color: #43a047;
    }
  
    .batsu {
      background-color: #8754d4;
      color: white;
    }
  
    .batsu:hover {
      background-color: #e53935;
    }
  
    .result {
      font-size: 4rem;
      margin: 1rem 0;
    }
  
    .explanation {
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
  
    .nav-buttons {
      display: flex;
      justify-content: center;
      gap: 5rem;
      margin-top: 2rem;
    }
  
    .nav-button {
      font-size: 2rem;
      padding: 1rem 3rem;
      background-color: #0288d1;
      color: white;
      border-radius: 8px;
      text-decoration: none;
      transition: background-color 0.3s;
    }
  
    .nav-button:hover {
      background-color: #ccc90f;
      transform: scale(1.1);
      opacity: 0.8;
    }
  
    /* 赤フラッシュ */
    .flash {
      animation: flashRed 1s ease-in-out;
      background-color: #ff444478 !important; /* ← 強制的に背景赤に！ */
    }
  
    @keyframes flashRed {
      0%   { background-color: #ffcccc; }
      50%  { background-color: #ff4444; }
      100% { background-color: transparent; }
    }
  
    /* 揺れる */
    .shake {
      animation: shakeAnim 0.8s ease-in-out;
    }
  
    @keyframes shakeAnim {
      0% { transform: translateX(0); }
      20% { transform: translateX(-10px); }
      40% { transform: translateX(10px); }
      60% { transform: translateX(-8px); }
      80% { transform: translateX(8px); }
      100% { transform: translateX(0); }
    }
  </style>
  