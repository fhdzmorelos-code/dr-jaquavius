// 7.1.1 a 7.1.7 Toolkit: SWOT/STEEPLE, Ansoff, modelos circulares, plan de negocio, campo de fuerzas, Hofstede, árbol de decisión (apuntes: Unit 7)
// La primera opción es la correcta (a: 0); el juego baraja las opciones cada vez.
QB.add("7.1.1", [
  { q: "In a SWOT analysis, which factors are internal to the business?",
    o: ["Strengths and weaknesses", "Opportunities and threats", "Strengths and opportunities", "Weaknesses and threats"],
    a: 0, d: 1,
    why: "Strengths and weaknesses are internal; opportunities and threats are external (7.1.1)." },

  { q: "Which of the following is an external factor in a SWOT analysis?",
    o: ["A change in the law that affects the industry", "A highly trained and loyal workforce", "A strong brand that is known by customers", "Outdated and inefficient production facilities"],
    a: 0, d: 1,
    why: "Opportunities and threats are outside the organisation's control, usually the same for all competitors (7.1.1)." },

  { q: "A business has modern facilities and low-cost, efficient production. Which SWOT element is this?",
    o: ["A strength in operations", "An opportunity in the economy", "A threat from competitors", "A weakness in finance"],
    a: 0, d: 2,
    why: "Modern facilities and efficient low-cost production are operations strengths: internal and favourable (7.1.1)." },

  { q: "Which statement about 'opportunity' in SWOT is correct?",
    o: ["It is a favourable external condition, not a strategy", "It is a strategy the business can choose to follow", "It is an internal strength of the business", "It is a weakness that the firm can correct"],
    a: 0, d: 2,
    why: "Exam tip: an opportunity is an external favourable condition, NOT a strategy (7.1.1)." },

  { q: "Which factor is a weakness in the marketing function?",
    o: ["Products that are similar to those of its rivals", "Enough money to run and to expand the business", "A highly skilled and well-educated staff of workers", "A strong and well-known brand among its customers"],
    a: 0, d: 2,
    why: "Low brand awareness or loyalty and products similar to rivals' are marketing weaknesses (7.1.1)." },

  { q: "What does the 'S' in STEEPLE stand for?",
    o: ["Sociocultural", "Strategic", "Sustainable", "Supply"],
    a: 0, d: 1,
    why: "STEEPLE: sociocultural, technological, economic, environmental, political, legal and ethical (7.1.1)." },

  { q: "The Paris Agreement is likely to be which kind of factor for renewable energy firms and for oil firms?",
    o: ["An opportunity for renewables and a threat for oil", "A threat for renewables and an opportunity for oil", "An opportunity for both kinds of firm", "A threat for both kinds of firm"],
    a: 0, d: 3,
    why: "Climate agreements are an environmental factor: an opportunity for renewables and a threat for oil and coal (7.1.1)." },

  { q: "Good infrastructure, such as ports and roads, is which STEEPLE factor?",
    o: ["Technological", "Political", "Sociocultural", "Legal"],
    a: 0, d: 2,
    why: "Infrastructure is included under technological factors: good infrastructure is an opportunity, poor is a threat (7.1.1)." },

  { q: "Which is an example of an economic factor in STEEPLE?",
    o: ["The interest rate, which is the cost of borrowing", "A new law that sets standards for product safety", "A rise in the birth rate in the country as a whole", "A drought that is affecting the crops in the region"],
    a: 0, d: 2,
    why: "Economic factors include incomes, the business cycle, inflation, interest rates, unemployment and exchange rates (7.1.1)." },

  { q: "Lobbying and gig-economy misclassification raise issues in which two STEEPLE factors?",
    o: ["Legal and ethical", "Technological and economic", "Sociocultural and political", "Environmental and economic"],
    a: 0, d: 3,
    why: "Lobbying is a legal factor with ethical issues; gig-economy misclassification (Uber court cases) is an ethical factor (7.1.1)." }
]);

QB.add("7.1.2", [
  { q: "Which two things does the Ansoff matrix combine?",
    o: ["Products (existing or new) and markets (existing or new)", "The market share and the growth rate of the whole market", "The price and the quality of the products that are on sale", "The costs and the revenues of each of the firm's products"],
    a: 0, d: 1,
    why: "Ansoff's matrix combines existing or new products with existing or new markets to give four growth strategies (7.1.2)." },

  { q: "Selling more of the same product to the same customers is which Ansoff strategy?",
    o: ["Market penetration", "Product development", "Market development", "Diversification"],
    a: 0, d: 1,
    why: "Market penetration is the lowest-risk strategy: more of the same products to the same customers (7.1.2)." },

  { q: "A bakery adds cakes, sandwiches and drinks to sell to its existing customers. Which Ansoff strategy is this?",
    o: ["Product development", "Market penetration", "Market development", "Diversification"],
    a: 0, d: 2,
    why: "New products for an existing market is product development, which carries medium risk (7.1.2)." },

  { q: "Crocs, once aimed at boaters, started selling to everyone. Which Ansoff strategy is this?",
    o: ["Market development", "Market penetration", "Product development", "Diversification"],
    a: 0, d: 2,
    why: "Existing products sold to new customers, such as new demographic groups, is market development (7.1.2)." },

  { q: "Which Ansoff strategy has the highest risk?",
    o: ["Diversification", "Market penetration", "Product development", "Market development"],
    a: 0, d: 1,
    why: "Diversification, new products in new markets, is the riskiest strategy (7.1.2)." },

  { q: "A baker who starts selling furniture online is which type of diversification?",
    o: ["Unrelated diversification", "Related diversification", "Market penetration", "Product development"],
    a: 0, d: 3,
    why: "Unrelated diversification uses little relevant expertise and is the riskiest of all (7.1.2)." },

  { q: "A baker opens a chocolate shop in another town. Which type of growth is this?",
    o: ["Related diversification", "Unrelated diversification", "Market penetration", "Product development"],
    a: 0, d: 3,
    why: "Related diversification has some similarity, so retail and customer skills transfer (7.1.2)." },

  { q: "What is a limitation of market penetration?",
    o: ["Gains are often temporary and customers must come from rivals", "It needs a very high level of investment from the business", "It requires totally new products to be designed from scratch", "It is the Ansoff strategy that has the highest level of risk"],
    a: 0, d: 2,
    why: "Penetration is low risk with little investment, but gains are often temporary and demand is limited (7.1.2)." }
]);

QB.add("7.1.3", [
  { q: "What is the main idea of a circular business model?",
    o: ["Outputs feed back as inputs and waste is designed out", "Products are made, used for a while and thrown away", "Output is raised as far as is possible each year", "Costs are cut by using the cheapest possible inputs"],
    a: 0, d: 1,
    why: "Circular models work like nature: outputs become inputs and waste is designed out from the start (7.1.3)." },

  { q: "Which is a principle of the circular economy of the Ellen MacArthur Foundation?",
    o: ["Eliminate waste and pollution", "Maximise short-term profit above all", "Reduce the lifespan of products", "Increase extraction of resources"],
    a: 0, d: 2,
    why: "The three principles are eliminate waste and pollution, circulate products and materials, and regenerate nature (7.1.3)." },

  { q: "Which circular model replaces new inputs with recovered or bio-based materials planned from the design stage?",
    o: ["Circular supply models", "Sharing models", "Resource recovery models", "Product life extension models"],
    a: 0, d: 2,
    why: "Circular supply models are cradle-to-cradle, as opposed to linear cradle-to-grave (7.1.3)." },

  { q: "Which model collects waste, sorts it and turns it into raw materials sold to other firms?",
    o: ["Resource recovery models", "Circular supply models", "Sharing models", "Product service system models"],
    a: 0, d: 2,
    why: "Resource recovery collects, sorts and does secondary production of waste into raw materials (7.1.3)." },

  { q: "Selling refurbished smartphones is an example of which circular strategy?",
    o: ["Remanufacturing under product life extension", "Co-access under the sharing models of a firm", "A user-oriented product service system for the firm", "Resource recovery by the recycling of old products"],
    a: 0, d: 3,
    why: "Product life extension includes design for durability, reuse, repair and remanufacturing ('reset the clock') (7.1.3)." },

  { q: "Airbnb, which shares under-used property through a platform, is an example of which circular model?",
    o: ["Sharing models", "Resource recovery models", "Circular supply models", "Product life extension models"],
    a: 0, d: 2,
    why: "Sharing models let strangers share under-used products via platforms for a small fee (7.1.3)." },

  { q: "Which is an example of a user-oriented product service system?",
    o: ["Car-sharing, where the firm keeps ownership", "A repair contract sold with a new product", "A shop that sells second-hand clothes", "A firm that recycles used materials"],
    a: 0, d: 3,
    why: "In user-oriented systems customers pay for access while the firm keeps ownership, as with car-sharing, Netflix and Spotify (7.1.3)." },

  { q: "What is a rebound effect?",
    o: ["They do not address social issues", "They can never reduce the waste that is made", "They always raise the use of new resources", "They are legal only in some of the countries"],
    a: 0, d: 3,
    why: "A rebound effect is when savings are spent on more production or consumption, cancelling CO2 and resource gains (7.1.3)." },

  { q: "Which is a limitation of circular business models?",
    o: ["They do not address social issues", "They can never reduce waste", "They always raise the use of new resources", "They are only legal in some countries"],
    a: 0, d: 2,
    why: "Limitations include undeveloped waste systems, unintended consequences, rebound effects and not addressing social issues (7.1.3)." }
]);

QB.add("7.1.4", [
  { q: "Which of the following is a purpose of a business plan?",
    o: ["It gives credibility, cuts risk and inspires others", "It guarantees that the business will make a profit", "It lists all of the employees who will work at the firm", "It is a legal document that all businesses must have"],
    a: 0, d: 1,
    why: "A business plan gives an entrepreneur credibility, reduces risk and inspires others; its form depends on the purpose and audience (7.1.4)." },

  { q: "What is narrative bias?",
    o: ["A mental shortcut that favours a good story", "A rule that every business plan must be told as a story", "A bias that makes people ignore all of the stories", "A legal duty to show evidence in every business plan"],
    a: 0, d: 3,
    why: "Humans have a narrative bias: stories connect emotionally, but decisions need evidence too (7.1.4)." },

  { q: "In Sinek's Golden Circle, which part comes first?",
    o: ["Why (the purpose)", "How (the way it is run)", "What (the product)", "Who (the customers)"],
    a: 0, d: 2,
    why: "The Golden Circle runs Why → How → What, and Why (purpose) always comes first (7.1.4)." },

  { q: "Which of these is secondary (desk) research for a business plan?",
    o: ["Reading market reports and journals", "Interviewing potential customers", "Running a focus group", "Observing people in a shop"],
    a: 0, d: 2,
    why: "Secondary research uses existing sources like news, journals and reports; surveys, interviews, observations and focus groups are primary (7.1.4)." },

  { q: "Which of the following is normally included in a business plan?",
    o: ["A marketing plan and a cash flow forecast", "A list of the current stock", "A record of all of the actual sales", "The names of all of the competitors' staff"],
    a: 0, d: 2,
    why: "Plans typically cover the solution, market and competition, marketing plan, SWOT, cash flow forecast and sources of finance (7.1.4)." },

  { q: "Which tool is a one-page summary of a social enterprise's plan?",
    o: ["The Social Business Model Canvas", "The Gantt chart used for project planning", "The BCG matrix of a firm's product portfolio", "The decision tree of a firm's investment options"],
    a: 0, d: 3,
    why: "The Social Business Model Canvas and the Flourishing Business Model Canvas are alternative formats (7.1.4)." }
]);

QB.add("7.1.5", [
  { q: "Who developed force field analysis?",
    o: ["Kurt Lewin", "Igor Ansoff", "Michael Porter", "Geert Hofstede"],
    a: 0, d: 2,
    why: "Force field analysis was developed by Kurt Lewin, who studied the dynamics of change (7.1.5)." },

  { q: "In force field analysis, what do driving forces do?",
    o: ["Support or promote the change", "Oppose or resist the change", "Measure the cost of the change", "Delay the planning of the change"],
    a: 0, d: 1,
    why: "Driving forces support change; restraining forces oppose or resist it (7.1.5)." },

  { q: "On what scale is each force weighted in force field analysis?",
    o: ["1 (weak) to 5 (strong)", "1 (strong) to 5 (weak)", "1 to 10", "0% to 100%"],
    a: 0, d: 2,
    why: "Each force is given a weight from 1 (weak) to 5 (strong), and weightings should be justified (7.1.5)." },

  { q: "Driving forces total 7 and restraining forces total 16. What should managers do?",
    o: ["Strengthen the drivers and weaken the restrainers", "Go ahead with the planned change straight away", "Add more restraining forces to the force diagram", "Cancel the analysis and draw a Gantt chart instead"],
    a: 0, d: 2,
    why: "When restrainers outweigh drivers, managers must amplify drivers and reduce restrainers, for example with training and communication (7.1.5)." },

  { q: "Which is a limitation of force field analysis?",
    o: ["Weights for qualitative factors may be biased", "It cannot be drawn as a clear diagram at all", "It only works for very large and old businesses", "It ignores all of the stakeholders affected by change"],
    a: 0, d: 2,
    why: "Weights may be unscientific and labelling stakeholders as restraining forces may cause conflict (7.1.5)." }
]);

QB.add("7.1.6", [
  { q: "How did Hofstede describe culture?",
    o: ["The software of the mind", "The hardware of the economy", "The structure of the market", "The strategy of the firm"],
    a: 0, d: 2,
    why: "Hofstede called culture 'the software of the mind', based on surveys of IBM employees in 60+ countries (7.1.6)." },

  { q: "Which Hofstede dimension measures how far people accept hierarchical power?",
    o: ["Power distance", "Uncertainty avoidance", "Individualism vs collectivism", "Indulgence vs restraint"],
    a: 0, d: 2,
    why: "Power distance is the extent to which people accept hierarchical power (7.1.6)." },

  { q: "A firm in a high power distance country is most likely to have what kind of communication?",
    o: ["Top-down communication with a clear hierarchy", "Bottom-up communication with little hierarchy", "No communication between levels at all", "Mainly informal and flat communication"],
    a: 0, d: 3,
    why: "High power distance means comfort with hierarchy and paternalism; low power distance favours bottom-up communication (7.1.6)." },

  { q: "Which dimension describes tolerance of risk and ambiguity?",
    o: ["Uncertainty avoidance", "Power distance", "Masculinity vs femininity", "Long-term vs short-term orientation"],
    a: 0, d: 2,
    why: "Uncertainty avoidance is the tolerance of risk and ambiguity; high avoidance means tighter rules and formal chains of command (7.1.6)." },

  { q: "Performance-related pay fits best in a society that is high in which dimension?",
    o: ["Individualism", "Collectivism", "Restraint", "Power distance"],
    a: 0, d: 3,
    why: "Individualist societies, such as the USA, value competition and individual rewards like performance-related pay (7.1.6)." },

  { q: "Which dimension compares money and competition with wellbeing and relationships?",
    o: ["Masculinity vs femininity", "Individualism vs collectivism", "Indulgence vs restraint", "Power distance"],
    a: 0, d: 3,
    why: "'Masculine' values are money, recognition and competition; 'feminine' values are wellbeing, relationships and nurturing (7.1.6)." },

  { q: "Which orientation is typical of Anglo-Saxon countries, with pressure for quick profits?",
    o: ["Short-term orientation", "Long-term orientation", "High indulgence only", "High restraint only"],
    a: 0, d: 3,
    why: "Anglo-Saxon countries lean to short-term orientation; many Asian countries lean to long-term, patient strategies (7.1.6)." },

  { q: "Which is a criticism of Hofstede's model?",
    o: ["It used only IBM employees and treats culture as static", "It covered too many people from too many companies", "It was based only on very recent surveys of workers", "It includes cultures that vary only between countries"],
    a: 0, d: 2,
    why: "Criticisms: only IBM workers, sampling, over-generalisation within countries and treating culture as static (7.1.6)." }
]);

QB.add("7.1.7", [
  { q: "What does a square on a decision tree represent?",
    o: ["A decision node (a choice)", "A probability (chance) node", "A rejected option that is crossed out", "An expected outcome at the end of a branch"],
    a: 0, d: 1,
    why: "A square is a decision node; a circle is a probability (chance) node (7.1.7)." },

  { q: "What must the probabilities from a single chance node add up to?",
    o: ["1", "0", "100 and above", "The expected value"],
    a: 0, d: 1,
    why: "Probabilities from one chance node sum to 1 (7.1.7)." },

  { q: "Option 1 has a 60% chance of $20m and a 40% chance of $8m. What is the expected value before costs?",
    o: ["$15.2m", "$28m", "$12m", "$3.2m"],
    a: 0, d: 2,
    why: "0.6 × 20 = 12.0 and 0.4 × 8 = 3.2, so the total is $15.2m (7.1.7)." },

  { q: "Expected value before costs is $15.2m and the option costs $10m. What is the net expected value?",
    o: ["$5.2m", "$25.2m", "$10m", "$15.2m"],
    a: 0, d: 2,
    why: "Net expected value = 15.2 − 10 = $5.2m (7.1.7)." },

  { q: "Option 1 has a net expected value of $5.2m and option 2 has $8.8m. What should the decision-maker do?",
    o: ["Choose option 2 and cross out option 1", "Choose option 1 and cross out option 2", "Choose both options at the same time", "Choose neither option and stop"],
    a: 0, d: 2,
    why: "Choose the highest net expected value (option 2) and mark the rejected option (7.1.7)." },

  { q: "In what order is a decision tree drawn and then solved?",
    o: ["Drawn left to right and solved right to left", "Drawn right to left and solved left to right", "Drawn and solved from left to right", "Drawn and solved from right to left"],
    a: 0, d: 3,
    why: "Draw from left to right and then solve from right to left (7.1.7)." },

  { q: "Which is a disadvantage of decision trees?",
    o: ["They ignore qualitative factors", "They cannot show a 'do nothing' option", "They cannot handle any risk or uncertainty", "They give no visual picture of the problem"],
    a: 0, d: 2,
    why: "Trees give a clear visual, integrate risk and include 'no change', but ignore qualitative factors and rely on estimates (7.1.7)." },

  { q: "Why should a decision tree include a key?",
    o: ["To show the decision node, probability node and rejected option", "To list the costs of all of the options in the tree", "To show the name of the person who made the decision", "To explain the formula that is used for expected value"],
    a: 0, d: 3,
    why: "A key showing decision node, probability node and rejected option is usually needed for full marks (7.1.7)." }
]);
