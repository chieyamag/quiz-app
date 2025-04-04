<script lang="ts">
    import QuizQuestion from "$lib/components/QuizQuestion.svelte";
  </script>
  
  <QuizQuestion
    questionNumber={11}
    question="図の標識がある高速道路において、総排気量750ccの大型自動二輪車の最高速度は時速100kmであるが、<br>250ccの普通自動二輪車は時速80kmである。"
    imageUrl="/100.png"
    correctAnswer={false}
    explanation="排気量に関係なく、自動二輪の最高速度はどちらも100km/h。<br>750ccでも250ccでも、同じく100km/h。見た目で差がありそうだけど、ここは引っかからないように！" 
    backLink="/quiz10"
    nextLink="/quiz12"
  
  />