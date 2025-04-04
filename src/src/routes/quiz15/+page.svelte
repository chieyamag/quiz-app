<!-- 例：src/routes/quizX/+page.svelte -->
<script lang="ts">
    import QuizQuestion from "$lib/components/QuizQuestion.svelte";
  </script>
  
  <QuizQuestion
    questionNumber={15}
    question="夜の道路は危険なので気をつけて運転しなければならない。"
    correctAnswer={false} 
    explanation=" 「夜は危険だから注意して運転」…それだけじゃダメ！<br>昼間ももちろん注意が必要。だから答えは×！安全運転はいつでも基本です◎" 
    backLink="/quiz14"
    nextLink="/result"

  />