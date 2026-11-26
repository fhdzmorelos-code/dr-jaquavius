// 5.1 a 5.5 Operations management (apuntes: Unit 5)
// La primera opción es la correcta (a: 0); el juego baraja las opciones cada vez.
QB.add("5.1", [
  { q: "What is the role of operations management?",
    o: ["To transform inputs into outputs to achieve business objectives", "To find out what customers need and then attract them to the business", "To recruit, train and motivate all of the staff of the business", "To make sure that the business always has enough funds to operate"],
    a: 0, d: 1,
    why: "Operations management is the function that turns inputs into outputs (goods or services) to achieve objectives (5.1.1)." },

  { q: "Which of the following is an input into a business system?",
    o: ["Steel, rubber and labour", "A finished bicycle", "Feedback from a customer", "A delivered service"],
    a: 0, d: 1,
    why: "Inputs (physical, financial and human) go through a process to become outputs, with feedback returning to the system (5.1.1)." },

  { q: "Which production method uses more machines relative to labour?",
    o: ["Capital-intensive production", "Labour-intensive production", "Job production only", "Lean production only"],
    a: 0, d: 2,
    why: "Capital-intensive production uses more machinery relative to labour; labour-intensive uses more labour relative to machines (5.1.1)." },

  { q: "How are operations and finance interdependent?",
    o: ["Finance provides funds for production and operations affect costs", "Finance recruits the staff while operations pays all of the wages", "Operations chooses the price and finance writes the advertising copy", "They are completely independent from each other"],
    a: 0, d: 2,
    why: "Finance ensures funds for production, and operations choices, such as capital-intensive methods or lean production, change costs (5.1.1)." },

  { q: "Which statement shows the link between operations and marketing?",
    o: ["Poor cost cuts in lean production can hurt quality and marketing", "Operations decides which customers the whole firm should target", "Marketing decides which production method is used by the firm", "Marketing and operations never have any effect on each other"],
    a: 0, d: 3,
    why: "Operations decisions affect other functions: lean production cuts costs, but poorly executed cuts hurt quality and so marketing (5.1.1)." }
]);

QB.add("5.2", [
  { q: "Which production method makes unique, tailor-made items for individual customers?",
    o: ["Job production", "Batch production", "Flow production", "Mass customisation"],
    a: 0, d: 1,
    why: "Job production makes a unique item for an individual customer, usually by skilled workers (5.2.1)." },

  { q: "Which of the following is an example of job production?",
    o: ["Building a bridge", "Making a smartphone on an assembly line", "Baking batches of cupcakes", "Printing millions of newspapers"],
    a: 0, d: 1,
    why: "Bridges, stadiums, haircuts and bespoke products are job production; phones are mass production (5.2.1)." },

  { q: "Which is an advantage of job production?",
    o: ["High flexibility and customisation for each customer", "The lowest unit costs through economies of scale", "Constant uniform products from a flow line", "Very low labour costs for the business"],
    a: 0, d: 1,
    why: "Job production is flexible, high quality, often has high margins and motivates workers, but it is costly and time-consuming (5.2.1)." },

  { q: "Which is a disadvantage of job production?",
    o: ["High costs and no economies of scale", "Very low quality of the finished product", "Workers are always demotivated", "Customers have no choice at all"],
    a: 0, d: 2,
    why: "Job production has high costs (skilled labour, small quantities) and is time-consuming, with possible cash-flow problems on big projects (5.2.1)." },

  { q: "A bakery makes a batch of cupcakes and then a batch of cookies. Which method is this?",
    o: ["Batch production", "Job production", "Flow production", "Mass customisation"],
    a: 0, d: 1,
    why: "Batch production makes groups of identical products, changing between batches (5.2.1)." },

  { q: "When is batch production most useful?",
    o: ["When demand is unclear or for a range of similar products", "When each product is unique to a customer", "When demand is huge and the product is the same", "When the firm wants no stock of any kind"],
    a: 0, d: 2,
    why: "Batch production suits unclear demand (adjust after the first batch) or a range of similar products needing some economies of scale (5.2.1)." },

  { q: "Which is a disadvantage of batch production compared with mass production?",
    o: ["Higher costs from changing machine settings", "Customers get much less variety of products to choose from", "There is no possibility of any economies of scale at all", "No stock is needed by the business at all"],
    a: 0, d: 2,
    why: "Changing settings between batches causes downtime, so costs are higher than mass production, and stock costs are higher (5.2.1)." },

  { q: "Which production method makes large amounts of standardised products on a continuous assembly line?",
    o: ["Mass (flow) production", "Job production", "Batch production", "Cradle-to-cradle production"],
    a: 0, d: 1,
    why: "Mass or flow production makes large amounts of standardised products on a continuous assembly line (5.2.2)." },

  { q: "Which is an advantage of mass production?",
    o: ["The lowest unit costs through economies of scale", "High flexibility once production has already started", "A unique and different product for each customer", "Very motivating and varied work for the staff"],
    a: 0, d: 1,
    why: "Mass production gives large-scale output, uniform quality and the lowest unit costs, but little flexibility and repetitive work (5.2.2)." },

  { q: "Which is a disadvantage of mass production?",
    o: ["Little flexibility once production has started", "Very high labour costs for each unit that is made", "Very low output volumes for the business each year", "Very inconsistent quality of the finished products"],
    a: 0, d: 2,
    why: "Mass production needs high set-up and running costs, has little flexibility and repetitive work that lowers motivation (5.2.2)." },

  { q: "What is mass customisation?",
    o: ["Mass production of goods adjusted to customer wishes", "Making one single item at a time for a single customer", "Making identical goods in groups with no changes at all", "Producing only the goods that customers have already pre-ordered"],
    a: 0, d: 2,
    why: "Mass customisation combines the flexibility of custom-made goods with the low unit cost of mass production, as with Nike By You (5.2.2)." },

  { q: "A mattress with pre-set options for adjustable firmness is an example of which type of mass customisation?",
    o: ["Adaptive", "Collaborative", "Cosmetic", "Transparent"],
    a: 0, d: 3,
    why: "Adaptive customisation offers pre-set options; collaborative involves close business–customer interaction (5.2.2)." },

  { q: "Which is a disadvantage of mass customisation?",
    o: ["Returned custom goods are hard to resell", "It loses all economies of scale", "It reduces customer satisfaction", "It lowers the prices and profits of the firm"],
    a: 0, d: 3,
    why: "Mass customisation has higher costs, more varied stock and returns that are hard to resell, but keeps economies of scale (5.2.2)." },

  { q: "Levi's 'Lot-1' lets customers design their jeans. Which production method does this show?",
    o: ["Mass customisation", "Job production", "Batch production", "Cradle-to-cradle design"],
    a: 0, d: 2,
    why: "Levi's Lot-1 gives customers over 1,000 combinations using laser technology, which is mass customisation (5.2.2)." },

  { q: "Which statement correctly compares the flexibility of production methods?",
    o: ["Mass customisation is more flexible than mass production but less than job", "Mass production is always more flexible than job production is", "Job production is the least flexible production method of all", "Batch production is always more flexible than job production is"],
    a: 0, d: 3,
    why: "Compare methods relative to each other: job production is the most flexible, then mass customisation, then batch, then mass production (5.2.2)." }
]);

QB.add("5.3", [
  { q: "What is efficiency in operations?",
    o: ["How well inputs are transformed into outputs", "The number of products that are sold", "The amount of profit made in a year", "The size of the factory of the business"],
    a: 0, d: 1,
    why: "Efficiency means producing more output with the same or fewer inputs, which lowers average cost (5.3.1)." },

  { q: "In lean production, what is waste?",
    o: ["Any part of production that adds no value for the consumer", "Only the raw materials that are thrown away in the bin", "Only the finished products that fail the quality tests", "Only the energy that is used by all of the machines"],
    a: 0, d: 2,
    why: "Waste is any part of production that does not add value for the final consumer; Toyota lists seven wastes (TIM WOOD) (5.3.1)." },

  { q: "In TIM WOOD, the 'W' for waiting is shown by which example in a hair salon?",
    o: ["Delays caused by overbooking", "Excess colouring products in store", "Clients moving between stations", "Extra treatments nobody asked for"],
    a: 0, d: 3,
    why: "Waiting is delay such as overbooking; inventory is excess stock and transportation is movement of clients (5.3.1)." },

  { q: "Which waste in TIM WOOD is shown by making more snacks than anyone asked for?",
    o: ["Over-production", "Over-processing", "Inventory", "Motion"],
    a: 0, d: 3,
    why: "Over-production means making more than needed; over-processing is doing more work or treatments than the customer wanted (5.3.1)." },

  { q: "What is continuous improvement (kaizen)?",
    o: ["Regular staff suggestions for small changes for the better", "A single major redesign of the factory every ten years", "Ordering stock only when it is needed", "Inspecting finished products to find defects"],
    a: 0, d: 2,
    why: "Kaizen means 'change for the better', with regular meetings where staff suggest improvements (5.3.1)." },

  { q: "Which is a limitation of kaizen?",
    o: ["Meetings take time, which can lower productivity", "Employees feel less valued by the firm", "It reduces the diversity of ideas", "Managers know the problems better than the staff"],
    a: 0, d: 2,
    why: "Kaizen brings ideas and motivation, but meetings take time and staff may demand higher pay for responsibility (5.3.1)." },

  { q: "What is just-in-time (JIT) production?",
    o: ["Small, regular orders delivered just when needed", "Holding a large safety stock for emergencies", "Making all products in one large annual batch", "Buying all inputs from many different suppliers"],
    a: 0, d: 1,
    why: "JIT minimises stock by ordering small amounts delivered just when needed, which needs excellent supplier relationships (5.3.1)." },

  { q: "Which is a benefit of just-in-time?",
    o: ["Better cash flow and lower storage costs", "Higher resilience to supply delays", "Bigger discounts from bulk purchasing", "Better suited to seasonal demand"],
    a: 0, d: 2,
    why: "JIT improves cash flow and frees space, but means fewer purchasing economies and high risk if a delivery is late (5.3.1)." },

  { q: "What does cradle-to-cradle design aim to do?",
    o: ["Minimise waste and harm to the environment and stakeholders", "Maximise the output of a factory at the lowest possible price", "Inspect each finished product to find all of the defects", "Make a different product for every single customer"],
    a: 0, d: 2,
    why: "Cradle-to-cradle designs and makes products to minimise waste and harm, using durable, recyclable materials and clean methods (5.3.2)." },

  { q: "Biodegradable materials broken down by bacteria and fungi belong to which cycle?",
    o: ["The biological cycle", "The technical cycle", "The financial cycle", "The business cycle"],
    a: 0, d: 2,
    why: "The biological cycle uses biodegradable materials; the technical cycle reuses and recycles materials that can be disassembled (5.3.2)." },

  { q: "Using glass bottles that can be reused instead of plastic bottles is an example of which cycle?",
    o: ["The technical cycle", "The biological cycle", "The product life cycle", "The cash flow cycle"],
    a: 0, d: 3,
    why: "The technical cycle reuses and recycles sustainable materials that can be disassembled (5.3.2)." },

  { q: "How are the costs of cradle-to-cradle manufacturing described in the notes?",
    o: ["Higher in the short term but lower in the long term", "Lower in the short term and higher in the long term", "Always higher in both the short and long term", "Never changed by the design of the product"],
    a: 0, d: 3,
    why: "Costs may rise short term but fall long term (fewer resources, ready for future laws), and ethical consumers add revenue (5.3.2)." },

  { q: "In operations, how is quality defined?",
    o: ["Meeting or exceeding the needs of the target market", "Using the most expensive materials available", "Having the fewest products in stock", "Being the cheapest product in the market"],
    a: 0, d: 1,
    why: "Quality is defined by the target market: meeting or exceeding its needs (5.3.3)." },

  { q: "What is the main difference between quality control and quality assurance?",
    o: ["Control inspects for defects afterwards; assurance prevents them", "Control prevents the defects; assurance finds them after production", "Control is for services only; assurance is for goods only", "There is no difference between the two terms"],
    a: 0, d: 2,
    why: "Quality control inspects products to find defects afterwards; quality assurance uses strategies, with every employee responsible, to prevent defects (5.3.3)." },

  { q: "What are quality circles?",
    o: ["Groups of employees from different areas who discuss quality", "Inspectors who check each product at the very end of the line", "Customers who test new products for the business itself", "Managers who set all of the quality targets alone"],
    a: 0, d: 2,
    why: "Quality circles are regular meetings of employees from different areas to discuss quality improvements (5.3.3)." },

  { q: "What does benchmarking involve?",
    o: ["Comparing with industry leaders to learn better methods", "Copying the product of a rival firm exactly", "Setting the lowest possible price in the whole market", "Asking customers to inspect the products for the firm"],
    a: 0, d: 2,
    why: "Benchmarking compares with the best performers to learn, and it is not copying (5.3.3)." },

  { q: "Which is a limitation of benchmarking?",
    o: ["There is no guarantee that it transfers to a new context", "It cannot give any new ideas at all to the firm", "It always lowers the quality of the finished product", "It is illegal in most of the industries"],
    a: 0, d: 3,
    why: "Benchmarking can improve quality, but it may not transfer, information may be unavailable and the right benchmark must be chosen (5.3.3)." },

  { q: "In total quality management (TQM), who is responsible for quality?",
    o: ["Every employee jointly", "Only the quality inspectors", "Only the senior managers", "Only the customers"],
    a: 0, d: 1,
    why: "TQM makes every employee jointly responsible for quality, based on empowerment and internal customers (5.3.3)." },

  { q: "In TQM, who are internal customers?",
    o: ["Colleagues who rely on your output", "Shoppers who buy from the shop", "Shareholders who own the firm", "Suppliers of the raw materials"],
    a: 0, d: 2,
    why: "Internal customers are colleagues who depend on your work, which encourages teamwork and communication (5.3.3)." },

  { q: "What is a benefit of ISO 9000 accreditation?",
    o: ["Better brand image and a wider target market", "Lower costs for the business at once", "An end to all inspections by customers", "A guaranteed rise in sales every year"],
    a: 0, d: 2,
    why: "ISO accreditation brings a better brand image and a wider market, as some firms buy only from certified suppliers, but it is long and costly (5.3.3)." }
]);

QB.add("5.4", [
  { q: "What is the difference between location and place in the notes?",
    o: ["Location is where operations occur; place is distribution in the mix", "Location is part of the marketing mix; place is only the factory", "They always mean exactly the same thing in business", "Place is for services only, while location is for goods only"],
    a: 0, d: 2,
    why: "Location is the physical place where operations are carried out; place is distribution in the marketing mix (5.4.1)." },

  { q: "Why do retailers want to locate in busy streets?",
    o: ["They want foot traffic and the right demographics", "They want to pay the lowest possible rent", "They want to avoid competing with their rivals", "They want to be far away from their customers"],
    a: 0, d: 1,
    why: "Retailers look for foot traffic and the right demographics, which is why luxury brands cluster (5.4.1)." },

  { q: "A firm locates close to its target market. Which factor is this?",
    o: ["Sociocultural", "Technological", "Political", "Environmental"],
    a: 0, d: 2,
    why: "Being near the target market with the right demographics is a sociocultural factor and cuts transport costs (5.4.1)." },

  { q: "Tesla building a factory in Germany to access skilled engineers is an example of which factor?",
    o: ["Economic (availability and quality of labour)", "Legal", "Sociocultural", "Ethical"],
    a: 0, d: 3,
    why: "Availability, quality and cost of labour is an economic factor in location (5.4.1)." },

  { q: "What is clustering?",
    o: ["Similar firms locating near each other", "A firm moving all its operations abroad", "A firm closing down some of its branches", "A firm joining with a supplier"],
    a: 0, d: 2,
    why: "Clustering means similar firms nearby, which gives a bigger customer base and attracts suppliers into the area (5.4.1)." },

  { q: "Which government incentive might attract a business to a high-unemployment area?",
    o: ["Lower taxes or free land", "Higher import tariffs", "Tighter pollution rules", "Longer notice for redundancies"],
    a: 0, d: 2,
    why: "Governments may offer free land, lower taxes or subsidies in high-unemployment areas (5.4.1)." },

  { q: "A business hires an external company to do a task that it could do itself. What is this?",
    o: ["Outsourcing", "Offshoring", "Insourcing", "Reshoring"],
    a: 0, d: 1,
    why: "Outsourcing (subcontracting) is hiring an external company to do a task the business could do itself (5.4.2)." },

  { q: "Which is a disadvantage of outsourcing?",
    o: ["Loss of control, which can lead to supplier scandals", "Higher factory costs for the business itself", "More difficulty in ending a contract in a downturn", "Always lower quality than the in-house work is"],
    a: 0, d: 2,
    why: "Outsourcing avoids factory costs and is easy to end, but loss of control has led to worker exploitation scandals (5.4.2)." },

  { q: "A firm moves its call centre to another country. What is this?",
    o: ["Offshoring", "Outsourcing", "Insourcing", "Reshoring"],
    a: 0, d: 1,
    why: "Offshoring means relocating a business function to another country (5.4.2)." },

  { q: "Apple using Foxconn in China is an example of which two methods together?",
    o: ["Outsourcing and offshoring", "Insourcing and reshoring", "Reshoring and offshoring", "Outsourcing and insourcing"],
    a: 0, d: 3,
    why: "Outsourcing uses another business; offshoring moves production to another country; Apple uses both with Foxconn (5.4.2)." },

  { q: "A firm ends an outsourcing contract and brings the work back in-house. What is this?",
    o: ["Insourcing", "Offshoring", "Reshoring", "Outsourcing"],
    a: 0, d: 2,
    why: "Insourcing is ending outsourcing contracts and bringing functions back in-house (5.4.2)." },

  { q: "A firm brings production back to its home country from abroad. What is this?",
    o: ["Reshoring", "Insourcing", "Offshoring", "Outsourcing"],
    a: 0, d: 2,
    why: "Reshoring is bringing production back to the home country, for more control over supply chains and less risk (5.4.2)." },

  { q: "Which is a disadvantage of reshoring?",
    o: ["Higher costs and supply chains to be rebuilt", "Less control over the whole supply chain", "More risk from global supply disruptions", "Lower wages for all of the workers at home"],
    a: 0, d: 3,
    why: "Reshoring means higher costs, worker resistance and rebuilt supply chains, plus jobs lost abroad (5.4.2)." },

  { q: "Why might locating a factory only to use weak environmental laws be criticised?",
    o: ["It is considered unethical", "It always raises the costs of the firm", "It is illegal in every country", "It reduces the output of the factory"],
    a: 0, d: 2,
    why: "Locating to exploit cheap labour or weak environmental laws is unethical; firms can instead create fair jobs (5.4.1)." }
]);

QB.add("5.5", [
  { q: "What is the break-even point?",
    o: ["Where total revenue equals total costs", "Where profit is at its highest level", "Where fixed costs are zero", "Where variable costs equal fixed costs"],
    a: 0, d: 1,
    why: "At the break-even point total revenue equals total costs, so there is no profit and no loss (5.5.1)." },

  { q: "A coffee shop sells a cup at $4 and the variable cost is $1 per cup. What is the contribution per cup?",
    o: ["$3", "$4", "$5", "$1"],
    a: 0, d: 1,
    why: "Contribution per unit = price − variable cost per unit = $4 − $1 = $3 (5.5.1)." },

  { q: "How is the break-even quantity calculated?",
    o: ["Fixed costs ÷ contribution per unit", "Fixed costs ÷ price per unit", "Variable costs ÷ contribution per unit", "Contribution per unit ÷ fixed costs"],
    a: 0, d: 1,
    why: "BEQ = fixed costs ÷ contribution per unit (5.5.1)." },

  { q: "Fixed costs are $7,000 a month and contribution is $3 per cup. What is the break-even quantity?",
    o: ["2,334 cups", "2,333 cups", "7,000 cups", "21,000 cups"],
    a: 0, d: 2,
    why: "7,000 ÷ 3 = 2,333.33, which is rounded up to 2,334 cups (5.5.1)." },

  { q: "How should a break-even quantity of 2,333.33 units be rounded?",
    o: ["Up to the next whole unit", "Down to the nearest whole unit", "To the nearest hundred units", "It should not be rounded at all"],
    a: 0, d: 2,
    why: "Always round BEQ up to the next whole unit (5.5.1)." },

  { q: "The coffee shop's break-even quantity is 2,334 cups and it actually sells 3,200 cups. What is the margin of safety?",
    o: ["866 cups", "2,334 cups", "3,200 cups", "5,534 cups"],
    a: 0, d: 2,
    why: "Margin of safety = actual output − BEQ = 3,200 − 2,334 = 866 cups (5.5.1)." },

  { q: "A higher margin of safety is generally what for a business?",
    o: ["Good, because it gives a buffer against falls in sales", "Bad, because it shows that the sales are too high", "Neutral, because it has no link to the profit", "Bad, because it increases all of the fixed costs"],
    a: 0, d: 2,
    why: "A high margin of safety gives a buffer against cost rises or revenue falls (5.5.1)." },

  { q: "The coffee shop sells 3,000 cups, with contribution of $3 per cup and fixed costs of $7,000. What is its profit?",
    o: ["$2,000", "$9,000", "$5,000", "$3,000"],
    a: 0, d: 2,
    why: "Profit = (3,000 × $3) − $7,000 = $2,000 (5.5.1)." },

  { q: "The same shop wants a profit of $4,000. How many cups must it sell?",
    o: ["3,667 cups", "3,334 cups", "2,334 cups", "4,000 cups"],
    a: 0, d: 3,
    why: "(4,000 + 7,000) ÷ 3 = 3,666.67, rounded up to 3,667 cups (5.5.1)." },

  { q: "A rival charges $3.50 for a similar cup. If the shop matches this price, with a variable cost of $1 and fixed costs of $7,000, what is the new break-even quantity?",
    o: ["2,800 cups", "2,334 cups", "2,000 cups", "3,500 cups"],
    a: 0, d: 3,
    why: "Contribution = $3.50 − $1 = $2.50, so BEQ = 7,000 ÷ 2.50 = 2,800 cups (5.5.1)." },

  { q: "A driving school charges $15 per lesson with a variable cost of $3 and fixed costs of $800. What is its break-even quantity?",
    o: ["67 lessons", "53 lessons", "66 lessons", "267 lessons"],
    a: 0, d: 3,
    why: "Contribution = $12, and 800 ÷ 12 = 66.67, rounded up to 67 lessons (5.5.2)." },

  { q: "The driving school's break-even quantity is 67 lessons and it gives 80 lessons. What is its margin of safety?",
    o: ["13 lessons", "67 lessons", "80 lessons", "147 lessons"],
    a: 0, d: 2,
    why: "Margin of safety = 80 − 67 = 13 lessons (5.5.2)." },

  { q: "Where does the total costs line start on a break-even chart?",
    o: ["At the fixed costs value on the y-axis", "At the origin point (0,0) of the chart", "At the break-even quantity on the x-axis", "At the highest output shown on the x-axis"],
    a: 0, d: 2,
    why: "The total costs line starts at the same point as fixed costs on the y-axis and rises; total revenue starts at the origin (5.5.2)." },

  { q: "Where does the total revenue line start on a break-even chart?",
    o: ["At the origin (0,0)", "At the fixed costs value", "At the margin of safety", "At the break-even quantity"],
    a: 0, d: 1,
    why: "Total revenue starts at the origin because there is no revenue at zero output (5.5.2)." },

  { q: "On a break-even chart, what lies between the total revenue and total cost lines to the right of the break-even point?",
    o: ["Profit", "Loss", "Fixed costs", "Margin of safety"],
    a: 0, d: 2,
    why: "Profit is shaded to the right of the BEQ between TR and TC; loss is to the left (5.5.2)." },

  { q: "Which line on a break-even chart is horizontal?",
    o: ["Fixed costs", "Total costs", "Total revenue", "Variable costs"],
    a: 0, d: 1,
    why: "Fixed costs do not change with output, so their line is horizontal (5.5.2)." },

  { q: "What happens to the break-even quantity if the selling price rises?",
    o: ["It falls", "It rises", "It stays the same", "It becomes zero"],
    a: 0, d: 2,
    why: "A higher price makes the total revenue line steeper, so the BEQ falls (5.5.3)." },

  { q: "What happens to the break-even quantity if fixed costs rise?",
    o: ["It rises", "It falls", "It stays the same", "It becomes zero"],
    a: 0, d: 2,
    why: "Higher fixed costs shift the FC and TC lines up in parallel, which raises the BEQ (5.5.3)." },

  { q: "What happens to the total costs line if variable costs rise?",
    o: ["It becomes steeper with the same y-intercept", "It shifts up in a parallel line", "It becomes flatter than before", "It becomes horizontal"],
    a: 0, d: 3,
    why: "Rising variable costs make the TC line steeper from the same starting point, so the BEQ rises (5.5.3)." },

  { q: "Why did bakeries in Egypt raise prices after the Ukraine conflict?",
    o: ["Higher wheat prices raised variable costs and the break-even", "Lower wheat prices reduced the variable costs of bakeries", "Fixed costs fell because of the conflict in Ukraine", "Bakeries wanted to reduce their own margin of safety"],
    a: 0, d: 3,
    why: "Wheat prices rose about 50%, so variable costs and the BEQ rose and bakeries raised prices (5.5.3)." },

  { q: "Why might a firm keep a product that does not break even?",
    o: ["A new product may be supported by cash cows", "Products never need to cover any of their costs", "Break-even analysis is always completely wrong", "Losses are always good for a whole business"],
    a: 0, d: 3,
    why: "New products or question marks may be subsidised by cash cows, and non-profits may cover losses with donations (5.5.3)." },

  { q: "Which is a use of break-even analysis?",
    o: ["Banks and investors use it to judge risk", "It predicts exactly what the future sales will be", "It replaces the need for any business plan", "It measures how motivated all of the staff are"],
    a: 0, d: 2,
    why: "Break-even helps in a business plan, in financing (judging risk) and in testing strategy changes (5.5.4)." },

  { q: "Which is a limitation of break-even analysis?",
    o: ["It assumes linear costs and revenues and ignores scale economies", "It can only ever be used by very large firms", "It does not need any assumptions about costs or sales", "It always shows that the firm will make a profit"],
    a: 0, d: 2,
    why: "Break-even assumptions change, costs and revenues are estimates, and it ignores economies of scale and dynamic pricing (5.5.4)." },

  { q: "Why do social enterprises often have higher break-even quantities?",
    o: ["Lower prices, living wages and fair supplier prices", "They never have any fixed costs to pay at all", "They sell all of their products at very high prices", "They pay no wages at all to their workers"],
    a: 0, d: 3,
    why: "Social enterprises often have higher BEQs because of lower prices, living wages and fair supplier prices (5.5.3)." }
]);
