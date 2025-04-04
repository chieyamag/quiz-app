<!-- 例：src/routes/quizX/+page.svelte --> 
<script lang="ts">
  import QuizQuestion from "$lib/components/QuizQuestion.svelte"; // パスが正しいか確認
</script>

<QuizQuestion
  questionNumber={9}
  question="運転中の疲労による影響は手足に最も強く表れ、ハンドルやブレーキ操作が遅れたりする。"
  correctAnswer={false}
  explanation="疲れの影響が一番出るのは「目👁️」！<br>手足じゃなくて視覚からくる集中力の低下が大きいんです。だから答えは**×**！"
  backLink="/quiz8"
  nextLink="/quiz10"
/>