<!-- 例：src/routes/quizX/+page.svelte -->
<script lang="ts">
    import QuizQuestion from "$lib/components/QuizQuestion.svelte"; 
  </script>
  
  <QuizQuestion
    questionNumber={4}  
    question="安全地帯を通るときは、歩行者がいる時だけ徐行する。"
    correctAnswer={true} 
    explanation="安全地帯に歩行者がいなければ徐行は不要。<br>ただし、路面電車が止まってるときは徐行！ この違い、しっかり区別して覚えておこう◎" 
    backLink="/quiz3" 
    nextLink="/quiz5"
  
  />