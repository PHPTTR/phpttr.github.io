// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "แท็ก form จะมี 2 คำสั่งที่เกี่ยวข้องกับการทำงาน ทำให้สามารถส่งข้อมูลไปหาไฟล์ที่ต้องการได้ คือข้อใด ?",
    answer: "action , method",
    options: [
      "query , text",
      "type , value",
      "post , name",
      "action , method"
    ]
  },
  {
    numb: 2,
    question: "Method คือ การระบุรูปแบบการสื่อสารข้อมูล มีกี่ประเภทหลักอะไรบ้าง ?",
    answer: "2 ประเภท POST , GET",
    options: [
      "1 ประเภท NAME",
      "2 ประเภท POST , GET",
      "3 ประเภท VALUE , TYPE , TEXT",
      "ไม่มีข้อใดถูก"
    ]
  },  
  {
    numb: 3,
    question: "รูปแบบการสื่อสารข้อมูลใดเหมาะกับการส่งข้อมูลผ่าน form ที่ต้องการความปลอดภัย, รูปภาพ และข้อมูลขนาดใหญ่ ?",
    answer: "POST",
    options: [
      "POST",
      "VALUE",
      "GET",
      "QUERY"
    ]
  },  
  {
    numb: 4,
    question: "รูปแบบการสื่อสารข้อมูลใดเหมาะกับการส่งข้อมูลไม่เยอะ ไม่เน้นความปลอดภัย เพราะข้อมูลจะเป็นส่วนหนึ่งของ URL ของเว็บไซต์ ?",
    answer: "GET",
    options: [
      "POST",
      "VALUE",
      "GET",
      "QUERY"
    ]
  },  
  {
    numb: 5,
    question: "การส่งข้อมูลแบบ GET ข้อมูลจะเป็นส่วนหนึ่งของ URL ของเว็บไซต์เรียกว่าอะไร ?",
    answer: "Query string",
    options: [
      "Input type",
      "Option value",
      "Query string",
      "PhpMyAdmin"
    ]
  },  
  {
    numb: 6,
    question: "ถ้าต้องการพิมพ์ข้อความทั่วไปควรใช้ Input ใด ?",
    answer: "input type text",
    options: [
      "input type radio",
      "input type text",
      "input type password",
      "input type submit"
    ]
  }, 
  {
    numb: 7,
    question: "ถ้าต้องการพิมพ์รหัสผ่านควรใช้ Input ใด?",
    answer: "input type password",
    options: [
      "input type radio",
      "input type text",
      "input type password",
      "input type submit"
    ]
  },  
  {
    numb: 8,
    question: "ถ้าต้องการตัวเลือกที่เลือกได้อย่างใดอย่างหนึ่งควรใช้ Input ใด ?",
    answer: "input type radio",
    options: [
      "input type radio",
      "input type text",
      "input type password",
      "input type submit"
    ]
  },  
  {
    numb: 9,
    question: "ถ้าต้องการตัวเลือกที่เลือกได้หลายอย่างควรใช้ Input ใด ?",
    answer: "input type checkbox",
    options: [
      "input type reset",
      "input type submit",
      "input type select",
      "input type checkbox"
    ]
  },  
  {
    numb: 10,
    question: "ถ้าต้องการตัวเลือกที่เลือกได้หลายอย่างแบบ Drop down ควรใช้ Input ใด ?",
    answer: "input type select",
    options: [
      "input type reset",
      "input type submit",
      "input type select",
      "input type checkbox"
    ]
  },
  {
    numb: 11,
    question: "ถ้าต้องการส่งข้อมูลที่กรอกไว้ควรใช้ Input ใด ?",
    answer: "input type submit",
    options: [
      "input type reset",
      "input type submit",
      "input type select",
      "input type checkbox"
    ]
  },
  {
    numb: 12,
    question: "ถ้าต้องการเคลียร์ข้อมูลที่กรอกไว้ทั้งหมดควรใช้ Input ใด ?",
    answer: "input type reset",
    options: [
      "input type reset",
      "input type submit",
      "input type select",
      "input type checkbox"
    ]
  },
  {
    numb: 13,
    question: "ข้อใดคือโปรแกรมที่จำลองเครื่องคอมพิวเตอร์ให้เป็น Web Server ?",
    answer: "Appserv , XAMPP",
    options: [
      "Hamachi , Java",
      "EditPlus , Notepad",
      "Appserv , XAMPP",
      "Visual Studio Code , TLauncher"
    ]
  },
  {
    numb: 14,
    question: "การเข้าใช้งาน phpMyAdmin ข้อใด URL ที่ถูกต้อง ?",
    answer: "http://localhost/phpmyadmin/",
    options: [
      "http://localhost/appserv/",
      "http://localhost/phpmyadmin/",
      "http://localhost/xampp/",
      "http://localhost/mysql/"
    ]
  },
  {
    numb: 15,
    question: "ข้อใดคือคำสั่งสำหรับเชื่อมต่อฐานข้อมูล MySQL ?",
    answer: "mysqli_connect",
    options: [
      "mysqli_query",
      "mysqli_connectcheck",
      "mysqli_fetch_assoc",
      "mysqli_connect"
    ]
  },
  {
    numb: 16,
    question: "ข้อใดคือคำสั่งในการเช็คฟังก์ชั่นการเชื่อมต่อฐานข้อมูลว่าเชื่อมต่อได้หรือไม่ ?",
    answer: "if($con_nect -> connect_eror)",
    options: [
      "if($con_nect -> connect_test)",
      "if($con_nect -> connect_check)",
      "if($con_nect -> connect_failed)",
      "if($con_nect -> connect_eror)"
    ]
  },
  {
    numb: 17,
    question: "คำสั่งใดถ้าไม่สามารถเชื่อมต่อฐานข้อมูลได้จะทำงานในบล็อกการทำงาน ?",
    answer: "die",
    options: [
      "id",
      "root",
      "case",
      "die"
    ]
  },
  {
    numb: 18,
    question: "การใส่คำสั่งใดเป็นการทำ comment ไม่ให้แสดงผลในการนำไปใช้ในไฟล์อื่นๆ ?",
    answer: "//",
    options: [
      "!/",
      "//",
      "?/",
      "_/"
    ]
  },
  {
    numb: 19,
    question: "คำสั่งใดที่คืนค่าข้อมูลในฐานข้อมูลที่อยู่ในลักษณะเป็นแถวหรือว่าเป็น record ที่อยู่ในรูปแบบของอาร์เรย์ ?",
    answer: "mysqli_fetch_assoc",
    options: [
      "mysqli_query",
      "mysqli_connectcheck",
      "mysqli_fetch_assoc",
      "mysqli_connect"
    ]
  },
  {
    numb: 20,
    question: "คำสั่งใดเป็นคำสั่งในการเรียกใช้ไฟล์หรือแทรกคำสั่งในไฟล์ที่เรียกใช้ ?",
    answer: "require",
    options: [
      "import",
      "result",
      "equip",
      "require"
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