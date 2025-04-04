<script lang="ts">

    import { score } from '$lib/stores/score';
    import { correctAnswers } from '$lib/stores/correctAnswers';
    import { onMount } from 'svelte';
    import { get } from 'svelte/store';
  
    let finalScore: number = 0;
    let passed: boolean  = false;
    let answerList: boolean[] = [];
    let correctCount: number = 0;
    let incorrectCount: number = 0;
  
    onMount(() => {
      finalScore = get(score); // ストアから値を取得
      answerList = get(correctAnswers);
      correctCount = answerList.filter(x => x).length;
      incorrectCount = answerList.length - correctCount;

     // 合格判定は正しい正解数で判定する！
      passed = correctCount >= 13;

      answerList = get(correctAnswers);
      correctCount = answerList.filter(x => x).length;
      incorrectCount = answerList.length - correctCount;

     // 少しだけ遅らせてリセット
    setTimeout(() => {
      score.set(0);
      correctAnswers.set([]);
    }, 100); // 0.1秒後
   });
  
  </script>
  
  <main>
  
    <h1>結果発表</h1>
    <p>あなたの正解数：{finalScore} / 15</p>
  
    {#if passed}
      <p style="color: green; font-size: 2rem;">🎊🎊 合格おめでとうございます！素晴らしい🚙🚙</p>
    {:else}
      <p style="color: red; font-size: 2rem;"> 🧟‍♂️🧟‍♂️残念… 不合格です。もう一歩🧟‍♂️🧟‍♂️</p>
    {/if}

    <h2>正解数：{correctCount}</h2>
    <h2>不正解数：{incorrectCount}</h2>

    <h2 style="margin-top: 2rem;">正誤一覧</h2>
    <ul style="list-style: none; padding: 0;">
    {#each answerList as isCorrect, i}
    <li>第{i + 1}問：{isCorrect ? '⭕ 正解' : '❌ 不正解'}</li>
    {/each}
</ul>
   <!-- TOPに戻るボタン -->
   <div class="nav-buttons">
   <a href="/" class="nav-button">🏠 TOPに戻る</a>
 </div>


  </main>
  
  <style>
  
    main {
      font-size: larger;
      text-align: center;
      padding: 4rem;
      font-family: 'Meiryo UI', sans-serif;
    }
    .nav-buttons {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.nav-button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #0288d1;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: #0277bd;
}

  
  </style>
  
  