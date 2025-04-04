<script lang="ts">
  import { goto } from '$app/navigation';

  let title: string = "🚙🚗🚙🚗🚙🚗🚙🏍️ 教習所風 ○✖ゲーム 第２弾🚙🚗🚙🚗🚙🚗🚙🚚";

  function startGame(): void {
    goto('/quiz');
  }
</script>

<main> 
  <div class="marquee">
    <span>{title}</span>
  </div>
  <p>交通ルールを正しく学べる楽しいゲーム 第２弾です🚘</p>
  <p>〇✖2択で回答します。</p>
  <p>問題は全部で15問です。</p>
  <p>13問以上で合格です。</p>
  <button on:click={startGame}>スタート ▶</button>
</main>

<style>
  main {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    padding: 20rem;
    font-family: 'Meiryo UI', sans-serif;
  }

  :global(body) {
    background-color: #e8f5e9;
    margin: 0;
    padding: 0;
  }

  .marquee {
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    margin-bottom: 2rem;
  }

  .marquee span {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 15s linear infinite;
    font-size: 4rem;
    color: navy;
  }

  @keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
  }

  p {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  button {
    margin-top: 2rem;
    padding: 1rem 2rem;
    font-size: 1.8rem;
    background-color: #0b7d48;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #ccc90f;
    transform: scale(1.1);
    opacity: 0.8;
  }
</style>
