<script lang="ts">
  import QuizQuestion from '$lib/components/QuizQuestion.svelte';
  import { correctAnswers } from '$lib/stores/correctAnswers';
  import { score } from '$lib/stores/score';
  import { onMount } from 'svelte';

  onMount(() => {
    correctAnswers.set([]); 
    score.set(0);           
  });
</script>

<QuizQuestion
  questionNumber={1}
  question="図は、この地点に横断歩道があることを示している。"
  imageUrl="/mark1.png"
  correctAnswer={true}
  explanation="「この先に」などのひっかけがあるので注意しましょう。"
  backLink="/"
  nextLink="/quiz2"

/>

