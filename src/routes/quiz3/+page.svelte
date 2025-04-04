<!-- 例：src/routes/quizX/+page.svelte -->

<script lang="ts">
    import QuizQuestion from "$lib/components/QuizQuestion.svelte";
  </script>
  
  <QuizQuestion
    questionNumber={3}
    question="危険を避けるためやむを得ない場合は、車は「立ち入り禁止部分」に入ることが出来る。"
    correctAnswer={false} 
    explanation="車はどんな場合でも立ち入り禁止部分に入っちゃダメ。たとえ回避や停車のつもりでもNGです。"
    backLink="/quiz2"
    nextLink="/quiz4"
  
  />