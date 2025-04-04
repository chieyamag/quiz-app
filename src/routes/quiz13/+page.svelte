<!-- 例：src/routes/quizX/+page.svelte -->
<script lang="ts">
    import QuizQuestion from "$lib/components/QuizQuestion.svelte";
  </script>
  
  <QuizQuestion
    questionNumber={13}
    question="車は、大勢乗車した状態で停止しようとするとき、空走距離が長くなる。"
    correctAnswer={false} 
    explanation=" 🚗 「空走距離が長くなる」は ×！<br>空走距離はドライバーの反応時間で決まるので、重さや人数は関係ありません。<br>重さで伸びるのは「制動距離」＝ブレーキをかけてから止まるまでの距離！"
    backLink="/quiz12"
    nextLink="/quiz14"

  />