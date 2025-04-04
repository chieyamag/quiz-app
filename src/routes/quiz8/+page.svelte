<script lang="ts">
    import QuizQuestion from "$lib/components/QuizQuestion.svelte";
  </script>
  
  <QuizQuestion
    questionNumber={8}
    question="この標識は「安全地帯」を表しています。"
    imageUrl="/yuusendouro.png"
    correctAnswer={false}
    explanation="この標識は「優先道路」。<br>つまり、この標識がある道路のほうが優先されるってこと！交差点ではしっかり確認を◎"
    backLink="/quiz7"
    nextLink="/quiz9"
  
  />