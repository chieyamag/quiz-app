<!-- 例：src/routes/quizX/+page.svelte -->
<script lang="ts">
    import QuizQuestion from "$lib/components/QuizQuestion.svelte";
  </script>
  
  <QuizQuestion
    questionNumber={12}
    question="「普通自転車等及び歩行者等専用」の道路標識が設置されている場所では、<br>特例特定小型原動機付自転車も歩道を通行できる。"
    correctAnswer={true} 
    explanation=" 「歩行者・自転車専用」の標識がある歩道でも、特例の電動キックボード（特例特定小型原付）は通行OK！<br>令和5年7月のルール改正ポイント。普通の原付とは違うので注意！"
    backLink="/quiz11"
    nextLink="/quiz13"

  />