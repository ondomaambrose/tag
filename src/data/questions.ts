import type { Question } from "../types";

export const tmc211Questions: Question[] = [
  // --- LECTURE 1: BIBLICAL FOUNDATION FOR SUCCESS (Prof. Anake) ---
  {
    id: 1,
    type: "mcq",
    question:
      "According to Deut 28:13, success is described as the _____ of every child of God.",
    options: ["Birthright", "Option", "Reward", "Goal"],
    answer: "Birthright",
  },
  {
    id: 2,
    type: "fill_in",
    question:
      "If the foundations be destroyed, what can the righteous do? (Format: Book Chapter:Verse)",
    answer: "Psalm 11:3",
  },
  {
    id: 3,
    type: "true_false",
    question: "God's Word is the only stable foundation for lasting success.",
    answer: true,
  },
  {
    id: 4,
    type: "mcq",
    question:
      "Which of the following is NOT one of the 12 Core Scriptural Principles listed in Lecture 1?",
    options: ["Vision", "Networking", "Knowledge", "Wisdom"],
    answer: "Networking",
  },
  {
    id: 5,
    type: "fill_in",
    question:
      "Faith is the _____ of things hoped for, the evidence of things not seen. (1 word)",
    answer: "substance",
  },
  {
    id: 6,
    type: "matching",
    question: "Match the Principle to the Scripture.",
    pairs: [
      { hook: "Vision", purpose: "Proverbs 29:18" },
      { hook: "Wisdom", purpose: "Proverbs 4:7" },
      { hook: "Faith", purpose: "Hebrews 11:1" },
      { hook: "Dedication", purpose: "John 12:23-26" },
    ],
  },
  {
    id: 7,
    type: "mcq",
    question:
      "Righteousness exalts a nation, but sin is a _____ to any people.",
    options: ["Reproach", "Benefit", "Lesson", "Challenge"],
    answer: "Reproach",
  },
  {
    id: 8,
    type: "fill_in",
    question:
      "Integrity may be resisted temporarily, but it is ultimately _____. (1 word)",
    answer: "rewarded",
  },
  {
    id: 9,
    type: "true_false",
    question: "One of the greatest enemies of distinction is distraction.",
    answer: true,
  },
  {
    id: 10,
    type: "mcq",
    question: "Dedication is defined as:",
    options: [
      "Deadly commitment to a cause",
      "Showing up on time",
      "Working only when paid",
      "Having good intentions",
    ],
    answer: "Deadly commitment to a cause",
  },
  {
    id: 11,
    type: "fill_in",
    question:
      "Persistence is the refusal to give up. Which scripture supports this? (Format: Luke Chapter:Verses)",
    answer: "Luke 11:7-9",
  },
  {
    id: 12,
    type: "drag_drop",
    question: "Sort the Principles of Success.",
    items: ["Vision", "Faith", "Righteousness", "Persistence"],
    targets: [
      "Seeing the future",
      "Believing the invisible",
      "Right standing",
      "Never giving up",
    ],
    answers: ["Vision", "Faith", "Righteousness", "Persistence"],
  },
  {
    id: 13,
    type: "mcq",
    question:
      "Who in the Bible is an example of Integrity rewarded after persecution?",
    options: ["Daniel", "Judas", "Cain", "Saul"],
    answer: "Daniel",
  },
  {
    id: 14,
    type: "fill_in",
    question: "Wisdom is the principal _____. (1 word)",
    answer: "thing",
  },
  {
    id: 15,
    type: "true_false",
    question:
      "Heaven and earth may pass away, but the Word of God stands forever.",
    answer: true,
  },
  {
    id: 16,
    type: "fill_in",
    question:
      "Knowledge is power, but only applied knowledge brings _____. (1 word)",
    answer: "results",
  },
  {
    id: 17,
    type: "mcq",
    question: "Focus is the key to:",
    options: ["Attainment", "Confusion", "Diversity", "Multitasking"],
    answer: "Attainment",
  },
  {
    id: 18,
    type: "matching",
    question: "Match the concept to the outcome.",
    pairs: [
      { hook: "Faulty Foundation", purpose: "Collapse" },
      { hook: "Word Foundation", purpose: "Unshakable" },
      { hook: "Dedication", purpose: "Greatness emerges" },
    ],
  },
  {
    id: 19,
    type: "mcq",
    question: "What makes you unshakable according to Matthew 7:24-25?",
    options: [
      "Doing the Word",
      "Hearing the Word only",
      "Analyzing the Word",
      "Debating the Word",
    ],
    answer: "Doing the Word",
  },
  {
    id: 20,
    type: "fill_in",
    question: "Success is succeeding in _____. (1 word)",
    answer: "succession",
  },
  {
    id: 21,
    type: "true_false",
    question: "A vision without a plan is just a hallucination.",
    answer: true,
  },
  {
    id: 22,
    type: "fill_in",
    question: "Character determines how _____ you rise. (1 word)",
    answer: "high",
  },
  {
    id: 23,
    type: "mcq",
    question: "Which of these is a component of 'The Word Foundation'?",
    options: [
      "It endures forever",
      "It changes with culture",
      "It is flexible",
      "It is theoretical",
    ],
    answer: "It endures forever",
  },
  {
    id: 24,
    type: "fill_in",
    question:
      "Be steadfast and _____, always abounding in the work of the Lord. (1 word)",
    answer: "unmovable",
  },
  {
    id: 25,
    type: "mcq",
    question: "The Bible paints the picture of success as:",
    options: [
      "Continuous path (Shining light)",
      "A destination",
      "A lottery win",
      "A hidden secret",
    ],
    answer: "Continuous path (Shining light)",
  },

  // --- LECTURE 2: BIBLICAL SUCCESS STORIES (Pst. Adegbayi) ---
  {
    id: 26,
    type: "mcq",
    question:
      "According to Dr. Oyedepo, Success is the continual attainment of _____ goals for an individual.",
    options: ["God's set", "Society's set", "Parent's set", "Personal"],
    answer: "God's set",
  },
  {
    id: 27,
    type: "fill_in",
    question:
      "Joshua 1:8 outlines the formula: Meditate, Observe, and _____. (1 word)",
    answer: "Do",
  },
  {
    id: 28,
    type: "true_false",
    question: "Biblical success is limited to financial abundance.",
    answer: false,
  },
  {
    id: 29,
    type: "mcq",
    question:
      "Which of the following is NOT a 'Common Misconception' of Biblical Success?",
    options: [
      "Covenant walk with God",
      "Getting rich quick",
      "Prosperity without character",
      "Harvest without sowing",
    ],
    answer: "Covenant walk with God",
  },
  {
    id: 30,
    type: "matching",
    question: "Match the Success Step in Joshua 1:8.",
    pairs: [
      { hook: "Mouth", purpose: "Do not let Word depart" },
      { hook: "Mind", purpose: "Meditate day and night" },
      { hook: "Action", purpose: "Observe to do" },
    ],
  },
  {
    id: 31,
    type: "fill_in",
    question:
      "One secret from heaven is greater than a lifetime of _____. (1 word)",
    answer: "struggles",
  },
  {
    id: 32,
    type: "mcq",
    question:
      "Which New Testament figure is cited as a success story in Lecture 2?",
    options: ["Paul", "Judas", "Pilate", "Ananias"],
    answer: "Paul",
  },
  {
    id: 33,
    type: "drag_drop",
    question: "Categorize as True Biblical Success or Misconception.",
    items: [
      "Stewardship",
      "Get Rich Quick",
      "Purpose Fulfilment",
      "Promotion without Prep",
    ],
    targets: ["True Success", "Misconception", "True Success", "Misconception"],
    answers: [
      "Stewardship",
      "Get Rich Quick",
      "Purpose Fulfilment",
      "Promotion without Prep",
    ],
  },
  {
    id: 34,
    type: "fill_in",
    question: "Success is faithfulness, not just _____. (1 word)",
    answer: "growth",
  },
  {
    id: 35,
    type: "true_false",
    question:
      "You can command good success by observing to do according to the Word.",
    answer: true,
  },
  {
    id: 36,
    type: "mcq",
    question:
      "The 'Practical Application' suggests dedicating how many days to Word meditation?",
    options: ["21 days", "3 days", "7 days", "40 days"],
    answer: "21 days",
  },
  {
    id: 37,
    type: "fill_in",
    question:
      "Every outstanding success is traceable to _____ secrets. (1 word)",
    answer: "discovered",
  },
  {
    id: 38,
    type: "mcq",
    question:
      "Which Old Testament character is a primary example of biblical success in this lecture?",
    options: ["Joseph", "Achan", "Saul", "Eli"],
    answer: "Joseph",
  },
  {
    id: 39,
    type: "fill_in",
    question:
      "Biblical success includes spiritual fulfilment, physical health, and relational _____. (1 word)",
    answer: "harmony",
  },
  {
    id: 40,
    type: "true_false",
    question: "Success without obedience is considered a misconception.",
    answer: true,
  },
  {
    id: 41,
    type: "matching",
    question: "Match the Action Plan day to the activity.",
    pairs: [
      { hook: "Day 1-2", purpose: "Discover Purpose" },
      { hook: "Day 3-4", purpose: "Declare Scriptures" },
      { hook: "Day 5-6", purpose: "Develop Plan" },
      { hook: "Day 7", purpose: "Dedicate" },
    ],
  },
  {
    id: 42,
    type: "mcq",
    question: "Anchor thought: Success is _____, not just growth.",
    options: ["Faithfulness", "Money", "Fame", "Speed"],
    answer: "Faithfulness",
  },
  {
    id: 43,
    type: "fill_in",
    question: "God has _____ that are highways to success. (1 word)",
    answer: "secrets",
  },
  {
    id: 44,
    type: "mcq",
    question: "What precedes 'Good Success' in Joshua 1:8?",
    options: [
      "Making your way prosperous",
      "Waiting for luck",
      "Knowing the right people",
      "Complaining",
    ],
    answer: "Making your way prosperous",
  },
  {
    id: 45,
    type: "true_false",
    question:
      "Success requires finding an accountability partner according to the action plan.",
    answer: true,
  },
  {
    id: 46,
    type: "fill_in",
    question:
      "Prosperity without _____ is a misconception of success. (1 word)",
    answer: "character",
  },
  {
    id: 47,
    type: "mcq",
    question: "Biblical success involves being in command of:",
    options: [
      "Life's issues",
      "Other people",
      "Everything instantly",
      "Nothing",
    ],
    answer: "Life's issues",
  },
  {
    id: 48,
    type: "fill_in",
    question:
      "Develop an improvement action plan by assessing your _____ level (1-10). (1 word)",
    answer: "excellence",
  },
  {
    id: 49,
    type: "true_false",
    question: "Material prosperity is the only indicator of God's blessing.",
    answer: false,
  },
  {
    id: 50,
    type: "mcq",
    question: "The Bible contains all the _____ you need for success.",
    options: ["Secrets", "Money", "Jokes", "Opinions"],
    answer: "Secrets",
  },

  // --- LECTURE 4: CHARACTER DEVELOPMENT (Pst. Adegbayi) ---
  {
    id: 51,
    type: "mcq",
    question: "Character is defined as the _____ of your true identity.",
    options: ["Revelation", "Mask", "opposite", "Shadow"],
    answer: "Revelation",
  },
  {
    id: 52,
    type: "fill_in",
    question:
      "Matthew 5:16 says: Let your light so shine... that they may see your good _____. (1 word)",
    answer: "works",
  },
  {
    id: 53,
    type: "true_false",
    question: "Character reveals who you really are when no one is watching.",
    answer: true,
  },
  {
    id: 54,
    type: "mcq",
    question:
      "Which of the following is NOT one of the 4 Key Elements of Christian Character?",
    options: [
      "Living like Christ",
      "Obeying Scripture",
      "Acting religious",
      "Possessing Godlike attributes",
    ],
    answer: "Acting religious",
  },
  {
    id: 55,
    type: "fill_in",
    question:
      "The world is waiting for the manifestation of the sons of _____. (1 word)",
    answer: "God",
  },
  {
    id: 56,
    type: "matching",
    question: "Match the Character Killer to its definition.",
    pairs: [
      { hook: "Pride", purpose: "Destruction/Fall" },
      { hook: "Anger", purpose: "Rests in bosom of fools" },
      { hook: "Immorality", purpose: "Destroys body/soul" },
      { hook: "Covetousness", purpose: "Unlawful desire" },
    ],
  },
  {
    id: 57,
    type: "mcq",
    question:
      "Which biblical character's greed cost him his ministry and health?",
    options: ["Gehazi", "Joseph", "Daniel", "David"],
    answer: "Gehazi",
  },
  {
    id: 58,
    type: "fill_in",
    question:
      "Harry S. Truman said the first victory great men won was over _____. (1 word)",
    answer: "themselves",
  },
  {
    id: 59,
    type: "true_false",
    question:
      "Charisma can take you to the top, but only character can keep you there.",
    answer: true,
  },
  {
    id: 60,
    type: "mcq",
    question: "What is the 'Smoke' if Character is the 'Fire'?",
    options: ["Reputation", "Personality", "Money", "Talent"],
    answer: "Reputation",
  },
  {
    id: 61,
    type: "drag_drop",
    question: "Classify as Fruit of Spirit or Work of Flesh.",
    items: ["Love", "Adultery", "Patience", "Wrath"],
    targets: ["Fruit", "Flesh", "Fruit", "Flesh"],
    answers: ["Love", "Adultery", "Patience", "Wrath"],
  },
  {
    id: 62,
    type: "fill_in",
    question:
      "Joseph is an example of character promoting a man from _____ to Palace. (1 word)",
    answer: "Prison",
  },
  {
    id: 63,
    type: "mcq",
    question: "Achan's sin was primarily:",
    options: ["Covetousness", "Anger", "Laziness", "Fear"],
    answer: "Covetousness",
  },
  {
    id: 64,
    type: "fill_in",
    question: "Your character determines your _____. (1 word)",
    answer: "impact",
  },
  {
    id: 65,
    type: "true_false",
    question: "Hophni and Phinehas are examples of successful character.",
    answer: false,
  },
  {
    id: 66,
    type: "matching",
    question: "Match the Benefit of Character.",
    pairs: [
      { hook: "Identity", purpose: "Distinguishes you" },
      { hook: "Preservation", purpose: "Keeps you safe" },
      { hook: "Promotion", purpose: "Exalts you" },
    ],
  },
  {
    id: 67,
    type: "mcq",
    question: "Character is not about religion, it is about:",
    options: ["Transformation", "Rules", "Tradition", "Attendance"],
    answer: "Transformation",
  },
  {
    id: 68,
    type: "fill_in",
    question: "Anger rests in the bosom of _____. (1 word)",
    answer: "fools",
  },
  {
    id: 69,
    type: "mcq",
    question: "You are God's _____ to be read by all men.",
    options: ["Letter", "Book", "Billboard", "Website"],
    answer: "Letter",
  },
  {
    id: 70,
    type: "true_false",
    question: "Talent is the same as Character.",
    answer: false,
  },
  {
    id: 71,
    type: "fill_in",
    question: "Guard against greed, gluttony, and _____. (1 word)",
    answer: "selfishness",
  },
  {
    id: 72,
    type: "mcq",
    question: "Which of these is a 'Fruit of the Spirit'?",
    options: ["Longsuffering", "Hatred", "Variance", "Emulations"],
    answer: "Longsuffering",
  },
  {
    id: 73,
    type: "fill_in",
    question:
      "The earnest expectation of the creature waits for the manifestation of the sons of _____. (1 word)",
    answer: "God",
  },
  {
    id: 74,
    type: "mcq",
    question: "Character is the sum total of your:",
    options: ["Lifestyle/Behavior", "Bank account", "Friends", "Promises"],
    answer: "Lifestyle/Behavior",
  },
  {
    id: 75,
    type: "true_false",
    question: "It is possible to have a good reputation but bad character.",
    answer: true,
  },

  // --- LECTURE 5: VISION ANALYSIS (Pst. Nathaniel) ---
  {
    id: 76,
    type: "mcq",
    question: "Spiritual Vision is defined as:",
    options: [
      "Discovery of God's plan",
      "Ambition",
      "Daydreaming",
      "Corporate strategy",
    ],
    answer: "Discovery of God's plan",
  },
  {
    id: 77,
    type: "fill_in",
    question:
      "Jeremiah 29:11 says God's thoughts are of _____ and not of evil. (1 word)",
    answer: "peace",
  },
  {
    id: 78,
    type: "true_false",
    question: "Vision Analysis involves the careful examination of God's plan.",
    answer: true,
  },
  {
    id: 79,
    type: "mcq",
    question:
      "Colossians 4:17 says: Take heed to the _____ which you have received.",
    options: ["Ministry", "Money", "Gift", "Award"],
    answer: "Ministry",
  },
  {
    id: 80,
    type: "fill_in",
    question: "Vision eliminates _____. (1 word)",
    answer: "confusion",
  },
  {
    id: 81,
    type: "matching",
    question: "Match the Vision Component (4 Ts).",
    pairs: [
      { hook: "Task", purpose: "What am I called to do?" },
      { hook: "Target", purpose: "Who am I called to serve?" },
      { hook: "Tools", purpose: "What resources do I have?" },
      { hook: "Time", purpose: "What season am I in?" },
    ],
  },
  {
    id: 82,
    type: "mcq",
    question: "Ecclesiastes 3:1 states: To everything there is a _____.",
    options: ["Season", "Price", "Limit", "Trick"],
    answer: "Season",
  },
  {
    id: 83,
    type: "fill_in",
    question: "Vision without planning remains a _____. (1 word)",
    answer: "dream",
  },
  {
    id: 84,
    type: "true_false",
    question: "A genuine vision always aligns with Scripture.",
    answer: true,
  },
  {
    id: 85,
    type: "mcq",
    question: "Which of these is NOT a characteristic of Authentic Vision?",
    options: [
      "It promotes pride",
      "It solves a problem",
      "It is future-oriented",
      "It inspires others",
    ],
    answer: "It promotes pride",
  },
  {
    id: 86,
    type: "fill_in",
    question: "Vision fuels _____. (1 word)",
    answer: "confidence",
  },
  {
    id: 87,
    type: "drag_drop",
    question: "Order the Planning Process.",
    items: ["Think", "Consult", "Engage Holy Spirit", "Execute"],
    targets: ["Devise strategy", "Seek counsel", "Partner with God", "Do it"],
    answers: ["Think", "Consult", "Engage Holy Spirit", "Execute"],
  },
  {
    id: 88,
    type: "mcq",
    question: "My Target refers to:",
    options: [
      "The specific people I am called to reach",
      "The money I want to make",
      "The awards I want",
      "The enemies I fight",
    ],
    answer: "The specific people I am called to reach",
  },
  {
    id: 89,
    type: "fill_in",
    question:
      "The child grew and was in the deserts till the day of his _____. (1 word)",
    answer: "manifestation",
  },
  {
    id: 90,
    type: "true_false",
    question: "You should seek counsel from the wise during vision planning.",
    answer: true,
  },
  {
    id: 91,
    type: "mcq",
    question: "What is the result of Vision?",
    options: ["Fulfilment", "Confusion", "Stagnation", "Boredom"],
    answer: "Fulfilment",
  },
  {
    id: 92,
    type: "fill_in",
    question: "Vision is discovering God's plan and _____. (1 word)",
    answer: "purpose",
  },
  {
    id: 93,
    type: "matching",
    question: "Match the Benefit of Vision.",
    pairs: [
      { hook: "Focus", purpose: "Keeps you on track" },
      { hook: "Confidence", purpose: "Boldness in pursuit" },
      { hook: "Fulfilment", purpose: "Satisfaction" },
    ],
  },
  {
    id: 94,
    type: "mcq",
    question: "In the Vision Analysis Worksheet, 'My Tools' refers to:",
    options: ["Gifts and Skills", "Hammers and Nails", "Friends", "Money only"],
    answer: "Gifts and Skills",
  },
  {
    id: 95,
    type: "fill_in",
    question:
      "Hosea 4:6 implies people are destroyed for lack of _____. (1 word)",
    answer: "knowledge",
  },
  {
    id: 96,
    type: "true_false",
    question:
      "Vision Analysis helps you distinguish genuine vision from pseudo vision.",
    answer: true,
  },
  {
    id: 97,
    type: "mcq",
    question:
      "Prov 16:9 says: A man's heart devises his way, but the Lord directs his _____.",
    options: ["Steps", "Thoughts", "Money", "Enemies"],
    answer: "Steps",
  },
  {
    id: 98,
    type: "fill_in",
    question: "General vision involves imagination and _____. (1 word)",
    answer: "wisdom",
  },
  {
    id: 99,
    type: "mcq",
    question:
      "When do I start? This question relates to which Vision Component?",
    options: ["Time", "Task", "Target", "Tools"],
    answer: "Time",
  },
  {
    id: 100,
    type: "true_false",
    question: "God's vision for you involves an expected end.",
    answer: true,
  },

  // --- LECTURE 6: THE PLACE OF HARD WORK (Pst. Beecroft) ---
  {
    id: 101,
    type: "mcq",
    question: "Zig Ziglar said: It was _____ that moved us into action.",
    options: ["Commitment", "Character", "Discipline", "Fear"],
    answer: "Commitment",
  },
  {
    id: 102,
    type: "fill_in",
    question:
      "Hard work involves going beyond usual efforts to achieve _____. (1 word)",
    answer: "success",
  },
  {
    id: 103,
    type: "true_false",
    question:
      "There are no secrets to success; it is the result of preparation and hard work.",
    answer: true,
  },
  {
    id: 104,
    type: "mcq",
    question:
      "According to Pro 22:29, a man diligent in his business shall stand before:",
    options: ["Kings", "Mean men", "Friends", "Judges"],
    answer: "Kings",
  },
  {
    id: 105,
    type: "fill_in",
    question: "Life operates on Seed Time and _____. (1 word)",
    answer: "Harvest",
  },
  {
    id: 106,
    type: "matching",
    question: "Match the Hard Work Concept.",
    pairs: [
      { hook: "Focused", purpose: "Concentrated effort" },
      { hook: "Consistent", purpose: "Steady action" },
      { hook: "Motivated", purpose: "Driven from within" },
    ],
  },
  {
    id: 107,
    type: "mcq",
    question: "Making a Living is different from:",
    options: [
      "Making Impact",
      "Making Money",
      "Making Noise",
      "Making Friends",
    ],
    answer: "Making Impact",
  },
  {
    id: 108,
    type: "fill_in",
    question: "No Star Without a _____. (1 word)",
    answer: "Scar",
  },
  {
    id: 109,
    type: "true_false",
    question:
      "Academic excellence involves doing only the minimum requirements.",
    answer: false,
  },
  {
    id: 110,
    type: "mcq",
    question: "Time Management involves auditing your _____ hours weekly.",
    options: ["168", "24", "40", "12"],
    answer: "168",
  },
  {
    id: 111,
    type: "fill_in",
    question:
      "The right preparation for tomorrow is the right use of _____. (1 word)",
    answer: "today",
  },
  {
    id: 112,
    type: "drag_drop",
    question: "Order the Zig Ziglar sequence.",
    items: ["Character", "Commitment", "Discipline", "Action"],
    targets: ["Step 1", "Step 2", "Step 3", "Step 4"],
    answers: ["Character", "Commitment", "Discipline", "Action"],
  },
  {
    id: 113,
    type: "mcq",
    question: "What enhances worth like nothing else according to Pro 13:4?",
    options: ["Hard Work", "Sleep", "Talk", "Luck"],
    answer: "Hard Work",
  },
  {
    id: 114,
    type: "fill_in",
    question: "No Free Lunch in Life — Abnormal price = World _____. (1 word)",
    answer: "Changer",
  },
  {
    id: 115,
    type: "true_false",
    question: "Every fruit-yielding tree has its seed in itself.",
    answer: true,
  },
  {
    id: 116,
    type: "mcq",
    question: "Global Price leads to:",
    options: ["Global Impact", "Local Impact", "No Impact", "Debt"],
    answer: "Global Impact",
  },
  {
    id: 117,
    type: "fill_in",
    question: "Living by profession vs Impact by _____. (1 word)",
    answer: "dedication",
  },
  {
    id: 118,
    type: "matching",
    question: "Match the Practical Application.",
    pairs: [
      { hook: "Academic", purpose: "Go beyond minimum" },
      { hook: "Time", purpose: "Eliminate wasters" },
      { hook: "Character", purpose: "No Slavery Mentality" },
    ],
  },
  {
    id: 119,
    type: "mcq",
    question: "Today's Labour equals:",
    options: [
      "Tomorrow's Harvest",
      "Tomorrow's Sorrow",
      "Wasted Time",
      "Nothing",
    ],
    answer: "Tomorrow's Harvest",
  },
  {
    id: 120,
    type: "fill_in",
    question: "Your destiny is in YOUR _____. (1 word)",
    answer: "hands",
  },
  {
    id: 121,
    type: "true_false",
    question: "Practice delayed gratification to build character.",
    answer: true,
  },
  {
    id: 122,
    type: "mcq",
    question: "Who said 'There are no secrets to success'?",
    options: ["Colin Powell", "Zig Ziglar", "David Oyedepo", "John Maxwell"],
    answer: "Colin Powell",
  },
  {
    id: 123,
    type: "fill_in",
    question: "We cannot get out of life more than we _____ into it. (1 word)",
    answer: "put",
  },
  {
    id: 124,
    type: "mcq",
    question: "Which of these is NOT an aspect of Hard Work?",
    options: ["Procrastination", "Consistency", "Focus", "Motivation"],
    answer: "Procrastination",
  },
  {
    id: 125,
    type: "true_false",
    question: "The scar of every star is sacrifice.",
    answer: true,
  },

  // --- LECTURE 7: DYNAMICS OF SPIRITUALITY (Pst. Izebere) ---
  {
    id: 126,
    type: "mcq",
    question: "Spirituality is defined as a quality _____ with God.",
    options: ["Walk", "Talk", "Fight", "Agreement"],
    answer: "Walk",
  },
  {
    id: 127,
    type: "fill_in",
    question:
      "Amos 3:3 asks: Can two walk together, except they be _____? (1 word)",
    answer: "agreed",
  },
  {
    id: 128,
    type: "true_false",
    question: "Spirituality is just occasional encounters.",
    answer: false,
  },
  {
    id: 129,
    type: "mcq",
    question: "Why does Spirituality matter?",
    options: [
      "It is the root of a great destiny",
      "It guarantees security",
      "It enhances intellectual capacity",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    id: 130,
    type: "fill_in",
    question: "Spiritual people are men of the _____. (1 word)",
    answer: "future",
  },
  {
    id: 131,
    type: "matching",
    question: "Match the Conscience Type.",
    pairs: [
      { hook: "Good Conscience", purpose: "Alive/Active" },
      { hook: "Weak Conscience", purpose: "Easily wounded" },
      { hook: "Seared Conscience", purpose: "Insensitive/Dead" },
      { hook: "Defiled Conscience", purpose: "Polluted" },
    ],
  },
  {
    id: 132,
    type: "mcq",
    question: "Conscience is described as the _____ of the heart.",
    options: ["Police", "Judge", "Lawyer", "Doctor"],
    answer: "Police",
  },
  {
    id: 133,
    type: "fill_in",
    question: "Gen 17:1 says: Walk before me, and be thou _____. (1 word)",
    answer: "Perfect",
  },
  {
    id: 134,
    type: "true_false",
    question: "A seared conscience is sensitive to God.",
    answer: false,
  },
  {
    id: 135,
    type: "mcq",
    question: "Which of these builds a Healthy Conscience?",
    options: [
      "Blood of Jesus",
      "Word of God",
      "Spiritual Exercises",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    id: 136,
    type: "fill_in",
    question: "Spirituality is profitable unto _____ things. (1 word)",
    answer: "all",
  },
  {
    id: 137,
    type: "drag_drop",
    question: "Sort the Benefits of Spirituality.",
    items: ["Revelation", "Divine Health", "Divine Favour", "Empowerment"],
    targets: [
      "Access to secrets",
      "Physical wellbeing",
      "Supernatural help",
      "Ability for exploit",
    ],
    answers: ["Revelation", "Divine Health", "Divine Favour", "Empowerment"],
  },
  {
    id: 138,
    type: "mcq",
    question: "Who in scripture displayed a robust spirit in Babylon?",
    options: ["Daniel", "Saul", "Lot", "Esau"],
    answer: "Daniel",
  },
  {
    id: 139,
    type: "fill_in",
    question:
      "Through the Blood of Jesus, our conscience is purged from dead _____. (1 word)",
    answer: "works",
  },
  {
    id: 140,
    type: "true_false",
    question: "Walking in the fear of God is a component of spirituality.",
    answer: true,
  },
  {
    id: 141,
    type: "mcq",
    question: "Which scripture links Spirituality to Divine Health?",
    options: ["Mark 2:1-12", "Gen 1:1", "John 3:16", "Rev 1:1"],
    answer: "Mark 2:1-12",
  },
  {
    id: 142,
    type: "fill_in",
    question: "Exercise yourself unto _____. (1 word)",
    answer: "godliness",
  },
  {
    id: 143,
    type: "matching",
    question: "Match the Spirit-Building Tool.",
    pairs: [
      { hook: "Word", purpose: "Cleanses" },
      { hook: "Blood", purpose: "Purges" },
      { hook: "Prayer", purpose: "Exercises" },
    ],
  },
  {
    id: 144,
    type: "mcq",
    question: "Joseph's spirituality was shown by:",
    options: ["Fearing God", "Dreaming", "Ruling", "Wearing a coat"],
    answer: "Fearing God",
  },
  {
    id: 145,
    type: "fill_in",
    question:
      "To be carnally minded is death; but to be spiritually minded is life and _____. (1 word)",
    answer: "peace",
  },
  {
    id: 146,
    type: "true_false",
    question: "A weak conscience is easily defiled.",
    answer: true,
  },
  {
    id: 147,
    type: "mcq",
    question: "Spirituality enhances:",
    options: [
      "Intellectual Capacity",
      "Physical height",
      "Eye color",
      "Hair growth",
    ],
    answer: "Intellectual Capacity",
  },
  {
    id: 148,
    type: "fill_in",
    question: "The secret of the Lord is with them that _____ Him. (1 word)",
    answer: "fear",
  },
  {
    id: 149,
    type: "mcq",
    question: "What is the ultimate benefit of spirituality?",
    options: ["Eternity with Christ", "Money", "Fame", "Long life on earth"],
    answer: "Eternity with Christ",
  },
  {
    id: 150,
    type: "true_false",
    question: "Spirituality guarantees the security of destiny.",
    answer: true,
  },

  // --- LECTURE 8: COVENANT BUSINESS (Dr. Ogah) ---
  {
    id: 151,
    type: "mcq",
    question:
      "A Business is defined as any activity engaged in with the purpose of:",
    options: ["Profit", "Loss", "Fun", "Charity"],
    answer: "Profit",
  },
  {
    id: 152,
    type: "fill_in",
    question:
      "Kingdom Principle: No one is entitled to financial gain without engaging in productive _____. (1 word)",
    answer: "activities",
  },
  {
    id: 153,
    type: "true_false",
    question: "All legitimate labour is ordained to bring profit.",
    answer: true,
  },
  {
    id: 154,
    type: "mcq",
    question: "Which Level of Christian Business is the goal?",
    options: ["Faith-Driven", "Faith-Based", "Faith-Inspired", "Faith-Neutral"],
    answer: "Faith-Driven",
  },
  {
    id: 155,
    type: "fill_in",
    question:
      "In a Covenant Business, God is Owner and you are _____. (1 word)",
    answer: "Steward",
  },
  {
    id: 156,
    type: "matching",
    question: "Match the Business Level.",
    pairs: [
      { hook: "Faith-Based", purpose: "Christian Owner" },
      { hook: "Faith-Inspired", purpose: "Faith influences decisions" },
      { hook: "Faith-Driven", purpose: "Business as Worship" },
    ],
  },
  {
    id: 157,
    type: "mcq",
    question: "Business is described as _____ in the Covenant definition.",
    options: ["Worship/Assignment", "Punishment", "Hobby", "Burden"],
    answer: "Worship/Assignment",
  },
  {
    id: 158,
    type: "fill_in",
    question: "Calling precedes _____. (1 word)",
    answer: "Company",
  },
  {
    id: 159,
    type: "true_false",
    question: "Covenant is transactional, not relational.",
    answer: false,
  },
  {
    id: 160,
    type: "mcq",
    question:
      "What opens doors to supernatural blessings according to the 'Voice of the Lord'?",
    options: ["Deut 28:1-13", "Gen 1:1", "John 3:16", "Rev 20"],
    answer: "Deut 28:1-13",
  },
  {
    id: 161,
    type: "fill_in",
    question: "Giants require spiritual _____. (1 word)",
    answer: "warfare",
  },
  {
    id: 162,
    type: "drag_drop",
    question: "Classify the Breakthrough Protocol components.",
    items: ["Word", "Voice", "Altar"],
    targets: ["Manual", "Direction", "Prayer/Fasting"],
    answers: ["Word", "Voice", "Altar"],
  },
  {
    id: 163,
    type: "mcq",
    question: "Complaining blinds you to:",
    options: ["Blessings", "Problems", "People", "Sin"],
    answer: "Blessings",
  },
  {
    id: 164,
    type: "fill_in",
    question: "Success is faithfulness, not just _____. (1 word)",
    answer: "growth",
  },
  {
    id: 165,
    type: "true_false",
    question: "You are called BEFORE your business exists.",
    answer: true,
  },
  {
    id: 166,
    type: "mcq",
    question: "Which of these is a 'Responsibility Principle' component?",
    options: ["All of the above", "God's Word", "Holy Spirit", "Godly Counsel"],
    answer: "All of the above",
  },
  {
    id: 167,
    type: "fill_in",
    question: "The Holy Spirit provides wisdom and _____. (1 word)",
    answer: "creativity",
  },
  {
    id: 168,
    type: "matching",
    question: "Match the Responsibility Element.",
    pairs: [
      { hook: "Word", purpose: "Breakthrough manual" },
      { hook: "Prayer", purpose: "Spiritual weapons" },
      { hook: "Counsel", purpose: "Community wisdom" },
    ],
  },
  {
    id: 169,
    type: "mcq",
    question: "The Altar of Prayer & Fasting brings an outbreak of:",
    options: ["Light", "Money", "Food", "Darkness"],
    answer: "Light",
  },
  {
    id: 170,
    type: "fill_in",
    question: "Your business is a direct response to God's _____. (1 word)",
    answer: "calling",
  },
  {
    id: 171,
    type: "true_false",
    question:
      "A great coach never makes a star; it is the player's responsibility.",
    answer: true,
  },
  {
    id: 172,
    type: "mcq",
    question: "Through Scripture you can:",
    options: [
      "Command good success",
      "Lose hope",
      "Sleep better only",
      "Forget problems",
    ],
    answer: "Command good success",
  },
  {
    id: 173,
    type: "fill_in",
    question: "Meditate on Scripture _____. (1 word)",
    answer: "daily",
  },
  {
    id: 174,
    type: "mcq",
    question: "Identity comes before:",
    options: ["Activity", "Birth", "Name", "School"],
    answer: "Activity",
  },
  {
    id: 175,
    type: "true_false",
    question: "God commits to confirm what He says.",
    answer: true,
  },

  // --- REVIEW / MIXED QUESTIONS (From various lectures) ---
  {
    id: 176,
    type: "mcq",
    question: "In Lecture 1, Wisdom is described as the:",
    options: [
      "Principal thing",
      "Last resort",
      "Optional extra",
      "Difficult path",
    ],
    answer: "Principal thing",
  },
  {
    id: 177,
    type: "fill_in",
    question:
      "In Lecture 4, Character is compared to fire, while Reputation is compared to _____. (1 word)",
    answer: "smoke",
  },
  {
    id: 178,
    type: "matching",
    question: "Match the Biblical Figure to the Lesson.",
    pairs: [
      { hook: "Daniel", purpose: "Spirituality" },
      { hook: "Joseph", purpose: "Character" },
      { hook: "Paul", purpose: "Hard Work" },
    ],
  },
  {
    id: 179,
    type: "true_false",
    question: "In Lecture 5, Vision is described as fuel for confidence.",
    answer: true,
  },
  {
    id: 180,
    type: "mcq",
    question: "In Lecture 6, 'Abnormal price' leads to:",
    options: [
      "World Changer status",
      "Bankruptcy",
      "Sadness",
      "Normal results",
    ],
    answer: "World Changer status",
  },
  {
    id: 181,
    type: "fill_in",
    question: "In Lecture 7, Conscience is the _____ of the heart. (1 word)",
    answer: "police",
  },
  {
    id: 182,
    type: "mcq",
    question:
      "In Lecture 8, Business is described as a platform for the exchange of:",
    options: ["Value", "Gossip", "Complaints", "Promises"],
    answer: "Value",
  },
  {
    id: 183,
    type: "drag_drop",
    question: "Sort the Levels of Business Faith.",
    items: ["Faith-Based", "Faith-Inspired", "Faith-Driven"],
    targets: ["Level 1", "Level 2", "Level 3 (Goal)"],
    answers: ["Faith-Based", "Faith-Inspired", "Faith-Driven"],
  },
  {
    id: 184,
    type: "fill_in",
    question: "In Lecture 2, Joshua 1:8 is the formula for _____. (2 words)",
    answer: "Good success",
  },
  {
    id: 185,
    type: "true_false",
    question:
      "In Lecture 1, Foundations are described as attractive structures.",
    answer: false,
  },
  {
    id: 186,
    type: "mcq",
    question:
      "In Lecture 4, who destroyed their heritage through self-indulgence?",
    options: [
      "Hophni & Phinehas",
      "David & Jonathan",
      "Peter & John",
      "Moses & Aaron",
    ],
    answer: "Hophni & Phinehas",
  },
  {
    id: 187,
    type: "fill_in",
    question:
      "In Lecture 5, 'My Task' refers to what God is calling me to _____. (1 word)",
    answer: "do",
  },
  {
    id: 188,
    type: "matching",
    question: "Match the Lecture Theme.",
    pairs: [
      { hook: "Lecture 4", purpose: "Character" },
      { hook: "Lecture 6", purpose: "Hard Work" },
      { hook: "Lecture 7", purpose: "Spirituality" },
    ],
  },
  {
    id: 189,
    type: "mcq",
    question: "In Lecture 6, what involves auditing your 168 hours?",
    options: [
      "Time Management",
      "Financial Auditing",
      "Character check",
      "Sleep study",
    ],
    answer: "Time Management",
  },
  {
    id: 190,
    type: "true_false",
    question: "In Lecture 8, Covenant is described as relational.",
    answer: true,
  },
  {
    id: 191,
    type: "fill_in",
    question:
      "In Lecture 1, Faith is the evidence of things not _____. (1 word)",
    answer: "seen",
  },
  {
    id: 192,
    type: "mcq",
    question: "In Lecture 2, Success is not just getting rich quick without:",
    options: ["Work", "Luck", "Help", "Time"],
    answer: "Work",
  },
  {
    id: 193,
    type: "fill_in",
    question: "In Lecture 4, Character reveals your true _____. (1 word)",
    answer: "identity",
  },
  {
    id: 194,
    type: "mcq",
    question: "In Lecture 5, 'My Tools' refers to:",
    options: ["Gifts/Skills", "Target audience", "Timing", "Calling"],
    answer: "Gifts/Skills",
  },
  {
    id: 195,
    type: "true_false",
    question:
      "In Lecture 7, Spiritual exercises include quality time in the Word.",
    answer: true,
  },
  {
    id: 196,
    type: "matching",
    question: "Match the scripture to the concept.",
    pairs: [
      { hook: "Joshua 1:8", purpose: "Success" },
      { hook: "Jer 29:11", purpose: "Vision" },
      { hook: "Amos 3:3", purpose: "Spirituality" },
    ],
  },
  {
    id: 197,
    type: "fill_in",
    question: "In Lecture 8, Calling precedes _____. (1 word)",
    answer: "Company",
  },
  {
    id: 198,
    type: "mcq",
    question:
      "In Lecture 6, Every person has their _____ within themselves. (2 Pet 1:19)",
    options: ["Star", "Scar", "Seed", "Money"],
    answer: "Star",
  },
  {
    id: 199,
    type: "true_false",
    question: "In Lecture 1, Integrity is ultimately rewarded.",
    answer: true,
  },
  {
    id: 200,
    type: "fill_in",
    question:
      "In Lecture 2, one must _____ on God's Word day and night. (1 word)",
    answer: "meditate",
  },
];
