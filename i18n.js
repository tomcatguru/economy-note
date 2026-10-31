'use strict';

// Korean static copy lives in index.html. Keep these selectors aligned with that markup.
const englishUI = [
  ['.skip-link', 'Skip to content'],
  ['.brand > span:last-child', 'Jiho’s Economy Note<small>EVERYDAY ECONOMICS</small>'],
  ['nav a[href="#concepts"]', 'Economy notes'],
  ['nav a[href="#lab"]', 'Economy lab'],
  ['nav a[href="#quiz"]', 'Quick quiz'],
  ['.header-link', 'About <span aria-hidden="true">↗</span>'],
  ['#hero-title', 'See everyday life<br>through an<br><span>economic lens.</span>'],
  ['.hero-copy > p', 'From a cup of coffee to the interest on your savings.<br>Explore economics in the language of everyday life.'],
  ['.hero-copy .button', 'Open your first note <span aria-hidden="true">↗</span>'],
  ['.hero-caption', '<span>01 — 06</span> Six concepts to start your economics journey'],
  ['.visual-top span:last-child', 'Everyday economics ↗'],
  ['.visual-question', 'Same coffee.<br>Why a higher price?'],
  ['.price-before small', 'Last year'], ['.price-after small', 'This year'],
  ['.price-before strong', '4,000<span>KRW</span>'], ['.price-after strong', '4,200<span>KRW</span>'],
  ['.visual-bottom > span:first-child', 'Discover the economics hidden in a price.'],
  ['.visual-bottom .demo-label', 'Illustration'],
  ['.topic-strip .wrap > span:nth-child(1)', 'Small questions. A wider perspective.'],
  ['.topic-strip .wrap > span:nth-child(2)', 'Prices <b>↗</b>'],
  ['.topic-strip .wrap > span:nth-child(3)', 'Interest <b>%</b>'],
  ['.topic-strip .wrap > span:nth-child(4)', 'Exchange <b>⇄</b>'],
  ['.topic-strip .wrap > span:nth-child(5)', 'Growth <b>↗</b>'],
  ['.topic-strip .wrap > span:nth-child(6)', 'Choices <b>＋</b>'],
  ['#concepts h2', 'Your first page of economics'],
  ['#concepts .section-heading p', 'Start with a word you have always wondered about.'],
  ['.section-note', 'Six easy-to-read notes'],
  ['[data-filter="all"]', 'All notes'], ['[data-filter="daily"]', 'Everyday economics'],
  ['[data-filter="money"]', 'Money in motion'], ['[data-filter="big"]', 'The bigger picture'],
  ['#video-title', 'See inflation explained.'],
  ['.video-description', 'Explore what rising prices mean with the Bank of England’s “What is inflation?” video.'],
  ['.video-link', 'Watch at the Bank of England ↗'],
  ['.video-help', 'English video · Opens the official page in a new tab. Accept cookies in its video area to load the player.'],
  ['#lab h2', 'Move the numbers. See the difference.'],
  ['#lab .section-heading p', 'How much more will the same shopping basket cost as prices rise?'],
  ['.lab-controls h3', 'Your shopping basket experiment'],
  ['.lab-controls > p', 'Let’s assume prices rise at the same rate every year.'],
  ['label[for="amount"]', 'Today’s basket price <span>KRW</span>'],
  ['#amount-help', 'KRW 1,000–10,000,000, in increments of KRW 1,000'],
  ['label[for="rate"]', 'Annual inflation rate'], ['label[for="years"]', 'Time horizon'],
  ['#years + .range-ends', '<span>1 year</span><span>20 years</span>'],
  ['#reset-lab', 'Reset to starting values ↺'],
  ['.result-top .demo-label', 'Illustrative calculation'],
  ['#chart-title', 'Shopping basket price over time'], ['#price-chart > text:not([id])', 'Today'],
  ['.formula', 'Future price = today’s price × (1 + annual rate)<sup>years</sup>'],
  ['.lab-footnote', 'A learning model, not a forecast. Prices of individual goods may change at different rates. All amounts remain in Korean won (KRW).'],
  ['#quiz h2', 'One question to make it stick.'],
  ['#quiz > div:first-child > p', 'A small check can turn an idea into lasting knowledge.'],
  ['#about h2', 'Economics is part of every day.'],
  ['#about p', 'Jiho’s Economy Note connects everyday questions with economic ideas.<br>Prices and figures here are illustrative examples for learning.'],
  ['#about > a', 'Back to the notes ↑'],
  ['footer > span', 'Jiho’s Economy Note <span class="footer-divider">/</span> A demo for learning'],
  ['footer a[target]', 'Further reading · Bank of England on inflation ↗'],
  ['footer a[href="#"]', 'Back to top ↑'], ['#lesson-done', 'Got it ✓']
];

const englishCards = {
  inflation: ['Prices and inflation', 'Why the same money buys less<br>as prices rise.', 'Understanding purchasing power'],
  interest: ['Interest rates', 'What if money has a price?<br>A story of borrowing and saving.', 'How interest works'],
  exchange: ['Exchange rates', 'Why does a stronger dollar<br>make travel more expensive?', 'Trading one currency for another'],
  supply: ['Supply and demand', 'People who buy. People who sell.<br>Prices emerge where they meet.', 'How markets find a price'],
  gdp: ['GDP and economic growth', 'How do we measure<br>the size of an economy?', 'Understanding economic output'],
  opportunity: ['Opportunity cost', 'Every time we choose,<br>we also give something up.', 'The starting point for better choices']
};
const englishCategories = {daily:'Everyday economics', money:'Money in motion', big:'The bigger picture'};

const englishLessons = {
  inflation: {title:'Prices and inflation', intro:'The price level describes prices across a range of goods and services. A sustained increase in that overall level is called inflation. The amount you can buy with the same money—its purchasing power—falls.', example:'If a coffee cost KRW 4,000 last year and KRW 4,200 this year, its price rose by 5%. But the change in one coffee’s price is not the overall inflation rate. Inflation is measured using a range of goods and services.', detail:'If inflation falls from 5% to 2%, prices are still rising, just more slowly. A sustained fall in the overall price level is called deflation.', takeaway:'Falling inflation is different from falling prices.'},
  interest: {title:'Interest rates', intro:'An interest rate expresses the interest paid on borrowed or deposited money as a percentage of the principal. It is a cost to the borrower and a return to the saver.', example:'A one-year deposit of KRW 1,000,000 at 3% simple annual interest earns KRW 30,000 before tax. A borrower on the same terms pays interest instead. Actual amounts depend on taxes, fees, and repayment terms.', detail:'A central bank’s policy rate influences market interest rates. Higher rates generally make borrowing more expensive, can restrain spending and investment, and may encourage saving. The effects take time and depend on economic conditions.', takeaway:'Think of interest as the price of using money over time.'},
  exchange: {title:'Exchange rates', intro:'An exchange rate tells you how much of one currency you need to buy another. A rate of KRW 1,300 per US dollar means that one dollar costs 1,300 Korean won.', example:'A USD 100 item costs KRW 130,000 when a dollar costs KRW 1,300, and KRW 140,000 when it costs KRW 1,400. This example excludes exchange fees, delivery costs, and taxes.', detail:'When the won-per-dollar rate rises, you need more won to buy one dollar. This is a depreciation of the won against the dollar. It can put upward pressure on import prices, although factors such as contract timing also matter.', takeaway:'Always check which currency’s unit price an exchange rate is quoting.'},
  supply: {title:'Supply and demand', intro:'Demand describes how much people are willing to buy at a given price; supply describes how much sellers are willing to sell. Other things equal, a higher price usually reduces quantity demanded and increases quantity supplied.', example:'If the local strawberry harvest shrinks but demand stays the same, the fall in supply can raise the price. A bumper harvest can increase supply and lower the price.', detail:'A change in quantity demanded caused by a price change is different from a shift in demand caused by fashion or income. This model is a starting point; regulation and market competition also affect actual prices.', takeaway:'When a price changes, ask what changed on the buying side or the selling side.'},
  gdp: {title:'GDP and economic growth', intro:'Gross domestic product (GDP) is the market value of final goods and services newly produced within a country over a given period. It is a widely used measure of economic output.', example:'Suppose 100 loaves were produced at KRW 1,000 each last year. This year, the same number are produced at KRW 1,100 each. Their nominal output value rises by 10%, but their quantity is unchanged. That is why we distinguish price changes from output changes.', detail:'Nominal GDP uses current prices, while real GDP adjusts for price changes. Economic growth usually refers to changes in real GDP. GDP alone cannot describe income distribution, environmental quality, leisure, or happiness.', takeaway:'A larger economy and a better life for everyone are different questions.'},
  opportunity: {title:'Opportunity cost', intro:'Opportunity cost is the value of the best alternative you give up when making a choice. Consider not only the money spent, but also your time and other opportunities.', example:'Imagine you have two hours on Saturday and can either watch a film or ride your bike. If you choose the film, the enjoyment of the bike ride—your best alternative—is something you give up.', detail:'A cost already paid that cannot be recovered is a sunk cost. When comparing future options, it helps to focus on future benefits and additional costs, rather than money that has already been spent.', takeaway:'Alongside “What will I spend?”, ask “What will I give up?”'}
};

const englishQuestions = [
  {question:'Inflation has fallen from 5% to 2%. What has happened to the overall price level?', answers:['Prices have fallen compared with last year.','Prices are still rising, but more slowly.','Every product now costs the same.'],correct:1,explanation:'The inflation rate is still positive, so prices are rising. A fall from 5% to 2% means they are rising more slowly.'},
  {question:'The exchange rate rises from KRW 1,300 to KRW 1,400 per US dollar. What happens to the won price of a USD 100 item?', answers:['It rises from KRW 130,000 to KRW 140,000.','It falls from KRW 140,000 to KRW 130,000.','It stays the same because the dollar price is unchanged.'],correct:0,explanation:'USD 100 × KRW 1,400 per dollar = KRW 140,000. You now need more won for each dollar. This example excludes fees and taxes.'},
  {question:'The number of loaves produced stays the same, but their price rises. What can we conclude?',answers:['The quantity of bread produced has increased.','Everyone has become happier.','The nominal value of bread output has increased.'],correct:2,explanation:'Nominal output value, calculated as price × quantity, has increased. With the quantity unchanged, no more bread has actually been produced.'}
];
