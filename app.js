'use strict';

// 내용 수정: 각 노트의 title(제목), intro(설명), example(예시), takeaway(요점)를 바꾸세요.
const lessons = {
  inflation: {title:'물가와 인플레이션',intro:'물가는 여러 상품과 서비스의 전반적인 가격 수준입니다. 이 수준이 지속적으로 오르는 현상을 인플레이션이라고 해요. 같은 돈으로 살 수 있는 양, 즉 구매력은 줄어듭니다.',example:'작년에 4,000원이던 커피가 올해 4,200원이 됐다면 이 커피의 가격은 5% 올랐습니다. 다만 커피 한 품목의 변화가 전체 물가상승률은 아니에요. 전체 물가는 여러 품목을 묶어 측정합니다.',detail:'물가상승률이 5%에서 2%로 낮아져도 물가는 여전히 오르고 있습니다. 오르는 속도가 느려진 것이죠. 전반적인 물가 수준이 지속적으로 내려가는 현상은 디플레이션이라고 합니다.',takeaway:'물가상승률 하락과 물가 하락은 다릅니다.',source:'https://www.bankofengland.co.uk/explainers/what-is-inflation',sourceLabel:'영란은행 · What is inflation?'},
  interest: {title:'금리',intro:'금리는 돈을 빌리거나 맡길 때 원금에 대해 적용하는 이자의 비율입니다. 빌리는 사람에게는 비용이고, 예금하는 사람에게는 돈을 맡긴 대가가 됩니다.',example:'100만 원을 연 3%의 단리 예금에 1년 맡긴다면 세전 이자는 3만 원입니다. 같은 조건으로 돈을 빌리면 이자를 내야 해요. 실제 금액은 세금, 수수료, 상환 방식 등에 따라 달라집니다.',detail:'중앙은행의 기준금리는 여러 시장금리에 영향을 줍니다. 금리가 오르면 일반적으로 대출과 소비·투자의 부담이 커지고, 저축의 유인이 높아질 수 있어요. 다만 효과는 시차를 두고 나타나며 상황마다 다릅니다.',takeaway:'금리는 돈을 사용하는 시간에 붙는 가격이라고 생각해 보세요.',source:'https://www.bankofengland.co.uk/explainers/inflation-and-interest-rates',sourceLabel:'영란은행 · Inflation and interest rates'},
  exchange: {title:'환율',intro:'환율은 서로 다른 두 나라 돈을 바꾸는 비율입니다. 원/달러 환율이 1,300원이라는 말은 1달러를 사는 데 1,300원이 필요하다는 뜻이에요.',example:'100달러짜리 물건은 환율이 1,300원일 때 13만 원, 1,400원일 때 14만 원입니다. 이 예시는 환전 수수료, 배송비, 세금을 제외했어요.',detail:'원/달러 환율이 상승하면 달러 한 단위를 사는 데 원화가 더 필요합니다. 이를 달러 대비 원화 가치가 하락했다고 표현해요. 수입품 가격에 상승 압력이 생길 수 있지만 실제 가격에는 계약 시점 등 다른 조건도 영향을 줍니다.',takeaway:'환율을 읽을 때는 어떤 통화 1단위의 가격인지부터 확인하세요.'},
  supply: {title:'수요와 공급',intro:'수요는 사람들이 주어진 가격에 사려고 하는 양이고, 공급은 팔려고 하는 양입니다. 다른 조건이 같다면 보통 가격이 오를수록 수요량은 줄고 공급량은 늘어납니다.',example:'동네 딸기 수확량이 크게 줄었는데 사려는 사람은 그대로라면, 공급 감소로 딸기 가격이 오를 수 있습니다. 반대로 풍년이 들어 물량이 늘면 가격이 내려갈 수 있어요.',detail:'가격 자체가 변해서 수요량이 달라지는 것과, 유행이나 소득 변화 때문에 수요 전체가 이동하는 것은 구분해야 합니다. 이 모형은 시장을 이해하는 출발점이고, 실제 가격에는 규제나 경쟁 구조도 영향을 줍니다.',takeaway:'가격 변화를 볼 때, 사려는 쪽과 팔려는 쪽 중 무엇이 달라졌는지 물어보세요.'},
  gdp: {title:'GDP와 경제성장',intro:'GDP(국내총생산)는 일정 기간 한 나라 안에서 새로 생산한 최종 재화와 서비스의 시장가치입니다. 경제가 생산한 규모를 보여주는 대표적인 지표예요.',example:'작년에 빵 100개를 개당 1,000원에 만들고 올해도 같은 양을 1,100원에 만들었다면, 빵의 생산액은 10% 늘지만 생산량은 그대로입니다. 가격과 생산량을 나눠 봐야 하는 이유죠.',detail:'명목 GDP는 해당 시점의 가격을 사용하고, 실질 GDP는 가격 변화의 영향을 조정합니다. 경제성장률을 볼 때는 보통 실질 GDP의 변화를 봅니다. GDP만으로 분배, 환경, 여가, 행복을 모두 설명할 수는 없어요.',takeaway:'경제 규모가 커지는 것과 모두의 삶이 나아지는 것은 같은 질문이 아닙니다.'},
  opportunity: {title:'기회비용',intro:'기회비용은 어떤 선택 때문에 포기한 대안 중 가장 가치 있는 대안의 가치입니다. 실제로 지출한 돈만이 아니라 시간과 다른 기회도 생각해야 해요.',example:'토요일 두 시간에 영화 보기와 자전거 타기 중 하나만 할 수 있다고 해볼게요. 영화를 골랐다면, 가장 좋은 대안이었던 자전거 타기의 즐거움을 포기한 것도 선택의 비용입니다.',detail:'이미 지불했고 되돌릴 수 없는 비용은 매몰비용이라고 합니다. 앞으로의 선택을 비교할 때는 과거에 쓴 돈보다 지금부터 얻을 편익과 추가 비용에 집중하는 것이 도움이 됩니다.',takeaway:'“얼마를 쓰지?”와 함께 “무엇을 포기하지?”를 물어보세요.'}
};
const dialog = document.querySelector('#lesson-dialog');
document.querySelectorAll('[data-lesson]').forEach(button => button.addEventListener('click', () => {
  const lesson = lessons[button.dataset.lesson];
  document.querySelector('#lesson-title').textContent = lesson.title;
  const body = document.querySelector('#lesson-body');
  body.replaceChildren();
  const append = (tag, text, className) => {const element = document.createElement(tag); element.textContent = text; if(className) element.className = className; body.append(element);};
  append('p', lesson.intro); append('h3', '일상으로 이해해 볼까요?'); append('p', lesson.example, 'example'); append('h3', '한 걸음 더'); append('p', lesson.detail); append('p', lesson.takeaway, 'takeaway');
  if(lesson.source){const link = document.createElement('a');link.href = lesson.source;link.textContent = '더 읽기 · ' + lesson.sourceLabel + ' ↗';link.target = '_blank';link.rel = 'noopener noreferrer';body.append(link);}
  dialog.showModal(); dialog.scrollTop = 0;
}));
document.querySelector('#close-lesson').addEventListener('click', () => dialog.close());
document.querySelector('#lesson-done').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {if(event.target === dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) dialog.close();}});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => {const active = item === button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
  let count=0;document.querySelectorAll('.note-card').forEach(card => {card.hidden = button.dataset.filter !== 'all' && button.dataset.filter !== card.dataset.category;if(!card.hidden)count++;});
  document.querySelector('#filter-status').textContent = `${count}개의 경제노트`;
}));

const amount = document.querySelector('#amount');
const rate = document.querySelector('#rate');
const years = document.querySelector('#years');
const won = value => Math.round(value).toLocaleString('ko-KR');
function updateLab(){
  document.querySelector('#rate-output').textContent = `${rate.value}%`;
  document.querySelector('#years-output').textContent = `${years.value}년 후`;
  if(!amount.value || !amount.checkValidity()){document.querySelector('#future-price').textContent='금액을 확인해 주세요';document.querySelector('#difference').textContent='1,000원부터 10,000,000원까지 1,000원 단위로 입력해 주세요.';document.querySelector('#price-chart').setAttribute('hidden','');return;}
  document.querySelector('#price-chart').removeAttribute('hidden');
  const start=Number(amount.value), r=Number(rate.value)/100, n=Number(years.value);
  const future=start*Math.pow(1+r,n);
  document.querySelector('#result-label').textContent=`${n}년 후, 같은 장바구니의 가격`;
  const result=document.querySelector('#future-price');result.textContent=won(future);const unit=document.createElement('span');unit.textContent='원';result.append(unit);
  document.querySelector('#difference').textContent=`지금보다 ${won(future-start)}원 더 필요해요. (+${((future/start-1)*100).toFixed(1)}%)`;
  const max=Math.max(future*1.12,start*1.2),min=start*.85;
  const y=value => 175-(value-min)/(max-min)*140;
  const points=Array.from({length:n+1},(_,i)=>[70+i/n*505,y(start*Math.pow(1+r,i))]);
  const path=points.map(([x,y],i)=>`${i?'L':'M'}${x.toFixed(2)},${y.toFixed(2)}`).join(' ');
  document.querySelector('#chart-line').setAttribute('d',path);
  document.querySelector('#chart-area').setAttribute('d',`${path} L575,195 L70,195 Z`);
  const end=document.querySelector('#chart-end');end.setAttribute('cx','575');end.setAttribute('cy',String(y(future)));
  const labels=document.querySelector('#chart-labels');labels.replaceChildren();
  [35,105,175].forEach(position=>{const label=document.createElementNS('http://www.w3.org/2000/svg','text');label.setAttribute('x','57');label.setAttribute('y',String(position+4));label.setAttribute('text-anchor','end');label.textContent=((min+(175-position)/140*(max-min))/10000).toLocaleString('ko-KR',{maximumFractionDigits:1})+'만';labels.append(label);});
  document.querySelector('#chart-year').textContent=`${n}년 후`;
  document.querySelector('#chart-desc').textContent=`현재 ${won(start)}원에서 매년 ${rate.value}%씩 상승하면 ${n}년 후 약 ${won(future)}원입니다. 세로축은 가격이며 단위는 만 원입니다.`;
}
[amount,rate,years].forEach(input=>input.addEventListener('input',updateLab));
document.querySelector('#reset-lab').addEventListener('click',()=>{amount.value='100000';rate.value='3';years.value='5';updateLab();});
updateLab();

const questions=[
  {question:'물가상승률이 5%에서 2%로 낮아졌어요. 물가는 어떻게 된 걸까요?',answers:['물가가 작년보다 내려갔어요.','물가는 오르지만, 오르는 속도가 느려졌어요.','모든 상품의 가격이 같아졌어요.'],correct:1,explanation:'상승률이 여전히 양수이므로 물가는 오릅니다. 5%에서 2%로 바뀐 것은 상승 속도가 느려졌다는 뜻이에요.'},
  {question:'원/달러 환율이 1,300원에서 1,400원으로 올랐어요. 100달러짜리 물건의 원화 가격은?',answers:['13만 원에서 14만 원으로 올라요.','14만 원에서 13만 원으로 내려가요.','달러 가격이 같으니 원화 가격도 같아요.'],correct:0,explanation:'100달러 × 1,400원 = 14만 원입니다. 달러 한 단위를 사는 데 더 많은 원화가 필요해졌어요. 수수료와 세금은 제외한 예시입니다.'},
  {question:'빵의 생산량은 같고 가격만 올랐어요. 이 사실만으로 알 수 있는 것은?',answers:['빵의 실질 생산량이 늘었어요.','사람들이 모두 더 행복해졌어요.','빵의 명목 생산액이 늘었어요.'],correct:2,explanation:'가격 × 생산량으로 계산하는 명목 생산액은 늘어납니다. 생산량이 같으므로 실제로 더 많은 빵을 만든 것은 아니에요.'}
];
let questionIndex=0,score=0,answered=false;
function renderQuestion(){
  answered=false;const question=questions[questionIndex];
  document.querySelector('#quiz-progress').textContent=`QUESTION ${String(questionIndex+1).padStart(2,'0')} / 03`;
  document.querySelector('#quiz-question').textContent=question.question;
  document.querySelector('#quiz-feedback').textContent='';document.querySelector('#next-question').hidden=true;
  const answers=document.querySelector('#quiz-answers');answers.replaceChildren();
  question.answers.forEach((answer,index)=>{const button=document.createElement('button');button.className='quiz-answer';button.textContent=`${String.fromCharCode(65+index)}.  ${answer}`;button.addEventListener('click',()=>answerQuestion(index));answers.append(button);});
}
function answerQuestion(index){
  if(answered)return;answered=true;const question=questions[questionIndex],correct=index===question.correct;if(correct)score++;
  document.querySelectorAll('.quiz-answer').forEach((button,i)=>{button.disabled=true;if(i===question.correct)button.classList.add('correct');if(i===index&&!correct)button.classList.add('incorrect');});
  const finished=questionIndex===questions.length-1;
  document.querySelector('#quiz-feedback').textContent=(correct?'정답이에요! ':'함께 다시 살펴볼까요? ')+question.explanation+(finished?` 3문제 중 ${score}문제를 맞혔어요.`:'');
  const next=document.querySelector('#next-question');next.textContent=finished?'처음부터 다시 풀기 ↺':'다음 문제 →';next.hidden=false;
}
document.querySelector('#next-question').addEventListener('click',()=>{if(questionIndex===questions.length-1){questionIndex=0;score=0;}else questionIndex++;renderQuestion();document.querySelector('.quiz-answer').focus();});
renderQuestion();
