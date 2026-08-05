/* ============================================================
   Typing Practice Texts — for PSII (Personal Secretary II)
   ------------------------------------------------------------
   3 categories, 10+ passages each
   All text is original/paraphrased to avoid copyright issues
   ============================================================ */

const TEXTS = {
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
