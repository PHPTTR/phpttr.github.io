// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "การประกาศตัวแปรจะต้องขึ้นต้นด้วย ?",
    answer: "$",
    options: [
      "!",
      "#",
      "$",
      "?"
    ]
  },
  {
    numb: 2,
    question: "การประกาศตัวแปรสามารถใช้สัญลักษณ์ _ (underscore) ขึ้นต้นได้หรือไม่ ?",
    answer: "ได้ และสามารถนำไปประกอบในตัวแปรได้",
    options: [
      "ไม่ได้",
      "ได้ แค่ขึ้นต้น",
      "ได้ และสามารถนำไปประกอบในตัวแปรได้",
      "ถูกทุกข้อ"
    ]
  },
  {
    numb: 3,
    question: "ชนิดข้อมูลที่นำเอาตัวอักษร ตัวเลข และเครื่องหมายต่าง ๆ มาประกอบกันเป็นข้อความ คือข้อใด ?",
    answer: "กลุ่มอักขระ (string)",
    options: [
      "เลขจำนวนเต็ม (Integer)",
      "กลุ่มอักขระ (string)",
      "ตรรกะ (boolean)",
      "เลขทศนิยม (Floating-Point Number)"
    ]
  },
  {
    numb: 4,
    question: "ข้อมูลที่เก็บค่า true (จริง) หรือ false (เท็จ) คือข้อใด ?",
    answer: "ตรรกะ (boolean)",
    options: [
      "เลขจำนวนเต็ม (Integer)",
      "อาร์เรย์ (Array)",
      "ตรรกะ (boolean)",
      "เลขทศนิยม (Floating-Point Number)"
    ]
  },
  {
    numb: 5,
    question: "ข้อมูลชนิดเลขจำนวนเต็ม ทั้งจำนวนเต็มบวก จำนวนเต็มลบ และจำนวนศูนย์ <br>คือข้อใด ?",
    answer: "เลขจำนวนเต็ม (Integer)",
    options: [
      "เลขจำนวนเต็ม (Integer)",
      "กลุ่มอักขระ (string)",
      "อาร์เรย์ (Array)",
      "เลขทศนิยม (Floating-Point Number)"
    ]
  },
  {
    numb: 6,
    question: "ข้อมูลชนิดใดเป็นค่าทศนิยมที่เป็นจำนวนบวก จำนวนลบ หรือรูปแบบตัวเลขทางวิทยาศาสตร์ คือข้อใด ?",
    answer: "เลขทศนิยม (Floating-Point Number)",
    options: [
      "อาร์เรย์ (Array)",
      "กลุ่มอักขระ (string)",
      "ตรรกะ (boolean)",
      "เลขทศนิยม (Floating-Point Number)"
    ]
  },
  {
    numb: 7,
    question: "การเก็บข้อมูลชนิดเดียวกัน โดยสามารถเก็บค่าข้อมูลได้หลายค่า โดยข้อมูลใน () จะเรียกว่า index เริ่มตั้งแต่ 0 เช่น $num[0] , $num[1] คือข้อใด ?",
    answer: "อาร์เรย์ (Array)",
    options: [
      "อาร์เรย์ (Array)",
      "เลขจำนวนเต็ม (Integer)",
      "เลขทศนิยม (Floating-Point Number)",
      "กลุ่มอักขระ (string)"
    ]
  },
  {
    numb: 8,
    question: "ข้อใดคือตัวดำเนินการทางคณิตศาสตร์ที่ถูกต้อง ?",
    answer: "+ - * / %",
    options: [
      "+ - / $ |",
      "+ - * / %",
      "= - + * /",
      "# = + - =="
    ]
  },
  {
    numb: 9,
    question: "ตัวดำเนินการเพิ่มและลดค่าของภาษา PHP คือข้อใด ?",
    answer: "++$x; และ --$x;",
    options: [
      "==$x; และ --$x;",
      "__$x; และ //$x;",
      "==$x; และ **$x;",
      "++$x; และ --$x;"
    ]
  },
  {
    numb: 10,
    question: "ตัวดำเนินการกำหนดค่า คือข้อใด ?",
    answer: "+= , -= , *= , /= , %=",
    options: [
      "-= , %= , == , /= , +=",
      "++ , -- , ** , // , %%",
      "+= , -= , *= , /= , %=",
      "+= , *= , -= , /= , =="
 ]
 },
 {
  numb: 11,
  question: "ตัวดำเนินการเปรียบเทียบ คือข้อใด ?",
  answer: "== , !=,<> , < , <= , > , >=",
  options: [
    "== , !=,<> , < , <= , > , >=",
    "!=,<> , =+ , <> , <= , <> , >=",
    "=/= , !=,>< , < , -= , > , >/",
    "=+= , ?=,<< , < , == , > , >=<"
]
},
{
  numb: 12,
  question: "ตัวดำเนินการใดเปรียบเทียบว่าค่าเท่ากันหรือไม่ ?",
  answer: "==",
  options: [
    "/=",
    "==",
    "!= , <>",
    "=!"
  ]
},
{
  numb: 13,
  question: "ตัวดำเนินการใดเปรียบเทียบว่าค่าไม่เท่ากันหรือไม่ ?",
  answer: "!= , <>",
  options: [
    "/=",
    "==",
    "!= , <>",
    "=!"
  ]
},
  {
    numb: 14,
    question: "ตัวดำเนินการตรรกะของ PHP ใดตัวแปรจะต้องเป็นจริงทั้งคู่ ?",
    answer: "and",
    options: [
      "or",
      "?",
      "and",
      "!"
    ]
  },
  {
    numb: 15,
    question: "ตัวดำเนินการตรรกะของ PHP ใดตัวแปรจะเป็นจริงทั้งคู่หรือตัวเดียวก็ได้ ?",
    answer: "or",
    options: [
      "or",
      "?",
      "and",
      "!"
    ]
  },
  {
    numb: 16,
    question: "คำสั่งใดใช้เปรียบเทียบกรณีมีเงื่อนไขเดียว ?",
    answer: "if",
    options: [
      "if else",
      "if",
      "switch",
      "if elseif else"
    ]
  },
  {
    numb: 17,
    question: "คำสั่งใดใช้เปรียบเทียบกรณีมี 2 เงื่อนไข ?",
    answer: "if else",
    options: [
      "if else",
      "if",
      "switch",
      "if elseif else"
    ]
  },
  {
    numb: 18,
    question: "คำสั่งใดใช้เปรียบเทียบกรณีมีหลายเงื่อนไข ?",
    answer: "if elseif else",
    options: [
      "if else",
      "if",
      "switch",
      "if elseif else"
    ]
  },
  {
    numb: 19,
    question: "คำสั่งใดนำตัวแปรไปเปรียบเทียบในแต่ละคำสั่งในบล็อก case ?",
    answer: "switch",
    options: [
      "default",
      "if else",
      "switch",
      "break"
    ]
  },
  {
    numb: 20,
    question: "ใช้คำสั่งใดเพื่อสร้างเงื่อนไขในการนำตัวแปรมาเปรียบเทียบ",
    answer: "case",
    options: [
      "switch",
      "case",
      "default",
      "break"
  ]
  },
  {
    numb: 21,
    question: "คำสั่งใดเป็นการสั่งให้โปรแกรมออกจากคำสั่ง switch หากเจอเงื่อนไขแล้ว ?",
    answer: "break",
    options: [
      "default",
      "if else",
      "switch",
      "break"
    ]
  },
  {
    numb: 22,
    question: "คำสั่งใดกำหนดการทำงาน ในกรณีไม่เข้าเงื่อนไขใด ๆ ของเงื่อนไขในแต่ละ case ?",
    answer: "default",
    options: [
      "default",
      "if else",
      "switch",
      "break"
    ]
  },
  {
    numb: 23,
    question: "คำสั่งวนซ้ำใดเหมาะสำหรับการทำงานในจำนวนรอบที่แน่นอน ?",
    answer: "for",
    options: [
      "while",
      "for",
      "do while",
      "print"
    ]
  }, 
  {
    numb: 19,
    question: "ภายในบล็อกการวนซ้ำจะอยู่ภายในเครื่องหมายอะไร ?",
    answer: "{ }",
    options: [
      "[ ]",
      "( )",
      "{ }",
      "< >"
    ]
  }, 
  {
    numb: 25,
    question: "คำสั่งใดจะทำงานภายใน Loop ก่อนอย่างน้อยหนึ่งรอบและตรวจสอบเงื่อนไขในภายหลัง ?",
    answer: "do while",
    options: [
      "while",
      "for",
      "do while",
      "print"
    ]
  },

  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];