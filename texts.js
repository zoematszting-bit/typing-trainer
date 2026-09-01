/* ============================================================
   Typing Practice Texts — dual language (EN + ZH) for PSII
   ------------------------------------------------------------
   TEXTS_EN: Gov Docs / Legal / General / Symbols（英文，目標 40-50 wpm）
   TEXTS_ZH: 政府公文 / 通告啟事 / 會議記錄（中文，目標 20 字/分）
   考試輸入法：倉頡／速成（中文）；英文 Gov Docs 跟考試格式（句號後雙空格）
   ============================================================ */

const TEXTS_EN = {
  government: [
    "It is hereby notified for general information that the final register of electors for the year 2024 will be available for inspection at the office of the Electoral Registration Commission on the tenth floor of the Harbour Centre, twenty-five Harbour Road, Wan Chai, Hong Kong.  The register may be inspected during normal office hours from Monday to Friday, excluding public holidays.  Any person who discovers any inaccuracy in the register may lodge an objection in writing within fourteen days of the date of this notice.",

    "MEMORANDUM.  To all heads of departments.  From the Secretary for Administrative Services.  This memorandum serves to remind all colleagues of the revised procedures for the procurement of office supplies with effect from the first of next month.  All purchase requisitions must be submitted through the electronic procurement system not less than ten working days in advance.  Requisitions submitted after this period may be subject to delays in processing.  Heads of departments are requested to bring this memorandum to the attention of all staff under their supervision.",

    "A spokesman for the Transport Department announced today that temporary road closures will be implemented in the vicinity of the Convention Centre between the hours of eight in the morning and six in the evening on Sunday.  Motorists are advised to plan their routes in advance and to exercise patience when approaching the affected areas.  Public transport operators will arrange diversions where necessary.  Appropriate traffic signs will be provided on site to guide drivers.  For further information, members of the public may call the department hotline during normal office hours.",

    "The Civil Service Bureau invites applications for the post of Personal Secretary II.  Applicants should have Level 2 or above in five subjects in the Hong Kong Diploma of Secondary Education Examination, including Chinese Language and English Language.  Successful candidates will be required to pass a typing test with a speed of forty words per minute in English and twenty words per minute in Chinese.  The starting salary is at point four of the master pay scale.  Application forms may be obtained from any district office or downloaded from the bureau website.",

    "The minutes of the fourth quarterly meeting of the staff consultative committee were confirmed without amendment.  The chairman reported that the renovation works on the third floor would commence in the coming month and were expected to be completed within eight weeks.  Members discussed the arrangements for the relocation of temporary workstations.  It was agreed that each division would submit a list of equipment requirements to the administration section by the end of next week.  The date of the next meeting would be notified in due course.",

    "This circular supersedes all previous circulars on the subject of leave applications.  With effect from the beginning of next year, all applications for annual leave should be submitted through the human resources portal not less than seven calendar days in advance.  Applications involving leave of more than ten consecutive days require the prior approval of the director.  Officers are reminded that untaken annual leave may be forfeited at the end of the leave year unless prior approval for carry-forward has been obtained.",

    "Tenders are invited for the supply and delivery of office furniture to various government offices for a period of twenty-four months.  Tender documents may be obtained from the procurement unit on the fifth floor of the North Point Government Offices during office hours.  Completed tenders must be placed in the tender box located at the reception counter before noon on the closing date.  Late tenders will not be accepted.  The government does not bind itself to accept the lowest tender or any tender, and reserves the right to negotiate with any tenderer about the terms of the offer.",

    "The Working Group on Heritage Conservation today launched a three-month public consultation on proposed measures to protect historic buildings in the urban area.  The consultation document sets out a range of options, including financial incentives for owners and enhanced statutory protection.  Members of the public are invited to submit their views by post, by email, or through the online platform.  Public forums will be held in various districts, and details will be announced in due course.  All submissions will be made public unless confidentiality is specifically requested.",

    "The Immigration Department announced that the processing time for passport applications will be temporarily extended to ten working days due to system maintenance works.  Applicants who need to travel urgently may make an appointment for the expedited service at the branch offices.  It is reminded that applications should be submitted with all supporting documents, including copies of identity documents and recent photographs.  The department apologises for any inconvenience caused and thanks the public for their understanding and patience during the maintenance period.",

    "The Finance Committee is invited to approve a commitment of two hundred and fifty million dollars for the second phase of the building renovation programme.  The proposed works include the replacement of air-conditioning systems, the upgrading of fire service installations, and the improvement of barrier-free access.  Subject to approval, the works will commence in the third quarter of next year and will be completed within eighteen months.  The administration will provide quarterly progress reports to the public accounts committee.",
  ],

  legal: [
    "This Agreement shall be governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region. The parties hereby agree that any dispute arising out of or in connection with this contract shall be submitted to the exclusive jurisdiction of the Courts of Hong Kong. Neither party shall be liable for any delay or failure to perform its obligations where such delay is caused by circumstances beyond its reasonable control, including but not limited to natural disasters, strikes, or governmental actions.",

    "Pursuant to Section 10 of the Regulations, any person who wishes to apply for a licence must submit a completed application form together with the prescribed fee to the designated authority not less than thirty days before the commencement of the proposed activity. Failure to comply with the aforementioned requirement may result in the rejection of the application without further notice. The authority reserves the right to request additional documentation where deemed necessary.",

    "The Tenant shall pay the Landlord a monthly rent of Hong Kong Dollars in advance on or before the first day of each calendar month. In the event that the Tenant fails to pay the rent within seven days after the due date, the Landlord shall be entitled to terminate this tenancy agreement and re-enter the premises without prejudice to any other rights or remedies available to the Landlord under the law.",

    "All confidential information disclosed by one party to the other shall remain the sole and exclusive property of the disclosing party. The receiving party shall not, without the prior written consent of the disclosing party, disclose any such information to any third party and shall take all reasonable steps to ensure that its employees and agents observe the obligations of confidentiality set out herein.",

    "The Employee agrees that during the term of employment and for a period of twelve months following the termination thereof, the Employee shall not, directly or indirectly, engage in any business that competes with the Employer within the Hong Kong Special Administrative Region. Any breach of this clause shall entitle the Employer to claim damages and seek injunctive relief as may be appropriate in the circumstances.",

    "In accordance with the provisions of the Ordinance, every employer shall maintain accurate records of the working hours, wages, and leave entitlements of each employee for a period of not less than seven years. Such records shall be made available for inspection by an authorised officer upon request, and any wilful falsification of records shall constitute a criminal offence punishable by a fine and imprisonment.",

    "The Contractor warrants that all goods supplied under this Agreement shall conform in all material respects to the specifications set out in Schedule One and shall be free from defects in materials and workmanship for a minimum period of twelve months from the date of delivery. The Contractor shall, at its own expense, replace or repair any goods found to be defective within the said warranty period.",

    "Notice of any general meeting of the Company shall be given to every member entitled to attend and vote thereat not less than twenty-one clear days before the date appointed for the meeting. Such notice shall specify the place, date, and time of the meeting and shall contain a statement of the general nature of the business to be transacted. An accidental omission to give notice shall not invalidate the proceedings.",

    "The Purchaser shall inspect all goods upon delivery and shall notify the Supplier in writing of any shortage, damage, or non-conformity within forty-eight hours of receipt. If the Purchaser fails to give such notice, the goods shall be deemed to have been accepted in all respects and the Supplier shall have no further liability in respect thereof save as expressly provided in these terms.",

    "Each party to this Agreement represents and warrants that it has full power and authority to enter into and perform its obligations hereunder, that the execution of this Agreement has been duly authorised, and that this Agreement constitutes a legal, valid, and binding obligation enforceable in accordance with its terms. No waiver of any breach shall constitute a continuing waiver.",

    "The data controller shall take all practicable steps to ensure that personal data held by it is accurate having regard to the purpose for which it is to be used. Personal data shall not be kept longer than is necessary for the fulfilment of the purpose for which it is collected. Data subjects shall have the right to request access to and correction of their personal data held by the controller.",
  ],

  general: [
    "The art of effective communication lies not merely in the words we choose, but in the manner in which we deliver them. A skilled communicator understands that tone, pace, and body language often convey more meaning than the actual content of the message. Whether in a formal business meeting or a casual conversation with friends, the ability to express oneself clearly and listen attentively is an invaluable skill that can be developed through patience and constant practice over the years.",

    "Coffee is one of the most widely consumed beverages in the world, with millions of people relying on it to start their day. The drink is prepared from roasted coffee beans, which are the seeds of berries from the plant. Coffee plants are cultivated in over seventy countries, primarily in the equatorial regions of the Americas, Southeast Asia, India, and Africa. The two most commonly grown varieties are arabica and robusta, each with its own distinct flavour profile.",

    "Regular exercise has been shown to have numerous benefits for both physical and mental well-being. Studies indicate that engaging in at least thirty minutes of moderate activity each day can reduce the risk of heart disease, strengthen bones and muscles, and improve overall mood. Furthermore, exercise releases endorphins in the brain, which are natural chemicals that help to alleviate stress and promote a sense of happiness and relaxation throughout the body.",

    "The concept of time management has become increasingly important in the modern workplace, where employees are often expected to handle multiple tasks simultaneously. Effective time management involves prioritising activities according to their urgency and importance, setting realistic deadlines, and avoiding distractions that can derail productivity. Those who master this skill tend to experience less stress and achieve better results in both their personal and professional endeavours.",

    "Hong Kong is renowned for its stunning skyline, which features more skyscrapers than any other city in the world. The combination of dense urban development and lush green mountains creates a visual landscape that is truly unique. The city is also famous for its culinary scene, offering everything from traditional street food at local markets to fine dining at restaurants that have earned international recognition and prestigious awards.",

    "The invention of the printing press by Johannes Gutenberg in the fifteenth century marked a turning point in human history. Before this innovation, books were copied by hand, making them expensive and accessible only to the wealthy elite. The printing press made it possible to produce books quickly and cheaply, which led to a dramatic increase in literacy rates across Europe and the spread of new ideas during the Renaissance and the Scientific Revolution.",

    "Reading is one of the most effective ways to expand vocabulary and improve writing skills. When we read extensively, we encounter words and sentence structures that we might not come across in everyday conversation. Over time, these patterns become embedded in our minds, allowing us to express our own thoughts with greater precision and elegance. This is why educators consistently recommend reading as a daily habit for learners of all ages.",

    "The ocean covers more than seventy percent of the surface of the Earth and remains largely unexplored despite decades of scientific research. Marine biologists estimate that millions of species have yet to be discovered in the deep sea, where sunlight cannot penetrate and conditions are unlike anything found on land. The exploration of these depths requires sophisticated technology and continues to yield surprising discoveries year after year.",

    "Maintaining a healthy work-life balance has become a priority for many professionals in recent years. Employers are increasingly recognising that employees who have time for family, hobbies, and rest are more productive and engaged during working hours. Flexible working arrangements, including remote work and adjustable hours, have become common features of modern employment contracts in many industries around the world today.",

    "The changing of the seasons is a natural phenomenon that has fascinated humans since the earliest days of civilisation. Spring brings renewal and growth, summer warmth and abundance, autumn a gradual transition and harvest, and winter a period of rest and reflection. Each season carries its own distinct characteristics and has inspired countless works of art, literature, and music throughout recorded history across many different cultures.",

    "Learning a new language is a rewarding endeavour that opens doors to different cultures and ways of thinking. Research suggests that bilingual individuals may enjoy certain cognitive advantages, including improved problem-solving abilities and delayed onset of mental decline in later life. The process requires dedication and consistency, but the ability to communicate with people from diverse backgrounds makes the effort worthwhile for those who persevere.",
  ],

  symbols: [
    "On 15th March 2024, the Annual General Meeting was held at Room 1205, 12/F, Tower 1, Admiralty Centre, 18 Harcourt Road, Hong Kong. Total attendance: 247 members. The CEO, Dr. K.M. Wong, reported a revenue growth of 18.5% (approx. HKD 3.2 million). Resolutions 1-3 were passed; Resolution 4 was rejected by 52% vote. Next meeting: 3rd Thursday of September 2024 at 10:00 a.m.",

    "Please contact Mr. Jonathan P. Spencer at (852) 2890-1234 or email j.spencer@company.com.hk. Office hours: Mon-Fri, 9:00 a.m. - 6:30 p.m. (closed on public holidays). Postal address: Flat C, 15/F, Block 2, Ocean Shores, 88 O King Road, Tseung Kwan O, N.T., Hong Kong. For urgent enquiries after hours, call our 24/7 hotline: 9123-4567.",

    "The invoice #2024-0837 dated 22/07/2024 includes: Item A (qty: 12 @ $45.50 = $546.00); Item B (qty: 3 @ $120.00 = $360.00); Sub-total: $906.00; Discount (15%): -$135.90; Total payable: $770.10. Payment due within 30 days. Late fee: 1.5% per month. Account No.: 003-456-789012 (HSBC). Please quote ref: INV-0837-AR.",

    "Flight CX-881 departs Hong Kong (HKG) at 23:55, arriving at Los Angeles (LAX) at 21:30 (same day, due to time zone). Gate: 63. Seat: 26A (window). Terminal: 1. Estimated duration: 12h 35m. Passenger: CHAN, Tai Man (MR). Booking ref: ABC123D. Baggage allowance: 30kg (checked) + 7kg (carry-on). Gate closes 20 min before departure.",

    "Subject: URGENT — Meeting Rescheduled. Dear Colleagues, Please note that the Q3 2024 Departmental Review originally scheduled for 31/08/2024 (Wed) at 2:30 p.m. has been POSTPONED to 05/09/2024 (Thu) at 10:00 a.m. in Conference Room B (3/F). Agenda items: (a) Budget 2024-25; (b) HR Policy Updates; (c) IT Infrastructure. Apologies to: Ms. Lee, Mr. Patel. — J. Spencer, Admin Officer.",

    "Car registration: LV-7896. Model: Toyota Corolla 1.8L (2022). Colour: Silver. Mileage: 34,512 km. Last service: 08/2024 (Wah Ming Motors, Kwun Tong). Next service due: 02/2025 or 40,000 km (whichever sooner). Insurance: BOC Group (Policy No. HK-2024-A-556782), expires 14/03/2025. Road tax valid until 30/06/2025. Parking permit: Zone 3, Lot #127-B.",

    "Website: https://www.example.org.hk/portal/login | Username: TMan.C@88 | Password: Hk$2024_Pw#9 | 2FA code: sent to +852-9876-5432. Server IP: 192.168.1.50:8080. API key: aB3kX9$mN2pQ7&vW5. Database: MySQL v8.0.35 (hosted on AWS, region: ap-east-1). SSL certificate renewal: 30 days before 31/12/2024.",

    "The recipe requires: 2-1/4 cups flour; 1 tsp baking soda; 1 tsp salt; 1 cup (2 sticks) butter; 3/4 cup sugar; 3/4 cup brown sugar; 2 large eggs; 2 tsp vanilla extract; 2 cups chocolate chips. Bake at 190C (375F) for 9-11 minutes. Yield: approx. 48 cookies. Prep time: 15 min. Total time: 25 min. Store in airtight container for up to 7 days.",

    "Weather forecast — Hong Kong, 15/10/2024 (Tue): Sunny periods. Temperature: 26C - 31C. Humidity: 65-85%. Wind: E 20-30 km/h. UV index: 8 (Very High). Sunset: 5:42 p.m. Air Quality Health Index (AQHI): 4 (Moderate). Chance of rain: 10%. Tomorrow: 27-32C, partly cloudy. Outlook: A weak NE monsoon arrives late Thursday.",

    "Survey Results (N=1,243 respondents): 'Very Satisfied' — 38.5% (479); 'Satisfied' — 31.2% (388); 'Neutral' — 18.4% (229); 'Dissatisfied' — 8.6% (107); 'Very Dissatisfied' — 3.3% (40). Mean rating: 3.93/5.0. Margin of error: ±2.8% (95% CI). Top 3 improvement areas: (1) Response time; (2) Staff attitude; (3) Website usability. Response rate: 74.3%.",

    "Press Release — For Immediate Release. HONG KONG, 28 August 2024 — GlobalTech Ltd. (HKEX: 0808) today announced its interim results for the six months ended 30/06/2024. Revenue rose 22.7% YoY to HKD 845.6 million. Net profit: HKD 112.3 million (EPS: HK 0.28). Interim dividend: HK 0.08/share. Record date: 18/09/2024. Payment date: 03/10/2024. — End —",
  ],

};

const TEXTS_ZH = {
  gov: [
    "茲通知，二零二四年正式選民登記冊現已備妥，可供公眾人士於星期一至星期五辦公時間內（公眾假期除外），前往選舉事務處查閱。選民登記冊亦已上載至本處網頁。任何人士如發現登記冊內有欠妥之處，可於本公告刊憲後十四日內，以書面方式向選舉事務處提出反對或更正要求。查閱選民登記冊無需預約。如有查詢，請於辦公時間內致電選舉事務處熱線。",

    "各部門主管請注意：由下月一日起，所有辦公室用品的採購申請，均須透過電子採購系統提交，並須於不少於十個工作天前遞交。逾期遞交的申請，處理時間或會有所延誤。各部門主管請將本通告的內容傳達予轄下所有員工。如對新安排有任何疑問，請聯絡行政組。特此通告。",

    "運輸署今日宣布，因應星期日在會議中心附近舉行的活動，介乎上午八時至下午六時期間，該區一帶將實施臨時道路封閉。駕駛人士請預早計劃行程，並在駛經受影響路段時保持忍讓。公共交通營辦商將因應情況安排改道。現場將設置適當交通標誌，指導駕駛人士。市民如欲查詢詳情，可於辦公時間內致電運輸署熱線。",

    "公務員事務局現邀請合資格人士申請二級私人秘書職位。申請人須在香港中學文憑考試五科考獲第2級或以上成績，其中包括中國語文及英國語文科。獲取錄的申請人須通過打字速度測驗，即英文每分鐘不少於四十字，中文每分鐘不少於二十字。起薪點為總薪級表第4點。申請表格可於各區民政事務處索取，或於本局網頁下載。",

    "職員協商委員會第四次季度會議紀錄獲確認通過，並無修訂。主席匯報，三樓翻新工程將於下月展開，預計於八星期內完成。委員商討了臨時工作間的搬遷安排，並同意各分部須於下週結束前，向行政組提交所需設備清單。下次會議日期將另行通知。",

    "本通函取代以往所有關於假期申請的通函。由下年度開始，所有年假申請須經人力資源網上系統遞交，並須於不少於七個曆日前提出。連續假期超過十天的申請，須事先獲得署長批准。各人員請留意，除非事先獲批准結轉，未放取的年假或會於假期年度結束時被取消。",

    "現邀請承辦商投標，為各政府辦事處供應及運送辦公室傢具，為期二十四個月。標書文件可於辦公時間內，向北角政府合署五樓採購組索取。已填妥的標書須於截止日期中午十二時前，放入接待處的投標箱內。逾期遞交的標書概不受理。政府不一定採納出價最低的標書或任何標書，並保留與任何投標者磋商投標條款的權利。",

    "文物保護工作小組今日展開為期三個月的公眾諮詢，就保護市區歷史建築的建議措施徵詢市民意見。諮詢文件列出多項方案，包括向業主提供財政誘因，以及加強法定保護。市民可透過郵寄、電郵或網上平台提交意見。當局將於各區舉行公眾論壇，詳情稍後公布。除非申請人特別要求保密，所有意見書將會公開。",

    "入境事務處宣布，因系統維修工程，旅行證件申請的處理時間將暫時延長至十個工作天。有急需外遊的申請人，可預約前往分處使用加快服務。申請時請備齊所有證明文件，包括身份證明文件副本及近照。對於工程期間造成的不便，本處深表歉意，並感謝市民體諒。",

    "財務委員會現請批准承擔額為二億五千萬元的撥款，以進行大樓翻新計劃第二期工程。建議工程包括更換空調系統、提升消防裝置，以及改善無障礙通道設施。如獲批准，工程將於下年度第三季展開，並預計於十八個月內完成。當局會每季向立法會政府帳目委員會提交進度報告。",
  ],

  notice: [
    "敬啟者：本處遷址通知。由本年十月一日起，本處辦事處將遷往新址辦公，地址為九龍尖沙咀東部麼地道某號某大廈十樓。電話號碼及電郵地址維持不變。搬遷期間，部分服務或會暫停，敬請留意本處網頁公布。對於搬遷期間造成的不便，本處謹此致歉。如有任何查詢，歡迎於辦公時間內聯絡本處職員。此致",

    "康樂及文化事務署宣布，轄下多個體育館及游泳池將於下月一日起調整開放時間。星期一至星期五的開放時間為上午七時至晚上十一時，星期六、日及公眾假期為上午八時至晚上十時。每月第一個星期一暫停開放，以進行定期保養工程。市民可瀏覽本署網頁查閱各場館的詳細開放時間，或致電查詢熱線。",

    "屋宇署提醒市民，任何人士如欲進行建築工程，必須事先向建築事務監督提交圖則並取得批准。未經批准而進行建築工程屬違法行為，一經定罪，最高可處罰款及監禁。業主如對建築工程的法定要求有任何疑問，可諮詢專業人士或聯絡本署。本署亦提供免費講座，詳情請瀏覽本署網頁。",

    "食物環境衞生署今日提醒食物業處所持牌人，必須時刻遵守持牌條件及有關法例的規定，保持處所清潔衞生。本署人員會定期巡查持牌處所，如發現違規情況，將採取執法行動，包括提出檢控、暫時吊銷或取消牌照。市民如發現食物業處所有衞生問題，可致電本署熱線舉報。",

    "香港郵政宣布，因應系統升級，網上郵件追蹤服務將於本週末晚上十時至翌日上午六時暫停。期間櫃位服務及郵件派遞不受影響。服務恢復正常後，市民可如常使用網上服務查詢郵件狀態。是次升級旨在提升系統的穩定性及效率。對於升級期間造成的不便，本處敬請市民諒解。",
  ],

  minutes: [
    "會議記錄。日期：三月十五日。時間：下午二時三十分。地點：會議室甲。出席者：所有部門主管。主席宣布會議開始，並確認上次會議記錄。行政組匯報上月工作進度，各項計劃均如期進行。財務組報告本年度預算執行情況，開支較預期為低。人事組匯報招聘進度，現有三個職位空缺正在招聘中。下次會議定於四月十五日舉行。會議於下午四時結束。",

    "跨部門協調會議記錄摘要。主席首先感謝各部門代表出席。第一項議程為年度工作計劃檢討，各部門須於兩星期內提交修訂版本。第二項議程為資訊系統更新，資訊組將於下月進行系統測試，各部門須指派一名聯絡人配合。第三項議程為辦公室安全演習，日期定於月底前完成。會上並無其他事項討論。",

    "員工溝通小組會議記錄。小組討論了改善辦公室環境的建議，包括增設休息室及改善照明設備。管理層代表回應，會認真考慮各項建議，並於下次會議交代跟進情況。小組亦討論了員工培訓計劃，來年將增加培訓名額，並引入網上學習平台。會議記錄將於三日內以電郵發送各成員確認。",
  ],

};

/* 目前語言嘅素材表（由 typing-trainer.html 切換） */
let TEXTS = TEXTS_EN;
