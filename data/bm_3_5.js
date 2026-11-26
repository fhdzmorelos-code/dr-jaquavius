// 3.5 Profitability and liquidity ratios, 3.6 Efficiency ratios, 3.7 Cash flow (apuntes: Unit 3)
// La primera opción es la correcta (a: 0); el juego baraja las opciones cada vez.
QB.add("3.5", [
  { q: "How is the gross profit margin (GPM) calculated?",
    o: ["(Gross profit ÷ sales revenue) × 100", "(Profit before interest and tax ÷ revenue) × 100", "(Gross profit ÷ capital employed) × 100", "(Cost of sales ÷ sales revenue) × 100"],
    a: 0, d: 1,
    why: "GPM = (gross profit ÷ sales revenue) × 100 (3.5.1)." },

  { q: "A business has gross profit of $550,000 and sales revenue of $1,000,000. What is its GPM?",
    o: ["55%", "45%", "31%", "5.5%"],
    a: 0, d: 1,
    why: "$550,000 ÷ $1,000,000 × 100 = 55% (3.5.1)." },

  { q: "Which of the following would improve a business's gross profit margin?",
    o: ["Buying from lower-cost suppliers", "Hiring more administration staff", "Paying a higher rent for the office", "Spending more on advertising"],
    a: 0, d: 2,
    why: "GPM improves by raising revenue or cutting cost of sales, for example with lower-cost suppliers; the risk is lower quality (3.5.1)." },

  { q: "What is a limitation of raising prices to improve the gross profit margin?",
    o: ["In a competitive market sales may fall a lot", "It always lowers the revenue of the business", "It always raises the direct costs of production", "It cannot work if the firm has loyal customers"],
    a: 0, d: 2,
    why: "Higher prices bring more revenue only if demand holds; in competitive markets sales may fall a lot (elasticity) (3.5.1)." },

  { q: "Which ratio shows how well managers control indirect costs (expenses)?",
    o: ["Profit margin (PM)", "Gross profit margin (GPM)", "Current ratio", "Acid test ratio"],
    a: 0, d: 2,
    why: "PM uses profit before interest and tax, so it includes both direct and indirect costs (3.5.1)." },

  { q: "A business has profit before interest and tax of $310,000 and sales revenue of $1,000,000. What is its profit margin?",
    o: ["31%", "55%", "3.1%", "69%"],
    a: 0, d: 2,
    why: "PM = $310,000 ÷ $1,000,000 × 100 = 31% (3.5.1)." },

  { q: "What is another name for profit before interest and tax?",
    o: ["EBIT (operating profit)", "Gross profit", "Retained profit", "Net assets"],
    a: 0, d: 2,
    why: "Profit before interest and tax is EBIT, also called operating profit (3.5.1)." },

  { q: "Why might a social enterprise deliberately have a lower profit margin?",
    o: ["It may charge affordable prices or pay living wages", "It is not allowed by law to make any profit", "It always has higher costs than every other business", "It does not need to cover its costs"],
    a: 0, d: 3,
    why: "Social enterprises may accept lower margins for affordable prices, living wages or regeneration, so profitability ratios are a narrow measure (3.5.1)." },

  { q: "How is capital employed calculated?",
    o: ["Non-current liabilities plus equity", "Current assets minus current liabilities", "Total assets minus total liabilities", "Share capital plus current liabilities"],
    a: 0, d: 2,
    why: "Capital employed = non-current liabilities + equity (3.5.2)." },

  { q: "How is ROCE calculated?",
    o: ["(Profit before interest and tax ÷ capital employed) × 100", "(Gross profit ÷ capital employed) × 100", "(Profit before interest and tax ÷ revenue) × 100", "(Capital employed ÷ profit before interest and tax) × 100"],
    a: 0, d: 2,
    why: "ROCE = (profit before interest and tax ÷ capital employed) × 100 (3.5.2)." },

  { q: "A firm has profit before interest and tax of $310,000 and capital employed of $710,000. What is its ROCE, to the nearest whole number?",
    o: ["44%", "31%", "55%", "23%"],
    a: 0, d: 3,
    why: "$310,000 ÷ $710,000 × 100 = about 44% (3.5.2)." },

  { q: "Which comparison helps interpret a firm's ROCE?",
    o: ["The industry average and the rate on a risk-free savings account", "The number of employees in the firm and in the whole industry", "The price of its own products and the prices of its rivals", "The value of its brand and the total number of its stores"],
    a: 0, d: 3,
    why: "ROCE should be compared with the industry average, with past years and with a risk-free interest rate, which it should exceed (3.5.2)." },

  { q: "Which action would improve a firm's ROCE?",
    o: ["Selling unused or obsolete assets", "Borrowing more long-term debt", "Paying a bigger dividend to owners", "Cutting the number of products it sells"],
    a: 0, d: 3,
    why: "ROCE can be improved by raising revenue, cutting costs, selling unused assets and reducing long-term liabilities (3.5.2)." },

  { q: "Liquidity is best defined as which of the following?",
    o: ["The ability to turn short-term assets into cash to cover short-term debts", "The profit that a business makes during one full financial year", "The total amount of money that a business borrows from a bank", "The combined value of all of the assets that a business owns"],
    a: 0, d: 1,
    why: "Liquidity is the ability to convert short-term assets into cash to cover short-term debts without selling fixed assets (3.5.3)." },

  { q: "How is the current ratio calculated?",
    o: ["Current assets ÷ current liabilities", "Current liabilities ÷ current assets", "(Current assets − stock) ÷ current liabilities", "Current assets − current liabilities"],
    a: 0, d: 1,
    why: "Current ratio = current assets ÷ current liabilities, shown as a number, not a percentage (3.5.3)." },

  { q: "A business has current assets of $70,000 and current liabilities of $20,000. What is its current ratio?",
    o: ["3.5", "50", "0.29", "2.5"],
    a: 0, d: 2,
    why: "$70,000 ÷ $20,000 = 3.5 (3.5.3)." },

  { q: "A current ratio below 1 suggests what for a business?",
    o: ["Risk of not covering short-term debts", "Very efficient use of all of its cash", "A very high gross profit margin for the year", "Low levels of gearing in the capital structure"],
    a: 0, d: 2,
    why: "Below 1 means current liabilities exceed current assets, so there is a risk of insolvency; the prudent range is about 1.5 to 2 (3.5.3)." },

  { q: "Why is the acid test ratio stricter than the current ratio?",
    o: ["It excludes stock, which is the least liquid current asset", "It includes non-current assets as well", "It excludes debtors from the current assets of the firm", "It includes long-term loans among the liabilities"],
    a: 0, d: 2,
    why: "Acid test = (current assets − stock) ÷ current liabilities, so it excludes the least liquid asset (3.5.3)." },

  { q: "A firm has current assets of $70,000, stock of $20,000 and current liabilities of $20,000. What is its acid test ratio?",
    o: ["2.5", "3.5", "0.4", "1.0"],
    a: 0, d: 3,
    why: "($70,000 − $20,000) ÷ $20,000 = 2.5 (3.5.3)." },

  { q: "Which action would improve a firm's liquidity ratios?",
    o: ["Reducing the number of debtors", "Extending the credit that it gives to customers", "Buying more stock than it can sell", "Paying suppliers earlier than needed"],
    a: 0, d: 2,
    why: "Reducing debtors brings more cash in; the limitation is that customers may leave (3.5.3)." },

  { q: "Which is a limitation of ratio analysis?",
    o: ["It is based on historical data and ignores qualitative factors", "It can only ever be used by the managers of the firm", "It cannot be calculated from any of the final accounts", "It always predicts the future with perfect accuracy"],
    a: 0, d: 2,
    why: "Ratios are historical, can be affected by external influences, and ignore qualitative factors like customer satisfaction (3.5.3)." }
]);

QB.add("3.6", [
  { q: "How is average stock calculated?",
    o: ["(Opening stock + closing stock) ÷ 2", "Opening stock − closing stock", "Cost of sales ÷ closing stock", "Opening stock + the cost of sales"],
    a: 0, d: 2,
    why: "Average stock = (opening stock + closing stock) ÷ 2 (3.6.1)." },

  { q: "Cost of sales is $300m and average stock is $50m. What is the stock turnover?",
    o: ["6 times", "0.17 times", "250 times", "60 times"],
    a: 0, d: 2,
    why: "Stock turnover = cost of sales ÷ average stock = 300 ÷ 50 = 6 times (3.6.1)." },

  { q: "A firm's stock turnover is very low. What does this most likely suggest?",
    o: ["Slow sales and higher storage costs", "Very fast sales and low storage costs", "High profits and no debtors", "Low gearing in the capital structure"],
    a: 0, d: 2,
    why: "Low turnover suggests slow sales (poor range, weak promotion, overstocking) and higher storage costs (3.6.1)." },

  { q: "Why should stock turnover not be compared across different industries?",
    o: ["Supermarkets turn stock over much faster than car dealers", "All industries must have exactly the same turnover", "Stock turnover can only ever be used for manufacturers", "Services have the highest levels of stock of all firms"],
    a: 0, d: 3,
    why: "Turnover should be compared with firms in the same industry or with past years: supermarkets are fast and cars or carpets are slow (3.6.1)." },

  { q: "How are debtor days calculated?",
    o: ["(Debtors ÷ sales revenue) × 365", "(Creditors ÷ cost of sales) × 365", "(Average stock ÷ cost of sales) × 365", "(Debtors ÷ cost of sales) × 100"],
    a: 0, d: 2,
    why: "Debtor days = (debtors ÷ sales revenue) × 365 (3.6.1)." },

  { q: "Debtors are $34m and sales revenue is $500m. What are the debtor days, to the nearest day?",
    o: ["25 days", "15 days", "68 days", "7 days"],
    a: 0, d: 3,
    why: "34 ÷ 500 × 365 = 24.8, about 25 days (3.6.1)." },

  { q: "How are creditor days calculated?",
    o: ["(Creditors ÷ cost of sales) × 365", "(Debtors ÷ sales revenue) × 365", "(Creditors ÷ sales revenue) × 100", "(Stock ÷ cost of sales) × 365"],
    a: 0, d: 2,
    why: "Creditor days = (creditors ÷ cost of sales) × 365 (3.6.1)." },

  { q: "Which relationship is the aim for a business's debtor days and creditor days?",
    o: ["Debtor days shorter than creditor days", "Debtor days longer than creditor days", "Debtor days exactly equal to stock days", "Creditor days equal to zero"],
    a: 0, d: 2,
    why: "A firm should collect from customers before it has to pay suppliers, so debtor days should be shorter than creditor days (3.6.1)." },

  { q: "How is the gearing ratio calculated?",
    o: ["(Non-current liabilities ÷ capital employed) × 100", "(Current liabilities ÷ capital employed) × 100", "(Equity ÷ capital employed) × 100", "(Non-current liabilities ÷ equity) × 100"],
    a: 0, d: 2,
    why: "Gearing = (non-current liabilities ÷ capital employed) × 100 (3.6.1)." },

  { q: "A firm has non-current liabilities of $240m and equity of $385m. What is its gearing ratio?",
    o: ["38.4%", "62.3%", "100%", "9.6%"],
    a: 0, d: 3,
    why: "Capital employed = 240 + 385 = 625, so gearing = 240 ÷ 625 × 100 = 38.4% (3.6.1)." },

  { q: "A gearing ratio above 50% is usually seen as what?",
    o: ["High, so risky if interest rates rise", "Low, so very safe for all investors", "Normal for all of the firms in the industry", "A sign of high liquidity in the firm"],
    a: 0, d: 2,
    why: "Below 25% is low, 25–50% is normal and above 50% is high; high gearing is risky when interest rates rise (3.6.1)." },

  { q: "Which strategy could improve a firm's stock turnover?",
    o: ["Offer a narrower range of goods", "Order much more stock than needed", "Stop selling the high-demand goods", "Keep the obsolete stock in storage"],
    a: 0, d: 2,
    why: "A narrower range gives simpler control and less stock; the limitation is less customer choice (3.6.2)." },

  { q: "Which is a limitation of just-in-time stock control?",
    o: ["Supply chain delays can cause stock-outs", "It requires a large amount of storage space", "It increases the amount of excess stock", "It raises the value of the stock held"],
    a: 0, d: 2,
    why: "Just-in-time avoids excess stock but depends on suppliers; delays can cause stock-outs and unhappy customers (3.6.2)." },

  { q: "Which strategy reduces debtor days?",
    o: ["Shortening the credit period given to customers", "Giving customers a much longer credit period", "Accepting late payments from them without any penalty", "Offering credit to every single new customer"],
    a: 0, d: 2,
    why: "Shortening the credit period (for example 90 to 30 days) speeds up payment, but customers may be upset (3.6.2)." },

  { q: "Which strategy would lower a firm's gearing ratio?",
    o: ["Selling more shares", "Taking out a new long-term loan", "Paying out all profit as dividends", "Buying assets with a mortgage"],
    a: 0, d: 3,
    why: "Selling shares raises equity, which lowers gearing, but it dilutes ownership (3.6.2)." },

  { q: "What is insolvency?",
    o: ["Being unable to pay debts when they are due", "A legal process to restructure a business", "A rise in the value of all of the assets", "The sale of the whole business to a rival"],
    a: 0, d: 1,
    why: "Insolvency is being unable to pay debts; bankruptcy is the legal process that may follow (3.6.3)." },

  { q: "Which statement about insolvency and bankruptcy is correct?",
    o: ["A bankrupt business is insolvent, but an insolvent one is not necessarily bankrupt", "An insolvent business is always legally bankrupt as well", "Bankruptcy means that a firm has far too many debtors", "Insolvency is a legal process while bankruptcy is not one"],
    a: 0, d: 3,
    why: "Bankruptcy is a legal process; an insolvent business is not necessarily bankrupt, but a bankrupt business is insolvent (3.6.3)." }
]);

QB.add("3.7", [
  { q: "What is cash flow?",
    o: ["The movement of cash into and out of a business", "The total profit made by a business in a year", "The value of all of a firm's non-current assets", "The money that is owed to the business by debtors"],
    a: 0, d: 1,
    why: "Cash flow is the inflows and outflows of cash and their timing; profit is revenue minus total cost (3.7.1)." },

  { q: "How is net cash flow calculated?",
    o: ["Cash inflows minus cash outflows", "Revenue minus total costs", "Opening balance plus closing balance", "Cash inflows plus cash outflows"],
    a: 0, d: 1,
    why: "Net cash flow = cash inflows − cash outflows (3.7.1)." },

  { q: "A business has revenue of $50,000 and costs of $30,000, but half its sales are on 30-day credit. What is the net cash flow this month?",
    o: ["−$5,000", "$20,000", "$25,000", "−$30,000"],
    a: 0, d: 3,
    why: "Cash in = 50% × $50,000 = $25,000; cash out = $30,000, so net cash flow is −$5,000 even though profit is $20,000 (3.7.1)." },

  { q: "Why can a profitable business still face a cash flow crisis?",
    o: ["Customers may pay late while its bills must be paid on time", "Profit and cash flow are always exactly equal in size", "Cash always arrives long before the costs are paid", "Profitable firms never have to pay their suppliers"],
    a: 0, d: 2,
    why: "The time lag between making sales and getting paid can cause negative cash flow even when the business makes a profit (3.7.1)." },

  { q: "A cash flow forecast shows an opening balance of $9,000 and a net cash flow of −$2,000. What is the closing balance?",
    o: ["$7,000", "$11,000", "$2,000", "$9,000"],
    a: 0, d: 2,
    why: "Closing balance = opening balance + net cash flow = $9,000 − $2,000 = $7,000 (3.7.2)." },

  { q: "What does the closing balance of one month become in a cash flow forecast?",
    o: ["The opening balance of the next month", "The net cash flow of the next month", "The total inflows of the next month", "The profit of the next month"],
    a: 0, d: 2,
    why: "Closing balance = opening balance + net cash flow, and it becomes the next month's opening balance (3.7.2)." },

  { q: "What is the difference between a cash flow forecast and a cash flow statement?",
    o: ["A forecast predicts future flows; a statement records actual past flows", "A forecast records past flows while a statement predicts the future", "A forecast is for profit and a statement is for cash only", "There is no difference between the two documents"],
    a: 0, d: 2,
    why: "A forecast is a prediction for a future period; a cash flow statement records actual cash flows for a past period (3.7.2)." },

  { q: "How does a cash flow forecast help a business?",
    o: ["It lets the firm plan ahead, such as arranging a loan before a negative month", "It guarantees that the business will never run out of cash", "It replaces the need for a statement of financial position", "It shows how much profit has been made last year"],
    a: 0, d: 2,
    why: "A forecast lets the firm plan, for example arrange a short-term loan before a negative month, and compare forecast with actual results (3.7.2)." },

  { q: "Which is a limitation of a cash flow forecast?",
    o: ["It is based on assumptions that may not hold", "It records only what has happened in the past", "It can only be prepared by an outside bank", "It ignores all of the cash inflows"],
    a: 0, d: 2,
    why: "Forecasts rely on assumptions about sales and costs that may not turn out to be true (3.7.3)." },

  { q: "What is free cash flow?",
    o: ["Cash left after operating costs, available for dividends or investment", "Cash that the business receives from all of its customers", "The cash that is held in the bank as an overdraft loan", "The profit before interest and tax of the whole business"],
    a: 0, d: 3,
    why: "Free cash flow is the cash left after operating costs, which can fund buybacks, dividends or capital investment (3.7.3)." },

  { q: "Which is a cause of poor cash flow?",
    o: ["Overtrading or expanding too fast", "A very small amount of stock held by the firm", "A high level of cash sales in each month", "Low and steady expenses throughout the whole year"],
    a: 0, d: 2,
    why: "Causes include poor stock management, poor pricing, overtrading, high expenses and seasonal demand (3.7.4)." },

  { q: "Which is the quickest way to increase cash inflows when cash is short?",
    o: ["An overdraft", "Selling shares to the public", "Expanding the product range", "A new advertising campaign"],
    a: 0, d: 2,
    why: "An overdraft is the quickest source of short-term cash, but it has high interest (3.7.4)." },

  { q: "Which is a drawback of selling non-current assets to improve cash flow?",
    o: ["Assets that are hard to replace may be needed later", "It always lowers the sales revenue of the whole business", "It always raises the interest that is paid on debts", "It always lowers the value of all of the stock held"],
    a: 0, d: 2,
    why: "Selling non-current assets brings cash, but a firm should not sell assets that are hard to replace (3.7.4)." },

  { q: "Which strategy reduces cash outflows?",
    o: ["Leasing equipment instead of buying it", "Giving customers much longer credit terms", "Buying a lot more stock in advance", "Paying suppliers earlier than needed"],
    a: 0, d: 2,
    why: "Leasing reduces the large upfront cost, but the firm never owns the asset (3.7.4)." },

  { q: "A business renegotiates longer payment terms with its suppliers. What is a risk of this?",
    o: ["Suppliers may refuse to give credit in the future", "Cash outflows will rise immediately for the firm", "Debtor days will always rise for the firm itself", "Customers will stop buying the product at once"],
    a: 0, d: 3,
    why: "Extending trade credit helps cash flow, but suppliers may refuse credit later (3.7.4)." },

  { q: "Which is a strategy for dealing with seasonal falls in cash flow, such as ice cream sales in winter?",
    o: ["Arrange a short-term loan or overdraft to cover the low months", "Increase the amount of stock held in the quiet months", "Stop all of the advertising for the product line", "Raise the amount of long-term debt right away this year"],
    a: 0, d: 3,
    why: "Seasonal demand is a cause of cash flow problems, and short-term finance can bridge the gap (3.7.4)." }
]);
