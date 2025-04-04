<!-- 例：src/routes/quizX/+page.svelte -->
<script lang="ts">
  import QuizQuestion from "$lib/components/QuizQuestion.svelte"; // パスが正しいか確認
</script>

<QuizQuestion
  questionNumber={10}
  question="横断歩道､自転車横断帯とその前後10ﾒｰﾄﾙ以内の場所は､駐車も停車もしてはならない｡"
  correctAnswer={false}
  explanation="横断歩道や自転車横断帯の前後「5メートル以内」は駐停車禁止。<br>10メートルじゃないので注意！よくあるひっかけ問題です⚠️"
  backLink="/quiz9"
  nextLink="/quiz11"
/>