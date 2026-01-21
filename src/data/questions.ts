import type { Question } from "../types";

export const dld111Questions: Question[] = [
  {
    id: 1,
    type: "mcq",
    question:
      "According to Lecture 1, which of the following is a common myth about leadership?",
    options: [
      "Leaders are born",
      "Leadership is a skill",
      "Leadership is developed",
      "Leaders are made",
    ],
    answer: "Leaders are born",
  },
  {
    id: 2,
    type: "true_false",
    question:
      "Neuroplasticity suggests that leadership skills cannot be learned after a certain age.",
    answer: false,
  },
  {
    id: 3,
    type: "fill_in",
    question:
      "According to Dr. David Oyedepo, leadership is not occupying a seat; it is accomplishing a _____.",
    answer: "feat",
  },
  {
    id: 4,
    type: "matching",
    question: "Match the core definition of leadership to its description.",
    pairs: [
      {
        hook: "Leadership is not talking the lead",
        purpose: "It is taking the lead",
      },
      {
        hook: "Leadership is not an appointment",
        purpose: "It is an attainment",
      },
    ],
  },
  {
    id: 5,
    type: "drag_drop",
    question:
      "Drag the areas of effective management into the correct categories.",
    items: ["Emotions/Character", "Planning/Execution", "Strategic Allocation"],
    targets: ["Self", "Task", "Time"],
    answers: [
      "Emotions/Character",
      "Planning/Execution",
      "Strategic Allocation",
    ],
  },
  {
    id: 6,
    type: "mcq",
    question:
      "What concept describes the brain's ability to rewire itself through experience?",
    options: [
      "Neuroplasticity",
      "Psychosomatics",
      "Neurology",
      "Cognitive Dissonance",
    ],
    answer: "Neuroplasticity",
  },
  {
    id: 7,
    type: "true_false",
    question:
      "Dr. Carol Dweck's research on 'Growth Mindset' supports the idea that abilities are fixed.",
    answer: false,
  },
  {
    id: 8,
    type: "fill_in",
    question:
      "Leadership is the effective management of _____, Task, Time, and Resources.",
    answer: "Self",
  },
  {
    id: 9,
    type: "mcq",
    question:
      "Which of the following is NOT an area of management mentioned in the definition of leadership?",
    options: ["Politics", "Self", "Task", "Time"],
    answer: "Politics",
  },
  {
    id: 10,
    type: "true_false",
    question: "Titles and positions are temporary, but values endure.",
    answer: true,
  },
  {
    id: 11,
    type: "mixed",
    question: "Complete the leadership definition:",
    fields: [
      {
        fieldType: "fill_in",
        placeholder: "Leadership is not in the titles we wear...",
        answer: "values",
      },
      {
        fieldType: "select",
        prompt: "...but in the _____ we bear.",
        options: ["values", "crowns", "robes"],
        answer: "values",
      },
    ],
  },
  {
    id: 12,
    type: "mcq",
    question: "According to the lectures, what is the 'Growth Mindset'?",
    options: [
      "Believing abilities can be developed",
      "Believing intelligence is static",
      "Focusing on physical growth",
      "Focusing on financial growth",
    ],
    answer: "Believing abilities can be developed",
  },
  {
    id: 13,
    type: "fill_in",
    question: "The 10,000-Hour Rule is associated with the research of _____.",
    answer: "Anders Ericsson",
  },
  {
    id: 14,
    type: "true_false",
    question: "Leadership capacity can be inherited genetically.",
    answer: false,
  },
  {
    id: 15,
    type: "matching",
    question: "Match the item to its classification.",
    pairs: [
      {
        hook: "Natural Talents",
        purpose: "Endowment",
      },
      {
        hook: "Developed Competencies",
        purpose: "Achievement",
      },
    ],
  },
  {
    id: 16,
    type: "drag_drop",
    question: "Order the progression of mastery mentioned in the intro.",
    items: ["Knowledge", "Confidence", "Skill"],
    targets: ["Step 1", "Step 2", "Step 3"],
    answers: ["Knowledge", "Confidence", "Skill"],
  },
  {
    id: 17,
    type: "mcq",
    question:
      "Who stated 'The top is open and free, but everyone has to make his way there'?",
    options: [
      "Dr. David Oyedepo",
      "John Maxwell",
      "Simon Sinek",
      "Abraham Lincoln",
    ],
    answer: "Dr. David Oyedepo",
  },
  {
    id: 18,
    type: "true_false",
    question: "Emotional Intelligence includes self-awareness and empathy.",
    answer: true,
  },
  {
    id: 19,
    type: "fill_in",
    question:
      "Leadership is not occupying a position; it is making outstanding _____.",
    answer: "contributions",
  },
  {
    id: 20,
    type: "mcq",
    question:
      "Which biblical figure was used as an example of a leader who rose to power in Egypt?",
    options: ["Joseph", "Moses", "David", "Paul"],
    answer: "Joseph",
  },
  {
    id: 21,
    type: "matching",
    question: "Match the leader to their context.",
    pairs: [
      {
        hook: "Nehemiah",
        purpose: "Rebuilt Jerusalem's walls",
      },
      {
        hook: "Deborah",
        purpose: "Judge and prophetess",
      },
    ],
  },
  {
    id: 22,
    type: "true_false",
    question:
      "The Bible is described as the most reliable text on leadership in the lectures.",
    answer: true,
  },
  {
    id: 23,
    type: "fill_in",
    question:
      "Integrity equals consistency between stated values and actual _____.",
    answer: "behaviour",
  },
  {
    id: 24,
    type: "mcq",
    question: "What does 'Imago Dei' mean?",
    options: ["Image of God", "Voice of God", "Love of God", "Power of God"],
    answer: "Image of God",
  },
  {
    id: 25,
    type: "drag_drop",
    question: "Categorize the components of Justice.",
    items: ["Fair processes", "Equitable outcomes"],
    targets: ["Procedural Justice", "Distributive Justice"],
    answers: ["Fair processes", "Equitable outcomes"],
  },
  {
    id: 26,
    type: "mcq",
    question: "Which test asks 'Does this decision honour God?'",
    options: [
      "The Great Commandment Test",
      "The Golden Rule Test",
      "The Stewardship Test",
      "The Wisdom Test",
    ],
    answer: "The Great Commandment Test",
  },
  {
    id: 27,
    type: "true_false",
    question: "Servant leadership means the leader is weak and subservient.",
    answer: false,
  },
  {
    id: 28,
    type: "fill_in",
    question:
      "Micah 6:8 requires us to act justly, love mercy, and walk _____ with God.",
    answer: "humbly",
  },
  {
    id: 29,
    type: "matching",
    question: "Match the Ethical Framework to its key question.",
    pairs: [
      {
        hook: "Golden Rule Test",
        purpose: "How would I want to be treated?",
      },
      {
        hook: "Stewardship Test",
        purpose: "Am I treating resources responsibly?",
      },
    ],
  },
  {
    id: 30,
    type: "mcq",
    question:
      "Who was the founder of Theranos mentioned as a negative case study?",
    options: ["Elizabeth Holmes", "Steve Jobs", "Elon Musk", "Sheryl Sandberg"],
    answer: "Elizabeth Holmes",
  },
  {
    id: 31,
    type: "true_false",
    question:
      "According to the lectures, ethics is just an abstract philosophy for leaders.",
    answer: false,
  },
  {
    id: 32,
    type: "mixed",
    question: "Identify the leadership principle:",
    fields: [
      {
        fieldType: "select",
        prompt:
          "Choose the principle defined by 'Consistency between stated values and actual behaviour'.",
        options: ["Integrity", "Innovation", "Strategy"],
        answer: "Integrity",
      },
      {
        fieldType: "fill_in",
        placeholder:
          "Proverbs 10:9 says whoever walks in integrity walks _____.",
        answer: "securely",
      },
    ],
  },
  {
    id: 33,
    type: "mcq",
    question:
      "What is the study of moral principles that govern behaviour called?",
    options: ["Ethics", "Psychology", "Sociology", "Economics"],
    answer: "Ethics",
  },
  {
    id: 34,
    type: "fill_in",
    question:
      "Mark 10:45 states that the Son of Man came not to be served, but to _____.",
    answer: "serve",
  },
  {
    id: 35,
    type: "true_false",
    question: "In the 'Imago Dei' concept, people are resources to be used.",
    answer: false,
  },
  {
    id: 36,
    type: "drag_drop",
    question: "Match the Hebrew terms to their meanings.",
    items: ["Mishpat", "Tsedaqah"],
    targets: ["Justice", "Righteousness"],
    answers: ["Mishpat", "Tsedaqah"],
  },
  {
    id: 37,
    type: "mcq",
    question:
      "Which of these is NOT a Fruit of the Spirit mentioned in ethical frameworks?",
    options: ["Ambition", "Love", "Peace", "Self-Control"],
    answer: "Ambition",
  },
  {
    id: 38,
    type: "fill_in",
    question: "_____ is strength properly directed.",
    answer: "Humility",
  },
  {
    id: 39,
    type: "matching",
    question: "Match the Leadership Myth to the Reality.",
    pairs: [
      {
        hook: "Leaders are born",
        purpose: "Leadership is developed",
      },
      {
        hook: "Leadership is inherited",
        purpose: "Leadership must be earned",
      },
    ],
  },
  {
    id: 40,
    type: "true_false",
    question: "Strategic leadership focuses only on short-term execution.",
    answer: false,
  },
  {
    id: 41,
    type: "mcq",
    question:
      "What is defined as 'the ability to influence others to make decisions that enhance long-term success'?",
    options: [
      "Strategic Leadership",
      "Operational Management",
      "Autocratic Leadership",
      "Transactional Leadership",
    ],
    answer: "Strategic Leadership",
  },
  {
    id: 42,
    type: "fill_in",
    question:
      "Operational thinking focuses on 'How do we do it?', while Strategic thinking focuses on '_____ should we do?'",
    answer: "What",
  },
  {
    id: 43,
    type: "matching",
    question: "Match the thinking style to its focus.",
    pairs: [
      {
        hook: "Strategic Thinking",
        purpose: "Focuses on tomorrow",
      },
      {
        hook: "Operational Thinking",
        purpose: "Focuses on today",
      },
    ],
  },
  {
    id: 44,
    type: "mcq",
    question:
      "Which tool asks 'What if...' to prepare for multiple possible futures?",
    options: [
      "Scenario Analysis",
      "SWOT Analysis",
      "Cost-Benefit Analysis",
      "Root Cause Analysis",
    ],
    answer: "Scenario Analysis",
  },
  {
    id: 45,
    type: "true_false",
    question:
      "A strategy is useful even if the people and resources do not support it.",
    answer: false,
  },
  {
    id: 46,
    type: "drag_drop",
    question: "Order the steps of communicating through change.",
    items: ["WHY", "WHAT", "HOW"],
    targets: ["First Explanation", "Second Explanation", "Third Explanation"],
    answers: ["WHY", "WHAT", "HOW"],
  },
  {
    id: 47,
    type: "fill_in",
    question: "Transparency means open _____ about decisions.",
    answer: "communication",
  },
  {
    id: 48,
    type: "mcq",
    question: "Which principle involves 'Leveraging Collective Intelligence'?",
    options: [
      "Collaboration & Empowerment",
      "Vision & Direction",
      "Performance Measurement",
      "Change Leadership",
    ],
    answer: "Collaboration & Empowerment",
  },
  {
    id: 49,
    type: "mixed",
    question: "Strategic Communication:",
    fields: [
      {
        fieldType: "select",
        prompt: "Repetition creates _____.",
        options: ["understanding", "boredom", "confusion"],
        answer: "understanding",
      },
      {
        fieldType: "fill_in",
        placeholder: "Simple enough for everyone to _____.",
        answer: "understand",
      },
    ],
  },
  {
    id: 50,
    type: "true_false",
    question: "Strategic leaders must balance Today and Tomorrow.",
    answer: true,
  },
  {
    id: 51,
    type: "mcq",
    question:
      "Which bible verse says 'Where there is no vision, the people perish'?",
    options: ["Proverbs 29:18", "Psalm 23:1", "John 3:16", "Genesis 1:1"],
    answer: "Proverbs 29:18",
  },
  {
    id: 52,
    type: "fill_in",
    question:
      "Vision is a clear and inspiring _____ image that motivates action.",
    answer: "mental",
  },
  {
    id: 53,
    type: "matching",
    question: "Match the vision dimension to its description.",
    pairs: [
      {
        hook: "Foresight",
        purpose: "Seeing beyond current circumstances",
      },
      {
        hook: "Divine Insight",
        purpose: "God unveiling His purposes",
      },
    ],
  },
  {
    id: 54,
    type: "mcq",
    question: "According to Lecture 3, only the _____ can inspire.",
    options: ["Inspired", "Educated", "Wealthy", "Powerful"],
    answer: "Inspired",
  },
  {
    id: 55,
    type: "true_false",
    question: "Vision is optional for survival and thriving.",
    answer: false,
  },
  {
    id: 56,
    type: "drag_drop",
    question: "Drag the correct terms to the formula.",
    items: ["Divine Purpose", "Divine Revelation"],
    targets: ["Source", "Outcome"],
    answers: ["Divine Purpose", "Divine Revelation"],
  },
  {
    id: 57,
    type: "fill_in",
    question: "Innovation is the capacity to bring something _____ from old.",
    answer: "new",
  },
  {
    id: 58,
    type: "mcq",
    question:
      "Which of the following is NOT one of the 8 characteristics of visionary leaders?",
    options: ["Micromanagement", "Clear Vision", "Inspiration", "Innovation"],
    answer: "Micromanagement",
  },
  {
    id: 59,
    type: "true_false",
    question: "An unclear vision can still inspire confidence and commitment.",
    answer: false,
  },
  {
    id: 60,
    type: "matching",
    question: "Match the characteristic to the bible reference.",
    pairs: [
      {
        hook: "Innovation",
        purpose: "Proverbs 8:12",
      },
      {
        hook: "Strategic Thinking",
        purpose: "Luke 14:28-29",
      },
    ],
  },
  {
    id: 61,
    type: "mcq",
    question:
      "According to James Allen, 'The world steps aside for the man who knows _____'.",
    options: ["Where he is going", "How to fight", "How to speak", "Who he is"],
    answer: "Where he is going",
  },
  {
    id: 62,
    type: "fill_in",
    question: "Inspiration flows from a life connected to the _____ source.",
    answer: "divine",
  },
  {
    id: 63,
    type: "true_false",
    question: "Visionary leaders are content with the status quo.",
    answer: false,
  },
  {
    id: 64,
    type: "drag_drop",
    question: "Identify the types of justice.",
    items: ["Procedural", "Distributive"],
    targets: ["Process-based", "Outcome-based"],
    answers: ["Procedural", "Distributive"],
  },
  {
    id: 65,
    type: "mixed",
    question: "About Innovation:",
    fields: [
      {
        fieldType: "select",
        prompt: "Innovation distinguishes between a leader and a _____.",
        options: ["follower", "manager", "boss"],
        answer: "follower",
      },
      {
        fieldType: "fill_in",
        placeholder: "This quote is attributed to _____.",
        answer: "Steve Jobs",
      },
    ],
  },
  {
    id: 66,
    type: "mcq",
    question: "What is the 'Leadership Amplifier Effect'?",
    options: [
      "Leaders' influence amplifies the impact of their choices",
      "Leaders speak louder than others",
      "Leaders use microphones",
      "Leaders occupy more space",
    ],
    answer: "Leaders' influence amplifies the impact of their choices",
  },
  {
    id: 67,
    type: "true_false",
    question: "Biblical ethics is grounded in God's character.",
    answer: true,
  },
  {
    id: 68,
    type: "fill_in",
    question:
      "The Golden Rule states: 'Do to others what you would have them do to _____.'",
    answer: "you",
  },
  {
    id: 69,
    type: "matching",
    question: "Match the biblical principle to its meaning.",
    pairs: [
      {
        hook: "Integrity",
        purpose: "Alignment Principle",
      },
      {
        hook: "Servant Leadership",
        purpose: "The Jesus Model",
      },
    ],
  },
  {
    id: 70,
    type: "mcq",
    question: "Which of these is a component of leadership integrity?",
    options: [
      "Keeping Commitments",
      "Hiding mistakes",
      "Manipulation",
      "Deception",
    ],
    answer: "Keeping Commitments",
  },
  {
    id: 71,
    type: "true_false",
    question: "Humility is considered a weakness in biblical leadership.",
    answer: false,
  },
  {
    id: 72,
    type: "fill_in",
    question: "Every person you lead bears the _____ of God.",
    answer: "image",
  },
  {
    id: 73,
    type: "drag_drop",
    question: "Sort the elements of The Great Commandment.",
    items: ["Love God", "Love Neighbor"],
    targets: ["First Command", "Second Command"],
    answers: ["Love God", "Love Neighbor"],
  },
  {
    id: 74,
    type: "mcq",
    question: "Which lecture covers 'Principles of Strategic Leadership'?",
    options: ["Lecture 4", "Lecture 1", "Lecture 2", "Lecture 5"],
    answer: "Lecture 4",
  },
  {
    id: 75,
    type: "true_false",
    question:
      "Strategic thinking is reactive, while operational thinking is proactive.",
    answer: false,
  },
  {
    id: 76,
    type: "mixed",
    question: "Regarding the Leadership Crisis:",
    fields: [
      {
        fieldType: "fill_in",
        placeholder: "Most development focuses on _____ (what to do).",
        answer: "techniques",
      },
      {
        fieldType: "select",
        prompt: "While ignoring _____ (who to be).",
        options: ["character", "skill", "talent"],
        answer: "character",
      },
    ],
  },
  {
    id: 77,
    type: "mcq",
    question:
      "Which book is claimed to be the most authentic text on leadership?",
    options: ["The Bible", "The Prince", "Art of War", "Good to Great"],
    answer: "The Bible",
  },
  {
    id: 78,
    type: "fill_in",
    question: "Leadership started in the book of _____.",
    answer: "Genesis",
  },
  {
    id: 79,
    type: "true_false",
    question: "Leadership is stewardship, meaning you manage, not own.",
    answer: true,
  },
  {
    id: 80,
    type: "matching",
    question: "Match the consequence of The Fall.",
    pairs: [
      {
        hook: "Instead of Service",
        purpose: "Self-promotion",
      },
      {
        hook: "Instead of Care",
        purpose: "Control",
      },
    ],
  },
  {
    id: 81,
    type: "mcq",
    question: "What happens when you have a 'Fixed Mindset'?",
    options: [
      "Limits potential",
      "Enables growth",
      "Increases intelligence",
      "Expands skills",
    ],
    answer: "Limits potential",
  },
  {
    id: 82,
    type: "drag_drop",
    question: "Classify the leadership traits.",
    items: ["Vision", "Operational Excellence"],
    targets: ["Strategic", "Managerial"],
    answers: ["Vision", "Operational Excellence"],
  },
  {
    id: 83,
    type: "fill_in",
    question: "According to Lecture 1, school is a real-life-size _____.",
    answer: "laboratory",
  },
  {
    id: 84,
    type: "true_false",
    question: "Strategic leadership is reserved only for the top executives.",
    answer: false,
  },
  {
    id: 85,
    type: "mcq",
    question: "Which of these is a tool for bringing strategy to life?",
    options: ["Stories", "Silence", "Complexity", "Isolation"],
    answer: "Stories",
  },
  {
    id: 86,
    type: "matching",
    question: "Match the communication principle.",
    pairs: [
      {
        hook: "Be Consistent",
        purpose: "Repeat core messages",
      },
      {
        hook: "Keep it Simple",
        purpose: "Understandable for everyone",
      },
    ],
  },
  {
    id: 87,
    type: "fill_in",
    question: "Empowerment multiplies your _____.",
    answer: "impact",
  },
  {
    id: 88,
    type: "true_false",
    question:
      "Listening is as important as speaking in strategic communication.",
    answer: true,
  },
  {
    id: 89,
    type: "mcq",
    question: "What is the result of 'Great strategy, poor execution'?",
    options: ["Failure", "Success", "Alignment", "Victory"],
    answer: "Failure",
  },
  {
    id: 90,
    type: "mixed",
    question: "About Change Leadership:",
    fields: [
      {
        fieldType: "select",
        prompt: "Leaders must guide people through transitions with _____.",
        options: ["confidence", "fear", "doubt"],
        answer: "confidence",
      },
      {
        fieldType: "fill_in",
        placeholder: "Communication frequency must _____ dramatically.",
        answer: "increase",
      },
    ],
  },
  {
    id: 91,
    type: "mcq",
    question: "Which principle is about 'Turning Strategy into Reality'?",
    options: [
      "Alignment of People & Resources",
      "Vision & Direction",
      "Innovation",
      "Ethics",
    ],
    answer: "Alignment of People & Resources",
  },
  {
    id: 92,
    type: "true_false",
    question: "Silos assist coordination in an organization.",
    answer: false,
  },
  {
    id: 93,
    type: "fill_in",
    question: "Invest time, money, and talent _____.",
    answer: "strategically",
  },
  {
    id: 94,
    type: "matching",
    question: "Match the term to its definition.",
    pairs: [
      {
        hook: "Transparency",
        purpose: "Open communication",
      },
      {
        hook: "Accountability",
        purpose: "Taking responsibility",
      },
    ],
  },
  {
    id: 95,
    type: "drag_drop",
    question: "Order the steps of the 'Path to Mastery'.",
    items: ["Knowledge", "Confidence", "Skill", "Victory"],
    targets: ["1", "2", "3", "4"],
    answers: ["Knowledge", "Confidence", "Skill", "Victory"],
  },
  {
    id: 96,
    type: "mcq",
    question: "Which case study was used to illustrate 'Image Over Truth'?",
    options: ["Theranos", "Apple", "Microsoft", "Tesla"],
    answer: "Theranos",
  },
  {
    id: 97,
    type: "true_false",
    question: "Without leadership, you drown in the ocean of life.",
    answer: true,
  },
  {
    id: 98,
    type: "fill_in",
    question: "Self-awareness and self-regulation are built _____.",
    answer: "NOW",
  },
  {
    id: 99,
    type: "mcq",
    question: "What is the 'Two-in-One Package' mentioned in the intro?",
    options: [
      "Character + Competence",
      "Money + Power",
      "Skill + Luck",
      "Friends + Family",
    ],
    answer: "Character + Competence",
  },
  {
    id: 100,
    type: "mixed",
    question: "Complete the phrase:",
    fields: [
      {
        fieldType: "fill_in",
        placeholder: "Leadership is the difference-_____.",
        answer: "maker",
      },
      {
        fieldType: "select",
        prompt:
          "If anything significant comes out of your life, it will be because of _____.",
        options: ["leadership", "luck", "hope"],
        answer: "leadership",
      },
    ],
  },
  {
    id: 101,
    type: "mcq",
    question:
      "In Lecture 5, what is described as 'Practical Necessity' for leaders?",
    options: ["Ethics", "Wealth", "Fame", "Titles"],
    answer: "Ethics",
  },
  {
    id: 102,
    type: "true_false",
    question: "Biblical ethics is rooted in the character and commands of God.",
    answer: true,
  },
  {
    id: 103,
    type: "fill_in",
    question:
      "Justice (Mishpat) includes Procedural justice and _____ justice.",
    answer: "Distributive",
  },
  {
    id: 104,
    type: "matching",
    question: "Match the biblical leader to their role.",
    pairs: [
      {
        hook: "Moses",
        purpose: "Led Israel from Egypt",
      },
      {
        hook: "Daniel",
        purpose: "Served foreign kings",
      },
    ],
  },
  {
    id: 105,
    type: "drag_drop",
    question: "Identify the core biblical principles.",
    items: ["Servant Leadership", "Justice"],
    targets: ["Principle 2", "Principle 3"],
    answers: ["Servant Leadership", "Justice"],
  },
  {
    id: 106,
    type: "mcq",
    question:
      "Which test asks 'Will this promote peace or create unnecessary conflict?'",
    options: [
      "Fruit of the Spirit Test",
      "Golden Rule Test",
      "Wisdom Test",
      "Commandment Test",
    ],
    answer: "Fruit of the Spirit Test",
  },
  {
    id: 107,
    type: "true_false",
    question:
      "Righteousness (Tsedaqah) implies right relationships and moral integrity.",
    answer: true,
  },
  {
    id: 108,
    type: "fill_in",
    question: "Integrity involves consistency in _____ and private.",
    answer: "public",
  },
  {
    id: 109,
    type: "mcq",
    question: "Philippians 2:3 teaches us to value others _____ ourselves.",
    options: ["above", "below", "equal to", "instead of"],
    answer: "above",
  },
  {
    id: 110,
    type: "mixed",
    question: "Biblical Ethics:",
    fields: [
      {
        fieldType: "select",
        prompt: "Biblical ethics is not just another _____.",
        options: ["framework", "suggestion", "idea"],
        answer: "framework",
      },
      {
        fieldType: "fill_in",
        placeholder: "It is a distinctive _____.",
        answer: "foundation",
      },
    ],
  },
  {
    id: 111,
    type: "mcq",
    question: "Who said 'I have a dream'?",
    options: [
      "Martin Luther King Jr.",
      "Malcolm X",
      "Nelson Mandela",
      "Barack Obama",
    ],
    answer: "Martin Luther King Jr.",
  },
  {
    id: 112,
    type: "true_false",
    question: "Vision helps people drift aimlessly.",
    answer: false,
  },
  {
    id: 113,
    type: "fill_in",
    question: "Vision gives people a sense of _____.",
    answer: "purpose",
  },
  {
    id: 114,
    type: "matching",
    question: "Match the vision outcome.",
    pairs: [
      {
        hook: "Without Vision",
        purpose: "People perish",
      },
      {
        hook: "With Vision",
        purpose: "Energy is focused",
      },
    ],
  },
  {
    id: 115,
    type: "drag_drop",
    question: "Order the steps of vision to action.",
    items: ["Break down vision", "Create objectives", "Connect daily work"],
    targets: ["Step 1", "Step 2", "Step 3"],
    answers: ["Break down vision", "Create objectives", "Connect daily work"],
  },
  {
    id: 116,
    type: "mcq",
    question: "Which quality allows a leader to guide through uncertainty?",
    options: [
      "Change Leadership",
      "Operational Thinking",
      "Silo Management",
      "Micro-management",
    ],
    answer: "Change Leadership",
  },
  {
    id: 117,
    type: "true_false",
    question: "Fear of the unknown is a reason people resist change.",
    answer: true,
  },
  {
    id: 118,
    type: "fill_in",
    question: "Strategic leaders address resistance _____.",
    answer: "directly",
  },
  {
    id: 119,
    type: "mcq",
    question: "What is the art of message mastery?",
    options: ["Strategic Communication", "Public Speaking", "Debate", "Gossip"],
    answer: "Strategic Communication",
  },
  {
    id: 120,
    type: "mixed",
    question: "Communication Tools:",
    fields: [
      {
        fieldType: "select",
        prompt: "Use _____ to show why strategy matters.",
        options: ["Data", "Opinions", "Rumors"],
        answer: "Data",
      },
      {
        fieldType: "fill_in",
        placeholder: "Use _____ to illustrate principles in action.",
        answer: "Stories",
      },
    ],
  },
  {
    id: 121,
    type: "mcq",
    question:
      "Which principle suggests 'Saying no to non-strategic activities'?",
    options: [
      "Alignment of People & Resources",
      "Vision",
      "Innovation",
      "Communication",
    ],
    answer: "Alignment of People & Resources",
  },
  {
    id: 122,
    type: "true_false",
    question: "Effectiveness is about doing the right things.",
    answer: true,
  },
  {
    id: 123,
    type: "fill_in",
    question: "Efficiency is about doing things _____.",
    answer: "right",
  },
  {
    id: 124,
    type: "matching",
    question: "Match the focus.",
    pairs: [
      {
        hook: "Efficiency",
        purpose: "Operational",
      },
      {
        hook: "Effectiveness",
        purpose: "Strategic",
      },
    ],
  },
  {
    id: 125,
    type: "drag_drop",
    question: "Categorize the tasks.",
    items: ["Budgeting", "Forecasting"],
    targets: ["Operational", "Strategic"],
    answers: ["Budgeting", "Forecasting"],
  },
  {
    id: 126,
    type: "mcq",
    question: "What separates great leaders from good managers?",
    options: ["Strategic thinking", "Hard work", "Punctuality", "Attire"],
    answer: "Strategic thinking",
  },
  {
    id: 127,
    type: "true_false",
    question: "Long-term success requires only operational excellence.",
    answer: false,
  },
  {
    id: 128,
    type: "fill_in",
    question: "Organizations face constant change and _____.",
    answer: "disruption",
  },
  {
    id: 129,
    type: "mcq",
    question:
      "Who said 'Leadership is not about being in charge. It is about taking care of those in your charge'?",
    options: ["Simon Sinek", "David Oyedepo", "John Maxwell", "Steve Jobs"],
    answer: "Simon Sinek",
  },
  {
    id: 130,
    type: "mixed",
    question: "Strategic Leadership definition:",
    fields: [
      {
        fieldType: "fill_in",
        placeholder: "Enhance an organization's _____ success.",
        answer: "long-term",
      },
      {
        fieldType: "select",
        prompt: "While managing change, uncertainty, and _____.",
        options: ["limited resources", "unlimited money", "perfect conditions"],
        answer: "limited resources",
      },
    ],
  },
  {
    id: 131,
    type: "mcq",
    question: "Which characteristic involves 'Seeking new and better ways'?",
    options: ["Innovation", "Tradition", "Stagnation", "Repetition"],
    answer: "Innovation",
  },
  {
    id: 132,
    type: "true_false",
    question: "Man's vision is derived from his purpose.",
    answer: true,
  },
  {
    id: 133,
    type: "fill_in",
    question: "Only the _____ can inspire.",
    answer: "inspired",
  },
  {
    id: 134,
    type: "matching",
    question: "Match the term to the definition.",
    pairs: [
      {
        hook: "Purpose-driven",
        purpose: "Operating from divine calling",
      },
      {
        hook: "Risk-taking",
        purpose: "Willing to take calculated risks",
      },
    ],
  },
  {
    id: 135,
    type: "drag_drop",
    question: "Order the process.",
    items: ["Divine Purpose", "Divine Revelation", "Personal Vision"],
    targets: ["Origin", "Method", "Result"],
    answers: ["Divine Purpose", "Divine Revelation", "Personal Vision"],
  },
  {
    id: 136,
    type: "mcq",
    question: "What is essential for mobilization?",
    options: [
      "Clarity of Vision",
      "Complex plans",
      "Many meetings",
      "Loud voices",
    ],
    answer: "Clarity of Vision",
  },
  {
    id: 137,
    type: "true_false",
    question:
      "If the trumpet gives an uncertain sound, people will prepare for battle.",
    answer: false,
  },
  {
    id: 138,
    type: "fill_in",
    question: "Clear vision creates _____ Leadership.",
    answer: "Magnetic",
  },
  {
    id: 139,
    type: "mcq",
    question:
      "Which bible verse mentions the trumpet giving an uncertain sound?",
    options: ["1 Cor 14:8", "John 3:16", "Psalm 23", "Gen 1:1"],
    answer: "1 Cor 14:8",
  },
  {
    id: 140,
    type: "mixed",
    question: "Visionary Leader:",
    fields: [
      {
        fieldType: "select",
        prompt: "Has NO IOTA OF _____ about his mission.",
        options: ["DOUBT", "HOPE", "FAITH"],
        answer: "DOUBT",
      },
      {
        fieldType: "fill_in",
        placeholder: "Knows _____ where he is going.",
        answer: "EXACTLY",
      },
    ],
  },
  {
    id: 141,
    type: "mcq",
    question:
      "Who said 'This is not what I saw, when I see what I saw I will know it'?",
    options: ["Dr. David Oyedepo", "Steve Jobs", "Elon Musk", "Bill Gates"],
    answer: "Dr. David Oyedepo",
  },
  {
    id: 142,
    type: "true_false",
    question: "Inspiration is a divine influence.",
    answer: true,
  },
  {
    id: 143,
    type: "fill_in",
    question: "You cannot give what you do not _____.",
    answer: "have",
  },
  {
    id: 144,
    type: "matching",
    question: "Match the inspiration trait.",
    pairs: [
      {
        hook: "Enthusiasm",
        purpose: "Contagious",
      },
      {
        hook: "Commitment",
        purpose: "Unwavering",
      },
    ],
  },
  {
    id: 145,
    type: "drag_drop",
    question: "Classify the source of inspiration.",
    items: ["Divine Source", "Human Effort"],
    targets: ["True Inspiration", "Mere Motivation"],
    answers: ["Divine Source", "Human Effort"],
  },
  {
    id: 146,
    type: "mcq",
    question: "Innovation involves thinking creatively with what?",
    options: ["New ideas", "Old habits", "Strict rules", "No plan"],
    answer: "New ideas",
  },
  {
    id: 147,
    type: "true_false",
    question: "Innovative leaders are always content with the status quo.",
    answer: false,
  },
  {
    id: 148,
    type: "fill_in",
    question: "Count the _____ before beginning.",
    answer: "cost",
  },
  {
    id: 149,
    type: "mcq",
    question: "Which proverb says 'I wisdom dwell with prudence'?",
    options: ["Proverbs 8:12", "Proverbs 29:18", "Psalm 1:1", "Proverbs 3:5"],
    answer: "Proverbs 8:12",
  },
  {
    id: 150,
    type: "mixed",
    question: "Strategic Planning:",
    fields: [
      {
        fieldType: "select",
        prompt: "The plans of the diligent lead to _____.",
        options: ["profit", "poverty", "loss"],
        answer: "profit",
      },
      {
        fieldType: "fill_in",
        placeholder: "As surely as haste leads to _____.",
        answer: "poverty",
      },
    ],
  },
  {
    id: 151,
    type: "mcq",
    question:
      "According to Lecture 2, what drives better performance in organizations?",
    options: ["Biblical values", "Greed", "Fear", "Secrecy"],
    answer: "Biblical values",
  },
  {
    id: 152,
    type: "true_false",
    question:
      "Most leadership development focuses on character rather than techniques.",
    answer: false,
  },
  {
    id: 153,
    type: "fill_in",
    question: "Techniques without character lead to _____.",
    answer: "manipulation",
  },
  {
    id: 154,
    type: "matching",
    question: "Match the focus of books.",
    pairs: [
      {
        hook: "Bible",
        purpose: "Transforms",
      },
      {
        hook: "Other books",
        purpose: "Inform",
      },
    ],
  },
  {
    id: 155,
    type: "drag_drop",
    question: "Contrast the focuses.",
    items: ["Who to be", "What to do"],
    targets: ["Character", "Technique"],
    answers: ["Who to be", "What to do"],
  },
  {
    id: 156,
    type: "mcq",
    question:
      "Which of these is NOT a consequence of the Fall mentioned in Lecture 2?",
    options: ["Empowerment", "Self-promotion", "Control", "Blame-shifting"],
    answer: "Empowerment",
  },
  {
    id: 157,
    type: "true_false",
    question: "Leadership is shared between male and female.",
    answer: true,
  },
  {
    id: 158,
    type: "fill_in",
    question: "You are designed to lead – It's in your _____.",
    answer: "DNA",
  },
  {
    id: 159,
    type: "mcq",
    question: "What is the problem with 'expert' opinions on leadership?",
    options: [
      "Leaders still fail spectacularly",
      "They are too expensive",
      "They are too short",
      "They are too old",
    ],
    answer: "Leaders still fail spectacularly",
  },
  {
    id: 160,
    type: "mixed",
    question: "About the Bible:",
    fields: [
      {
        fieldType: "select",
        prompt: "The Bible is the most _____ text on leadership.",
        options: ["reliable", "confusing", "outdated"],
        answer: "reliable",
      },
      {
        fieldType: "fill_in",
        placeholder: "It contains _____ Truths.",
        answer: "Timeless",
      },
    ],
  },
  {
    id: 161,
    type: "mcq",
    question: "Who was hailed as 'the next Steve Jobs'?",
    options: ["Elizabeth Holmes", "Elon Musk", "Mark Zuckerberg", "Bill Gates"],
    answer: "Elizabeth Holmes",
  },
  {
    id: 162,
    type: "true_false",
    question: "Elizabeth Holmes' technology worked perfectly.",
    answer: false,
  },
  {
    id: 163,
    type: "fill_in",
    question: "Image over _____ was a problem for Theranos.",
    answer: "Truth",
  },
  {
    id: 164,
    type: "matching",
    question: "Match the description to the person.",
    pairs: [
      {
        hook: "Elizabeth Holmes",
        purpose: "Theranos Founder",
      },
      {
        hook: "Steve Jobs",
        purpose: "Apple Founder",
      },
    ],
  },
  {
    id: 165,
    type: "drag_drop",
    question: "Order the events of Theranos.",
    items: ["Hype", "Deception", "Collapse"],
    targets: ["Start", "Middle", "End"],
    answers: ["Hype", "Deception", "Collapse"],
  },
  {
    id: 166,
    type: "mcq",
    question: "What does 'Imago Dei' imply for leadership?",
    options: [
      "Valuing people",
      "Using people",
      "Ignoring people",
      "Controlling people",
    ],
    answer: "Valuing people",
  },
  {
    id: 167,
    type: "true_false",
    question: "Discrimination is a violation of Imago Dei.",
    answer: true,
  },
  {
    id: 168,
    type: "fill_in",
    question: "Servant leadership is measured by Service, not _____.",
    answer: "Status",
  },
  {
    id: 169,
    type: "mcq",
    question: "Which principle emphasizes 'Fair processes'?",
    options: ["Justice", "Mercy", "Humility", "Love"],
    answer: "Justice",
  },
  {
    id: 170,
    type: "mixed",
    question: "Servant Leadership:",
    fields: [
      {
        fieldType: "select",
        prompt: "Uses power to _____ rather than dominate.",
        options: ["serve", "control", "hurt"],
        answer: "serve",
      },
      {
        fieldType: "fill_in",
        placeholder: "Demonstrates _____.",
        answer: "humility",
      },
    ],
  },
  {
    id: 171,
    type: "mcq",
    question: "What is the 'Golden Rule' found in Matthew 7:12?",
    options: [
      "Do to others what you would have them do to you",
      "Survival of the fittest",
      "Eye for an eye",
      "Love is blind",
    ],
    answer: "Do to others what you would have them do to you",
  },
  {
    id: 172,
    type: "true_false",
    question: "Ethical behavior destroys sustainable competitive advantage.",
    answer: false,
  },
  {
    id: 173,
    type: "fill_in",
    question: "Short-term unethical gains destroy _____ success.",
    answer: "long-term",
  },
  {
    id: 174,
    type: "matching",
    question: "Match the pillar of ethical leadership.",
    pairs: [
      {
        hook: "Honesty",
        purpose: "Truthfulness",
      },
      {
        hook: "Fairness",
        purpose: "Equitable treatment",
      },
    ],
  },
  {
    id: 175,
    type: "drag_drop",
    question: "Classify the outcomes.",
    items: ["Trust evaporates", "Sustainable success"],
    targets: ["Unethical", "Ethical"],
    answers: ["Trust evaporates", "Sustainable success"],
  },
  {
    id: 176,
    type: "mcq",
    question: "What is 'The Alignment Principle'?",
    options: ["Integrity", "Strategy", "Vision", "Politics"],
    answer: "Integrity",
  },
  {
    id: 177,
    type: "true_false",
    question: "Humility means thinking less of yourself.",
    answer: false,
  },
  {
    id: 178,
    type: "fill_in",
    question: "Humility is not weakness, it is _____ under control.",
    answer: "strength",
  },
  {
    id: 179,
    type: "mcq",
    question: "Which of these is NOT a Great Commandment?",
    options: ["Love money", "Love God", "Love neighbour", "None of the above"],
    answer: "Love money",
  },
  {
    id: 180,
    type: "mixed",
    question: "Stewardship Test:",
    fields: [
      {
        fieldType: "select",
        prompt: "Am I treating entrusted resources _____?",
        options: ["responsibly", "carelessly", "wastefully"],
        answer: "responsibly",
      },
      {
        fieldType: "fill_in",
        placeholder: "Can I give a good _____ of this decision to God?",
        answer: "account",
      },
    ],
  },
  {
    id: 181,
    type: "mcq",
    question: "What is the primary goal of DLD111 Lecture 1?",
    options: [
      "Redefine Leadership",
      "Teach Math",
      "Teach History",
      "Teach Science",
    ],
    answer: "Redefine Leadership",
  },
  {
    id: 182,
    type: "true_false",
    question: "Dr. David Oyedepo believes leadership is an appointment.",
    answer: false,
  },
  {
    id: 183,
    type: "fill_in",
    question: "Leadership is an attainment, earned through _____.",
    answer: "effort",
  },
  {
    id: 184,
    type: "matching",
    question: "Match the concept.",
    pairs: [
      {
        hook: "Appointment",
        purpose: "Temporary",
      },
      {
        hook: "Attainment",
        purpose: "Permanent",
      },
    ],
  },
  {
    id: 185,
    type: "drag_drop",
    question: "Order the concepts.",
    items: ["Effort", "Competence", "Attainment"],
    targets: ["Input", "Basis", "Result"],
    answers: ["Effort", "Competence", "Attainment"],
  },
  {
    id: 186,
    type: "mcq",
    question:
      "Who defines leadership as 'Setting the pace and blazing the trail'?",
    options: [
      "Dr. David Oyedepo",
      "John C. Maxwell",
      "Peter Drucker",
      "Warren Bennis",
    ],
    answer: "Dr. David Oyedepo",
  },
  {
    id: 187,
    type: "true_false",
    question: "Positions can be given, but feats must be earned.",
    answer: true,
  },
  {
    id: 188,
    type: "fill_in",
    question: "Measure leadership by value added and problems _____.",
    answer: "solved",
  },
  {
    id: 189,
    type: "mcq",
    question: "What defines a great leader according to the lectures?",
    options: [
      "Changing the world",
      "Chains of degrees",
      "Big office",
      "Nice car",
    ],
    answer: "Changing the world",
  },
  {
    id: 190,
    type: "mixed",
    question: "Leadership Impact:",
    fields: [
      {
        fieldType: "select",
        prompt: "Outstanding leaders leave footprints on the _____.",
        options: ["sands of time", "concrete", "water"],
        answer: "sands of time",
      },
      {
        fieldType: "fill_in",
        placeholder: "What endures is the difference you _____.",
        answer: "made",
      },
    ],
  },
  {
    id: 191,
    type: "mcq",
    question: "What does 'Prefrontal cortex develops with use' imply?",
    options: [
      "Decision-making improves with practice",
      "Vision improves",
      "Hearing improves",
      "Muscle grows",
    ],
    answer: "Decision-making improves with practice",
  },
  {
    id: 192,
    type: "true_false",
    question: "Deliberate practice requires mere repetition.",
    answer: false,
  },
  {
    id: 193,
    type: "fill_in",
    question: "Leadership skills create new neural _____.",
    answer: "pathways",
  },
  {
    id: 194,
    type: "matching",
    question: "Match the scientific concept.",
    pairs: [
      {
        hook: "Neuroplasticity",
        purpose: "Brain rewiring",
      },
      {
        hook: "10,000 Hours",
        purpose: "Mastery",
      },
    ],
  },
  {
    id: 195,
    type: "drag_drop",
    question: "Classify the skill.",
    items: ["Developable", "Static"],
    targets: ["Empathy", "Height"],
    answers: ["Developable", "Static"],
  },
  {
    id: 196,
    type: "mcq",
    question: "Which of these is NOT an inheritance fallacy example?",
    options: [
      "Learned skills",
      "Royal heirs",
      "Business dynasties",
      "Political families",
    ],
    answer: "Learned skills",
  },
  {
    id: 197,
    type: "true_false",
    question: "Championship boxing skills can be inherited.",
    answer: false,
  },
  {
    id: 198,
    type: "fill_in",
    question: "Titles don't guarantee _____.",
    answer: "competence",
  },
  {
    id: 199,
    type: "mcq",
    question: "What is the 'Professor Example' used to illustrate?",
    options: [
      "Impact vs Titles",
      "Teaching methods",
      "Research grants",
      "Retirement plans",
    ],
    answer: "Impact vs Titles",
  },
  {
    id: 200,
    type: "mixed",
    question: "Professor B vs Professor A:",
    fields: [
      {
        fieldType: "select",
        prompt: "Professor B left a legacy that endures _____.",
        options: ["forever", "briefly", "never"],
        answer: "forever",
      },
      {
        fieldType: "fill_in",
        placeholder: "Professor A was _____ after retirement.",
        answer: "forgotten",
      },
    ],
  },
  {
    id: 201,
    type: "mcq",
    question: "Which biblical figure rebuilt Jerusalem's walls?",
    options: ["Nehemiah", "Moses", "Joseph", "David"],
    answer: "Nehemiah",
  },
  {
    id: 202,
    type: "true_false",
    question: "Daniel served foreign kings.",
    answer: true,
  },
  {
    id: 203,
    type: "fill_in",
    question: "Deborah was a judge and _____.",
    answer: "prophetess",
  },
  {
    id: 204,
    type: "matching",
    question: "Match the action to the leader.",
    pairs: [
      {
        hook: "Led Israel",
        purpose: "Moses",
      },
      {
        hook: "Rose to power",
        purpose: "Joseph",
      },
    ],
  },
  {
    id: 205,
    type: "drag_drop",
    question: "Sort the leaders chronologically (implied).",
    items: ["Joseph", "Moses", "Nehemiah"],
    targets: ["Earliest", "Middle", "Latest"],
    answers: ["Joseph", "Moses", "Nehemiah"],
  },
  {
    id: 206,
    type: "mcq",
    question: "What is the 'Fruit of the Spirit' test based on?",
    options: ["Galatians 5:22-23", "John 3:16", "Genesis 1:1", "Psalm 23"],
    answer: "Galatians 5:22-23",
  },
  {
    id: 207,
    type: "true_false",
    question: "Self-control is a fruit of the spirit.",
    answer: true,
  },
  {
    id: 208,
    type: "fill_in",
    question: "Am I exercising appropriate _____?",
    answer: "self-control",
  },
  {
    id: 209,
    type: "mcq",
    question: "Which test involves 'Advocacy for the Vulnerable'?",
    options: ["Justice", "Stewardship", "Efficiency", "Profit"],
    answer: "Justice",
  },
  {
    id: 210,
    type: "mixed",
    question: "Justice Definitions:",
    fields: [
      {
        fieldType: "select",
        prompt: "Procedural justice is about _____ processes.",
        options: ["fair", "fast", "cheap"],
        answer: "fair",
      },
      {
        fieldType: "fill_in",
        placeholder: "Distributive justice is about equitable _____.",
        answer: "outcomes",
      },
    ],
  },
  {
    id: 211,
    type: "mcq",
    question: "What does 'Mishpat' translate to?",
    options: ["Justice", "Love", "Hope", "Faith"],
    answer: "Justice",
  },
  {
    id: 212,
    type: "true_false",
    question: "Tsedaqah translates to Righteousness.",
    answer: true,
  },
  {
    id: 213,
    type: "fill_in",
    question: "Righteousness involves alignment with God’s _____.",
    answer: "standards",
  },
  {
    id: 214,
    type: "matching",
    question: "Match the Hebrew word.",
    pairs: [
      {
        hook: "Mishpat",
        purpose: "Justice",
      },
      {
        hook: "Tsedaqah",
        purpose: "Righteousness",
      },
    ],
  },
  {
    id: 215,
    type: "drag_drop",
    question: "Classify the virtue.",
    items: ["Procedural Fairness", "Moral Integrity"],
    targets: ["Justice", "Righteousness"],
    answers: ["Procedural Fairness", "Moral Integrity"],
  },
  {
    id: 216,
    type: "mcq",
    question: "Which is NOT a modern ethical challenge mentioned?",
    options: [
      "Too much sleep",
      "Pressure to achieve results",
      "Conflicts between interests",
      "Moral relativism",
    ],
    answer: "Too much sleep",
  },
  {
    id: 217,
    type: "true_false",
    question:
      "Balancing transparency with confidentiality is an ethical challenge.",
    answer: true,
  },
  {
    id: 218,
    type: "fill_in",
    question: "Navigating moral _____ is a challenge.",
    answer: "relativism",
  },
  {
    id: 219,
    type: "mcq",
    question: "What is the 'Leadership Amplifier Effect'?",
    options: [
      "Impact is amplified",
      "Sound is amplified",
      "Ego is amplified",
      "Money is amplified",
    ],
    answer: "Impact is amplified",
  },
  {
    id: 220,
    type: "mixed",
    question: "Ethics nature:",
    fields: [
      {
        fieldType: "select",
        prompt: "For leaders, ethics is not abstract _____.",
        options: ["philosophy", "art", "science"],
        answer: "philosophy",
      },
      {
        fieldType: "fill_in",
        placeholder: "It is a practical _____.",
        answer: "necessity",
      },
    ],
  },
  {
    id: 221,
    type: "mcq",
    question:
      "Who defines Strategic Leadership as influencing others for long-term success?",
    options: ["The Lectures", "Wikipedia", "Dictionary", "Google"],
    answer: "The Lectures",
  },
  {
    id: 222,
    type: "true_false",
    question: "Strategic leaders must manage limited resources.",
    answer: true,
  },
  {
    id: 223,
    type: "fill_in",
    question: "Strategic thinking involves understanding organizational _____.",
    answer: "connections",
  },
  {
    id: 224,
    type: "matching",
    question: "Match the question to the type.",
    pairs: [
      {
        hook: "What if?",
        purpose: "Scenario Analysis",
      },
      {
        hook: "What should we do?",
        purpose: "Strategic",
      },
    ],
  },
  {
    id: 225,
    type: "drag_drop",
    question: "Sort the horizon.",
    items: ["Today", "Tomorrow"],
    targets: ["Operational", "Strategic"],
    answers: ["Today", "Tomorrow"],
  },
  {
    id: 226,
    type: "mcq",
    question: "What is 'Scenario Analysis'?",
    options: ["What if...?", "Why us?", "Who cares?", "How much?"],
    answer: "What if...?",
  },
  {
    id: 227,
    type: "true_false",
    question: "You should predict the future, not prepare for it.",
    answer: false,
  },
  {
    id: 228,
    type: "fill_in",
    question: "Develop multiple possible _____.",
    answer: "futures",
  },
  {
    id: 229,
    type: "mcq",
    question: "Which of these is a big picture question?",
    options: [
      "How do market trends affect us?",
      "What is for lunch?",
      "Where is the pen?",
      "Who is late?",
    ],
    answer: "How do market trends affect us?",
  },
  {
    id: 230,
    type: "mixed",
    question: "Strategic preparation:",
    fields: [
      {
        fieldType: "select",
        prompt: "Don't predict, _____.",
        options: ["prepare", "panic", "play"],
        answer: "prepare",
      },
      {
        fieldType: "fill_in",
        placeholder: "Anticipate _____.",
        answer: "challenges",
      },
    ],
  },
  {
    id: 231,
    type: "mcq",
    question: "What is the 'Alignment Challenge'?",
    options: [
      "Great strategy, poor execution",
      "Poor strategy, good execution",
      "No strategy, no execution",
      "Perfect alignment",
    ],
    answer: "Great strategy, poor execution",
  },
  {
    id: 232,
    type: "true_false",
    question: "Silos prevent coordination.",
    answer: true,
  },
  {
    id: 233,
    type: "fill_in",
    question: "Every person must understand their _____.",
    answer: "contribution",
  },
  {
    id: 234,
    type: "matching",
    question: "Match the alignment task.",
    pairs: [
      {
        hook: "Align Team Roles",
        purpose: "Clear responsibilities",
      },
      {
        hook: "Allocate Resources",
        purpose: "Invest strategically",
      },
    ],
  },
  {
    id: 235,
    type: "drag_drop",
    question: "Order the problem resolution.",
    items: ["Silos", "Coordination", "Alignment"],
    targets: ["Problem", "Action", "Goal"],
    answers: ["Silos", "Coordination", "Alignment"],
  },
  {
    id: 236,
    type: "mcq",
    question: "What do customers do when ethics are missing?",
    options: ["Leave", "Buy more", "Stay", "Invest"],
    answer: "Leave",
  },
  {
    id: 237,
    type: "true_false",
    question: "Talented employees quit unethical organizations.",
    answer: true,
  },
  {
    id: 238,
    type: "fill_in",
    question: "Ethical decision-making builds sustainable _____ advantage.",
    answer: "competitive",
  },
  {
    id: 239,
    type: "mcq",
    question: "Which is NOT a pillar of ethical leadership?",
    options: ["Secrecy", "Transparency", "Honesty", "Fairness"],
    answer: "Secrecy",
  },
  {
    id: 240,
    type: "mixed",
    question: "Ethics impact:",
    fields: [
      {
        fieldType: "select",
        prompt: "Reputation is _____ by unethical behavior.",
        options: ["destroyed", "built", "enhanced"],
        answer: "destroyed",
      },
      {
        fieldType: "fill_in",
        placeholder: "Trust _____.",
        answer: "evaporates",
      },
    ],
  },
  {
    id: 241,
    type: "mcq",
    question: "What question addresses 'Who kind of person should I be?'",
    options: ["Ethics", "Finance", "Marketing", "IT"],
    answer: "Ethics",
  },
  {
    id: 242,
    type: "true_false",
    question:
      "The Bible addresses the whole person - Spiritual, Emotional, Intellectual, Relational.",
    answer: true,
  },
  {
    id: 243,
    type: "fill_in",
    question: "God created mankind in his own _____.",
    answer: "image",
  },
  {
    id: 244,
    type: "matching",
    question: "Match the Genesis truth.",
    pairs: [
      {
        hook: "DNA",
        purpose: "Designed to lead",
      },
      {
        hook: "Stewardship",
        purpose: "Manage not own",
      },
    ],
  },
  {
    id: 245,
    type: "drag_drop",
    question: "Sort the concepts.",
    items: ["Dominion", "Service"],
    targets: ["Creation Mandate", "Jesus Model"],
    answers: ["Dominion", "Service"],
  },
  {
    id: 246,
    type: "mcq",
    question: "What is the 'Leadership Crisis' attributed to?",
    options: [
      "Lack of character",
      "Lack of books",
      "Lack of podcasts",
      "Lack of money",
    ],
    answer: "Lack of character",
  },
  {
    id: 247,
    type: "true_false",
    question: "Techniques alone are sufficient for good leadership.",
    answer: false,
  },
  {
    id: 248,
    type: "fill_in",
    question: "Character focuses on who to _____.",
    answer: "be",
  },
  {
    id: 249,
    type: "mcq",
    question: "What is the key takeaway from the 'Professor Example'?",
    options: [
      "Legacy matters more than titles",
      "Titles are everything",
      "Retirement is bad",
      "Students are annoying",
    ],
    answer: "Legacy matters more than titles",
  },
  {
    id: 250,
    type: "mixed",
    question: "Final Review:",
    fields: [
      {
        fieldType: "select",
        prompt: "Leadership is about making a _____ difference.",
        options: ["positive", "negative", "neutral"],
        answer: "positive",
      },
      {
        fieldType: "fill_in",
        placeholder: "Serving God and _____.",
        answer: "others",
      },
    ],
  },
];

export const courseQuestionMap: Record<string, Question[]> = {
  "DLD 111": dld111Questions,
};
