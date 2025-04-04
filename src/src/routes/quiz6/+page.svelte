<!-- 例：src/routes/quizX/+page.svelte -->
<script lang="ts">
    import QuizQuestion from "$lib/components/QuizQuestion.svelte";
  </script>
  
  <QuizQuestion
    questionNumber={6}
    question="自動車の燃料消費量は、高速になればなるほど、多くなる。"
    correctAnswer={true} 
    explanation="燃費が一番いいのは、法定速度かそれより少し低いくらい。<br>低すぎても速すぎても燃費は悪化します。<br>迷ったらこの原則を思い出して、○×を判断しましょう！" 
    backLink="/quiz5" 
    nextLink="/quiz7"
  
  />