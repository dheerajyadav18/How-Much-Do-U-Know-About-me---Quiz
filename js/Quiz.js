const correctAnswers = ['A', 'B', 'A', 'B', 'B', 'A', 'B', 'B' , 'B', 'C', 'B', 'B' , 'B', 'B', 'B', 'A', 'A', 'A', 'C', 'C'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value , form.q9.value, form.q10.value, form.q11.value, form.q12.value , form.q13.value, form.q14.value, form.q15.value, form.q16.value , form.q17.value, form.q18.value, form.q19.value, form.q20.value];

  // check the answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]){
      score += 5;
    }
  });

  // show the result
  scrollTo(0, 0);
  result.classList.remove('d-none');

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

});