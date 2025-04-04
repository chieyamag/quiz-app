<!-- 例：src/routes/quizX/+page.svelte -->
<script lang="ts">
    import QuizQuestion from "$lib/components/QuizQuestion.svelte";
  </script>
  
  <QuizQuestion
    questionNumber={7}
    question="高速自動車国道の本線車道における大型貨物自動車の法定最高速度は、時速90kmである。" 
    correctAnswer={true}  
    explanation="大型貨物の最高速度は高速道路で90km/h。<br>「高速＝100km」と思いがちだけど、大型貨物は90kmなので注意！" 
    backLink="/quiz6" 
    nextLink="/quiz8"
  
  />