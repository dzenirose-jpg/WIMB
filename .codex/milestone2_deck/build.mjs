import fs from 'node:fs/promises';
import { Presentation, PresentationFile } from '@oai/artifact-tool';

const OUT = 'C:/Users/dzeni/OneDrive - MSFT/Documents/ChatGPT/Cap Projekt/After-Work-Reset_Milestone-II.pptx';
const TMP = 'C:/Users/dzeni/.codex/visualizations/2026/08/18/01a013d9-4f02-7231-b584-d2bb60ab68f8/milestone2_deck';
const W=1280,H=720;
const C={cream:'#FBF8EE',ink:'#201F27',lav:'#DCCDF8',purple:'#7B4DFF',muted:'#686575',white:'#FFFFFF',mint:'#DDF3E8'};
async function saveBlob(p,b){await fs.writeFile(p,new Uint8Array(await b.arrayBuffer()));}
function box(slide,x,y,w,h,fill='none',line='none',radius='rounded-xl'){return slide.shapes.add({geometry:radius==='none'?'rect':'roundRect',position:{left:x,top:y,width:w,height:h},fill,line:line==='none'?{style:'solid',fill:'none',width:0}:{style:'solid',fill:line,width:2},borderRadius:radius==='none'?undefined:radius});}
function text(slide,value,x,y,w,h,size=22,color=C.ink,bold=false,align='left') {const s=box(slide,x,y,w,h,'none','none','none');s.text=value;s.text.style={fontFace:'Arial',fontSize:size,color,bold,alignment:align,verticalAlignment:'middle'};return s;}
function addChrome(slide,num,label='MILESTONE II') {text(slide,label,64,35,260,28,14,C.purple,true); text(slide,String(num).padStart(2,'0'),1150,35,66,28,14,C.muted,true,'right'); const r=box(slide,64,70,1152,2,C.purple,'none','none');}
function title(slide,v,sub=''){text(slide,v,64,100,1100,80,46,C.ink,true);if(sub)text(slide,sub,64,186,960,52,22,C.muted,false);}
function notes(slide,body,sources=''){slide.speakerNotes.textFrame.setText(`${body}${sources?`\n\n[Sources]\n${sources}`:''}`);slide.speakerNotes.setVisible(true);}
function bullet(slide,v,x,y,w){box(slide,x,y+10,10,10,C.purple,'none','rounded-full');text(slide,v,x+24,y,w-24,42,20,C.ink,false);}
function step(slide,n,head,copy,x){box(slide,x,310,230,168,C.white,C.purple);text(slide,n,x+22,330,45,32,18,C.purple,true);text(slide,head,x+22,370,185,38,23,C.ink,true);text(slide,copy,x+22,416,185,45,16,C.muted,false);}

const p=Presentation.create({slideSize:{width:W,height:H}});

// 1
{const s=p.slides.add();s.background.fill=C.cream;box(s,0,0,490,H,C.lav,'none','none');box(s,750,130,390,390,C.mint,'none','rounded-3xl');text(s,'AFTER-WORK\nRESET',64,145,700,180,64,C.ink,true);text(s,'A personalised recovery app\nand product kit',68,350,530,72,27,C.ink,false);text(s,'Milestone II · Pre-Project Package',68,615,500,30,17,C.muted,false);text(s,'01',1065,570,105,76,56,C.purple,true,'right');notes(s,'Our project is called After-Work Reset. We are creating an app that helps busy people relax and recover after a demanding day. It combines personalised digital recovery rituals with optional physical products.');}

// 2
{const s=p.slides.add();s.background.fill=C.cream;addChrome(s,2);title(s,'Recovery should not feel like\nanother task.');box(s,64,300,550,235,C.lav,C.purple);text(s,'After a demanding day',92,330,250,30,18,C.purple,true);text(s,'People arrive home physically tired, mentally overwhelmed, or both.',92,378,460,82,28,C.ink,true);box(s,680,300,472,235,C.white,C.purple);text(s,'The friction',710,330,250,30,18,C.purple,true);text(s,'Choosing what to do and preparing it can feel like too much effort.',710,378,390,82,28,C.ink,true);notes(s,'Many busy city residents come home physically tired, mentally overwhelmed, or both. They want to rest, but they often do not know what would help. Choosing an activity and preparing it can feel like too much effort.');}

// 3
{const s=p.slides.add();s.background.fill=C.cream;addChrome(s,3);title(s,'One personalised recovery ritual.','No planning. No decision fatigue.');box(s,64,300,1152,196,C.lav,C.purple);text(s,'HOW IT WORKS',92,326,250,26,17,C.purple,true);text(s,'How do you feel?  →  How much time do you have?  →  Your ritual is ready.',92,375,1030,62,30,C.ink,true);text(s,'The user does not browse a content library. They press Start.',92,448,800,28,19,C.muted,false);notes(s,'Our app asks the user how they feel and how much time they have. Then it gives them one recovery ritual to follow. Instead of scrolling through many options, the user can simply press Start.');}

// 4
{const s=p.slides.add();s.background.fill=C.cream;addChrome(s,4);title(s,'A ritual combines the right\nrecovery elements.','Example: mentally overwhelmed + 15 minutes');step(s,'01','Breathe','2 minutes to slow down',64);step(s,'02','Move','5 minutes of gentle stretching',330);step(s,'03','Unwind','Calming audio + warm drink prompt',596);step(s,'04','Finish','Quick check: did this help?',862);notes(s,'For example, if a user feels mentally overwhelmed and has 15 minutes, the app could guide them through breathing, gentle stretching, calming audio, and a simple tea or shower suggestion.');}

// 5
{const s=p.slides.add();s.background.fill=C.cream;addChrome(s,5);title(s,'Digital guidance, supported by\nphysical products.');box(s,64,300,500,205,C.white,C.purple);text(s,'THE APP',92,330,200,25,17,C.purple,true);text(s,'Gives one ready-to-start ritual based on mood and available time.',92,375,400,84,27,C.ink,true);box(s,650,300,500,205,C.mint,C.purple);text(s,'THE PRODUCT KIT',678,330,260,25,17,C.purple,true);text(s,'Optional products help make the ritual easier to repeat at home.',678,375,420,84,27,C.ink,true);text(s,'Examples: tea · eye mask · magnesium spray · bath salts · shower steamers',64,570,1040,34,19,C.muted,false);notes(s,'We also offer products that support the recovery ritual, such as tea, an eye mask, magnesium spray, bath salts, or shower steamers. The product is optional, but it makes the ritual easier to repeat and creates a physical connection to the experience.');}

// 6
{const s=p.slides.add();s.background.fill=C.cream;addChrome(s,6);title(s,'Our research tests whether\nthis solves a real problem.');box(s,64,310,500,218,C.lav,C.purple);text(s,'METHOD',92,338,180,25,17,C.purple,true);text(s,'Short survey\n+ 5–8 interviews',92,380,340,78,34,C.ink,true);box(s,650,310,500,218,C.white,C.purple);text(s,'WHAT WE WANT TO LEARN',678,338,350,25,17,C.purple,true);bullet(s,'How people recover after work',678,382,400);bullet(s,'What stops them from doing it',678,427,400);bullet(s,'Whether decision fatigue is the barrier',678,472,440);notes(s,'Our research will include a short survey and interviews with busy city residents. We want to understand how people currently recover, what stops them, and whether decision fatigue is really the biggest barrier.');}

// 7
{const s=p.slides.add();s.background.fill=C.cream;addChrome(s,7);title(s,'First insight: more content\ndoes not always mean easier recovery.');box(s,64,300,530,210,C.lav,C.purple);text(s,'HYPOTHESIS',92,330,180,25,17,C.purple,true);text(s,'People will use a short, ready-made ritual because it removes the need to plan or decide.',92,373,440,100,27,C.ink,true);box(s,656,300,496,210,C.white,C.purple);text(s,'FIRST DESK-RESEARCH INSIGHT',684,330,360,25,17,C.purple,true);text(s,'Existing wellness apps offer many choices; public feedback shows that this can feel overwhelming or like homework.',684,373,405,100,25,C.ink,true);notes(s,'Our hypothesis is that people will use a short, ready-made ritual because it removes the need to plan or decide. Our initial competitor research shows that many existing apps offer a lot of content, but users can find too many choices overwhelming.','Calm official product page: https://www.calm.com/?lang=en\nBalance support: https://support.balanceapp.com/hc/en-us/articles/4407700854171-What-is-Balance\nReddit public discussion: https://www.reddit.com/r/ProductivityApps/comments/1ptm1ee/what_are_the_best_wellbeing_apps_you_have_tried/');}

// 8
{const s=p.slides.add();s.background.fill=C.cream;addChrome(s,8);title(s,'Next: turn early evidence\ninto a tested MVP.');const xs=[64,345,626,907];const heads=['Collect feedback','Define MVP','Create prototype','Test'];const copies=['Run the survey and interviews','Choose the essential first features','Visualise the ritual experience','See if people would use it after work'];for(let i=0;i<4;i++){box(s,xs[i],330,220,150,i===0?C.lav:C.white,C.purple);text(s,`0${i+1}`,xs[i]+22,350,50,25,17,C.purple,true);text(s,heads[i],xs[i]+22,390,180,31,22,C.ink,true);text(s,copies[i],xs[i]+22,432,178,38,16,C.muted,false);}text(s,'Our aim is simple: make recovery easier when people have the least energy to decide.',64,575,1000,40,24,C.ink,true);notes(s,'Our next step is to collect survey and interview feedback. Based on this, we will define the first version of the app, create a prototype, and test whether people would actually use it after work.');}

await fs.mkdir(TMP,{recursive:true});
for(let i=0;i<p.slides.items.length;i++)await saveBlob(`${TMP}/slide-${i+1}.png`,await p.export({slide:p.slides.items[i],format:'png',scale:1}));
await saveBlob(`${TMP}/montage.webp`,await p.export({format:'webp',montage:true,scale:1}));
const file=await PresentationFile.exportPptx(p);await file.save(OUT);
