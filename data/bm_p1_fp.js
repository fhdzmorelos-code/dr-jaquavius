// TEMPORAL · PAPER 1: Foot Power Ltd (FP) — caso previo del examen (8825-5001), con la lista de temas de la unidad 1 a 4.
// Solo usa datos del texto del caso y del estilo de las preguntas de ejemplo. Para quitarlo: borrar este archivo,
// su <script> en index.html y la unidad "p1" en data/materias.js.
// La primera opción es la correcta (a: 0); el juego baraja las opciones cada vez.
QB.add("P1", [
  // ----- Caso: la empresa y sus datos -----
  { q: "FP is a private company and Elena is the only shareholder. Which statement about FP is correct?",
    o: ["Its shares cannot be sold to the general public", "Its shares are traded openly on a stock exchange", "Elena is personally liable for all of its debts", "It is owned by the government of Country Y"],
    a: 0, d: 1,
    why: "A private limited company cannot offer shares to the public; ownership stays with chosen shareholders, here Elena alone (1.2)." },

  { q: "Because FP is a limited company, what is the most that Elena can lose if FP fails?",
    o: ["The money she invested in FP", "Everything she owns, including her house", "Nothing, because the NGO covers the loss", "Only the profit she expected to earn"],
    a: 0, d: 1,
    why: "Limited liability means shareholders risk only the capital they invested, not their personal assets (1.2)." },

  { q: "Elena is the only shareholder and also the operations and finance manager. Which is a likely disadvantage of this set-up?",
    o: ["The workload is heavy and her skills may be stretched", "Decisions will be slow because many people must agree", "Profits must be shared among many outside owners", "The company can never raise money from a bank"],
    a: 0, d: 2,
    why: "One person holding several roles can be overloaded and lack specialist knowledge, a typical limit of small firms (1.2, 2.1)." },

  { q: "The NGO that gave FP a sustainability prize is best described as which type of stakeholder?",
    o: ["An external stakeholder", "An internal stakeholder", "A shareholder of FP", "An employee of FP"],
    a: 0, d: 1,
    why: "An NGO is outside the business but is interested in its impact, so it is an external stakeholder (1.4)." },

  { q: "Kinetic Tile (KT) manufactures tiles for FP in Country K. What is KT's stakeholder role for FP?",
    o: ["A supplier, which is an external stakeholder", "An employee, which is an internal stakeholder", "A customer, which is an external stakeholder", "An owner, which is an internal stakeholder"],
    a: 0, d: 1,
    why: "KT supplies manufacturing to FP from outside the firm, so it is an external stakeholder (1.4)." },

  { q: "Which of these is the best example of a conflict between the interests of two FP stakeholders?",
    o: ["Elena wants a higher price per tile; malls want a lower price", "Elena and her designs both want FP to survive", "The NGO and Elena both want a sustainable product", "Malls and the NGO both want lower electricity use"],
    a: 0, d: 2,
    why: "Stakeholder conflict arises when objectives clash, such as seller wanting a higher price and buyers a lower one (1.4)." },

  // ----- Misión, objetivos, responsabilidad -----
  { q: "Which of the following is a purpose of a mission statement for a business like FP?",
    o: ["It states why FP exists and guides its decisions", "It lists the profit that FP made last year", "It shows how many tiles FP has in stock", "It sets the exact price to charge for each tile"],
    a: 0, d: 1,
    why: "A mission statement explains the business's purpose and gives direction to decision making and staff (1.3)." },

  { q: "Which objective would be the most SMART for FP?",
    o: ["Sell 2,000 EcoStep tiles in Country Y within 12 months", "Become the best energy tile company one day", "Make shopping malls more eco-friendly in future", "Sell as many tiles as possible as soon as we can"],
    a: 0, d: 2,
    why: "A SMART objective is specific, measurable, achievable, relevant and time-bound; only the first has numbers and a deadline (1.3)." },

  { q: "Which term describes the total greenhouse gas emissions caused by FP's activities, such as making and shipping tiles?",
    o: ["Carbon footprint", "Carbon neutral", "Break-even point", "Market share"],
    a: 0, d: 1,
    why: "A carbon footprint measures the greenhouse gases a business causes; being carbon neutral means offsetting them to net zero (1.3)." },

  { q: "What does it mean for FP to become carbon neutral?",
    o: ["Its emissions are balanced by removing or offsetting an equal amount", "It produces no products that use any kind of energy", "It pays no tax on the carbon that it releases", "It buys only from suppliers in its own country"],
    a: 0, d: 2,
    why: "Carbon neutral means net zero emissions: what is released is cancelled out through reductions or offsets (1.3)." },

  { q: "Which statement about FP's EcoStep tiles best links to the triple bottom line?",
    o: ["They aim for profit and also benefit the environment", "They focus only on short-term profit for the owner", "They are made only to meet legal minimums for safety", "They reduce social cost by raising the price of electricity"],
    a: 0, d: 2,
    why: "The triple bottom line looks at people, planet and profit; tiles that cut electricity use help the planet while earning revenue (1.1, 1.3)." },

  // ----- Crecimiento y MNC -----
  { q: "Which is a reason why Elena would want to grow FP?",
    o: ["To gain economies of scale and lower the cost per tile", "To avoid being competitive in the tile market", "To make decisions more slowly and with less risk", "To have fewer customers who all order in big batches"],
    a: 0, d: 1,
    why: "Growth can reduce unit costs, increase profit and market share, and spread risk (1.5)." },

  { q: "Which best defines economies of scale?",
    o: ["Average cost per unit falls as output increases", "Total costs fall as output increases", "Selling price rises as output increases", "Revenue stays the same as output increases"],
    a: 0, d: 1,
    why: "Economies of scale are the fall in average (unit) cost as a business produces more; total costs still rise (1.5, 3.3)." },

  { q: "FP's growth from selling in small malls to receiving a 10,000-tile order is an example of which type of growth if it is done by selling more of its own tiles?",
    o: ["Organic (internal) growth", "A merger with another firm", "A takeover of a rival", "A franchise agreement"],
    a: 0, d: 1,
    why: "Organic growth comes from the business's own sales and operations rather than combining with another firm (1.5)." },

  { q: "Which best describes a strategic alliance that FP could form with another firm?",
    o: ["Two firms cooperate for shared benefit but stay separate", "One firm buys all the shares of the other", "Two firms form a new company with one owner", "One firm stops trading and closes its operations"],
    a: 0, d: 2,
    why: "In a strategic alliance firms agree to work together on a project or market while remaining independent (1.5)." },

  { q: "If FP opened its own factory in Country K and sold tiles there as well as in Country Y, FP would become which type of business?",
    o: ["A multinational company (MNC)", "A sole trader", "A non-profit social enterprise", "A cooperative owned by the staff"],
    a: 0, d: 1,
    why: "A business with operations or production in more than one country is a multinational company (1.6)." },

  { q: "What does 'dumping' mean when a firm sells its goods in another country?",
    o: ["Selling at a price below cost or below the home price", "Selling only the tiles that were rejected by quality control", "Giving products away to charities abroad", "Moving production to a country with lower wages"],
    a: 0, d: 2,
    why: "Dumping is exporting at a very low price, often below cost, to win the foreign market (1.6)." },

  // ----- Finanzas -----
  { q: "FP needed to fulfil a large order but its small factory could not. Which is a source of internal finance for FP?",
    o: ["Retained profit", "A bank loan", "Selling shares to a new investor", "An overdraft from the bank"],
    a: 0, d: 1,
    why: "Retained profit comes from inside the business; loans, overdrafts and new shares are external finance (3.2)." },

  { q: "Which is a feature of loan capital that FP could use to buy new equipment?",
    o: ["It must be repaid with interest over an agreed period", "It gives the lender a share of FP's ownership", "It never needs to be paid back in full", "It is a gift with no cost to the business"],
    a: 0, d: 1,
    why: "Loan capital is borrowed money repaid with interest; the lender does not gain ownership, but security may be needed (3.2)." },

  { q: "If FP sold 25% of its shares to an outside investor, which is a likely disadvantage for Elena?",
    o: ["She loses some control and shares future profits", "She must repay the money within a month", "She must pay interest every year on the amount", "She has to give up all her shares to the investor"],
    a: 0, d: 2,
    why: "Selling shares brings in capital without repayment but dilutes ownership and control, and dividends go to the new shareholder (3.2, 1.2)." },

  { q: "Which source of finance would best help FP cover a short-term cash gap while waiting for a mall to pay?",
    o: ["An overdraft", "Selling a large part of the company", "A 25-year mortgage on a new factory", "Retained profit that will be earned in ten years"],
    a: 0, d: 2,
    why: "An overdraft is a flexible, short-term external source for working capital problems (3.2)." },

  { q: "Which of the following would be a variable cost for FP?",
    o: ["The plastic used to make each tile", "The yearly rent of the small factory", "The monthly salary of Elena", "The insurance on the factory building"],
    a: 0, d: 1,
    why: "Variable costs change with output, such as materials per tile; rent, salary and insurance are fixed (3.3)." },

  { q: "KT charged FP $350 per tile and FP charged customers $700 per tile for the 10,000-tile order. What was FP's total revenue from the order?",
    o: ["$7,000,000", "$3,500,000", "$3,850,000", "$350,000"],
    a: 0, d: 1,
    why: "Revenue = price × quantity = $700 × 10,000 = $7,000,000 (3.3)." },

  { q: "How much did FP pay KT in total to make the 10,000 tiles ordered by the mall?",
    o: ["$3,500,000", "$7,000,000", "$350,000", "$1,750,000"],
    a: 0, d: 1,
    why: "Total cost to KT = $350 × 10,000 = $3,500,000 (3.3)." },

  { q: "Why would it be wrong to say that FP earned $3,500,000 profit from the 10,000-tile order?",
    o: ["The $700 price also covers shipping, installation and other costs", "Profit is always equal to revenue minus the price", "FP paid KT nothing for making the tiles", "Revenue and profit are always exactly the same number"],
    a: 0, d: 3,
    why: "$7,000,000 − $3,500,000 gives a gross margin, but shipping, installation and overheads are still to be deducted before profit (3.3)." },

  // ----- Marketing -----
  { q: "FP designed tiles that generate electricity first and then looked for customers. Which business approach is this?",
    o: ["Product orientation", "Market orientation", "Production line orientation", "Sales promotion orientation"],
    a: 0, d: 1,
    why: "Product orientation starts with making a product and then finding buyers, unlike market orientation which starts with customer needs (4.1)." },

  { q: "Which is a possible disadvantage for FP of being product-orientated?",
    o: ["The tile may not match what customers really want", "FP will not have any innovative design at all", "Customers will never be able to customize tiles", "FP cannot carry out any research and development"],
    a: 0, d: 2,
    why: "Focusing on the product rather than the customer risks making something the market does not need; the advantage is strong innovation (4.1)." },

  { q: "What does the term 'first-mover advantage' mean for FP?",
    o: ["Gains from being the first business to sell a new product", "The right to sell the tile before any other country", "A government subsidy given only to new firms", "Lower production costs than all other firms in the market"],
    a: 0, d: 2,
    why: "First movers can build brand recognition, loyalty and market share before competitors enter (4.1, 4.2)." },

  { q: "Which type of market research would FP be using if it interviewed shopping mall managers about their electricity costs?",
    o: ["Primary research", "Secondary research", "Quantitative secondary research", "Desk research"],
    a: 0, d: 1,
    why: "Primary research collects new data directly from the target group, for example through interviews or surveys (4.4)." },

  { q: "Which is an example of secondary research for FP?",
    o: ["Reading a published report on energy use in malls", "Running a survey of mall visitors on the street", "Holding a focus group with mall managers", "Testing a prototype tile with some customers"],
    a: 0, d: 1,
    why: "Secondary research uses data that already exists, like published reports or government statistics (4.4)." },

  { q: "FP's tiles come in different colors or patterns. Which element of the marketing mix is this about?",
    o: ["Product", "Price", "Promotion", "Place"],
    a: 0, d: 1,
    why: "Design and customization are features of the product in the seven Ps (4.5)." },

  { q: "The tiles generate more electricity where the flow of people is greatest. Which marketing mix element should FP think about to take advantage of this?",
    o: ["Place, by choosing busy locations such as main corridors", "Promotion, by lowering the price of every tile", "Process, by making the tiles thicker", "People, by hiring more production staff"],
    a: 0, d: 2,
    why: "Place covers where the product is sold or used; foot traffic is crucial for these tiles (4.5)." },

  { q: "FP charged $700 per tile, which was twice the $350 that it paid KT. Which pricing method is closest to this?",
    o: ["Cost-plus (mark-up) pricing", "Competitor-based pricing", "Psychological pricing", "Penetration pricing"],
    a: 0, d: 2,
    why: "Cost-plus pricing adds a percentage mark-up to the cost; here the mark-up was 100% (4.5)." },

  { q: "Which way of modifying the marketing mix would most directly help FP win more orders from shopping malls?",
    o: ["Offer a payment plan so malls can pay in instalments", "Stop shipping tiles to customers in other countries", "Make the tiles in one color with no choice of design", "Remove the installation service from the price"],
    a: 0, d: 2,
    why: "A payment plan adjusts price and reduces the cash barrier for buyers, helping to win sales (4.5)." },

  { q: "If FP started to sell solar panels as well, which Ansoff strategy would this be?",
    o: ["Diversification (a new product in a new market)", "Market penetration", "Market development", "Withdrawing from the market"],
    a: 0, d: 3,
    why: "Ansoff's matrix: a new product sold in a new market is diversification, the riskiest option (4.2)." },

  // ----- RR. HH. -----
  { q: "What is the main purpose of an exit interview when an employee leaves FP?",
    o: ["To find out why the employee is leaving", "To decide the employee's final salary", "To recruit the employee back at once", "To train the employee for a new role inside FP"],
    a: 0, d: 1,
    why: "Exit interviews gather reasons for leaving so that the firm can improve retention and working conditions (2.1)." },

  { q: "Which best defines the laissez-faire leadership style?",
    o: ["Leaders give employees freedom to make decisions themselves", "Leaders make all of the decisions without any input", "Leaders always decide after voting with all of the staff", "Leaders watch every task to make sure it is done well"],
    a: 0, d: 1,
    why: "Laissez-faire leaders delegate and offer little direction, trusting employees to decide (2.3)." },

  { q: "Elena set up FP and takes most decisions alone. Which advantage is most likely?",
    o: ["Decisions are quick and the direction is clear", "Employees feel fully involved in each decision", "A wide range of ideas is always considered", "Every decision is based only on data and research"],
    a: 0, d: 2,
    why: "An autocratic style gives speed and clear direction, though it may reduce involvement and creativity (2.3)." },

  { q: "FP is a small business with few employees. Which organisational structure is most likely?",
    o: ["A flat structure with a short chain of command", "A tall structure with many layers of management", "A matrix structure with many project teams", "A structure with several separate divisions by country"],
    a: 0, d: 2,
    why: "Small firms usually have few levels and a short chain of command, so communication is quick (2.2)." }
]);
