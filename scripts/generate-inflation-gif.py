"""Create original educational diagrams; no video frames or audio are used.
Requires Pillow. Fonts can be overridden for non-macOS systems.
"""
import os
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets'
OUT.mkdir(exist_ok=True)
W, H = 800, 600
PAPER, INK, MUTED = '#faf9f5', '#202622', '#69716e'
BLUE, GREEN, PALE, LINE = '#2455df', '#285b48', '#edf0fa', '#dedfd7'
FONT_EN = os.getenv('GIF_FONT_EN', '/System/Library/Fonts/Supplemental/Arial.ttf')
FONT_KO = os.getenv('GIF_FONT_KO', '/System/Library/Fonts/AppleSDGothicNeo.ttc')
COPY = {
'en': [
 ('Same basket. Higher price.', 'LAST YEAR', 'THIS YEAR', 'Prices rise by 2% in this example.', 'The same basket now costs £102.'),
 ('Same money. Less buying power.', 'BEFORE', 'AFTER +2%', 'With prices 2% higher, £100 buys', 'about 98% of the original basket.'),
 ('Slower rises are still rises.', 'YEAR 0', 'YEAR 1', 'YEAR 2', 'Inflation falls from 5% to 2%.', 'Prices still rise: £105 → £107.10.')
],
'ko': [
 ('같은 장바구니, 오른 가격', '작년', '올해', '이 예시에서 물가는 2% 올랐어요.', '같은 장바구니에 이제 £102가 필요해요.'),
 ('같은 돈, 줄어든 구매력', '이전', '물가 2% 상승 후', '물가가 2% 오르면 £100로 살 수 있는 양은', '이전 장바구니의 약 98%가 됩니다.'),
 ('천천히 올라도, 여전히 상승', '0년 차', '1년 차', '2년 차', '물가상승률이 5%에서 2%로 낮아져도', '가격은 올라요: £105 → £107.10.')
]}

def font(lang, size):
    return ImageFont.truetype(FONT_KO if lang == 'ko' else FONT_EN, size)

def text(d, xy, value, lang, size=28, fill=INK, anchor=None):
    d.text(xy, value, font=font(lang,size), fill=fill, anchor=anchor)

def base(lang, step, title):
    im = Image.new('RGB', (W,H), PAPER)
    d = ImageDraw.Draw(im)
    text(d,(36,25),'ECONOMY IN MOTION', 'en',18,BLUE)
    text(d,(764,25),f'{step:02d} / 03','en',18,MUTED,'ra')
    text(d,(36,76),title,lang,38)
    for i in range(3):
        x = 36+i*247
        d.rounded_rectangle((x,132,x+232,137), radius=2,fill=BLUE if i==step-1 else LINE)
    d.line((36,553,764,553),fill=LINE,width=1)
    text(d,(36,570),'JIHO’S ECONOMY NOTE', 'en',16,MUTED)
    text(d,(764,570),'학습용 가상 예시' if lang=='ko' else 'ILLUSTRATIVE EXAMPLE',lang,16,MUTED,'ra')
    return im,d

def basket(d,cx,y):
    # An original, simple pictogram, identical in both price cards.
    d.rounded_rectangle((cx-47,y-24,cx-5,y+14),7,fill='#d8b58b')
    d.rounded_rectangle((cx+5,y-35,cx+32,y+17),5,fill='#d0ddca')
    d.line((cx-57,y+4,cx-39,y+60,cx+39,y+60,cx+57,y+4),fill=GREEN,width=6)
    d.line((cx-62,y+4,cx+62,y+4),fill=GREEN,width=6)
    for offset in [-24,0,24]: d.line((cx+offset,y+13,cx+offset,y+48),fill=GREEN,width=3)

def frame(lang,scene,p):
    c = COPY[lang][scene]
    im,d = base(lang,scene+1,c[0])
    if scene<2:
        for x in [36,416]: d.rounded_rectangle((x,163,x+348,430),18,fill=PALE if x==416 else '#eef1e9')
        for cx,label in [(210,c[1]),(590,c[2])]: text(d,(cx,181),label,lang,28,MUTED,'ma')
        if scene==0:
            basket(d,210,255); basket(d,590,255)
            text(d,(210,343),'£100',lang,52,INK,'ma')
            price = 100+2*p
            text(d,(590,343),f'£{price:.2f}' if p<1 else '£102',lang,52,BLUE,'ma')
        else:
            for cx,value in [(210,100),(590,100-(100-100/1.02)*p)]:
                text(d,(cx,244),f'{value:.0f}%' if cx==210 else f'≈ {value:.0f}%',lang,52,BLUE if cx==590 else INK,'ma')
                d.rounded_rectangle((cx-135,332,cx+135,368),8,fill='#d3dacd')
                d.rounded_rectangle((cx-135,332,cx-135+270*value/100,368),8,fill=GREEN if cx==210 else BLUE)
                text(d,(cx,383),'£100',lang,25,MUTED,'ma')
        lines = c[3:5]
    else:
        for i,(cx,val) in enumerate([(156,100),(400,105),(644,105+2.1*p)]):
            text(d,(cx,174),c[1+i],lang,28,MUTED,'ma')
            height=val*1.8  # A zero baseline keeps the price comparison proportional.
            d.rounded_rectangle((cx-70,414-height,cx+70,414),9,fill=BLUE if i==2 else '#9cadde')
            text(d,(cx,423),f'£{val:g}' if i<2 else f'£{val:.2f}',lang,29,INK,'ma')
        text(d,(280,230),'+5%',lang,27,GREEN,'ma')
        text(d,(521,205),'+2%',lang,27,BLUE,'ma')
        lines=c[4:6]
    text(d,(400,479),lines[0],lang,32,INK,'ma')
    text(d,(400,516),lines[1],lang,32,INK,'ma')
    return im

for lang in COPY:
    frames=[]; durations=[]
    for scene in range(3):
        for j in range(21):
            frames.append(frame(lang,scene,j/20))
            durations.append(2200 if j==0 else 6950 if j==20 else 150)
    # One shared palette avoids flickering between animation frames.
    samples = Image.new('RGB', (W,H*3))
    for scene in range(3): samples.paste(frame(lang,scene,1),(0,H*scene))
    palette = samples.quantize(colors=128)
    indexed=[im.quantize(palette=palette,dither=Image.Dither.NONE) for im in frames]
    indexed[0].save(OUT/f'inflation-{lang}.gif',save_all=True,append_images=indexed[1:],duration=durations,loop=0,optimize=True,disposal=1)
    im,d=base(lang,3,'인플레이션, 세 가지 핵심' if lang=='ko' else 'Inflation: three key ideas')
    rows=[('£100 → £102','같은 장바구니 가격 +2%' if lang=='ko' else 'Same basket, 2% higher price'),
          ('100% → ≈98%','같은 돈으로 살 수 있는 양 감소' if lang=='ko' else 'Same money, less buying power'),
          ('5% → 2%','상승률이 낮아져도 가격은 상승' if lang=='ko' else 'Lower inflation, still rising prices')]
    for i,(number,label) in enumerate(rows):
        y=165+i*121
        d.rounded_rectangle((36,y,764,y+106),12,fill=PALE)
        text(d,(58,y+12),number,lang,34,BLUE)
        text(d,(58,y+59),label,lang,32)
    im.save(OUT/f'inflation-{lang}-still.png',optimize=True)
    with Image.open(OUT/f'inflation-{lang}.gif') as gif:
        print(lang,gif.size,gif.n_frames,'frames',sum(gif.seek(i) or gif.info['duration'] for i in range(gif.n_frames)),'ms', (OUT/f'inflation-{lang}.gif').stat().st_size,'bytes')
