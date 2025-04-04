<script lang="ts">
    import QuizQuestion from "$lib/components/QuizQuestion.svelte";
  </script>  
  
  <QuizQuestion
    questionNumber={14}
    question="図の標示があるところでも、危険を避けるためやむを得ない場合は、進入することができる。
"
    imageUrl="/mobility.png"
    correctAnswer={false}
    explanation="図のマークは「遠隔操作型小型車」の標識。<br>でも、移動用小型車を通行させるときに必要なのは「移動用小型車標識」<br>見た目が似てるから間違えやすいポイントです⚠️！"
    backLink="/quiz13"
    nextLink="/quiz15"
  
  />