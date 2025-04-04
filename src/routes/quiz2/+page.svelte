<!-- 例：src/routes/quizX/+page.svelte -->

<script lang="ts">
    import QuizQuestion from "$lib/components/QuizQuestion.svelte";
  </script>
  
  <QuizQuestion
    questionNumber={2}
    question="緊急自動車や郵便車、清掃車は歩行者用道路を通行できる。"
    correctAnswer={true}  
    explanation=" 郵便車や清掃車も通行できるのがポイントです。清掃車も通行できるできるのは意外じゃないですか？🙀"
    backLink="/quiz"
    nextLink="/quiz3"

  />