// 7.1.8 a 7.1.14 Toolkit: BCG, Gantt, ruta crítica, Porter, contribución, regresión lineal, estadística descriptiva (apuntes: Unit 7)
// La primera opción es la correcta (a: 0); el juego baraja las opciones cada vez.
QB.add("7.1.8", [
  { q: "On the BCG matrix, which two measures place a product?",
    o: ["Market share and market growth", "Price and quality of the product", "Costs and revenues of the product", "Brand image and product design"],
    a: 0, d: 1,
    why: "The BCG (growth-share) matrix uses market share (x-axis) and market growth (y-axis) (7.1.8)." },

  { q: "A company has sales of $200m in a market with total sales of $1,000m. What is its market share?",
    o: ["20%", "5%", "80%", "5.26%"],
    a: 0, d: 2,
    why: "Market share = $200m ÷ $1,000m × 100 = 20% (7.1.8)." },

  { q: "Market sales grew from $950m to $1,000m. What is the market growth rate?",
    o: ["5.26%", "5%", "95%", "50%"],
    a: 0, d: 3,
    why: "Market growth = (1,000 − 950) ÷ 950 × 100 = 5.26% (7.1.8)." },

  { q: "A product has high market share in a slow-growing mature market. Which BCG category is it?",
    o: ["Cash cow", "Star", "Question mark", "Dog"],
    a: 0, d: 1,
    why: "A cash cow is successful in a mature, slow-growing market with high revenue and low marketing needs (7.1.8)." },

  { q: "A product has high market share in a fast-growing market. Which BCG category is it?",
    o: ["Star", "Cash cow", "Question mark", "Dog"],
    a: 0, d: 1,
    why: "A star has strong, growing revenues but needs heavy investment to sustain growth (7.1.8)." },

  { q: "A newly launched product has low share in a fast-growing market. Which BCG category is it?",
    o: ["Question mark (problem child)", "Star", "Cash cow", "Dog"],
    a: 0, d: 2,
    why: "A question mark has low share in a high-growth market and needs big investment, so it often has negative cash flow (7.1.8)." },

  { q: "A product has low share in a low-growth market. Which BCG category is it?",
    o: ["Dog", "Cash cow", "Star", "Question mark"],
    a: 0, d: 1,
    why: "A dog has low share in a low-growth market, such as an end-of-life or niche product (7.1.8)." },

  { q: "How can cash cows help the rest of the portfolio?",
    o: ["They can fund stars and question marks", "They remove the need for any new products", "They must be sold off at once", "They increase the market growth rate"],
    a: 0, d: 2,
    why: "Cash cows can fund stars and question marks, and the BCG matrix reminds firms to keep a balanced portfolio (7.1.8)." },

  { q: "Which is a limitation of the BCG matrix?",
    o: ["It is subjective without data and ignores the external environment", "It can only be used for a business that has a single product", "It ignores both the market share and the market growth", "It must never be combined with any other business tool"],
    a: 0, d: 2,
    why: "The BCG matrix can be subjective, ignores the external environment and should be combined with PLC, STEEPLE and SWOT (7.1.8)." }
]);

QB.add("7.1.9", [
  { q: "What does a Gantt chart show?",
    o: ["The tasks of a project as bars over time", "The probability of success of each option", "The share of each product in the market", "The costs and revenues at each output"],
    a: 0, d: 1,
    why: "A Gantt chart lists tasks in the first column and shows time as bars in the others (7.1.9)." },

  { q: "Which of the following can be added to a Gantt chart?",
    o: ["Dependencies between tasks and milestones", "The expected value of each outcome of a decision", "The market growth of each product in a portfolio", "The weights of the driving forces of a change"],
    a: 0, d: 2,
    why: "Gantt charts can show start and end dates, people, resources, dependencies and milestones (7.1.9)." },

  { q: "Which is a benefit of a Gantt chart?",
    o: ["It gives the big picture of the whole project", "It guarantees that all of the estimates are correct", "It shows the exact complexity of each of the tasks", "It removes any need to update the plan as work goes on"],
    a: 0, d: 2,
    why: "Gantt charts show the big picture and overlapping tasks, but estimates may be wrong and they do not capture all information (7.1.9)." },

  { q: "Which is a limitation of a Gantt chart?",
    o: ["Estimates may be wrong and it misses the size of the work", "It cannot show the order in which the tasks must be done", "It cannot be updated at all as the work goes on", "It can only be used for very small and simple projects"],
    a: 0, d: 2,
    why: "A Gantt chart is only as good as its information and should be updated as work progresses (7.1.9)." }
]);

QB.add("7.1.10", [
  { q: "What does the critical path show?",
    o: ["The minimum time needed to complete a project", "The tasks that have the most float", "The longest possible time for a project", "The cheapest sequence of tasks in a project"],
    a: 0, d: 1,
    why: "The critical path is the minimum time needed to complete a project (7.1.10)." },

  { q: "Task A takes 4 days and task B (after A) takes 1 day. Tasks C (2 days) and D (5 days) follow B, and E needs both C and D. What is the earliest start time of E, counting from the start of A?",
    o: ["10 days", "7 days", "12 days", "5 days"],
    a: 0, d: 3,
    why: "A and B finish on day 5, then D takes 5 days, so E starts on day 10 (take the higher of C's 7 and D's 10) (7.1.10)." },

  { q: "When working left to right to find the earliest start time, which value is used at a node with two incoming tasks?",
    o: ["The higher of the two", "The lower of the two", "The average of the two", "The sum of the two"],
    a: 0, d: 2,
    why: "For EST, take the higher value; for LFT working right to left, subtract and take the lower value (7.1.10)." },

  { q: "How is total float calculated?",
    o: ["LFT − duration − EST", "EST of the next task − EST − duration", "EST + duration + LFT", "Duration − EST"],
    a: 0, d: 2,
    why: "Total float = LFT of the task − duration − EST of the task (7.1.10)." },

  { q: "Task C has an EST of 5, a duration of 2 and an LFT of 10. What is its total float?",
    o: ["3 days", "0 days", "5 days", "8 days"],
    a: 0, d: 3,
    why: "Total float = 10 − 2 − 5 = 3 days (7.1.10)." },

  { q: "What is true of tasks on the critical path?",
    o: ["They have zero total float", "They have the greatest float", "They are all the shortest tasks", "They can be delayed without any effect"],
    a: 0, d: 2,
    why: "Critical path tasks have zero total float, so any delay delays the whole project (7.1.10)." },

  { q: "What does total float tell you?",
    o: ["How long a task can overrun without delaying the whole project", "How long a task can overrun without delaying the very next task", "How long the project will take from its start to its finish", "How many of the tasks can be carried out at the same time"],
    a: 0, d: 3,
    why: "Total float is the delay allowed without delaying the whole project; free float is the delay allowed without delaying the next task (7.1.10)." },

  { q: "What is a dummy activity in a network diagram?",
    o: ["Scheduling deliveries just before a task's earliest start", "Delaying all of the deliveries until the project has ended", "Removing the need for any suppliers in the project", "Making every one of the tasks in the project last longer"],
    a: 0, d: 3,
    why: "A dummy activity has no duration or cost; it only shows dependencies between tasks (7.1.10)." },

  { q: "How can critical path analysis help with just-in-time delivery?",
    o: ["A dotted line with no duration or cost that shows a dependency", "A task that takes the longest time on the whole path", "A task that is done for the business by an outside firm", "A task that has neither a start time nor any finish time"],
    a: 0, d: 3,
    why: "EST can be used for JIT: schedule deliveries just before an activity is due to start (7.1.10)." }
]);

QB.add("7.1.11", [
  { q: "What is a competitive advantage?",
    o: ["A condition that lets a firm offer better or cheaper products", "A country's ability to produce at a lower opportunity cost", "A legal right to be the only seller that is in a market", "A subsidy that a government gives to a particular firm"],
    a: 0, d: 2,
    why: "Competitive advantage is for a business; comparative advantage is an economics idea for countries (7.1.11)." },

  { q: "Which two choices make up Porter's generic strategies?",
    o: ["Lower cost or differentiation, and a broad or narrow market", "Price or quality, and a local or a global market", "Growth or profit, and a short or a long time horizon", "Product or service, and a new or an existing market"],
    a: 0, d: 2,
    why: "Porter's matrix combines lower cost or differentiation with a broad or narrow (niche) target market (7.1.11)." },

  { q: "Being the lowest-cost producer in a broad market is which strategy?",
    o: ["Cost leadership", "Cost focus", "Differentiation", "Differentiation focus"],
    a: 0, d: 1,
    why: "Cost leadership is the lowest-cost producer in the industry using economies of scale, as with Bic pens (7.1.11)." },

  { q: "A custom shoemaker sells an exclusive, high-quality product to a niche. Which strategy is this?",
    o: ["Differentiation focus", "Cost focus for a niche", "Cost leadership in the market", "Broad differentiation"],
    a: 0, d: 2,
    why: "Differentiation focus offers a specialised or exclusive product to a niche, and premium prices offset the small market (7.1.11)." },

  { q: "A basic, cheap online career coaching service for a niche is which strategy?",
    o: ["Cost focus", "Cost leadership", "Differentiation focus", "Differentiation"],
    a: 0, d: 3,
    why: "Cost focus is the lowest-cost producer in a niche, such as a basic or cheaper version of a pricier product (7.1.11)." },

  { q: "What does 'stuck in the middle' mean?",
    o: ["The firm is neither differentiated nor low-cost enough", "The firm sells in a market of just an average size", "The firm takes an average level of risk in its strategy", "The firm sets exactly the same prices as its rivals"],
    a: 0, d: 2,
    why: "A firm stuck in the middle has costs and prices too high and low profits or losses, so it must cut costs or differentiate (7.1.11)." },

  { q: "Which example shows differentiation by a USP in people, as hiring women heads of household?",
    o: ["Crepes & Waffles", "Bic pens", "Toyota cars", "Airbnb rooms"],
    a: 0, d: 3,
    why: "Crepes & Waffles, a Colombian social enterprise, differentiates with a people USP (7.1.11)." }
]);

QB.add("7.1.12", [
  { q: "How is contribution per unit calculated?",
    o: ["Price per unit minus variable cost per unit", "Price per unit minus total cost per unit", "Price per unit minus fixed costs", "Variable cost per unit minus price per unit"],
    a: 0, d: 1,
    why: "Contribution per unit = price − variable cost per unit (7.1.12)." },

  { q: "How does contribution differ from profit?",
    o: ["Profit also subtracts the fixed costs", "Contribution also subtracts the fixed costs", "They are the same thing", "Profit does not subtract variable costs"],
    a: 0, d: 2,
    why: "Contribution ≠ profit: profit also subtracts fixed costs (7.1.12)." },

  { q: "A firm can accept only one order. Chairs give a total contribution of $3,100 and tables give $1,600. Which order should it accept?",
    o: ["The chairs order", "The tables order", "Both orders", "Neither order"],
    a: 0, d: 2,
    why: "With limited capacity, accept the order with the largest total contribution (7.1.12)." },

  { q: "What is contribution costing?",
    o: ["Using only direct costs per product so contributions cover indirect costs", "Dividing all of the indirect costs among the different products", "Using only the fixed costs of each of the products", "Using only the revenue that each product has earned"],
    a: 0, d: 3,
    why: "Contribution costing counts only direct costs per product; contributions together cover the firm's indirect costs (7.1.12)." },

  { q: "What is absorption costing?",
    o: ["Dividing indirect costs among products by a set criterion", "Ignoring all of the indirect costs of the business", "Using only the direct costs of each of the products", "Adding a fixed amount of profit to each product's cost"],
    a: 0, d: 3,
    why: "Absorption costing splits indirect costs by a criterion such as output, revenue or employees; the result depends on the criterion (7.1.12)." },

  { q: "Three products have contributions of $750,000, $800,000 and $800,000 and indirect costs are $1,000,000. What is the total profit?",
    o: ["$1,350,000", "$2,350,000", "$1,000,000", "$800,000"],
    a: 0, d: 3,
    why: "Total contribution $2,350,000 − indirect costs $1,000,000 = $1,350,000 profit (7.1.12)." },

  { q: "Which is a limitation of contribution analysis?",
    o: ["It rests on assumptions, such as how indirect costs are shared", "It cannot be used to work out the break-even quantity", "It can only be used in businesses that are very large", "It ignores the variable costs of production completely"],
    a: 0, d: 2,
    why: "Results change with the assumptions, and it is only one tool among many to combine with qualitative information and ethics (7.1.12)." }
]);

QB.add("7.1.13", [
  { q: "What does simple linear regression describe?",
    o: ["The relationship between two variables using a line of best fit", "The probability of each of the outcomes of a decision", "The order and the timing of the tasks in a project", "The spread of a set of data around the mean value"],
    a: 0, d: 1,
    why: "Regression describes how a dependent variable changes with an independent variable, using a line of best fit (7.1.13)." },

  { q: "In a study of advertising and sales, which is the dependent variable?",
    o: ["Sales", "Advertising spend", "The time of year", "The price of the product"],
    a: 0, d: 2,
    why: "The dependent variable is what you want to predict, such as sales; the independent variable is the suspected cause, such as advertising (7.1.13)." },

  { q: "What do you call a pattern in which sales rise as advertising rises?",
    o: ["Positive correlation", "Negative correlation", "No correlation", "Causation"],
    a: 0, d: 1,
    why: "A positive correlation means both variables rise together; negative means one rises as the other falls (7.1.13)." },

  { q: "What should a line of best fit pass through for full marks?",
    o: ["The point of the means of both variables", "The first and the last of the data points", "The very highest of all of the data points", "The origin point of the graph, at zero and zero"],
    a: 0, d: 2,
    why: "The line must go through the mean of x and the mean of y, with about equal points above and below (7.1.13)." },

  { q: "What is extrapolation?",
    o: ["Extending the line of best fit to predict values", "Calculating the mean value of a set of the data", "Plotting all of the data on a scatter diagram", "Removing the extreme values from a data set"],
    a: 0, d: 2,
    why: "The steps are scatter diagram, line of best fit, then extrapolate to predict (7.1.13)." },

  { q: "Which is a limitation of scatter diagrams?",
    o: ["They show only two variables at a time", "They cannot show non-linear patterns", "They are hard to plot and interpret", "They hide the maximum and minimum values"],
    a: 0, d: 2,
    why: "Scatter diagrams are easy to read but cannot give the exact extent of correlation, show only two variables and use quantitative data only (7.1.13)." },

  { q: "What is the first 3-part moving average of sales of 34, 110 and 96?",
    o: ["80", "240", "96", "110"],
    a: 0, d: 2,
    why: "(34 + 110 + 96) ÷ 3 = 80, plotted against the middle year (7.1.13)." },

  { q: "What is the purpose of moving averages in a time series?",
    o: ["To smooth variations and reveal the trend", "To find the exact value of every year", "To show the correlation of two variables", "To work out the spread of the data"],
    a: 0, d: 2,
    why: "Moving averages smooth variations to reveal the trend, seasonal and cyclical fluctuations (7.1.13)." }
]);

QB.add("7.1.14", [
  { q: "Which measure is the middle value of ordered data?",
    o: ["The median", "The mean", "The mode", "The range"],
    a: 0, d: 1,
    why: "The median is the middle value; the mean is the average; the mode is the most frequent value (7.1.14)." },

  { q: "Which measure is the most frequent value in a data set?",
    o: ["The mode", "The mean", "The median", "The quartile"],
    a: 0, d: 1,
    why: "The mode is the most frequent value and sits at the peak of a distribution (7.1.14)." },

  { q: "Why is the median often better than the mean for house prices?",
    o: ["The mean is skewed by extreme values", "The median is always larger than the mean", "The mean cannot be calculated for prices", "The median uses every value in the data"],
    a: 0, d: 2,
    why: "The mean is skewed by extreme values, so the median is better for data like house prices (7.1.14)." },

  { q: "What does a low standard deviation show?",
    o: ["Data are clustered close to the mean", "Data are spread far from the mean", "The mean is very high", "The data have no mode"],
    a: 0, d: 2,
    why: "Standard deviation measures dispersion around the mean: high means spread out and low means clustered (7.1.14)." },

  { q: "In a normal distribution, about what percentage of data lies within 1 standard deviation of the mean?",
    o: ["68%", "50%", "95%", "99.7%"],
    a: 0, d: 2,
    why: "About 68% lie within 1σ, 95% within 2σ and 99.7% within 3σ (7.1.14)." },

  { q: "Which chart is best for showing percentages of a whole, such as sales by product?",
    o: ["A pie chart", "A bar chart", "A scatter diagram", "A Gantt chart"],
    a: 0, d: 1,
    why: "Pie charts show percentages of a whole; bar charts compare values (7.1.14)." },

  { q: "How can a chart mislead through its axes?",
    o: ["The y-axis scale can make growth look big or small", "The x-axis always shows the data in the right order", "Titles are never misleading in a chart", "Scales do not change how a chart looks"],
    a: 0, d: 2,
    why: "The same data can look like big growth or no growth depending on the y-axis scale (7.1.14)." },

  { q: "What is cherry-picking in data presentation?",
    o: ["Choosing convenient years that support a message", "Showing all of the years that are in a data set", "Using a title that matches the data in the chart", "Plotting two variables against each other on a graph"],
    a: 0, d: 2,
    why: "Cherry-picking the year range can mislead, so check the x-axis (7.1.14)." },

  { q: "What does 'correlation is not causation' mean?",
    o: ["A statistical link does not prove that one causes the other", "A correlation proves that one variable causes the other", "Variables with no correlation must cause each other", "Causation can only be shown with the use of a pie chart"],
    a: 0, d: 3,
    why: "A statistical relationship between two variables does not prove that one causes the other (7.1.14)." }
]);
