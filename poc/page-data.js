/* Coordinates follow the attached 474×647 photograph. All names are real DOM text.
   Raster assets contain individual illustrations only, never a full-page background.
   uncertain marks small text that requires checking against a higher-resolution source. */
const PAGE={source:'images-6.jpeg',width:474,height:647,cells:[]};
function cell(x,y,w,h,text,extra={}){PAGE.cells.push({x,y,w,h,text,...extra})}
cell(28,31,42,565,'السيدة\nعائشة\nبنت\nأبي بكر\nالصديق\nرضي\nالله\nعنها',{long:true,nameStyle:{top:'101px',lineHeight:'2.55'},rating:'',year:'٥٧ هـ',assets:[['camp',2,431,39,41],['minaret',2,509,18,42],['kaaba',27,544,14,13]]});
cell(70,31,45,565,'عُروة\nابن\nالزُّبير\nابن\nالعوّام',{long:true,nameStyle:{top:'127px',lineHeight:'2.9'},rating:'ثقة',year:'٩٤ هـ',assets:[['vessels',2,432,41,43],['minaret',3,509,18,42]]});
cell(115,31,44,565,'محمد\nابن\nمسلم\nابن شهاب\nالزُّهريّ',{style:'blue',long:true,nameStyle:{top:'132px',lineHeight:'2.9'},rating:'حافظ',year:'١٢٤ هـ',assets:[['mosque',2,514,40,37]]});
cell(159,31,99,33,'عبد الملك بن عبد العزيز\nابن جريج',{rating:'ثقة فقيه فاضل',year:'١٥٠ هـ',nameStyle:{fontSize:'7.6px',left:'13px',right:'13px'},assets:[['kaaba',0,9,15,13]],marks:[['م',1,3]],uncertain:true});
cell(258,31,102,33,'عبد الرزاق بن همّام',{rating:'ثقة حافظ',year:'٢١١ هـ',assets:[['razzak-mark',79,0,22,22]],marks:[['يم',2,18]],uncertain:true});
cell(159,64,51,166,'عُقيل\nابن\nخالد',{cellStyle:{zIndex:'2'},long:true,nameStyle:{top:'0px',lineHeight:'3'},rating:'ثقة',year:'١٤٤ هـ',assets:[['uqayl-symbol',8,86,29,39],['minaret-small',35,126,13,29]],marks:[['م     مصر',2,147]]});
cell(210,64,150,34,'المفضّل بن فضالة',{style:'fade',rating:'ثقة فاضل عابد',year:'١٨١ هـ',marks:[['م',2,20]],uncertain:true});
cell(210,98,48,32,'يونس بن\nيزيد',{style:'yellow',rating:'ثقة',year:'١٥٩ هـ',nameStyle:{fontSize:'7.8px',top:'0px'},marks:[['آل',2,18]],uncertain:true});
cell(258,98,102,32,'عبد الله بن المبارك',{style:'green',rating:'ثقة ثبت فقيه',year:'١٨١ هـ',nameStyle:{left:'23px',right:'19px',fontSize:'7.8px',top:'6px'},assets:[['rose',5,2,20,17],['crystal',79,1,20,17]],uncertain:true});
cell(159,130,201,266,'الليث بن سعد',{cellStyle:{clipPath:'polygon(51px 0,100% 0,100% 100%,0 100%,0 100px,51px 100px)'},rating:'ثقة ثبت فقيه إمام مشهور',year:'١٧٥ هـ',nameStyle:{top:'128px',fontSize:'10px'},assets:[['dolphin',149,202,48,53]],marks:[['م',3,245]]});
cell(159,396,201,32,'فُليح بن سليمان',{style:'teal',rating:'صدوق كثير الخطأ',year:'١٦٨ هـ',assets:[['leaf',1,3,14,15]],nameStyle:{top:'3px'},uncertain:true});
cell(159,428,201,131,'مالك بن أنس',{rating:'إمام دار الهجرة فقيه كبير المتثبتين',year:'١٧٩ هـ',nameStyle:{top:'45px',fontSize:'10px'},assets:[['minaret',3,78,18,42],['throne',142,71,46,48]]});
cell(159,559,99,37,'محمد بن أبي حفصة',{rating:'صدوق يخطئ',year:'الجماعة',band:'#c6df9b',nameStyle:{top:'6px',right:'24px',fontSize:'8px'},assets:[['camel',75,2,21,21]],marks:[['بص',2,24]],uncertain:true});
cell(258,559,102,37,'عبد الله بن المبارك',{style:'green',rating:'ثقة ثبت فقيه',year:'١٨١ هـ',nameStyle:{left:'22px',right:'20px',top:'6px',fontSize:'8px'},assets:[['rose',4,3,20,17],['moon',79,4,18,17]],uncertain:true});
const rows=[
{t:'يحيى بن موسى',s:'white',r:'ثقة',yr:'٢٤٠ هـ',a:[['sun',48,1,27,17]],m:'بل'},
{t:'قتيبة بن سعيد',s:'white',r:'ثقة ثبت',yr:'٢٤٠ هـ',a:[['horse',55,1,20,21]],m:'بل'},
{t:'حيّان بن موسى',s:'white',r:'ثقة',yr:'٢٣٣ هـ',a:[['cups',57,10,17,10]],m:'م'},
{t:'سعيد بن عُفير',s:'purple',r:'صدوق',yr:'٢٢٦ هـ',m:'م',ns:{top:'7px'}},
{t:'عبد الله بن يوسف',s:'white',r:'ثقة متقن',yr:'٢١٨ هـ',a:[['mosaic-gold',58,1,17,19]],m:'م       دق'},
{t:'يحيى بن بُكير',s:'white',r:'ثقة في الليث',yr:'٢٣١ هـ',a:[['star',55,1,18,17]],m:'م'},
{t:'سعيد بن سليمان',s:'gold',r:'ثقة حافظ',yr:'٢٢٥ هـ',m:'بص',ns:{top:'7px'}},
{t:'عبد الله بن مسلمة',s:'white',r:'ثقة عابد',yr:'٢٢١ هـ',a:[['mosaic-blue',58,1,17,18]],m:'بص'},
{t:'عبد الله بن يوسف',s:'white',r:'ثقة متقن',yr:'٢١٨ هـ',a:[['mosaic-gold',58,1,17,19]],m:'م       دق'},
{t:'قتيبة بن سعيد',s:'white',r:'ثقة ثبت',yr:'٢٤٠ هـ',a:[['horse',55,1,20,21]],m:'بل'},
{t:'أبو الوليد الطيالسي',s:'cyan',r:'ثقة ثبت',yr:'٢٢٧ هـ',m:'بص',ns:{top:'6px'}},
{t:'سليمان بن داود\nأبو الربيع',s:'stripe',r:'ثقة',yr:'٢٣٤ هـ',m:'بص',ns:{fontSize:'7.8px',top:'1px'}},
{t:'إسماعيل بن أبي\nأويس',s:'purple',r:'صدوق',yr:'٢٢٦ هـ',a:[['leaf',2,4,12,15]],ns:{fontSize:'7.8px',top:'2px'}},
{t:'عبد الله بن مسلمة',s:'white',r:'ثقة عابد',yr:'٢٢١ هـ',a:[['mosaic-blue',58,1,17,18]],m:'بص'},
{t:'عبد الله بن يوسف',s:'white',r:'ثقة متقن',yr:'٢١٨ هـ',a:[['mosaic-gold',58,1,17,19]],m:'م       دق'},
{t:'يحيى بن قزعة',s:'white',r:'مقبول',yr:'العاشرة',a:[['kaaba',0,14,15,13],['sun',52,3,23,15]],m:'م'},
{t:'محمد بن مقاتل',s:'purple',r:'',yr:'٢٢٦ هـ',a:[['kaaba',0,16,15,13]],m:'م       بغ       بص',ns:{top:'6px'}}
];
const edges=[31,64,98,130,165,197,230,263,296,330,363,396,428,462,495,528,559,596];
rows.forEach((r,i)=>{const h=edges[i+1]-edges[i];cell(360,edges[i],77,h,r.t,{style:r.s,rating:r.r,year:r.yr,band:[2,3,5,7,11,12,13].includes(i)?'#c3df9c':undefined,assets:r.a||[],marks:r.m?[[r.m,2,h-17]]:[],nameStyle:{fontSize:'8px',right:r.a?'18px':'3px',...r.ns},uncertain:true});cell(437,edges[i],22,h,String(170+i).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]),{style:'num',secondary:String(4965+i).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]),uncertain:true})});
