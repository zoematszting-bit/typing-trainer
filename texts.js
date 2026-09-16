/* ============================================================
   Typing Practice Texts — dual language (EN + ZH) for PSII
   ------------------------------------------------------------
   TEXTS_EN: Gov Docs / Legal / General / Symbols（英文，目標 40-50 wpm）
   TEXTS_ZH: 政府公文 / 通告啟事 / 會議記錄（中文，目標 20 字/分）
   考試輸入法：倉頡／速成（中文）；英文 Gov Docs 跟考試格式（句號後雙空格）
   ============================================================ */

const TEXTS_EN = {
  government: [
    "Tenders are invited for the supply and delivery of office furniture to various government offices for a period of twenty-four months.  Tender documents may be obtained from the procurement unit on the fifth floor of the North Point Government Offices during office hours.  Completed tenders must be placed in the tender box located at the reception counter before noon on the closing date.  Late tenders will not be accepted.  The government does not bind itself to accept the lowest tender or any tender, and reserves the right to negotiate with any tenderer about the terms of the offer.",

    "The Working Group on Heritage Conservation today launched a three-month public consultation on proposed measures to protect historic buildings in the urban area.  The consultation document sets out a range of options, including financial incentives for owners and enhanced statutory protection.  Members of the public are invited to submit their views by post, by email, or through the online platform.  Public forums will be held in various districts, and details will be announced in due course.  All submissions will be made public unless confidentiality is specifically requested.",

    "The Immigration Department announced that the processing time for passport applications will be temporarily extended to ten working days due to system maintenance works.  Applicants who need to travel urgently may make an appointment for the expedited service at the branch offices.  It is reminded that applications should be submitted with all supporting documents, including copies of identity documents and recent photographs.  The department apologises for any inconvenience caused and thanks the public for their understanding and patience during the maintenance period.",

    "The Finance Committee is invited to approve a commitment of two hundred and fifty million dollars for the second phase of the building renovation programme.  The proposed works include the replacement of air-conditioning systems, the upgrading of fire service installations, and the improvement of barrier-free access.  Subject to approval, the works will commence in the third quarter of next year and will be completed within eighteen months.  The administration will provide quarterly progress reports to the public accounts committee.",

    "The Water Supplies Department announced today that essential maintenance works will be carried out on the main water pipes along Nathan Road between Tsim Sha Tsui and Yau Ma Tei from next Monday.  During the works, water supply to the affected areas will be suspended from eleven in the evening until six the following morning.  Residents are advised to store water in advance.  Water tankers will be stationed at designated locations to provide emergency supply.  The department apologises for any inconvenience caused and will complete the works as soon as practicable.",

    "Pursuant to the Building Maintenance Regulations, owners of buildings aged thirty years or above are required to submit a mandatory building inspection report within the coming year.  The inspection must be carried out by a registered professional and shall cover the structural safety, fire service installations, and drainage systems.  Owners who fail to comply may be subject to a fine and a compensation order.  Application forms may be obtained from the Buildings Department or downloaded from its website.  Enquiries may be made during office hours.",

    "The Civil Service Training Institute invites nominations for the executive writing programme commencing next month.  The programme aims to enhance participants' skills in preparing official documents, including memoranda, minutes, and press releases.  Sessions will be held on Wednesday afternoons over eight weeks at the institute's headquarters.  Nominations should be submitted through departmental training officers not later than the fifteenth of this month.  As places are limited, early nomination is recommended.  Enrolment confirmation will be issued by email.",

    "The Tree Management Office reminded members of the public to report any trees showing signs of decay or structural weakness in public areas.  Reports may be made through the hotline or the mobile application, and should include the location, species if known, and a description of the condition.  Owners of private trees are also urged to arrange regular inspections by qualified arborists, particularly before and after the wet season.  The office will conduct risk assessments on reported trees within fourteen working days and will carry out mitigation measures where necessary.",

    "Hongkong Post announced that owing to the relocation of the Central Post Office counter services, the existing counter will cease operation at the close of business on the twenty-eighth of this month.  Services will resume at the new premises on the following Monday at nine in the morning.  Post office box holders may collect their mail from the new location with effect from the same date.  All stamp sales, postal remittance, and courier services will remain available at district branches during the transition.",

    "The Labour Department will hold a two-day recruitment fair next week at the exhibition centre to assist job seekers ahead of the seasonal peak.  More than forty employers from the retail, catering, and logistics sectors will offer on-the-spot interviews, with over three hundred vacancies covering various skill levels.  Admission is free, and no prior registration is required.  Job seekers are advised to bring several copies of their resumes and identity documents.  Employment guidance services will also be available on site.",

    "The Leisure and Cultural Services Department announced that lifeguard services at all gazetted beaches will commence next Saturday.  Lifeguards will be on duty daily from nine in the morning until six in the evening until the end of the season.  Swimmers are advised to swim within the designated areas marked by red and yellow flags and to observe the instructions displayed on notice boards.  When the red flag is hoisted, swimming is prohibited owing to dangerous conditions.  Shark prevention nets have been installed at all guarded beaches and are inspected regularly.",

    "The Fire Services Department will conduct a building evacuation exercise in your district next Thursday morning.  Occupants of the designated buildings will hear the fire alarm at approximately ten o'clock and should proceed to the assembly points indicated on the floor plans.  Lifts should not be used during the exercise.  Wardens will be stationed on each floor to direct occupants and to assist persons with disabilities.  The exercise is expected to last thirty minutes, after which occupants may return to their premises.  Your cooperation is appreciated.",

    "The Environmental Protection Department reminded households that the expansion of the community recycling network will take effect from the first of next month.  Colour-coded bins for paper, metals, plastics, and glass bottles will be available at over two hundred collection points across the territory.  Items should be clean and dry before deposit.  In addition, small electrical appliances and rechargeable batteries may be handed in at designated stations.  Further details are available on the department's website and hotline.",
  ],

  legal: [
    "The Contractor warrants that all goods supplied under this Agreement shall conform in all material respects to the specifications set out in Schedule One and shall be free from defects in materials and workmanship for a minimum period of twelve months from the date of delivery. The Contractor shall, at its own expense, replace or repair any goods found to be defective within the said warranty period.",

    "Notice of any general meeting of the Company shall be given to every member entitled to attend and vote thereat not less than twenty-one clear days before the date appointed for the meeting. Such notice shall specify the place, date, and time of the meeting and shall contain a statement of the general nature of the business to be transacted. An accidental omission to give notice shall not invalidate the proceedings.",

    "The Purchaser shall inspect all goods upon delivery and shall notify the Supplier in writing of any shortage, damage, or non-conformity within forty-eight hours of receipt. If the Purchaser fails to give such notice, the goods shall be deemed to have been accepted in all respects and the Supplier shall have no further liability in respect thereof save as expressly provided in these terms.",

    "Each party to this Agreement represents and warrants that it has full power and authority to enter into and perform its obligations hereunder, that the execution of this Agreement has been duly authorised, and that this Agreement constitutes a legal, valid, and binding obligation enforceable in accordance with its terms. No waiver of any breach shall constitute a continuing waiver.",

    "The data controller shall take all practicable steps to ensure that personal data held by it is accurate having regard to the purpose for which it is to be used. Personal data shall not be kept longer than is necessary for the fulfilment of the purpose for which it is collected. Data subjects shall have the right to request access to and correction of their personal data held by the controller.",

    "The Employee shall devote the whole of his time and attention to the business of the Company during the term of employment and shall not, without the prior written consent of the Company, engage in any other employment or business activity.  The Company shall pay the Employee a monthly salary together with such benefits as may be set out in Schedule A.  Either party may terminate this agreement by giving not less than one month's notice in writing or payment in lieu thereof.",

    "The Insurer shall, subject to the terms and conditions of this policy, indemnify the Insured against all sums which the Insured shall become legally liable to pay as compensation for bodily injury or damage to property occurring within the period of insurance.  The Insured shall take all reasonable precautions to prevent accidents and shall not admit liability without the written consent of the Insurer.  Notice of any incident must be given to the Insurer within fourteen days.",

    "The Agent agrees to promote the sale of the Principal's products within the designated territory and to use its best endeavours to secure orders from customers in that territory.  The Agent shall not, during the currency of this agreement, represent any other manufacturer of similar products without the prior approval of the Principal.  Commission shall be calculated at the rates specified in the Schedule and shall be payable within thirty days of the end of each quarter.",

    "The Tenant shall pay the rent in advance on or before the first day of each month without deduction.  The Tenant shall keep the interior of the premises in good and tenantable repair and shall yield up the premises at the expiration of the tenancy in the same condition as at the commencement, fair wear and tear excepted.  The Landlord may re-enter the premises if the rent remains unpaid for fourteen days after becoming due, and thereupon the tenancy shall determine.",

    "Each party undertakes to keep confidential all information received from the other party in connection with this agreement and shall not disclose such information to any third party without prior written consent.  This obligation shall survive the termination of this agreement for a period of five years.  The receiving party shall apply to the information no lesser degree of care than it applies to its own confidential information.",

    "No shareholder shall transfer, sell, or otherwise dispose of any shares in the company without first offering them in writing to the other shareholders at the price determined in accordance with this agreement.  The offer shall remain open for thirty days, within which the other shareholders may signify their intention to purchase.  Any transfer made in contravention of this clause shall be void and of no effect.",

    "The Service Provider shall perform the services described in the Schedule with reasonable skill and care and in accordance with good industry practice.  The Service Provider shall not sub-contract any part of the services without the prior written consent of the Client.  The Client shall pay the fees within thirty days of receipt of a valid invoice.  Either party may terminate this agreement by fourteen days' written notice if the other party commits a material breach and fails to remedy it.",

    "The parties hereby agree to establish a joint venture for the purpose of pursuing the business opportunities described in clause two.  Each party shall contribute capital in proportion to its shareholding as set out in the Schedule, and further contributions shall require the unanimous approval of the board.  Profits and losses shall be shared in proportion to the respective shareholdings.  The appointment and removal of directors shall require a resolution passed by all parties.",

    "The Licensor grants to the Licensee a non-exclusive licence to use the trademark specified in the Schedule in connection with the licensed products within the territory.  The Licensee shall not assign or sub-licence any of its rights without prior written consent.  Royalties shall be calculated at the rate of five per cent of net sales and shall be paid quarterly within thirty days of each quarter end.  The licence shall terminate automatically if the Licensee breaches any material term.",
  ],

  general: [
    "Reading is one of the most effective ways to expand vocabulary and improve writing skills. When we read extensively, we encounter words and sentence structures that we might not come across in everyday conversation. Over time, these patterns become embedded in our minds, allowing us to express our own thoughts with greater precision and elegance. This is why educators consistently recommend reading as a daily habit for learners of all ages.",

    "The ocean covers more than seventy percent of the surface of the Earth and remains largely unexplored despite decades of scientific research. Marine biologists estimate that millions of species have yet to be discovered in the deep sea, where sunlight cannot penetrate and conditions are unlike anything found on land. The exploration of these depths requires sophisticated technology and continues to yield surprising discoveries year after year.",

    "Maintaining a healthy work-life balance has become a priority for many professionals in recent years. Employers are increasingly recognising that employees who have time for family, hobbies, and rest are more productive and engaged during working hours. Flexible working arrangements, including remote work and adjustable hours, have become common features of modern employment contracts in many industries around the world today.",

    "The changing of the seasons is a natural phenomenon that has fascinated humans since the earliest days of civilisation. Spring brings renewal and growth, summer warmth and abundance, autumn a gradual transition and harvest, and winter a period of rest and reflection. Each season carries its own distinct characteristics and has inspired countless works of art, literature, and music throughout recorded history across many different cultures.",

    "Learning a new language is a rewarding endeavour that opens doors to different cultures and ways of thinking. Research suggests that bilingual individuals may enjoy certain cognitive advantages, including improved problem-solving abilities and delayed onset of mental decline in later life. The process requires dedication and consistency, but the ability to communicate with people from diverse backgrounds makes the effort worthwhile for those who persevere.",

    "The tram system of Hong Kong has been serving the northern coast of Hong Kong Island for more than a century and remains one of the most affordable ways to travel through the urban districts.  Known locally as the ding ding, the double-decker trams carry over two hundred thousand passengers every day along tracks from Kennedy Town to Shau Kei Wan.  A ride on the upper deck offers views of street markets, old buildings, and the changing skyline.  Despite faster transport options, the trams hold a special place in the hearts of residents and visitors alike.",

    "Hiking has become an increasingly popular pastime in Hong Kong, where country parks cover nearly forty percent of the total land area.  The city boasts hundreds of kilometres of marked trails, ranging from gentle family walks to challenging long-distance routes that cross rugged hills and coastlines.  Popular destinations include mountain ridges with panoramic views, secluded beaches, and historic villages.  Hikers are reminded to prepare adequate water, wear suitable footwear, and check the weather forecast before setting out.",

    "Public libraries in the city offer far more than rows of books on shelves.  Visitors can borrow magazines, music recordings, and electronic resources, or attend talks and workshops.  Study areas provide quiet spaces for students, while children's corners encourage young readers to develop a love of books from an early age.  Many branches also house local history collections that preserve photographs and documents tracing the development of the community.  Membership is free of charge for all residents, and borrowing records show that millions of items circulate every year.",

    "The cross-harbour ferry has connected the two sides of the harbour for well over a century, carrying commuters, students, and tourists across the water in a journey that takes less than ten minutes.  The green and white vessels have witnessed the transformation of the shoreline from low-rise warehouses to a forest of glass towers.  Many passengers still prefer the ferry to faster underground trains, for the fare is low and the sea breeze offers a moment of calm at the beginning and end of each working day.",

    "The climate of the city is influenced by the monsoon, with hot humid summers and mild dry winters.  Between May and October, tropical cyclones may form over the western Pacific and occasionally approach the coastline, bringing heavy rain and strong winds.  When a storm signal is hoisted, schools close and many offices allow staff to return home early.  Residents have long learned to keep an umbrella close at hand, for the weather can change from sunshine to downpour within a single afternoon.",

    "Wet markets remain an essential part of daily life in many neighbourhoods, opening before dawn as vendors arrange fresh vegetables, live fish, and cuts of meat on crowded stalls.  Regular customers greet familiar sellers by name and rely on their advice when choosing ingredients for the evening meal.  The air carries a mixture of aromas, from fresh herbs to steamed puddings prepared at small corner shops.  Although supermarkets have spread across the city, many cooks insist that the produce at the market is fresher and the prices fairer.",

    "The cha chaan teng is a familiar sight on almost every street corner, serving a menu that blends Cantonese cooking with Western influences brought by an earlier generation of returnees.  Customers can order milk tea brewed through a cloth filter, crispy buttered buns, and baked rice dishes covered in golden cheese.  The pace is quick, the seating is close, and tables are often shared with strangers during the busiest hours.  Waiters take orders at remarkable speed and shout them to the kitchen without writing anything down.",

    "The international airport is one of the busiest in the world, handling tens of millions of passengers every year along with a substantial volume of air cargo.  Built on reclaimed land, the terminal is connected to the city by a dedicated railway that completes the journey in under half an hour.  Travellers praise the efficiency of the transfer process and the wide choice of dining and shopping within the restricted area.  For many visitors, the view of the harbour during the approach to the runway remains a memorable welcome.",

    "In the days before the lunar new year, flower markets spring up in districts across the city, drawing families who come to browse stalls of blossoms, kumquat trees, and lucky bamboo.  The most famous market opens at dusk and grows livelier as midnight approaches, with vendors calling out prices and students selling novelty items for charity.  Many households follow the tradition of displaying peach blossoms or narcissus at home in the hope of good fortune.  By early morning on the first day of the new year, the stalls are gone and the streets are swept clean.",
  ],

  symbols: [
    "Website: https://www.example.org.hk/portal/login | Username: TMan.C@88 | Password: Hk$2024_Pw#9 | 2FA code: sent to +852-9876-5432. Server IP: 192.168.1.50:8080. API key: aB3kX9$mN2pQ7&vW5. Database: MySQL v8.0.35 (hosted on AWS, region: ap-east-1). SSL certificate renewal: 30 days before 31/12/2024.",

    "The recipe requires: 2-1/4 cups flour; 1 tsp baking soda; 1 tsp salt; 1 cup (2 sticks) butter; 3/4 cup sugar; 3/4 cup brown sugar; 2 large eggs; 2 tsp vanilla extract; 2 cups chocolate chips. Bake at 190C (375F) for 9-11 minutes. Yield: approx. 48 cookies. Prep time: 15 min. Total time: 25 min. Store in airtight container for up to 7 days.",

    "Weather forecast — Hong Kong, 15/10/2024 (Tue): Sunny periods. Temperature: 26C - 31C. Humidity: 65-85%. Wind: E 20-30 km/h. UV index: 8 (Very High). Sunset: 5:42 p.m. Air Quality Health Index (AQHI): 4 (Moderate). Chance of rain: 10%. Tomorrow: 27-32C, partly cloudy. Outlook: A weak NE monsoon arrives late Thursday.",

    "Survey Results (N=1,243 respondents): 'Very Satisfied' — 38.5% (479); 'Satisfied' — 31.2% (388); 'Neutral' — 18.4% (229); 'Dissatisfied' — 8.6% (107); 'Very Dissatisfied' — 3.3% (40). Mean rating: 3.93/5.0. Margin of error: ±2.8% (95% CI). Top 3 improvement areas: (1) Response time; (2) Staff attitude; (3) Website usability. Response rate: 74.3%.",

    "Press Release — For Immediate Release. HONG KONG, 28 August 2024 — GlobalTech Ltd. (HKEX: 0808) today announced its interim results for the six months ended 30/06/2024. Revenue rose 22.7% YoY to HKD 845.6 million. Net profit: HKD 112.3 million (EPS: HK 0.28). Interim dividend: HK 0.08/share. Record date: 18/09/2024. Payment date: 03/10/2024. — End —",

    "Conference Registration Summary \u2014 Ref: CR/2024/1187. Total attendees: 356 (Delegate: 284; Guest: 47; Press: 25). Fee collected: HKD 448,500 (Early-bird: 192 \u00d7 $1,100 = $211,200; Standard: 164 \u00d7 $1,450 = $237,800). Venue: Hall B, 3/F, Convention Centre, 1 Expo Drive, Wan Chai. Dates: 14-16 Nov 2024 (09:00-18:00). Catering: Lunch \u00d73 days + 2 tea breaks/day. Contact: Ms. W.Y. Lam, (852) 2788-9910, cr2024@event.hk.",

    "Building Maintenance Schedule (Tower 2, Block C \u2014 2024/25). Lift modernization: 03/09/2024-28/10/2024 (Lift 1 & 2 alternately). Exterior wall inspection: 05/11/2024-08/11/2024. Water tank cleansing: 12/12/2024 & 12/06/2025 (09:00-17:00, water supply suspended 08:30-18:00 both days). Fire drill: 21/11/2024, 10:30 a.m. Fund balance: $2,486,300 (as at 31/08/2024). Budget 2024/25: $1,920,000 (Lift: $1,450,000; Wall: $180,000; Others: $290,000). Management office: 2710-4472.",

    "Food Inspection Report No. FI-2024-0342. Premises: Golden Bay Restaurant, Shop 12, G/F, 88 Shanghai Street, Yau Ma Tei. Inspection date: 19/08/2024, 11:15 a.m. Result: Satisfactory (Grade B, 87/100). Areas checked: (a) Kitchen hygiene \u2014 28/30; (b) Food storage \u2014 26/30; (c) Staff practices \u2014 19/20; (d) Pest control \u2014 14/20. Recommendations: repair chipped tiles near sink #2 (within 14 days); renew first-aid box supplies (within 30 days). Next routine inspection: on/before 19/02/2025. Inspector: K.M. Cheung (FI-0771).",

    "Property Listing \u2014 Ref: FL/NT/TKO/88741. Sale: Flat D, 18/F, Block 5, Symphony Bay Tower 3, 12 Tong Chun Street, Tseung Kwan O, N.T. GFA: 584 sq.ft. (Saleable: 432 sq.ft.). Layout: 2 bedrooms + 1 suite. Views: inland + partial sea. Asking price: $7.68M ($17,778/sq.ft. saleable). Floor plan no.: FP-2023-1108. Key ready. Viewing: Sat 2:30 p.m. & 4:00 p.m., Sun 11:00 a.m. Agent: K.W. Tam (S-332088), 6104-7789.",

    "Inter-school Athletics Meet 2024 \u2014 Final Results (Boys A Grade, 100m): 1st: Lai Chun-ho (SFA) \u2014 11.24s (meet record; old: 11.31s/2019); 2nd: Marco W. Cheung (LSC) \u2014 11.36s; 3rd: Ho Ka-ming (DBS) \u2014 11.41s. High Jump (Girls B): 1st: Phoebe Yip (MCS) \u2014 1.62m; 2nd: Zara Lim (PCS) \u2014 1.58m; 3rd: Chiu Yan-yau (MCS) \u2014 1.55m. Team trophies: SFA 188 pts; LSC 173 pts; DBS 149 pts. Next event: 4 \u00d7 100m relays, 14:45.",

    "Museum Visitor Guide \u2014 Hong Kong Heritage Discovery Centre. Address: Kowloon Park, Haiphong Road, Tsim Sha Tsui. Opening hours: Mon-Wed & Fri 10:00 a.m.-6:00 p.m.; Sat-Sun & PH 10:00 a.m.-7:00 p.m.; Thu closed (except PH). Admission: Free. Guided tours: 11:30 a.m. & 3:30 p.m. (Sat-Sun + 5:00 p.m.), 25 persons max, first-come basis. Current exhibition: Maritime Trade Gallery (Hall 2, until 30/06/2025). Enquiries: 2208-4400. MTR: Tsim Sha Tsui Exit A1, 8-min walk.",

    "Medical Report Summary \u2014 Patient ref: MPC-2024-07785 (Name withheld). Consultation: 08/08/2024, 10:15 a.m., Dr. F.Y. Ng (GP, reg. no. M-29814). Vitals: BP 128/82 mmHg; pulse 74 bpm; temp 36.7C; SpO2 98%. Tests ordered: (a) CBC + ESR; (b) Fasting glucose (5.4 mmol/L \u2014 normal 3.6-5.5); (c) Lipid panel: total chol 5.8 (borderline), LDL 3.6, HDL 1.2, TG 2.1. Diagnosis: mild hyperlipidaemia (ICD E78.5). Follow-up: 12 weeks, 07/11/2024, 9:40 a.m. Prescription: atorvastatin 10mg x 28 tabs, 1 nightly.",

    "Statement of Account \u2014 Nov 2024. Account no.: 814-221-903455-8 (Mr. T.H. Yip). Opening balance: $18,204.55. Deposits: salary $26,800.00 (04/11); transfer in $5,000.00 (15/11). Withdrawals: rent $9,500.00 (01/11, autopay); credit card $4,317.86 (05/11); utilities $886.40 (12/11); FPS out $2,000.00 (20/11). Interest credited: $3.15. Closing balance: $33,303.44. Min. balance fee: waived (status: Preferred). Next statement: 31/12/2024. Enquiries: 2233-3000 (24-hr).",

    "Flight Schedule \u2014 Regional Routes (effective 27/10/2024). CX-460: HKG 08:05 -> TPE 09:50 (daily; gate close 07:35). CX-466: HKG 13:20 -> TPE 15:05 (daily). CX-479: TPE 18:40 -> HKG 20:25 (daily). CX-501: HKG 09:15 -> ICN 13:50 (Mon/Wed/Fri/Sun). CX-507: ICN 15:35 -> HKG 18:20 (Mon/Wed/Fri/Sun). CX-520: HKG 16:45 -> HND 21:55 (daily; +1 day arrival on Sat). Check-in closes 40 min before departure. Aircraft: A350-900 (4x weekly) / B777-300ER (others).",
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
