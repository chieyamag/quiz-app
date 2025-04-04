<script lang="ts">
    import QuizQuestion from "$lib/components/QuizQuestion.svelte";
  </script>
  
  <QuizQuestion
    questionNumber={5}
    question="標識の区間内では、交差点、曲がり角、上り坂の頂上を通行するとき警笛を鳴らさなければいけない。" 
    imageUrl="/image-3.png" 
    correctAnswer={true} 
    explanation="「見通しの悪い」は交差点だけじゃなく、曲がり角や上り坂の頂上でも使います。<br>どれも先が見えにくい場所なので要チェック！" 
    backLink="/quiz4"
    nextLink="/quiz6"
  
  />