// 3.4 Final accounts (apuntes: Unit 3, 3.4.1 a 3.4.5)
// La primera opción es la correcta (a: 0); el juego baraja las opciones cada vez.
QB.add("3.4", [
  { q: "Which stakeholder uses a business's final accounts mainly to judge its ability to repay a loan?",
    o: ["Banks", "Local community", "Competitors", "Employees"],
    a: 0, d: 1,
    why: "Banks use the accounts to assess whether the business can repay loans (3.4.1)." },

  { q: "Why would a supplier read a customer's final accounts?",
    o: ["To check whether it can pay for goods bought on credit", "To work out how much tax the business should pay", "To compare its profits with its own rivals", "To decide how many dividends to pay out"],
    a: 0, d: 2,
    why: "Suppliers use the accounts to see the business's ability to pay for goods supplied on credit (3.4.1)." },

  { q: "Why would the government be interested in a business's final accounts?",
    o: ["To assess the tax due on profit", "To decide the price of the products", "To choose the next marketing campaign", "To recruit the managers of the business"],
    a: 0, d: 1,
    why: "Governments assess taxes on profit and the health of businesses, which affects jobs (3.4.1)." },

  { q: "How do owners and shareholders use the final accounts?",
    o: ["To see how well their money is invested and what dividends to expect", "To check if the business can repay its overdraft on time", "To decide if the business is stable enough to stay locally", "To compare the financial strength of a rival business"],
    a: 0, d: 2,
    why: "Owners and shareholders look at how effectively their money is invested and how much they will get in dividends (3.4.1)." },

  { q: "What does the statement of profit or loss show?",
    o: ["The profit or loss from trading over a period of time", "The value of assets and liabilities on a single date", "The cash that comes in and goes out each month", "The forecast of sales for the next several years"],
    a: 0, d: 1,
    why: "The statement of profit or loss shows profit or loss from trading over a period, usually a year (3.4.2)." },

  { q: "How is gross profit calculated?",
    o: ["Sales revenue minus cost of sales", "Sales revenue minus all of the expenses", "Gross profit minus interest and tax", "Cost of sales minus the total of expenses"],
    a: 0, d: 1,
    why: "Gross profit = sales revenue − cost of sales, where cost of sales covers the direct costs (3.4.2)." },

  { q: "Which of the following is included in cost of sales?",
    o: ["Raw materials used to make the product", "Advertising for the product", "Rent of the head office", "Salaries of the administration staff"],
    a: 0, d: 2,
    why: "Cost of sales covers direct costs such as raw materials and direct labour; advertising, rent and admin are expenses (3.4.2)." },

  { q: "A business has sales revenue of $1,000,000 and cost of sales of $450,000. What is its gross profit?",
    o: ["$550,000", "$450,000", "$1,450,000", "$310,000"],
    a: 0, d: 1,
    why: "$1,000,000 − $450,000 = $550,000 gross profit (3.4.2)." },

  { q: "Gross profit is $550,000 and expenses are $240,000. What is the profit before interest and tax?",
    o: ["$310,000", "$790,000", "$240,000", "$550,000"],
    a: 0, d: 2,
    why: "Profit before interest and tax = gross profit − expenses = $550,000 − $240,000 = $310,000 (3.4.2)." },

  { q: "A business makes a profit before tax of $300,000 and pays tax at 15%. What is its profit for the period?",
    o: ["$255,000", "$45,000", "$285,000", "$345,000"],
    a: 0, d: 2,
    why: "Tax = 15% × $300,000 = $45,000, so profit for the period = $255,000 (3.4.2)." },

  { q: "A business makes a profit of $255,000 and pays dividends of $150,000. What is the retained profit?",
    o: ["$105,000", "$150,000", "$405,000", "$255,000"],
    a: 0, d: 2,
    why: "Retained profit = profit for the period − dividends = $255,000 − $150,000 = $105,000 (3.4.2)." },

  { q: "What is the term used instead of profit in the accounts of a non-profit organisation?",
    o: ["Surplus", "Dividends", "Goodwill", "Equity"],
    a: 0, d: 2,
    why: "A non-profit uses surplus instead of profit, and has no tax or dividends in its statement (3.4.2)." },

  { q: "What does the statement of financial position (balance sheet) show?",
    o: ["A snapshot of assets, liabilities and equity at one point in time", "The profit made by a business throughout one whole year", "The movement of cash during one single month", "The sales forecast for the year ahead of the business"],
    a: 0, d: 1,
    why: "The balance sheet is a snapshot at a specific point in time of assets, liabilities and equity (3.4.3)." },

  { q: "Which equation must always balance in the statement of financial position?",
    o: ["Assets = liabilities + equity", "Assets = liabilities − equity", "Equity = assets + liabilities", "Liabilities = assets + equity"],
    a: 0, d: 1,
    why: "Assets = liabilities + equity, so both sides of the balance sheet must balance (3.4.3)." },

  { q: "Which of the following is a non-current asset?",
    o: ["Machinery", "Stock", "Cash", "Debtors"],
    a: 0, d: 1,
    why: "Non-current assets are long-term items such as land, buildings, machinery and vehicles; cash, debtors and stock are current assets (3.4.3)." },

  { q: "Which current asset is the least liquid?",
    o: ["Stock (inventory)", "Cash", "Debtors", "A bank balance"],
    a: 0, d: 2,
    why: "Current assets are listed in order of liquidity: cash is the most liquid and stock is the least liquid (3.4.3)." },

  { q: "What are debtors in a balance sheet?",
    o: ["Money owed to the business by customers who bought on credit", "Money that the business owes to its suppliers", "Money that the business has borrowed from a bank", "Money that shareholders have invested in the firm"],
    a: 0, d: 2,
    why: "Debtors are a current asset: customers owe money to the business. Trade creditors are the opposite, a current liability (3.4.3)." },

  { q: "Which of the following is a current liability?",
    o: ["Trade creditors", "A 25-year mortgage", "Machinery", "Retained earnings"],
    a: 0, d: 2,
    why: "Trade creditors, overdrafts and short-term loans are due within 12 months; mortgages are non-current liabilities (3.4.3)." },

  { q: "How is working capital calculated?",
    o: ["Current assets minus current liabilities", "Non-current assets minus current assets", "Total assets minus non-current liabilities", "Equity minus retained earnings"],
    a: 0, d: 2,
    why: "Working capital = current assets − current liabilities (3.4.3)." },

  { q: "A business has total assets of $730,000 and total liabilities of $200,000. What is its equity?",
    o: ["$530,000", "$930,000", "$200,000", "$730,000"],
    a: 0, d: 2,
    why: "Net assets = total assets − total liabilities = $530,000, which equals equity (3.4.3)." },

  { q: "Equity in a company's balance sheet is made up of which two items?",
    o: ["Share capital and retained earnings", "Debtors and trade creditors", "Non-current and current assets", "Mortgages and bank overdrafts"],
    a: 0, d: 2,
    why: "Equity = share capital (money from selling shares) + retained earnings (accumulated retained profit) (3.4.3)." },

  { q: "Which is an example of an intangible asset?",
    o: ["A patent", "A delivery van", "A factory building", "A stock of raw materials"],
    a: 0, d: 1,
    why: "Intangible assets are non-physical items of value such as patents, copyright, trademarks and goodwill (3.4.4)." },

  { q: "What does a patent give to an inventor?",
    o: ["Legal protection against copying for a set period", "The right to register the brand as a symbol", "Ownership of the whole market for the product", "Protection for a piece of music forever"],
    a: 0, d: 2,
    why: "A patent gives legal protection against copying for a set period, about 20 years, creating a temporary monopoly (3.4.4)." },

  { q: "Which type of intangible asset protects creators of books, music, films and software?",
    o: ["Copyright", "A registered trademark", "A patent", "Goodwill"],
    a: 0, d: 2,
    why: "Copyright protects literary and artistic works, usually for 50 years after the author's death under the Berne Convention (3.4.4)." },

  { q: "A business is sold for more than the value of its net assets. What does the extra value represent?",
    o: ["Goodwill", "Depreciation", "Retained earnings", "Share capital"],
    a: 0, d: 2,
    why: "Goodwill is the intangible value of brand loyalty and relationships that appears when a business is sold for more than its net assets (3.4.4)." },

  { q: "What is depreciation?",
    o: ["The fall in the value of non-current assets over time", "The rise in the value of stock over a year", "The cost of the interest on a long-term loan", "The profit that is kept inside the business"],
    a: 0, d: 1,
    why: "Depreciation is the fall in value of non-current assets, recorded as an expense in the profit or loss statement (3.4.5)." },

  { q: "Which is the most common cause of depreciation?",
    o: ["Wear and tear", "Obsolescence", "Inflation", "Goodwill"],
    a: 0, d: 2,
    why: "The causes of depreciation are wear and tear (the most common) and obsolescence (3.4.5)." },

  { q: "A truck costs $100,000 and has a residual value of $25,000 and a useful life of 5 years. What is the annual straight-line depreciation?",
    o: ["$15,000", "$20,000", "$25,000", "$5,000"],
    a: 0, d: 2,
    why: "Straight-line depreciation = ($100,000 − $25,000) ÷ 5 = $15,000 per year (3.4.5)." },

  { q: "A machine costs $20,000 with no residual value. It is planned to make 8,000 units in total, and 2,000 are made in year 2. What is the year 2 depreciation using the units of production method?",
    o: ["$5,000", "$2,000", "$2,500", "$4,000"],
    a: 0, d: 3,
    why: "2,000 ÷ 8,000 × $20,000 = $5,000 (3.4.5)." },

  { q: "For which asset is the straight-line method best suited?",
    o: ["Office furniture that is used consistently", "A machine whose use varies a lot each year", "A costly machine where accurate values are vital", "A computer that could become obsolete soon"],
    a: 0, d: 3,
    why: "Straight-line suits assets used consistently with a predictable life, such as furniture; units of production suits assets with varying use (3.4.5)." }
]);
