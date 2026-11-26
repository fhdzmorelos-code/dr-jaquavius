// 3.8 Investment appraisal, 3.9 Budgets, 4.3 Sales forecasting, 4.6 International marketing (apuntes: Unit 3 y 4)
// La primera opción es la correcta (a: 0); el juego baraja las opciones cada vez.
QB.add("3.8", [
  { q: "What does the payback period measure?",
    o: ["The time needed to recover the initial investment", "The yearly return as a percentage of the cost", "The value today of all of the future cash flows", "The profit made after the payback is complete"],
    a: 0, d: 1,
    why: "Payback shows how long it takes for cumulative net cash flow to cover the initial investment (3.8.1)." },

  { q: "A $200,000 machine has net cash flows of $60,000, $80,000, $120,000 and $160,000 in years 1 to 4. What is the cumulative net cash flow at the end of year 2?",
    o: ["−$60,000", "$140,000", "−$140,000", "$20,000"],
    a: 0, d: 2,
    why: "−200,000 + 60,000 + 80,000 = −$60,000, so $60,000 is still owed after year 2 (3.8.1)." },

  { q: "For the same machine, $60,000 is still owed after year 2 and year 3's net cash flow is $120,000. What is the payback period?",
    o: ["2 years and 6 months", "3 years", "2 years and 3 months", "2 years and 8 months"],
    a: 0, d: 2,
    why: "60,000 ÷ 120,000 × 12 = 6 months, so payback = 2 years 6 months (3.8.1)." },

  { q: "Which is a limitation of the payback period?",
    o: ["It ignores the cash flows that come after payback", "It is too complex for small businesses to ever use", "It accounts for the time value of money", "It needs a discount rate taken from a table"],
    a: 0, d: 2,
    why: "Payback is simple but ignores long-term profitability after payback and the time value of money (3.8.1)." },

  { q: "A shorter payback period is usually seen as what?",
    o: ["Less risky, with faster cash returns", "More risky, with slower cash returns", "A sign that the project has no profit", "A sign that the discount rate is too high"],
    a: 0, d: 1,
    why: "A shorter payback means less risk and faster return of cash (3.8.1)." },

  { q: "What does the average rate of return (ARR) measure?",
    o: ["The yearly return as a percentage of the initial cost", "The number of years to recover the investment", "The present value of all of the future returns", "The ratio of the long-term debt to the equity in the firm"],
    a: 0, d: 1,
    why: "ARR is the average annual forecast return as a percentage of the initial capital cost (3.8.2)." },

  { q: "A $200,000 project returns a total of $420,000 over 4 years. What is the ARR?",
    o: ["27.5%", "110%", "55%", "21%"],
    a: 0, d: 3,
    why: "(420,000 − 200,000) ÷ 4 = 55,000 a year; 55,000 ÷ 200,000 × 100 = 27.5% (3.8.2)." },

  { q: "Why compare ARR with a bank interest rate?",
    o: ["To see if the project's extra risk is worth the higher return", "To prove that the project will definitely succeed", "To work out the payback period of the project", "To calculate the discount factor for the project"],
    a: 0, d: 2,
    why: "ARR is compared with required returns, other projects (opportunity cost) and bank rates, which offer a low return at very low risk (3.8.2)." },

  { q: "Why is money today worth more than the same amount in the future?",
    o: ["Inflation and interest affect its value over time", "Banks do not accept future payments of any kind at all", "Future money is always counterfeit or forged money", "Businesses do not receive any cash in the future"],
    a: 0, d: 2,
    why: "Inflation reduces purchasing power and money today could earn interest; this is the time value of money (3.8.3)." },

  { q: "What is a discount rate in net present value (NPV)?",
    o: ["The rate used to convert future cash flows to today's value", "The price reduction offered to all of the loyal customers", "The percentage of profit that is paid out as dividends", "The tax rate that is applied to the profit of a firm"],
    a: 0, d: 2,
    why: "The discount rate, the return available on a comparable investment, is used to discount future cash flows to present value (3.8.3)." },

  { q: "At a 10% discount rate, year 1's discount factor is 0.9091. What is the present value of a net cash flow of $60,000 in year 1?",
    o: ["$54,546", "$60,000", "$66,000", "$5,454"],
    a: 0, d: 3,
    why: "Present value = net cash flow × discount factor = 60,000 × 0.9091 = $54,546 (3.8.3)." },

  { q: "A project has a total present value of returns of $320,094 and costs $200,000. What is its NPV?",
    o: ["$120,094", "$520,094", "$200,000", "$320,094"],
    a: 0, d: 2,
    why: "NPV = sum of present values − original cost = 320,094 − 200,000 = $120,094 (3.8.3)." },

  { q: "What does a positive NPV mean?",
    o: ["The project is worthwhile at that discount rate", "The project will definitely pay back in under a year", "The project has no risk at all for the firm", "The project must be cancelled at once"],
    a: 0, d: 2,
    why: "A positive NPV means the discounted returns exceed the cost, so the project is worthwhile (3.8.3)." },

  { q: "Which is a benefit of NPV compared with payback?",
    o: ["It accounts for the time value of money", "It is much simpler to calculate by hand", "It does not rely on any forecasts at all", "It ignores the discount rate that is used"],
    a: 0, d: 2,
    why: "NPV is more accurate because it accounts for the time value of money, but it is more complex and depends on assumptions (3.8.3)." },

  { q: "Which is a limitation of NPV?",
    o: ["Its result depends on the discount rate chosen", "It cannot compare projects of different lengths", "It ignores the cash flows in later years", "It cannot be used for large investments"],
    a: 0, d: 3,
    why: "NPV depends on assumptions: too low a discount rate inflates the NPV (3.8.3)." },

  { q: "Why might a hospital for low-income patients buy a costly machine even with a low ARR?",
    o: ["Its mission of quality care may outweigh the financial return", "A low ARR is always the sign of a good investment", "Hospitals are not allowed to make any profits at all", "Machines never need to be paid back"],
    a: 0, d: 3,
    why: "Social enterprises weigh qualitative impact and mission alongside appraisal results (3.8.4)." },

  { q: "Which of these is a qualitative tool to use alongside investment appraisal?",
    o: ["The BCG matrix", "The payback period", "ARR", "NPV"],
    a: 0, d: 3,
    why: "Qualitative tools include the product life cycle, BCG matrix, STEEPLE and market research (3.8.4)." }
]);

QB.add("3.9", [
  { q: "Which best defines a profit centre?",
    o: ["A part of a business that generates both revenue and costs", "A part of a business that only ever generates costs", "A department that sets all of the prices of the firm", "A branch that does not keep any of its own accounts"],
    a: 0, d: 1,
    why: "A profit centre generates both revenue and costs; a cost centre generates costs only (3.9.1)." },

  { q: "Which of these is most likely to be a cost centre?",
    o: ["The head office of a retail chain", "An individual store of a retail chain", "The canteen that sells meals at a school", "A shop that sells uniforms at a school"],
    a: 0, d: 2,
    why: "Head office, market research and advertising departments are cost centres; branches and school shops are profit centres (3.9.1)." },

  { q: "Which is a motivational role of dividing a business into centres with budgets?",
    o: ["Autonomy over the budget can motivate managers", "It stops all of the departments from knowing their costs", "It removes the need for any managers", "It sets the salaries for every single employee"],
    a: 0, d: 2,
    why: "Autonomy over budgets can motivate and improve efficiency; departments that stay within budget can be rewarded (3.9.1)." },

  { q: "What is a budget?",
    o: ["A financial plan for a period with planned revenues and costs", "A record of the actual sales for the last year", "A legal document that is sent to the government each year", "The total value of all assets of the business"],
    a: 0, d: 1,
    why: "A budget is a financial plan for a defined period, used for planning, control, coordination and monitoring (3.9.2)." },

  { q: "In zero-based budgeting, what must each department do?",
    o: ["Justify every amount it asks for", "Repeat last year's budget exactly", "Spend nothing at all in the year", "Ask the bank to set its budget"],
    a: 0, d: 2,
    why: "In zero-based budgeting departments bid for and justify every amount, instead of basing it on previous years (3.9.2)." },

  { q: "How is net income calculated in a budget?",
    o: ["Total income minus total costs", "Total costs minus total income", "Total income plus total costs", "Budgeted income minus actual income"],
    a: 0, d: 1,
    why: "Net income = total income − total costs (3.9.2)." },

  { q: "How does a budget differ from a statement of profit or loss?",
    o: ["A budget is a forecast, while the statement summarises the past", "A budget is public, while the statement is internal", "A budget covers only a year, while the statement covers a month", "A budget lists assets and liabilities, while the statement does not"],
    a: 0, d: 3,
    why: "Budgets are forecasts, internal, and can cover any section or period; the P&L covers the past 12 months of the whole business (3.9.2)." },

  { q: "How is variance calculated in a budget?",
    o: ["Actual figure minus budgeted figure", "Budgeted figure minus actual figure", "Actual figure plus budgeted figure", "Actual figure divided by budgeted figure"],
    a: 0, d: 1,
    why: "Variance = actual − budgeted (3.9.3)." },

  { q: "Sales revenue was budgeted at $500m but the actual figure was $520m. What type of variance is this?",
    o: ["Favourable ($20m)", "Adverse ($20m)", "Favourable ($520m)", "Adverse ($500m)"],
    a: 0, d: 2,
    why: "Actual income higher than budget is favourable: 520 − 500 = $20m [F] (3.9.3)." },

  { q: "Salaries and wages were budgeted at $150m but actual costs were $180m. What type of variance is this?",
    o: ["Adverse ($30m)", "Favourable ($30m)", "Adverse ($180m)", "Favourable ($150m)"],
    a: 0, d: 2,
    why: "Actual costs higher than budget are adverse: 180 − 150 = $30m [A] (3.9.3)." },

  { q: "Actual electricity costs were $9m against a budget of $12m. What type of variance is this?",
    o: ["Favourable ($3m)", "Adverse ($3m)", "Favourable ($9m)", "No variance"],
    a: 0, d: 2,
    why: "Actual costs lower than budget are favourable: $3m [F] (3.9.3)." },

  { q: "Why is an adverse cost variance not always bad news?",
    o: ["Higher sales can cause higher variable costs", "Adverse variances always raise the profit", "Costs never change when sales change", "Adverse means that costs were lower than the budget"],
    a: 0, d: 3,
    why: "Higher variable costs from higher sales are welcome if working capital allows (3.9.3)." },

  { q: "Which is a way that budgets help with motivation?",
    o: ["Bonuses for meeting objectives under budget", "Cutting the funds of every department each year", "Keeping budgets secret from all managers", "Setting targets that nobody can meet"],
    a: 0, d: 2,
    why: "Well-designed budgets motivate, for example with bonuses for meeting objectives under budget; poor budgets demotivate (3.9.4)." },

  { q: "Which role of budgets means integrating departmental plans, such as more sales needing more marketing and HR funds?",
    o: ["Coordination", "Control", "Communication", "Measuring performance"],
    a: 0, d: 3,
    why: "Coordination integrates departmental plans so that, for example, more sales get both marketing and HR funding (3.9.4)." },

  { q: "Which role of budgets tells departments how much they are expected to spend?",
    o: ["Communication", "Coordination", "Motivation", "Planning"],
    a: 0, d: 3,
    why: "Budgets communicate to departments how much they may spend; they also plan, control, measure, motivate and coordinate (3.9.4)." }
]);

QB.add("4.3", [
  { q: "What is sales forecasting?",
    o: ["Using quantitative techniques to predict future sales", "Recording the actual sales figures of the last year", "Setting the price of a product for customers", "Choosing the colour and design of a product"],
    a: 0, d: 1,
    why: "Sales forecasting is a quantitative technique to predict future sales, in quantity or revenue (4.3)." },

  { q: "A business forecasts growth in sales. What might it do?",
    o: ["Expand inventory and recruit more staff", "Make some of the workers redundant", "Sell some of its spare assets", "Cut production immediately in all plants"],
    a: 0, d: 2,
    why: "If growth is forecast a firm may expand inventory, recruit staff, raise capacity or raise prices; if decline is forecast it may cut production (4.3)." },

  { q: "A causal model of sales uses which of these?",
    o: ["A relationship between an independent variable and sales", "Moving averages of the sales in past years", "Only the opinions of managers inside the firm", "A list of all the competitors of the firm"],
    a: 0, d: 3,
    why: "Causal models relate an independent variable (such as price or incomes) to sales, using a line of best fit and extrapolation (4.3)." },

  { q: "Time series analysis uses what to forecast sales?",
    o: ["Trends in historical data over time", "Customer opinions from focus groups", "The relationship between price and sales", "The forecasts of the firm's rivals"],
    a: 0, d: 2,
    why: "Time series analysis identifies trends in historical data, with time as the independent variable, using moving averages and trend lines (4.3)." },

  { q: "Sunscreen sales are higher each summer. Which type of variation is this?",
    o: ["Seasonal variation", "Cyclical variation", "Random variation", "Trend variation"],
    a: 0, d: 2,
    why: "Seasonal variation is higher sales at certain times of the year, such as sunscreen in summer or toys at holidays (4.3)." },

  { q: "Car sales rise in a boom and fall in a recession. Which type of variation is this?",
    o: ["Cyclical variation", "Seasonal variation", "Random variation", "Moving average"],
    a: 0, d: 2,
    why: "Cyclical variation is linked to the business cycle, as with cars and TVs (4.3)." },

  { q: "Which variation in sales is caused by unpredictable events, such as a natural disaster or COVID?",
    o: ["Random variation", "Seasonal variation", "Cyclical variation", "Causal variation"],
    a: 0, d: 2,
    why: "Random variations come from unpredictable events like natural disasters, sporting events, unrest or COVID (4.3)." },

  { q: "Which is a limitation of sales forecasting?",
    o: ["Rapidly changing markets can make forecasts invalid", "It can never be used to plan the stock of a firm", "It always gives perfectly accurate results", "It only works for firms that have been newly created"],
    a: 0, d: 2,
    why: "Forecasts based on past data fail with little data or rapid change; they are a guide only (4.3)." },

  { q: "Why is it a problem for a new firm to use time series analysis?",
    o: ["There is not enough past data", "New firms have no customers at all", "Time series needs a discount rate", "New firms cannot hire staff"],
    a: 0, d: 2,
    why: "Forecasts based on past data are limited when a firm is new and has too little data (4.3)." },

  { q: "Why should sales forecasts be combined with market research?",
    o: ["Past data alone can miss changes in consumer behaviour", "Forecasts cannot be made without surveys of customers", "Market research is more accurate than any data", "Forecasts are illegal when they are used on their own"],
    a: 0, d: 2,
    why: "Relying only on past data would have failed during COVID, so forecasts should be combined with qualitative analysis (4.3)." },

  { q: "What is a use of sales forecasting if a decline is forecast?",
    o: ["Raising the marketing budget to fight the decline", "Hiring many more production workers for the year", "Increasing the stock for future sales", "Building a bigger factory straight away"],
    a: 0, d: 3,
    why: "If decline is forecast, a firm may cut production, sell assets, withdraw a failing product or raise marketing to fight the decline (4.3)." }
]);

QB.add("4.6", [
  { q: "Which entry method into international markets usually has the lowest risk?",
    o: ["Exporting", "Direct investment", "A takeover", "A wholly owned subsidiary"],
    a: 0, d: 2,
    why: "Exporting needs few resources and has the lowest risk; direct investment is the most expensive and risky (4.6.1)." },

  { q: "Which entry method has the highest cost and risk, but also the highest control?",
    o: ["Direct investment in a wholly owned subsidiary", "Exporting through an agent in the foreign country", "Licensing", "Franchising"],
    a: 0, d: 2,
    why: "Direct investment (FDI), such as factories or wholly owned subsidiaries, is the most expensive with the highest risk and control (4.6.1)." },

  { q: "A franchisee buys the right to use a franchisor's name and business model. What is this entry method?",
    o: ["Franchising", "Licensing", "A joint venture", "Exporting"],
    a: 0, d: 1,
    why: "Franchising is quick, easy and cost-efficient, and the franchisor keeps high control over marketing (4.6.1)." },

  { q: "One firm lets another produce its products using its brand and patents. What is this?",
    o: ["Licensing", "Franchising", "A takeover", "Direct investment"],
    a: 0, d: 2,
    why: "Licensing lets another company produce a firm's products using its brand, patents or expertise (4.6.1)." },

  { q: "Two firms from different countries create a new company, each with an equity stake. What is this?",
    o: ["A joint venture", "A takeover", "Licensing", "Exporting"],
    a: 0, d: 1,
    why: "A joint venture is a new company with equity from firms in two countries, useful where governments restrict foreign ownership (4.6.1)." },

  { q: "When is a joint venture most useful for entering a foreign market?",
    o: ["When governments restrict foreign ownership", "When the firm wants no partners at all", "When the firm has no costs to share", "When the firm wants the lowest possible control"],
    a: 0, d: 3,
    why: "Joint ventures are useful where governments restrict foreign ownership, speed matters or R&D and operating costs are high (4.6.1)." },

  { q: "What is a takeover?",
    o: ["Buying a majority or all of a firm's shares to gain control", "Two firms merging to share the costs of their research", "A firm selling its products through an agent abroad", "A firm letting others use its brand name"],
    a: 0, d: 2,
    why: "A takeover means buying more than 50% or all of the shares to gain control; it has high cost and risk (4.6.1)." },

  { q: "A firm uses the same marketing mix in every country. Which strategy is this?",
    o: ["Standardisation (a global strategy)", "Adaptation to local needs", "Market penetration", "Product differentiation"],
    a: 0, d: 2,
    why: "Standardisation uses the same marketing everywhere, giving big economies of scale, but may be less effective (4.6.1)." },

  { q: "Starbucks changes its menu and store layouts for each country. Which strategy is this?",
    o: ["Adaptation", "Standardisation", "Exporting", "Licensing"],
    a: 0, d: 2,
    why: "Adaptation changes some or all of the 7 Ps to suit local consumers, and it is the most common approach (4.6.1)." },

  { q: "Which is an advantage of a standardised global marketing strategy?",
    o: ["Large economies of scale", "A perfect fit with every one of the local markets", "No need for any central control or planning", "Higher spending on each market"],
    a: 0, d: 2,
    why: "Standardisation is efficient with huge economies of scale, but may be less effective because needs differ (4.6.1)." },

  { q: "Which is an opportunity of entering international markets?",
    o: ["A larger customer pool and more revenue", "Different languages in each of the countries", "Trade barriers such as tariffs and quotas", "Different laws on advertising"],
    a: 0, d: 1,
    why: "Opportunities include a larger customer pool, lower costs, spreading risk and a better brand reputation (4.6.2)." },

  { q: "BMW's German sales fell in 2008 but rose in China and the Middle East. Which opportunity does this show?",
    o: ["Spreading risks", "Lower production costs", "Improved brand reputation", "A larger customer pool"],
    a: 0, d: 2,
    why: "Operating in several countries spreads risk when one market declines (4.6.2)." },

  { q: "Which framework can be used to find the threats of an international market?",
    o: ["STEEPLE", "The Ansoff matrix", "The BCG matrix", "Zero-based budgeting"],
    a: 0, d: 2,
    why: "If you forget the threats, apply STEEPLE (sociocultural, technological, economic, environmental, political, legal, ethical) to the case (4.6.2)." },

  { q: "A business uses a slogan that means something embarrassing in another language. Which type of threat is this?",
    o: ["Sociocultural", "Environmental", "Technological", "Economic"],
    a: 0, d: 2,
    why: "Language barriers and different preferences are sociocultural threats, as in the famous translation mistakes (4.6.2)." },

  { q: "Gillette sells a cheaper razor for lower-income Indian consumers. Which type of factor is this a response to?",
    o: ["Economic (differences in income)", "Legal rules", "Political change", "Environmental"],
    a: 0, d: 3,
    why: "Income differences between markets can lead to tailored products, such as a cheaper razor (4.6.2)." },

  { q: "Which of these is a trade barrier that can threaten an international business?",
    o: ["Tariffs and quotas", "A larger customer pool", "Lower production costs", "A better brand reputation"],
    a: 0, d: 2,
    why: "Trade barriers like tariffs and quotas are legal threats, such as the EU–US trade war that hit aircraft makers (4.6.2)." },

  { q: "A country with political stability, such as Singapore or the UAE, is likely to carry what level of risk?",
    o: ["Low risk", "High risk", "No risk at all", "The same risk as every country"],
    a: 0, d: 2,
    why: "Stable countries are lower risk than unstable ones such as North Korea or Afghanistan (4.6.2)." },

  { q: "The EU banned imports of Indonesian palm oil on sustainability grounds. Which type of factor is this?",
    o: ["Environmental", "Technological", "Sociocultural", "Economic"],
    a: 0, d: 3,
    why: "Deforestation and its effect on trade are environmental factors in international marketing (4.6.2)." },

  { q: "Which of these is a legal threat for a firm marketing abroad?",
    o: ["Different product standards and advertising laws", "Rising incomes in the new market", "A larger customer pool abroad", "More consumers who like the product"],
    a: 0, d: 2,
    why: "Legal threats include different product standards, trading laws, IP protection and advertising laws, such as the beef burger ban in India (4.6.2)." }
]);
