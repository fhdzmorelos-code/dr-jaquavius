// 5.6 Production planning, 5.7 Crisis management, 5.8 R&D, 5.9 Information systems (apuntes: Unit 5)
// La primera opción es la correcta (a: 0); el juego baraja las opciones cada vez.
QB.add("5.6", [
  { q: "What is a supply chain?",
    o: ["All stages a product passes through, from raw materials to the customer", "The group of senior managers who control the supply of money for the firm", "The list of all of the customers who regularly buy from a business", "The fleet of delivery vehicles that are owned and run by a business"],
    a: 0, d: 1,
    why: "A supply chain covers every stage from raw-material extraction to delivery to the customer (5.6.1)." },

  { q: "What is lead time?",
    o: ["The time a supplier takes to deliver an order", "The time that a product spends in the factory", "The time needed to recover an investment", "The time between two production batches"],
    a: 0, d: 1,
    why: "Lead time is the time a supplier takes to deliver, and it is critical for JIT (5.6.1)." },

  { q: "Which is an advantage of a local supply chain?",
    o: ["Greater control, less risk and lower transport costs", "A greater choice of suppliers for the materials that are needed", "Lower production costs because of cheap labour abroad", "Larger economies of scale when purchasing the materials"],
    a: 0, d: 2,
    why: "Local chains are easier to monitor and cut transport costs, but they cost more and offer less choice (5.6.1)." },

  { q: "Which is a disadvantage of a global supply chain?",
    o: ["Greater risk from geopolitics, shipping problems and disasters", "Higher transport costs than a local chain would always have", "Less choice of suppliers for rare materials and components", "Tighter regulation than in the home country in every case"],
    a: 0, d: 2,
    why: "Global chains give choice and lower costs, but bring greater risk and less transparency and control over ethics (5.6.1)." },

  { q: "What is buffer stock?",
    o: ["Extra stock kept in case of need", "The stock that is sold at a discount", "The stock that has become obsolete", "The stock needed for one single day"],
    a: 0, d: 1,
    why: "Buffer stock is extra stock held in case of unexpected orders or late deliveries (5.6.2)." },

  { q: "What is just-in-case (JIC) production?",
    o: ["Holding large buffer stocks to keep operating during unforeseen events", "Ordering small amounts of stock only at the time that each is needed", "Producing goods only after a customer has placed an order for them", "Selling all of the stock in hand before a new delivery arrives"],
    a: 0, d: 2,
    why: "JIC means holding large buffer stocks so production can continue during disruptions (5.6.2)." },

  { q: "Which is a limitation of just-in-case?",
    o: ["Cash is tied up in stock, which lowers liquidity", "Production stops when any delivery is late", "Purchasing economies of scale are lost", "The firm is more exposed to rising resource costs"],
    a: 0, d: 2,
    why: "JIC gives resilience and purchasing economies, but it ties up working capital and raises storage costs and waste (5.6.2)." },

  { q: "When is JIT most suitable?",
    o: ["With a reliable supplier and predictable demand", "With an unreliable supplier and unpredictable demand", "When demand is highly seasonal", "When supply chains are often disrupted"],
    a: 0, d: 2,
    why: "JIT works with reliable suppliers and predictable demand; otherwise JIC may be better (5.6.2)." },

  { q: "On a stock control chart, what is the reorder level?",
    o: ["The stock level at which a new order is placed", "The largest amount of stock that the business can store", "The amount of stock that is ordered each time it reorders", "The lowest level that the stock should ever be allowed to reach"],
    a: 0, d: 2,
    why: "The reorder level is the stock level at which a new order is placed, allowing for lead time and buffer (5.6.3)." },

  { q: "On a stock control chart, what is the reorder quantity?",
    o: ["The amount ordered each time", "The stock level that triggers an order", "The time between ordering and receiving stock", "The stock held for unexpected orders"],
    a: 0, d: 2,
    why: "The reorder quantity is the amount ordered each time a reorder is made (5.6.3)." },

  { q: "What is the minimum stock level?",
    o: ["The level that stock should never fall below", "The level at which the next order should be placed", "The most stock that the firm wants to hold in store", "The level that the stock has on the day of a delivery"],
    a: 0, d: 2,
    why: "Maximum, buffer and minimum levels define the range; minimum is the level stock should never fall below (5.6.3)." },

  { q: "Which formula gives labour productivity?",
    o: ["Total output ÷ number of employees", "Total output ÷ the capital input used", "Total cost ÷ the total output made", "(Defects ÷ output tested) × 100"],
    a: 0, d: 2,
    why: "Labour productivity = total output ÷ number of employees (5.6.4)." },

  { q: "Eight proofreaders check 40 books in a month. What is the labour productivity?",
    o: ["5 books per employee per month", "320 books per employee per month", "0.2 books per employee per month", "48 books per employee per month"],
    a: 0, d: 2,
    why: "40 ÷ 8 = 5 books per employee per month (5.6.4)." },

  { q: "A firm tests 1,000 units and finds 60 defects. What is the defect rate?",
    o: ["6%", "60%", "16.7%", "0.6%"],
    a: 0, d: 2,
    why: "Defect rate = 60 ÷ 1,000 × 100 = 6% (5.6.4)." },

  { q: "A hotel uses 300 of its 800 rooms. What is its capacity utilisation rate?",
    o: ["37.5%", "62.5%", "266.7%", "50%"],
    a: 0, d: 2,
    why: "300 ÷ 800 × 100 = 37.5%, which leaves 500 rooms of spare capacity (5.6.4)." },

  { q: "Why is high capacity utilisation important for hotels and airlines?",
    o: ["It spreads the fixed costs over more customers", "It removes the need for any maintenance of rooms", "It lowers the quality of service for each customer", "It reduces the total number of customers each year"],
    a: 0, d: 2,
    why: "High utilisation spreads fixed costs, but near 100% means stress, no time for maintenance and lost customers (5.6.4)." },

  { q: "A firm has an operating leverage of 1.25. What does this mean?",
    o: ["A 10% rise in sales gives a 12.5% rise in profit", "A 10% rise in sales gives a 1.25% rise in profit", "A 12.5% rise in sales gives a 10% rise in profit", "A 10% rise in costs gives a 12.5% rise in sales"],
    a: 0, d: 3,
    why: "Operating leverage of 1.25 means every 10% rise in sales gives a 12.5% rise in profit (5.6.4)." },

  { q: "Which kind of business typically has a high operating leverage?",
    o: ["A pharmaceutical firm with huge R&D and plant costs", "A retailer whose costs are mostly variable costs", "A shop that buys its goods only when they are sold", "A service firm that has no fixed costs of any kind"],
    a: 0, d: 3,
    why: "High operating leverage means a high share of fixed costs, as in pharma; retailers like Carrefour have low leverage (5.6.4)." },

  { q: "How is the cost to make (CTM) calculated?",
    o: ["(Average variable cost × quantity) + fixed costs", "Selling price per unit multiplied by the quantity", "Fixed costs divided by the contribution per unit", "(Price minus variable cost per unit) × the quantity"],
    a: 0, d: 2,
    why: "CTM = (average variable cost × quantity) + fixed costs; the cost to buy is price × quantity (5.6.5)." },

  { q: "If the cost to buy is lower than the cost to make, what is the quantitative conclusion?",
    o: ["Buying is cheaper", "Making is cheaper", "The firm should shut down", "The costs are equal"],
    a: 0, d: 2,
    why: "If CTB < CTM, buying is cheaper, though qualitative factors should also be considered (5.6.5)." },

  { q: "Which is a qualitative factor in a make or buy decision?",
    o: ["Quality management and reputation", "The average cost per unit made", "The defect rate of the products", "The capacity utilisation of the plant"],
    a: 0, d: 2,
    why: "Qualitative factors include quality management, reputation, ethics, supply-chain reliability and specialisation (5.6.5)." },

  { q: "Which is a reason to make a product in-house rather than buy it?",
    o: ["To protect intellectual property and control quality", "To avoid investing in a factory and its machinery", "To use the economies of scale of a subcontractor", "To get expertise that the firm does not have itself"],
    a: 0, d: 2,
    why: "Reasons to make include vertical integration, quality and cost control and protecting IP; reasons to buy include specialisation and lower fixed costs (5.6.5)." },

  { q: "What is vertical integration?",
    o: ["Owning several stages of the supply chain", "Merging with a direct competitor in the market", "Selling to customers who are in other countries", "Hiring another firm to supply the components"],
    a: 0, d: 3,
    why: "Vertical integration is owning several stages of the supply chain, such as a fashion firm owning cotton farms (5.6.5)." }
]);

QB.add("5.7", [
  { q: "What is crisis management?",
    o: ["Steps to limit the damage from an unpredicted event", "An action plan prepared in advance for what-if events", "A way to predict sales in future years", "A system of checks to prevent defects"],
    a: 0, d: 1,
    why: "Crisis management is reactive: limiting the damage from an unpredicted event and returning to normal operations (5.7.1)." },

  { q: "What is contingency planning?",
    o: ["Creating an action plan in advance for unexpected events", "Reacting quickly once a crisis has already taken place", "Insuring all of the assets that a business owns", "Investing in new products in order to reduce its risk"],
    a: 0, d: 1,
    why: "Contingency planning is proactive: a 'plan B' made in advance, with different plans for different events (5.7.1)." },

  { q: "Which statement correctly distinguishes the two?",
    o: ["Crisis management is reactive; contingency planning is proactive", "Crisis management is proactive; contingency planning is reactive", "Both are done only after the crisis has ended", "Both are done only before any crisis may occur"],
    a: 0, d: 2,
    why: "Do not confuse the two: crisis management reacts to events; contingency planning prepares for them (5.7.1)." },

  { q: "Which is an example of a crisis for a business?",
    o: ["A cyber attack or a product recall", "A planned rise in the price of a product", "A normal seasonal increase in sales", "A scheduled meeting of the board"],
    a: 0, d: 1,
    why: "Crises include cyber attacks, product recalls, natural disasters, lawsuits and employee misconduct (5.7.1)." },

  { q: "Why did transparency matter in Volkswagen's emissions crisis?",
    o: ["Only coming clean and paying damages restored its image", "Hiding the evidence was able to protect its image for longer", "Transparency was not needed because of the emissions law", "Its customers did not care about the issue at all"],
    a: 0, d: 3,
    why: "VW first suppressed evidence; only coming clean, paying damages and restructuring restored its image (5.7.2)." },

  { q: "Which of these is a feature of effective crisis management?",
    o: ["Speed, communication, transparency and control", "Delay, secrecy and the blaming of other people", "Waiting until the media loses interest in the story", "Making all of the decisions without consulting any staff"],
    a: 0, d: 2,
    why: "Effective crisis management focuses on communication, transparency, speed and control (5.7.2)." },

  { q: "Boeing responded to the 737 MAX crashes by firing its CEO and training pilots. What did the notes say it lacked?",
    o: ["A media campaign to rebuild confidence", "Any involvement of the regulator", "Any change in management at all", "Any costs from the grounding of the plane"],
    a: 0, d: 3,
    why: "The response included a CEO change, pilot training and the FAA, but no media campaign to rebuild confidence (5.7.2)." },

  { q: "Which is a cost or limitation of contingency planning?",
    o: ["Plans need regular review, and many plans are costly", "It increases the risk of accidents in the workplace", "It slows down all of the decisions made in a crisis", "It makes it impossible for a firm to buy insurance"],
    a: 0, d: 2,
    why: "Planning has an opportunity cost, needs updates, and covering many scenarios may be too costly for small firms (5.7.3)." },

  { q: "How does contingency planning help with time?",
    o: ["It enables swift action and reassures stakeholders", "It delays the response of the business to the crisis", "It removes any need for communication with the public", "It guarantees that a crisis will never occur at all"],
    a: 0, d: 2,
    why: "Plans, including a communications strategy, allow swift action: time invested now buys speed later (5.7.3)." },

  { q: "Which is a limitation of contingency plans in a real crisis?",
    o: ["Panic means that plans must be adapted as events develop", "They can never be changed again once they are written", "They are banned by law in most workplaces in the world", "They remove all of the risk of accidents and injuries"],
    a: 0, d: 3,
    why: "Real crises bring panic; plans must account for this, be updated and be adapted as the situation develops (5.7.3)." }
]);

QB.add("5.8", [
  { q: "What does R&D provide a business?",
    o: ["Knowledge of consumer needs and better products", "A guaranteed new product for the firm every single year", "Lower costs for the business without any risk at all", "Immediate profits for the firm in the short term"],
    a: 0, d: 1,
    why: "R&D provides knowledge of needs and improves products, processes and efficiency, but never guarantees success (5.8.1)." },

  { q: "Which is a benefit of R&D?",
    o: ["Patents can give a USP and monopoly revenue", "It always raises the short-term profits of the firm", "It removes the risk of wasting money on new products", "It stops rival firms from poaching the best talent"],
    a: 0, d: 2,
    why: "R&D can bring lower costs, patents and a USP, diversification and a better brand image (5.8.1)." },

  { q: "Which is a limitation of R&D?",
    o: ["Money can be wasted on products nobody wants", "It always lowers the long-term costs", "It guarantees that a new product will succeed", "It improves short-term cash flow"],
    a: 0, d: 2,
    why: "R&D is risky: about 20 failed ideas for each one that reaches the market, and it lowers short-term profits (5.8.1)." },

  { q: "Why should answers about R&D use words such as 'might' and 'could'?",
    o: ["R&D never guarantees success", "R&D always leads to failure", "R&D is only used by small firms", "R&D has no effect on costs"],
    a: 0, d: 2,
    why: "Exam tip: use 'might', 'may' and 'could' since R&D never guarantees success (5.8.1)." },

  { q: "What is an unmet need?",
    o: ["An issue or problem that society has not yet addressed", "A product that has been withdrawn from sale by a firm", "A request from a customer that the firm has refused", "A need that is already served by many different firms"],
    a: 0, d: 2,
    why: "An unmet need is a problem with no solution yet or no affordable one; one a business can address is a gap in the market (5.8.2)." },

  { q: "d.light sells solar products to people without reliable electricity. What does this show?",
    o: ["A business meeting an unmet need", "A firm only seeking short-term profit", "A firm using only job production", "A firm avoiding all R&D"],
    a: 0, d: 3,
    why: "d.light's solar products replace dangerous kerosene lamps for low-income customers, meeting an unmet need (5.8.2)." },

  { q: "What is intellectual property (IP)?",
    o: ["Creations of the mind, such as inventions and brand names", "The land and the buildings that are owned by a firm", "The stock that a business holds in storage at the time", "The money that a business keeps in its bank account"],
    a: 0, d: 1,
    why: "IP covers inventions, artistic works and brand names, which are intangible assets (5.8.3)." },

  { q: "What does a patent give an inventor?",
    o: ["The exclusive right to make, use or sell it for a period", "Automatic protection for a piece of writing or music", "A symbol or logo that has been registered by a brand", "The right to use the brand name of any other firm"],
    a: 0, d: 2,
    why: "A patent gives a temporary monopoly, but must be original and viable and is a complex, costly process (5.8.3)." },

  { q: "Which type of IP protection is granted automatically without an application?",
    o: ["Copyright", "A patent", "A registered trademark", "A licence"],
    a: 0, d: 2,
    why: "Copyright is automatic for creators, lasts beyond death and generates royalties (5.8.3)." },

  { q: "What are royalties?",
    o: ["Fees for using copyrighted material", "Payments that are made to the shareholders", "Taxes that are paid on the profits to the state", "Fees that are paid to register a new trademark"],
    a: 0, d: 3,
    why: "Copyright generates royalties, such as fees for using a song in an advertisement (5.8.3)." },

  { q: "What does a registered trademark protect?",
    o: ["A recognisable symbol, word or phrase of a business", "A new invention that is protected for a set period", "A song or book that is protected for a whole lifetime", "A secret method that is used inside a production process"],
    a: 0, d: 2,
    why: "A trademark is a recognisable symbol, word or phrase, such as the Apple logo, registered with government (5.8.3)." },

  { q: "What is innovation?",
    o: ["Turning new ideas into something commercially viable", "Coming up with a new idea of any kind at all", "Improving an existing product in a small way only", "Copying the successful products of rival businesses"],
    a: 0, d: 2,
    why: "Creativity is coming up with a new idea; innovation turns new ideas into something commercially viable (5.8.4)." },

  { q: "Airbnb moving from conferences to tourism is an example of which type of innovation?",
    o: ["Positioning innovation", "Product innovation", "Process innovation", "Paradigm innovation"],
    a: 0, d: 3,
    why: "Positioning innovation markets a product to a new target audience (5.8.4)." },

  { q: "Netflix's move to streaming changed a whole industry. Which type of innovation is this?",
    o: ["Paradigm innovation", "Positioning innovation", "Process innovation", "Product innovation"],
    a: 0, d: 3,
    why: "Paradigm innovation fundamentally changes a whole industry (5.8.4)." },

  { q: "A game is updated every three weeks with small improvements. Which type of innovation is this?",
    o: ["Incremental innovation", "Disruptive innovation", "Paradigm innovation", "Radical innovation"],
    a: 0, d: 2,
    why: "Incremental innovation is a series of small, steady improvements over time (5.8.4)." },

  { q: "Ride-hailing and food-ordering apps radically changed behaviour. Which type of innovation is this?",
    o: ["Disruptive innovation", "Incremental innovation", "Cosmetic innovation", "Adaptive creativity"],
    a: 0, d: 2,
    why: "Disruptive innovation creates new industries and markets and radically changes behaviour (5.8.4)." }
]);

QB.add("5.9", [
  { q: "What is data mining?",
    o: ["Searching large data sets for patterns", "Storing data on a server in a building", "Protecting systems from criminals", "Selling data to other businesses"],
    a: 0, d: 1,
    why: "Data mining searches large data sets for patterns; data analytics analyses data for trends and behaviours (5.9.1)." },

  { q: "Which is an ethical concern about collecting customer data?",
    o: ["Whether consumers know and genuinely consent", "Whether the data can improve sales forecasts", "Whether the data helps segment markets", "Whether the data saves cost on storage"],
    a: 0, d: 2,
    why: "Ethical concerns include privacy, consent, access, security and malicious use of data (5.9.1)." },

  { q: "What is cloud computing?",
    o: ["Storage and networking of computers and data from anywhere", "A building that holds servers running digital services", "A set of instructions that is used to solve a problem", "A network of physical objects that contain sensors"],
    a: 0, d: 2,
    why: "Cloud computing provides data storage and networked computing accessible from anywhere (5.9.1)." },

  { q: "What is an algorithm?",
    o: ["A set of instructions to solve a problem", "A network of nodes that is modelled on the brain", "A type of attack that is carried out by hackers", "A kind of rewards card for the loyal customers"],
    a: 0, d: 2,
    why: "Data trains algorithms, which are sets of instructions to solve a problem, in artificial neural networks (5.9.1)." },

  { q: "A hacker blocks access to a company's files until it pays money. Which threat is this?",
    o: ["Ransomware", "A DDoS attack", "Data mining", "Phishing for passwords only"],
    a: 0, d: 2,
    why: "Ransomware blocks access until paid; DDoS overwhelms a system with traffic (5.9.1)." },

  { q: "What is a DDoS attack?",
    o: ["Overwhelming a system with traffic", "Blocking files until a ransom is paid", "Stealing data and selling it online", "Searching data for patterns"],
    a: 0, d: 3,
    why: "A distributed denial-of-service attack overwhelms a system with traffic (5.9.1)." },

  { q: "Which is a limitation of critical data infrastructure?",
    o: ["High costs and energy use of data centres", "Lower revenue for the business", "Poorer consumer satisfaction", "Less security than in-house systems always"],
    a: 0, d: 2,
    why: "Limitations include cost, consumer manipulation, energy use and e-waste, and ethical and legal issues (5.9.1)." },

  { q: "What is the metaverse?",
    o: ["Digital worlds where people work, play and gather", "A network of connected smart devices in the home", "A group of skilled robots working in a smart factory", "A programme that rewards the most loyal customers"],
    a: 0, d: 1,
    why: "The metaverse is digital worlds for work, play and gathering, and is a disruptive innovation (5.9.2)." },

  { q: "IKEA lets customers place furniture virtually in their homes. Which technology is this?",
    o: ["Virtual reality", "Internet of things", "Ransomware", "A loyalty programme"],
    a: 0, d: 2,
    why: "VR is used in marketing to engage target markets, such as virtual furniture placement or try-ons (5.9.2)." },

  { q: "Which is a limitation of virtual reality?",
    o: ["Cost and limited realism of the headsets", "It cannot be used for training staff", "It cannot be used for marketing", "It cannot be used in factories"],
    a: 0, d: 2,
    why: "VR has cost, clunky headsets and ethical, privacy and legal limits across real and virtual borders (5.9.2)." },

  { q: "What is the internet of things (IoT)?",
    o: ["Networks of physical objects that exchange data", "A digital world in which people play and shop", "A type of robot that is able to learn by itself", "A method of rewarding repeat and loyal customers"],
    a: 0, d: 1,
    why: "IoT is networks of smart physical objects that communicate and exchange data, such as thermostats and watches (5.9.3)." },

  { q: "What is machine learning?",
    o: ["AI using data and algorithms to improve over time", "A robot doing a fixed task without any data", "A network of objects with sensors", "A tool that stores huge amounts of data"],
    a: 0, d: 2,
    why: "Machine learning is AI that uses data and algorithms to improve over time (5.9.3)." },

  { q: "How can AI benefit tertiary-sector businesses?",
    o: ["Checkout-free stores and 24-hour chatbots", "Drones that monitor crops and livestock", "Robots that detect defects on a line", "Precise use of pesticide on a farm"],
    a: 0, d: 3,
    why: "In the tertiary sector AI helps forecasting, pricing, automatic reordering, checkout-free stores and chatbots (5.9.3)." },

  { q: "What is big data?",
    o: ["Huge volumes of varied data that only machines can process", "A small set of results from a customer survey", "The yearly financial accounts of a large business", "A back-up copy of a company's files stored on a disk"],
    a: 0, d: 2,
    why: "Big data is huge volumes and variety of data collected by advanced tech that only machines can process (5.9.3)." },

  { q: "Which is a risk of AI used in decisions?",
    o: ["Biased algorithms can cause discrimination", "It always lowers the capital costs", "It removes all ethical concerns", "It cannot automate any processes"],
    a: 0, d: 2,
    why: "AI risks include high capital cost, bias and discrimination, privacy violations, job losses and unclear liability (5.9.3)." },

  { q: "What is a customer loyalty programme?",
    o: ["A scheme that rewards customers who buy repeatedly", "A discount that is offered to brand new customers only", "A survey that asks customers about their opinions", "A way of tracking the output of each employee"],
    a: 0, d: 1,
    why: "A loyalty programme rewards repeat buyers, such as a stamp card for a free ice cream (5.9.4)." },

  { q: "Why are loyalty programmes valuable for a business?",
    o: ["Retaining customers is cheaper than finding new ones", "They remove the need for any other form of promotion", "They make every product cost less for the firm to make", "They remove the risk of competition from other firms"],
    a: 0, d: 2,
    why: "Retaining customers costs less than finding new ones, and card data supports personalised promotion (5.9.4)." },

  { q: "Which is a limitation of loyalty programmes?",
    o: ["They are costly and so common that they may not differentiate", "They give the business no data at all about its customers", "They cannot be used by large supermarkets and retailers", "They only ever work for customers who are brand new"],
    a: 0, d: 3,
    why: "Limitations include cost, no value without repeat business, lack of differentiation and ethical or privacy concerns (5.9.4)." },

  { q: "What is digital Taylorism?",
    o: ["Using surveillance technology to monitor output", "Paying all of the workers the same fixed salary", "Letting workers choose all of their own tasks freely", "Training the workers in virtual reality for safety"],
    a: 0, d: 2,
    why: "Digital Taylorism uses technology to monitor output, link pay to performance and break down tasks (5.9.5)." },

  { q: "Which is a disadvantage of digital Taylorism?",
    o: ["Less autonomy lowers motivation and raises turnover", "Appraisal becomes less accurate and based on less data", "Efficiency is lower in each of the tasks that are tracked", "Workers become more creative because they are monitored"],
    a: 0, d: 2,
    why: "Disadvantages include lower motivation, less creativity and dehumanisation or overwork (5.9.5)." },

  { q: "Deliveroo's app tracks the time riders take and pays per delivery. What does this show?",
    o: ["Digital Taylorism with piece-rate pay", "A loyalty programme for the customers", "Just-in-case production", "A cloud computing service"],
    a: 0, d: 3,
    why: "The algorithm tracks times and uses piece-rate pay, shifting risk to riders, which critics call digital Taylorism (5.9.5)." }
]);
