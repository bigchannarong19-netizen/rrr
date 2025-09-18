const examData = {
  TGAT1: [
    {
      stem: "Choose the correct word: She ___ to school every day.",
      choices: ["go", "goes", "going", "gone"],
      answer: 1,
      explain: "Third person singular needs 'goes'.",
      topic: "Grammar"
    },
    {
      stem: "Which sentence is correct?",
      choices: ["He don't like tea.", "He doesn't like tea.", "He not like tea.", "He isn't like tea."],
      answer: 1,
      explain: "Use 'doesn't' with he/she/it.",
      topic: "Grammar"
    },
    {
      stem: "Find the synonym of 'rapid'.",
      choices: ["slow", "quick", "late", "lazy"],
      answer: 1,
      explain: "'Rapid' ≈ 'quick'.",
      topic: "Vocabulary"
    },
    {
      stem: "Fill in: I'll call you ___ I arrive.",
      choices: ["until", "as soon as", "unless", "because"],
      answer: 1,
      explain: "'as soon as' fits immediate action.",
      topic: "Connectors"
    },
    {
      stem: "What is the main idea? 'Regular exercise improves health.'",
      choices: ["Exercise is boring.", "Exercise is harmful.", "Exercise benefits health.", "Avoid exercise."],
      answer: 2,
      explain: "Main idea is the benefit.",
      topic: "Reading"
    },
    {
      stem: "Choose the best response: 'Could you help me?'",
      choices: ["Sure, no problem.", "No I can't help ever.", "I won't.", "Help yourself."],
      answer: 0,
      explain: "Polite affirmative response.",
      topic: "Pragmatics"
    },
    {
      stem: "Choose the correct preposition: 'interested ___ science'",
      choices: ["on", "in", "at", "for"],
      answer: 1,
      explain: "Fixed phrase: interested in.",
      topic: "Preposition"
    },
    {
      stem: "Choose the correct form: 'If I ___ time, I will join.'",
      choices: ["have", "had", "having", "has"],
      answer: 0,
      explain: "First conditional uses present simple.",
      topic: "Conditionals"
    },
    {
      stem: "Reading: 'The museum opens at 9 am on weekdays.' When does it open?",
      choices: ["9 am", "10 am", "weekends", "never"],
      answer: 0,
      explain: "Stated explicitly.",
      topic: "Reading"
    },
    {
      stem: "Polite request: '___ you please open the window?'",
      choices: ["Do", "Shall", "Would", "May"],
      answer: 2,
      explain: "'Would you please...' is most polite.",
      topic: "Politeness"
    },
  ],
  TGAT2: [
    {
      stem: "ถ้า a=3, b=5 แล้ว 2a+3b เท่ากับ",
      choices: ["19", "21", "24", "29"],
      answer: 1,
      explain: "2*3 + 3*5 = 6 + 15 = 21 → ข้อ 2",
      topic: "คณิตพื้นฐาน"
    },
    {
      stem: "รูปสี่เหลี่ยมผืนผ้ากว้าง 4 ยาว 7 พท.เท่าไร",
      choices: ["11", "24", "28", "32"],
      answer: 2,
      explain: "4×7=28",
      topic: "เรขาคณิต"
    },
    {
      stem: "อนุกรม: 2, 6, 18, 54, ?",
      choices: ["108", "162", "216", "324"],
      answer: 1,
      explain: "คูณ 3 ทุกครั้ง: 54×3=162",
      topic: "ตรรกะ"
    },
    {
      stem: "ถ้าทุกแมวเป็นสัตว์เลี้ยง และมีแมวบางตัวเป็นสีขาว ⇒ ข้อใดจริง",
      choices: ["สัตว์เลี้ยงทั้งหมดเป็นสีขาว", "มีสัตว์เลี้ยงสีขาวบางตัว", "แมวทุกตัวสีขาว", "ไม่มีข้อถูก"],
      answer: 1,
      explain: "สรุปได้แค่ 'มีสัตว์เลี้ยงสีขาวบางตัว'",
      topic: "ตรรกะ"
    },
    {
      stem: "ค่าเฉลี่ยของ 3,5,7,9 เท่ากับ",
      choices: ["5", "6", "6.5", "7"],
      answer: 1,
      explain: "(3+5+7+9)/4 = 6",
      topic: "สถิติ"
    },
    {
      stem: "ความน่าจะเป็นออกหัวเมื่อโยนเหรียญยุติธรรม 1 ครั้ง",
      choices: ["0", "1/2", "1", "2"],
      answer: 1,
      explain: "เหรียญปกติ p=1/2",
      topic: "ความน่าจะเป็น"
    },
    {
      stem: "สมการ 3x-9=0 ⇒ x=",
      choices: ["-3", "0", "3", "9"],
      answer: 2,
      explain: "3x=9 ⇒ x=3",
      topic: "พีชคณิต"
    },
    {
      stem: "พื้นที่สามเหลี่ยมฐาน 10 สูง 6",
      choices: ["16", "24", "30", "60"],
      answer: 2,
      explain: "1/2×ฐาน×สูง = 30",
      topic: "เรขาคณิต"
    },
    {
      stem: "ถ้ารถวิ่ง 60 กม./ชม. 2 ชม. จะได้ระยะทาง",
      choices: ["30", "60", "100", "120"],
      answer: 3,
      explain: "s=vt = 60×2=120",
      topic: "อัตราเร็ว"
    },
    {
      stem: "เลือกข้อสรุปที่ถูกต้อง: 'นักเรียนทุกคนสอบผ่าน A-Level คณิต 1'",
      choices: ["มีนักเรียนบางคนไม่ผ่าน", "มีนักเรียนทุกคนผ่าน", "ไม่มีข้อมูล", "ทุกคนไม่ผ่าน"],
      answer: 1,
      explain: "บอกชัดว่าทุกคนผ่าน",
      topic: "ตรรกะ"
    },
  ],
  TGAT3: [
    {
      stem: "ตัวอย่างการแก้ปัญหาซับซ้อนที่ดีคือ",
      choices: ["กำหนดเป้าหมาย-วิเคราะห์สาเหตุ-ทดลองวิธี-ประเมินผล", "คาดเดา-ทำเลย-หวังผล", "รอเพื่อนสั่ง", "ทำแบบเดิมเสมอ"],
      answer: 0,
      explain: "วงจร PDCA ช่วยงานซับซ้อน",
      topic: "การแก้ปัญหา"
    },
    {
      stem: "การบริหารเวลา: วิธีใดเหมาะสุด",
      choices: ["ทำงานหลายอย่างพร้อมกันเสมอ", "ใช้ Pomodoro/Time-blocking", "เลื่อนงานยากตลอด", "ไม่ต้องวางแผน"],
      answer: 1,
      explain: "เทคนิคช่วยโฟกัสและพัก",
      topic: "เวลา"
    },
    {
      stem: "ตัวอย่างพลเมืองที่มีส่วนร่วม",
      choices: ["ไม่สนใจชุมชน", "ช่วยอาสา/รีไซเคิล/บริจาค", "ทำลายสาธารณะ", "ปลอมข่าว"],
      answer: 1,
      explain: "มีส่วนร่วมเชิงบวก",
      topic: "สังคม"
    },
    {
      stem: "สื่อสารในทีมที่ดี",
      choices: ["ไม่ฟังใคร", "ฟังเชิงรุก+สรุปประเด็น", "ตะโกนให้ดัง", "ไม่อัปเดต"],
      answer: 1,
      explain: "Active listening",
      topic: "ทีม"
    },
    {
      stem: "นวัตกรรมหมายถึง",
      choices: ["เลียนแบบเดิม", "คิดและสร้างคุณค่าใหม่", "ห้ามทดลอง", "ทำคนเดียว"],
      answer: 1,
      explain: "คุณค่าใหม่/ทดลอง/validation",
      topic: "นวัตกรรม"
    },
    {
      stem: "ความฉลาดทางอารมณ์ (EQ) คือ",
      choices: ["เก่งเลข", "รู้และจัดการอารมณ์ตนเอง/ผู้อื่น", "แข็งแรง", "พูดเก่ง"],
      answer: 1,
      explain: "Self-awareness, self-regulation, empathy",
      topic: "EQ"
    },
    {
      stem: "เครื่องมือจัดการงาน",
      choices: ["Gantt, Kanban, OKR", "ลูกดิ่ง", "ทอยลูกเต๋า", "ไพ่"],
      answer: 0,
      explain: "เครื่องมือวางแผนจริง",
      topic: "การจัดการ"
    },
    {
      stem: "ทัศนคติเติบโต (Growth mindset) คือ",
      choices: ["เชื่อว่าความสามารถพัฒนาได้", "เชื่อว่าตายตัว", "ไม่กล้าลอง", "หลีกเลี่ยง feedback"],
      answer: 0,
      explain: "พัฒนาโดยฝึกซ้อม/feedback",
      topic: "mindset"
    },
    {
      stem: "ความเสี่ยงโครงการลดได้โดย",
      choices: ["ไม่วางแผน", "ระบุความเสี่ยงและมาตรการล่วงหน้า", "คาดหวังโชคดี", "เก็บเป็นความลับ"],
      answer: 1,
      explain: "Risk register/mitigation",
      topic: "โครงการ"
    },
    {
      stem: "การสื่อสารมืออาชีพอีเมล",
      choices: ["หัวเรื่องชัด, ย่อหน้า, ปิดท้ายสุภาพ", "ไม่มีหัวเรื่อง", "ใส่อีโมจิมาก", "เขียนพิมพ์ใหญ่ทั้งหมด"],
      answer: 0,
      explain: "มาตรฐานงาน",
      topic: "สื่อสาร"
    },
  ],
  TPAT1: [
    {
      stem: "สัญญาณชีพใดบ่งภาวะช็อกมากสุด",
      choices: ["ชีพจรช้าเล็ก, BP ต่ำ, ผิวซีดเย็น", "ชีพจรปกติ, BP ปกติ", "ไข้ต่ำ", "ปวดศีรษะ"],
      answer: 0,
      explain: "classic shock signs",
      topic: "เวชศาสตร์"
    },
    {
      stem: "CPR ผู้ใหญ่ อัตรากดหน้าอก/ช่วยหายใจ",
      choices: ["15:2", "30:2", "5:1", "ไม่ต้องช่วยหายใจ"],
      answer: 1,
      explain: "มาตรฐาน BLS",
      topic: "CPR"
    },
    {
      stem: "โรคติดต่อทางเลือด",
      choices: ["ไข้เลือดออก", "ไวรัสตับอักเสบบี", "ไข้หวัด", "อาหารเป็นพิษ"],
      answer: 1,
      explain: "HBV blood-borne",
      topic: "สาธารณสุข"
    },
    {
      stem: "อาการไส้ติ่งอักเสบ",
      choices: ["ปวดเอวขวา", "ปวดท้องน้อยซ้าย", "ปวดรอบสะดือย้ายไปขวาล่าง", "ปวดทั่วท้อง"],
      answer: 2,
      explain: "McBurney point",
      topic: "ศัลยกรรมพื้นฐาน"
    },
    {
      stem: "การล้างมือทางการแพทย์ควรนานประมาณ",
      choices: ["5 วินาที", "10 วินาที", "20 วินาที", "60 วินาที"],
      answer: 2,
      explain: "WHO แนะนำ ≥20s",
      topic: "การควบคุมติดเชื้อ"
    },
    {
      stem: "Shock anaphylaxis ให้ยาแรก",
      choices: ["ยาพ่นหลอดลม", "Adrenaline IM", "ยาลดน้ำมูก", "ยาปฏิชีวนะ"],
      answer: 1,
      explain: "Epinephrine IM",
      topic: "ฉุกเฉิน"
    },
    {
      stem: "ภาวะขาดน้ำ สังเกตได้จาก",
      choices: ["ปัสสาวะสีเข้ม ปากแห้ง", "เหงื่อมาก", "ผิวแดงจัด", "น้ำหนักขึ้นทันที"],
      answer: 0,
      explain: "signs dehydration",
      topic: "เวชศาสตร์"
    },
    {
      stem: "X-ray ปอดเห็น infiltration บ่ง",
      choices: ["หักกระดูก", "ปอดอักเสบ", "ไส้ติ่ง", "ไทรอยด์"],
      answer: 1,
      explain: "pneumonia sign",
      topic: "รังสี"
    },
    {
      stem: "ตาแดงคันมีขี้ตาเหนียว",
      choices: ["ภูมิแพ้", "ติดเชื้อแบคทีเรีย", "ไวรัส", "ต้อหิน"],
      answer: 1,
      explain: "หนองเหนียวมัก bacteria",
      topic: "จักษุ"
    },
    {
      stem: "โรคเบาหวานวินิจฉัยด้วยค่าใด",
      choices: ["Hb 10", "FPG ≥126 mg/dL", "Na 140", "Cr 1"],
      answer: 1,
      explain: "เกณฑ์วินิจฉัยทั่วไป",
      topic: "ต่อมไร้ท่อ"
    },
  ],
  TPAT2: [
    {
      stem: "ทฤษฎีสัดส่วนทอง (Golden Ratio) ประมาณค่า",
      choices: ["1.118", "1.414", "1.618", "1.732"],
      answer: 2,
      explain: "φ≈1.618 ใช้ในองค์ประกอบศิลป์",
      topic: "ทฤษฎีศิลป์"
    },
    {
      stem: "หลัก Contrast ใช้เพื่อ",
      choices: ["ทำให้ภาพราบเรียบ", "สร้างจุดเด่นและลำดับสายตา", "ทำให้สีเท่ากัน", "ลดความชัด"],
      answer: 1,
      explain: "ความต่างของสี/รูปทรง/พื้นผิว",
      topic: "องค์ประกอบ"
    },
    {
      stem: "วัสดุสีฝุ่นต้องผสมกับ",
      choices: ["น้ำมันลินสีด", "น้ำ", "ตัวทำละลายแอลกอฮอล์", "กาวน้ำ"],
      answer: 3,
      explain: "Tempera/กาว",
      topic: "วัสดุ"
    },
    {
      stem: "ท่าทาง Gesture Drawing เน้น",
      choices: ["รายละเอียดเล็ก", "โครงสร้างการเคลื่อนไหว", "ลงสีละเอียด", "สัดส่วนใบหน้า"],
      answer: 1,
      explain: "จับพลังและ flow",
      topic: "ร่างภาพ"
    },
    {
      stem: "แนว Impressionism เด่นที่",
      choices: ["ลงสีเรียบ", "แสงธรรมชาติแปรผัน, ปาดพู่กันสั้น", "ภาพเหมือนเหมือนจริง", "ใช้เส้นขอบเข้ม"],
      answer: 1,
      explain: "Monet เป็นต้นแบบ",
      topic: "แนวทาง"
    },
    {
      stem: "พาเลตสี Monochrome คือ",
      choices: ["สีตรงข้าม", "โทนเดียวไล่เฉด", "สามเหลี่ยมสี", "เสริมกัน"],
      answer: 1,
      explain: "โทนเดียวหลายระดับค่า",
      topic: "สี"
    },
    {
      stem: "Perspectives แบบ 2 จุด ใช้เส้นขนานหายที่",
      choices: ["1 จุด", "2 จุด", "3 จุด", "ไม่มี"],
      answer: 1,
      explain: "two-point perspective",
      topic: "ทัศนียภาพ"
    },
    {
      stem: "Art Nouveau โดดเด่นด้วย",
      choices: ["เส้นโค้งพืชพรรณ", "เหลี่ยมจัด", "มินิมอล", "รูปทรงเรขาคณิตเข้ม"],
      answer: 0,
      explain: "organic lines",
      topic: "ประวัติศาสตร์ศิลป์"
    },
    {
      stem: "วัสดุแกะสลักไม้ที่นิยม",
      choices: ["สน", "สัก", "ยาง", "ตะเคียน"],
      answer: 1,
      explain: "เนื้อแน่น เหมาะงานแกะ",
      topic: "วัสดุ"
    },
    {
      stem: "เครื่องพิมพ์ภาพพิมพ์พื้นนูนคือ",
      choices: ["ลิโธกราฟ", "อินทาลิโอ", "วูดคัท", "ไซน์"],
      answer: 2,
      explain: "Woodcut = พื้นนูน",
      topic: "ภาพพิมพ์"
    },
  ],
  TPAT3: [
    {
      stem: "หน่วยของแรงไฟฟ้า (กฎคูลอมบ์) คือ",
      choices: ["นิวตัน", "จูล", "โวลต์", "แอมแปร์"],
      answer: 0,
      explain: "แรงวัดเป็นนิวตัน",
      topic: "ไฟฟ้า"
    },
    {
      stem: "กังหันลมเป็นการแปลงพลังงานจาก",
      choices: ["ศักย์→ความร้อน", "ศักย์→ไฟฟ้า", "จลน์ลม→ไฟฟ้า", "ไฟฟ้า→จลน์"],
      answer: 2,
      explain: "ลมหมุนกังหัน→ไฟฟ้า",
      topic: "พลังงาน"
    },
    {
      stem: "หน่วย SI ของงาน",
      choices: ["นิวตัน", "จูล", "วัตต์", "โวลต์"],
      answer: 1,
      explain: "งาน=พลังงาน=J",
      topic: "กลศาสตร์"
    },
    {
      stem: "วงจรอนุกรม กระแส",
      choices: ["เท่ากันทุกตัว", "แบ่งตามความต้านทาน", "ศูนย์", "แปรผันตามแรงดัน"],
      answer: 0,
      explain: "อนุกรม I เท่ากัน",
      topic: "ไฟฟ้า"
    },
    {
      stem: "อัลกอริทึม Big-O ใดเร็วสุด",
      choices: ["O(n^2)", "O(n log n)", "O(n)", "O(2^n)"],
      answer: 2,
      explain: "เชิงเส้นดีที่สุดในตัวเลือก",
      topic: "คอมพิวเตอร์"
    },
    {
      stem: "ฟังก์ชัน y=x^2 อนุพันธ์คือ",
      choices: ["2x", "x", "x^2/2", "คงที่"],
      answer: 0,
      explain: "d/dx x^2 = 2x",
      topic: "แคลคูลัส"
    },
    {
      stem: "pH=3 จัดเป็น",
      choices: ["กรดแรง", "กรดอ่อน", "กลาง", "เบส"],
      answer: 1,
      explain: "pH<7 กรด, ใกล้ 0 ยิ่งแรง",
      topic: "เคมี"
    },
    {
      stem: "เสา Euler คงรูป buckling แปรผันกับ",
      choices: ["L^2", "1/L^2", "L", "1/L"],
      answer: 1,
      explain: "Pcr ∝ 1/L^2",
      topic: "กลศาสตร์โครงสร้าง"
    },
    {
      stem: "การถ่ายเทความร้อนแบบพาคือ",
      choices: ["นำ", "พา", "แผ่รังสี", "ระเหย"],
      answer: 1,
      explain: "Convection",
      topic: "ถ่ายเท"
    },
    {
      stem: "ซอฟต์แวร์เวอร์ชันคอนโทรลยอดนิยม",
      choices: ["Git", "FTP", "SSH", "SMTP"],
      answer: 0,
      explain: "ใช้ติดตามโค้ด",
      topic: "ซอฟต์แวร์"
    },
  ],
  TPAT4: [
    {
      stem: "สัดส่วนมนุษย์ (แบบคลาสสิก) สูง ~กี่หัว",
      choices: ["4", "6", "7.5", "10"],
      answer: 2,
      explain: "มาตรฐาน 7.5–8 หัว",
      topic: "สถาปัตย์พื้นฐาน"
    },
    {
      stem: "สเกลแบบแปลน 1:100 หมายถึง",
      choices: ["1 ซม.=1 ม.", "1 ซม.=10 ม.", "1 ม.=100 ซม.", "100 ม.=1 ซม."],
      answer: 0,
      explain: "1 cm บนกระดาษ = 1 m จริง",
      topic: "สเกล"
    },
    {
      stem: "การระบายอากาศแบบ Cross ventilation คือ",
      choices: ["ลมเข้าทางเดียว", "ลมเข้าหลายทิศทาง", "ลมเข้าและออกต่างด้านกัน", "ไม่ระบาย"],
      answer: 2,
      explain: "เปิดช่องฝั่งตรงข้าม",
      topic: "สภาพแวดล้อม"
    },
    {
      stem: "ทิศทางแดดประเทศไทยเหมาะให้ช่องเปิดหลักหัน",
      choices: ["ตะวันออก+ตะวันตก", "เหนือ+ใต้", "เฉียงตะวันตกเฉียงใต้", "ทิศใดก็ได้"],
      answer: 1,
      explain: "เหนือใต้รับแสงอ้อม ลดร้อน",
      topic: "ภูมิอากาศ"
    },
    {
      stem: "พื้นผิวดูดกลืนเสียงดีควรมี",
      choices: ["ผิวเรียบแข็ง", "ผิวพรุน", "ผิวโลหะ", "ผิวแก้ว"],
      answer: 1,
      explain: "พรุนซับเสียงได้ดี",
      topic: "อะคูสติก"
    },
    {
      stem: "กำแพงกันดินใช้",
      choices: ["รับแรงดึง", "รับแรงเฉือน", "รับแรงดันดิน", "ระบายความร้อน"],
      answer: 2,
      explain: "หน้าที่หลักรับแรงดันดิน",
      topic: "โครงสร้าง"
    },
    {
      stem: "วัสดุฉนวนความร้อนที่ดี",
      choices: ["คอนกรีต", "กระจก", "โฟม", "เหล็ก"],
      answer: 2,
      explain: "โฟมนำความร้อนต่ำ",
      topic: "วัสดุ"
    },
    {
      stem: "คอนกรีตอัดแรงเพิ่มด้วย",
      choices: ["เพิ่มน้ำ", "เพิ่มทราย", "เพิ่มแรงดึงในลวด", "ลดเหล็กเสริม"],
      answer: 2,
      explain: "Prestress steel tendon",
      topic: "โครงสร้าง"
    },
    {
      stem: "แบบ Site plan แสดง",
      choices: ["รายละเอียดเฟอร์นิเจอร์", "ผังบริเวณอาคารและภูมิทัศน์", "ระบบไฟฟ้าภายใน", "ผนังตัด"],
      answer: 1,
      explain: "ผังบริเวณ",
      topic: "เอกสาร"
    },
    {
      stem: "ระยะเวลาพิจารณาแสงธรรมชาติ DLI มากดีต่อ",
      choices: ["โรงรถ", "โรงเรือนปลูกพืช", "โกดังมืด", "ห้องเซิร์ฟเวอร์"],
      answer: 1,
      explain: "พืชต้องการแสงเพียงพอ",
      topic: "สิ่งแวดล้อม"
    },
  ],
  TPAT5: [
    {
      stem: "หลักการสอนแบบ Active learning เน้น",
      choices: ["ครูบรรยาย", "ผู้เรียนลงมือทำ/คิด", "ท่องจำ", "ทำข้อสอบซ้ำ"],
      answer: 1,
      explain: "ผู้เรียนมีส่วนร่วม",
      topic: "การสอน"
    },
    {
      stem: "การวัดผลแบบรูบริก (Rubric) คือ",
      choices: ["คะแนนเดียว", "เกณฑ์หลายระดับชัดเจน", "สุ่มให้คะแนน", "ไม่มีเกณฑ์"],
      answer: 1,
      explain: "ระบุเกณฑ์คุณภาพแต่ละระดับ",
      topic: "วัดผล"
    },
    {
      stem: "เทคนิคตั้งคำถามกระตุ้นคิด",
      choices: ["Yes/No", "ปลายเปิด 5W1H", "คำหยาบ", "เฉลยให้เลย"],
      answer: 1,
      explain: "Open-ended ชวนคิด",
      topic: "ถามตอบ"
    },
    {
      stem: "แนวคิด Constructivism เชื่อว่า",
      choices: ["ความรู้ถ่ายทอดตรง", "ผู้เรียนสร้างความรู้จากประสบการณ์", "ไม่ต้องเรียน", "สื่อไม่สำคัญ"],
      answer: 1,
      explain: "เรียนรู้โดยลงมือและสะท้อนคิด",
      topic: "ทฤษฎี"
    },
    {
      stem: "แผนการสอนควรประกอบด้วย",
      choices: ["จุดประสงค์/กิจกรรม/สื่อ/การประเมิน", "ชื่อเรื่องอย่างเดียว", "สื่อเท่านั้น", "การบ้านอย่างเดียว"],
      answer: 0,
      explain: "องค์ประกอบหลัก",
      topic: "แผน"
    },
    {
      stem: "สื่อดิจิทัลที่เหมาะสะท้อนคิด",
      choices: ["บันทึกสะท้อน/พอร์ตโฟลิโอ", "เกมยิง", "เมม", "ไม่มีสื่อ"],
      answer: 0,
      explain: "Reflection & Portfolio",
      topic: "สื่อ"
    },
    {
      stem: "การจัดชั้นเรียนรวม (Inclusive) คือ",
      choices: ["แยกผู้เรียนต่างกัน", "รวมและสนับสนุนความหลากหลาย", "ไม่สนใจความต่าง", "ให้ทุกคนทำเหมือนกันหมด"],
      answer: 1,
      explain: "ปรับเพื่อทุกคนเข้าถึง",
      topic: "รวม"
    },
    {
      stem: "Classroom management ที่ดี",
      choices: ["กฎกติกาชัด/คาดหมาย/เสริมแรง", "ไม่มีข้อตกลง", "ลงโทษอย่างเดียว", "ปล่อยอิสระหมด"],
      answer: 0,
      explain: "ป้องกันก่อนแก้",
      topic: "บรรยากาศ"
    },
    {
      stem: "ประเมินเพื่อพัฒนา (Formative) คือ",
      choices: ["ปลายภาค", "ระหว่างเรียนเพื่อปรับปรุง", "วัดคุณสมบัติครู", "ไม่ประเมิน"],
      answer: 1,
      explain: "ช่วย feedback ต่อเนื่อง",
      topic: "ประเมิน"
    },
    {
      stem: "เทคโนโลยีช่วยสอน STEM ที่ดี",
      choices: ["เฉพาะสไลด์", "ทดลองจำลอง/โค้ด/หุ่นยนต์", "ไม่มีสื่อ", "แค่หนังสือ"],
      answer: 1,
      explain: "ลงมือจริง",
      topic: "STEM"
    },
  ],
};